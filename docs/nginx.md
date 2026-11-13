
# Nginx do Totem Org

Esta é a documentação didática da configuração em [`nginx.conf`](./nginx.conf). O Nginx recebe as conexões públicas, envia páginas e assets ao Nuxt em `127.0.0.1:8000` e encaminha chamadas de API a `127.0.0.1:9000`.

## Fluxo geral

```text
Navegador → Nginx (portas 80 e 443)
                    ├─ Nuxt: 127.0.0.1:8000
                    └─ API:  127.0.0.1:9000
```

Os subdomínios são convertidos em prefixos internos antes de chegar ao Nuxt. Por exemplo, `colegios.soutotem.com.br/unidade/cachoeira-do-sul` é encaminhado internamente como `/colegios/unidade/cachoeira-do-sul`. O endereço visto no navegador não muda.

## Antes de usar

- Nuxt e API devem estar acessíveis localmente nas portas `8000` e `9000`.
- As portas internas não devem estar abertas à internet; proteja-as com firewall ou pela rede de containers.
- O certificado em `/etc/letsencrypt/live/soutotem.com.br/` deve incluir o domínio raiz e os subdomínios usados. Um certificado apenas para `soutotem.com.br` não cobre automaticamente `colegios.soutotem.com.br`.

## 1. Workers e eventos

```nginx
worker_processes auto;

events {
    worker_connections 1024;
}
```

`worker_processes auto` deixa o Nginx escolher a quantidade de workers conforme os CPUs disponíveis. `worker_connections 1024` permite até 1.024 conexões por worker. Esse valor não equivale diretamente a 1.024 usuários, pois cada requisição pode abrir conexões adicionais e o sistema operacional também impõe limites.

## 2. Bloco `http` e tipos MIME

```nginx
http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;
    # demais diretivas e servidores
}
```

O bloco `http` engloba todas as configurações HTTP/HTTPS. `mime.types` associa extensões a tipos corretos, como `.css` a `text/css` e `.svg` a `image/svg+xml`. `default_type application/octet-stream` é o valor seguro para um arquivo cuja extensão não seja reconhecida.

## 3. Gzip

```nginx
gzip on;
gzip_min_length 1000;
gzip_comp_level 5;
gzip_types text/plain text/css text/javascript application/javascript
           application/json application/xml text/xml application/xml+rss
           image/svg+xml;
```

O Nginx comprime respostas textuais dos tipos listados. Arquivos menores que 1.000 bytes não são comprimidos porque o ganho costuma ser irrelevante. O nível `5`, numa escala de 1 a 9, busca equilíbrio entre CPU e tamanho. JPEG, PNG e outros formatos já comprimidos não estão na lista.

## 4. Cabeçalhos do proxy

```nginx
proxy_http_version 1.1;
proxy_set_header Host              $host;
proxy_set_header X-Real-IP         $remote_addr;
proxy_set_header X-Forwarded-For   $proxy_add_x_forwarded_for;
proxy_set_header X-Forwarded-Proto $scheme;
proxy_set_header X-Forwarded-Host  $host;
proxy_set_header Connection        "";
```

Essas diretivas valem para todos os proxies dentro de `http`.

| Cabeçalho/diretiva | Função |
| --- | --- |
| `proxy_http_version 1.1` | Permite comunicação HTTP/1.1 persistente com os backends. |
| `Host` e `X-Forwarded-Host` | Preservam o domínio público solicitado. |
| `X-Real-IP` | Informa o IP que se conectou ao Nginx. |
| `X-Forwarded-For` | Mantém a cadeia de IPs de proxies. |
| `X-Forwarded-Proto` | Informa se o cliente usou HTTP ou HTTPS. |
| `Connection ""` | Remove esse cabeçalho para permitir keep-alive nos upstreams. |

Isso é importante para o Nuxt gerar redirecionamentos, URLs e cookies de acordo com HTTPS, embora a conexão entre Nginx e Nuxt seja HTTP interno.

## 5. Upstreams

```nginx
upstream nuxt {
    server 127.0.0.1:8000;
    keepalive 16;
}

upstream api {
    server 127.0.0.1:9000;
    keepalive 16;
}
```

`upstream` dá um nome a um backend. `nuxt` é usado para SSR, páginas e assets; `api` para a API. `keepalive 16` mantém até 16 conexões ociosas reutilizáveis por worker para cada backend; não limita o total de usuários ou requisições. Em Docker separado, `127.0.0.1` aponta para o próprio container do Nginx: use o nome do serviço na rede Docker se Nuxt/API estiverem em outros containers.

## 6. Host padrão e HTTPS obrigatório

```nginx
server {
    listen 80 default_server;
    listen 443 ssl default_server;
    ssl_reject_handshake on;
    return 444;
}
```

Esse servidor rejeita hosts desconhecidos. Em HTTPS, `ssl_reject_handshake on` encerra a negociação TLS; em HTTP, `444` fecha a conexão sem resposta, código específico do Nginx.

```nginx
server {
    listen 80;
    server_name soutotem.com.br www.soutotem.com.br
                colegios.soutotem.com.br
                vestibulares.soutotem.com.br
                on.soutotem.com.br;
    return 301 https://$host$request_uri;
}
```

Esse segundo servidor atende os hosts conhecidos na porta 80 e devolve `301` para HTTPS. `$host` preserva o domínio e `$request_uri` preserva caminho e parâmetros: `http://soutotem.com.br/blog?page=2` vira `https://soutotem.com.br/blog?page=2`.

## 7. Domínio principal

```nginx
server {
    listen 443 ssl;
    http2 on;
    server_name soutotem.com.br www.soutotem.com.br;

    ssl_certificate     /etc/letsencrypt/live/soutotem.com.br/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/soutotem.com.br/privkey.pem;
}
```

Este bloco atende o site institucional. `fullchain.pem` contém o certificado e intermediários; `privkey.pem` é a chave privada e precisa ter acesso restrito. `http2 on` habilita HTTP/2 para navegadores compatíveis.

### Redirecionamento de URLs para outros portais

```nginx
location ~ ^/colegios(/.*)?$     { return 301 https://colegios.soutotem.com.br$1$is_args$args; }
location ~ ^/vestibulares(/.*)?$ { return 301 https://vestibulares.soutotem.com.br$1$is_args$args; }
location ~ ^/on(/.*)?$           { return 301 https://on.soutotem.com.br$1$is_args$args; }
```

Cada expressão captura o restante opcional da URL em `$1`. `$is_args$args` preserva a query string. Por exemplo, `/colegios/unidade/cachoeira-do-sul?origem=campanha` redireciona para o subdomínio correspondente com `?origem=campanha`. Isso evita conteúdo duplicado entre domínio principal e subdomínios.

### API e Nuxt no domínio principal

```nginx
location /api/ { proxy_pass http://api; }
location /     { proxy_pass http://nuxt; }
```

`/api/` sempre segue para a API; todo o restante segue ao Nuxt. Como não há caminho depois de `http://api`, o URI é preservado: `/api/units/santa-maria` chega ao backend exatamente com esse caminho.

## 8. Subdomínios `colegios`, `vestibulares` e `on`

Os três blocos HTTPS repetem os certificados e seguem a mesma regra: API e assets não recebem prefixo; páginas recebem o prefixo do portal antes de serem encaminhadas ao Nuxt.

```nginx
location /api/ {
    proxy_pass http://api;
}

location ~ ^/(_nuxt|_ipx|__nuxt_error|favicon\.ico|robots\.txt|sitemap.*\.xml) {
    proxy_pass http://nuxt;
}

location ~ ^/(apoiadores|atividades|banners|cursos|geral|infraestrutura|logos|niveis|panoramas) {
    proxy_pass http://nuxt;
}
```

As exceções de recursos mantêm caminhos como `/_nuxt/...`, `/_ipx/...`, `/banners/...` e `/robots.txt` globais. Sem elas, seriam reescritos como `/colegios/_nuxt/...`, por exemplo, e o asset poderia não ser encontrado.

O último `location /` de cada subdomínio aplica o prefixo apropriado:

```nginx
# colegios.soutotem.com.br
rewrite ^ /colegios$uri break;

# vestibulares.soutotem.com.br
rewrite ^ /vestibulares$uri break;

# on.soutotem.com.br
rewrite ^ /on$uri break;
```

`$uri` é o caminho normalizado. `break` encerra novas reescritas naquele `location`; em seguida `proxy_pass http://nuxt` envia o caminho ao Nuxt.

| URL pública | URI interno para o Nuxt |
| --- | --- |
| `colegios.soutotem.com.br/unidade/cachoeira-do-sul` | `/colegios/unidade/cachoeira-do-sul` |
| `vestibulares.soutotem.com.br/matriculas` | `/vestibulares/matriculas` |
| `on.soutotem.com.br/` | `/on/` |

## 9. Exemplo de requisição

1. O usuário abre `http://vestibulares.soutotem.com.br/matriculas`.
2. A porta 80 devolve `301` para HTTPS.
3. O `server_name` do subdomínio Vestibulares é selecionado.
4. A rota não é `/api/` nem asset, então cai no `location /`.
5. O Nginx envia `/vestibulares/matriculas` ao upstream `nuxt`.

Já `https://vestibulares.soutotem.com.br/api/units/santa-maria` é encaminhada diretamente para `127.0.0.1:9000/api/units/santa-maria`, sem reescrita de portal.

## 10. Validar e recarregar

Teste sempre antes de aplicar:

```bash
sudo nginx -t
```

Se a sintaxe estiver válida, recarregue sem derrubar conexões ativas:

```bash
sudo systemctl reload nginx
```

Em Docker, rode os comandos equivalentes no container/serviço do Nginx. Depois, valide uma página, um asset e uma URL `/api/` em cada domínio.

---
