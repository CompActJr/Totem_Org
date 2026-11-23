# Galeria: upload local, WebP e entrega pelo Nginx

## Objetivo e arquitetura

As imagens da galeria serão armazenadas no disco do servidor em
`/var/www/uploads`, otimizadas para WebP pelo Fastify e entregues diretamente
pelo Nginx. O MongoDB manterá somente o catálogo na coleção `galeria`.

```text
Nuxt (browser) → rota interna Nuxt → lê cookie auth_token
Nuxt (servidor) → Bearer JWT → Fastify POST /api/uploader
Fastify → valida base64 → Sharp → WebP → /var/www/uploads
Fastify → MongoDB (galeria) → retorna URL pública completa
Browser → https://soutotem.com.br/uploads/<arquivo>.webp → Nginx → disco
```

O navegador nunca acessará o diretório do servidor nem receberá o JWT em
JavaScript. A rota interna Nuxt lê o cookie HTTP-only `auth_token`, converte-o
no cabeçalho `Authorization: Bearer <token>` e o encaminha ao Fastify, conforme
o padrão existente de posts e vídeos.

## Decisões de armazenamento

- Diretório físico: `/var/www/uploads` no host Linux.
- URL pública canônica: `https://soutotem.com.br/uploads`.
- Arquivos aceitos inicialmente: JPEG, PNG, WebP e AVIF; todos serão salvos
  como WebP. SVG, GIF, PDF e qualquer arquivo não-imagem ficam fora do escopo.
- Nome no disco: chave aleatória segura, sem relação direta com o nome enviado,
  por exemplo sob o prefixo `galeria/` e sempre com extensão `.webp`.
- O campo `nome` é apenas para exibição, nunca caminho de arquivo. Não salvar em
  `frontend/public` ou `.output`, pois deploys e recriações podem substituí-los.

## Preparação do servidor e dos containers

1. Criar `/var/www/uploads/galeria` no host, com escrita para `totem-api` e
   somente leitura para o Nginx. Não usar permissão global de escrita.
3. No `docker-compose.yml` principal, acrescentar o bind mount do host
   `/var/www/uploads` para `/var/www/uploads` no serviço `backend-totem`, com
   leitura e escrita.
4. Em `nginx/docker-compose.yml`, acrescentar o mesmo bind mount no serviço
   `nginx`, porém somente leitura. Hoje esse compose monta certificados e
   configurações, mas não monta o diretório de uploads; sem esse volume, o
   `alias` do Nginx não encontrará os arquivos.
5. Aplicar propriedade pelo UID/GID da imagem do backend e confirmar que o
   processo Nginx atravessa os diretórios e lê os arquivos.

## Ajustes necessários no Nginx

O diretório deve ser servido por uma `location`, que pertence a um bloco
`server`; não por uma rota Fastify. O bloco `http` global apenas concentra
configurações gerais e inclui os arquivos de servidores.

### Estado atual identificado

- `nginx/nginx.conf` inclui explicitamente `conf.d/dev.conf`.
- Por isso, `nginx/conf.d/app.conf` não é carregado na configuração atual,
  embora contenha os domínios HTTPS de produção.
- `dev.conf` atende HTTP e encaminha `/api/` ao Fastify; `app.conf` atende os
  domínios HTTPS de produção com certificados em `/etc/letsencrypt`.

### Mudanças planejadas

1. Para produção, alterar a inclusão em `nginx/nginx.conf` para carregar
   `conf.d/app.conf` (ou uma inclusão controlada de todos os arquivos de
   produção). Não carregar `dev.conf` e `app.conf` juntos enquanto ambos
   definirem servidores padrão na mesma porta.
2. No servidor HTTPS de `soutotem.com.br` em `nginx/conf.d/app.conf`, adicionar
   uma `location` prioritária para `/uploads/` usando `alias /var/www/uploads/`.
   A URL canônica definida acima fará todas as aplicações consumirem esse único
   host, sem precisar repetir a configuração nos três subdomínios.
3. Nessa location, desativar `autoindex`, restringir métodos a leitura, habilitar
   `X-Content-Type-Options: nosniff`, retornar 404 para caminhos inexistentes e
   configurar cache público de longo prazo. Como a chave é aleatória e
   imutável, um cache `immutable` é seguro.
4. Definir `client_max_body_size` no escopo `http` de `nginx/nginx.conf` ou na
   location `/api/` do servidor ativo. O valor deve ser maior que o limite do
   Fastify, pois base64 aumenta o corpo em aproximadamente 33%.
5. Manter `/uploads/` antes da location `/`; assim o arquivo não passa pelo
   Nuxt/Fastify. Em desenvolvimento, repetir a location em `dev.conf`, com URL
   e diretório próprios. O `mime.types` atual já entrega WebP corretamente.

Após a alteração, validar a sintaxe do Nginx e recarregar a configuração. Essa
parte é de infraestrutura e não deve ser alterada automaticamente pelo backend.

## Variáveis de ambiente do Fastify

Validar no schema de `backend/src/config/env.ts`; manter os valores no `.env` e
nos secrets do backend, nunca no `runtimeConfig.public` do Nuxt.

| Variável | Finalidade | Exemplo de produção |
| --- | --- | --- |
| `UPLOAD_DIRECTORY` | Diretório absoluto de escrita. | `/var/www/uploads` |
| `UPLOAD_PUBLIC_BASE_URL` | Base da URL servida pelo Nginx, sem barra final. | `https://soutotem.com.br/uploads` |
| `UPLOAD_MAX_FILE_BYTES` | Máximo do arquivo decodificado. | `5242880` (5 MiB) |
| `UPLOAD_MAX_BODY_BYTES` | Máximo do JSON com base64. | `7340032` (7 MiB) |
| `UPLOAD_MAX_WIDTH` | Largura máxima após processamento. | `2560` |
| `UPLOAD_MAX_HEIGHT` | Altura máxima após processamento. | `2560` |
| `UPLOAD_WEBP_QUALITY` | Qualidade de saída WebP. | `82` |

O limite do Nginx e o limite de corpo configurado no Fastify devem aceitar no
máximo `UPLOAD_MAX_BODY_BYTES`; o limite do arquivo em si permanece em
`UPLOAD_MAX_FILE_BYTES` depois da decodificação.

## Otimização da imagem

Usar a biblioteca `sharp` no Fastify para auto-orientar, redimensionar, gerar
WebP e remover metadados EXIF desnecessários.

O processamento planejado para o `POST /api/uploader` é:

1. receber `nome` e imagem em base64, aceitando data URL somente se necessário;
2. validar JWT, formato do corpo e tamanho estimado antes de decodificar;
3. validar o tipo real da imagem pelo conteúdo, não pela extensão ou MIME vindo
   do navegador; rejeitar tipos não permitidos e imagens com pixels excessivos;
4. orientar de acordo com EXIF, limitar dimensões sem aumentar imagens menores,
   remover metadados e converter para WebP na qualidade configurada;
5. gerar uma chave aleatória terminada em `.webp` dentro de `galeria/`;
6. gravar a saída otimizada de forma atômica em `UPLOAD_DIRECTORY`;
7. montar a URL completa a partir de `UPLOAD_PUBLIC_BASE_URL`, inserir o
   documento no MongoDB e retornar o registro criado.

Rejeitar imagens animadas na primeira versão e impor limite de pixels para evitar
consumo excessivo de memória por imagens maliciosas.

## Coleção MongoDB

Usar a coleção `galeria`, com exatamente três campos por documento:

| Campo | Tipo | Descrição |
| --- | --- | --- |
| `_id` | `ObjectId` | Identificador do MongoDB. |
| `nome` | `string` | Nome original informado pelo administrador. |
| `url` | `string` | URL pública completa do WebP entregue pelo Nginx. |

Criar índice único em `url`. Para excluir o arquivo sem adicionar outro campo,
o serviço derivará a chave a partir da URL somente depois de verificar que ela
começa com `UPLOAD_PUBLIC_BASE_URL`, não contém traversal e resolve dentro de
`UPLOAD_DIRECTORY`.

## Endpoints e fluxo Nuxt/Fastify

| Ação | Rota interna Nuxt | Rota Fastify | Acesso |
| --- | --- | --- | --- |
| Enviar imagem | `POST /api/admin/uploader` | `POST /api/uploader` | Administrador |
| Listar galeria | `GET /api/admin/galeria` | `GET /api/galeria` | Administrador |
| Excluir item | `DELETE /api/admin/galeria/:id` | `DELETE /api/galeria/:id` | Administrador |

As rotas Nuxt são proxies: leem `auth_token`, usam o helper existente para o
Bearer e chamam o Fastify internamente. O browser não chama a API autenticada.

### POST `/api/uploader`

Autenticado. Recebe nome e base64; retorna `_id`, `nome` e `url`. O registro só
é inserido após a gravação do WebP. Se a inserção MongoDB falhar, remover o
arquivo novo para evitar órfãos. Nunca registrar base64 nos logs.

### GET `/api/galeria`

Autenticado. Consulta a coleção `galeria`, com paginação e ordenação estável,
retornando apenas `_id`, `nome` e `url`. A fonte da listagem é o MongoDB, não a
varredura do diretório de arquivos.

### DELETE `/api/galeria/:id`

Autenticado. Localiza o documento, deriva e valida o caminho local pela URL e
remove tanto o arquivo quanto o documento. Para reduzir inconsistência, mover o
arquivo primeiro para uma área de quarentena no mesmo volume, apagar o documento
e então removê-lo definitivamente; se a operação MongoDB falhar, restaurar o
arquivo. Retornar 404 se o `_id` não existir e erro controlado se o arquivo já
não estiver no disco.

## Critérios de aceite

- [ ] O container `totem-api` grava WebP em `/var/www/uploads/galeria` e o
  container Nginx consegue apenas lê-los por volume compartilhado.
- [ ] Uma imagem JPEG, PNG, WebP ou AVIF enviada em base64 é corrigida quanto à
  orientação, reduzida quando excede os limites e armazenada como `.webp`.
- [ ] Tipos não permitidos, base64 inválido, corpo acima do limite e imagens com
  pixels excessivos retornam erro de validação e não criam arquivo nem documento.
- [ ] O `POST /api/uploader` exige JWT; a rota Nuxt correspondente extrai o
  cookie HTTP-only e encaminha o Bearer sem expor o token ao navegador.
- [ ] A resposta bem-sucedida do upload contém `_id`, `nome` e uma URL completa
  iniciada por `https://soutotem.com.br/uploads/`.
- [ ] Abrir essa URL entrega o WebP diretamente pelo Nginx, com `nosniff`, sem
  listagem de diretório e sem requisição ao Nuxt ou Fastify.
- [ ] O `GET /api/galeria` lista somente os documentos existentes no MongoDB,
  incluindo paginação, e exige autenticação administrativa.
- [ ] O `DELETE /api/galeria/:id` remove o arquivo e o documento; ao recarregar
  a listagem, o item não aparece e a URL retorna 404.
- [ ] Falhas de escrita, processamento ou MongoDB não deixam registros ou
  arquivos órfãos sem um mecanismo de recuperação registrado em log.
- [ ] A configuração Nginx ativa em produção é `app.conf`, não `dev.conf`, e
  `nginx -t` passa antes da recarga.

## Referências

- Sharp: processamento e saída de imagens WebP:
  https://sharp.pixelplumbing.com/api-output/
- Sharp: proteção por limite de pixels e entrada:
  https://sharp.pixelplumbing.com/api-constructor/

Permissões: o usuário do Node precisa de escrita em /var/www/uploads, e o usuário do nginx (geralmente www-data) precisa de leitura. Pasta com 755 e arquivos com 644 resolvem.
Nginx: precisa de um location /uploads/ { alias /var/www/uploads/; }. Atenção à barra final nos dois lados.
Docker: se a API roda em container, /var/www/uploads precisa ser um volume montado no host, senão o nginx não enxerga os arquivos.