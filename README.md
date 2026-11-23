# Totem.Org


## Authors

![Jonas](https://img.shields.io/badge/Jonas-000000?style=for-the-badge&logo=github&logoColor=white)
![A.Asan](https://img.shields.io/badge/A.Asan-360276?style=for-the-badge&logo=github&logoColor=white)
![Jean](https://img.shields.io/badge/Jean-760202?style=for-the-badge&logo=github&logoColor=white)
![A.Pão](https://img.shields.io/badge/A.Pão-016325?style=for-the-badge&logo=github&logoColor=white)
![Matheus](https://img.shields.io/badge/Matheus-c98300?style=for-the-badge&logo=github&logoColor=white)
![Fabricio](https://img.shields.io/badge/Fabricio-0072c4?style=for-the-badge&logo=github&logoColor=white)

---

## Stack
![Nuxt](https://img.shields.io/badge/Nuxt-4-00DC82?style=for-the-badge&logo=nuxt&logoColor=white)
![Vue.js](https://img.shields.io/badge/Vue.js-3-42B883?style=for-the-badge&logo=vuedotjs&logoColor=white)
![Nitro](https://img.shields.io/badge/Nitro-Server-orange?style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Nginx](https://img.shields.io/badge/-NGINX-009639?style=flat&logo=nginx&logoColor=white)
<br/>

![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)


## Deploy de produção no Ubuntu com imagens `.tar`

Este é o procedimento operacional atual para publicar sem registry ou CI/CD.
Os comandos pressupõem que o projeto será instalado em `/opt/totem`, que Docker
e o plugin Docker Compose já estão instalados e que o usuário de deploy consegue
executar `docker` sem `sudo`. Os containers da API e do Nuxt executam como UID
`1001`; por isso o diretório de uploads precisa pertencer a esse UID.

### 1. Pré-requisitos do domínio e firewall

Antes de solicitar o certificado, crie registros DNS `A` apontando para o IPv4
público do Ubuntu para todos estes nomes: `soutotem.com.br`,
`www.soutotem.com.br`, `colegios.soutotem.com.br`,
`www.colegios.soutotem.com.br`, `vestibulares.soutotem.com.br`,
`www.vestibulares.soutotem.com.br`, `on.soutotem.com.br` e
`www.on.soutotem.com.br`. Aguarde a propagação e confirme que todos resolvem
para o mesmo IP. O desafio HTTP-01 do Let's Encrypt exige a porta 80 pública.

No Ubuntu, permita SSH, HTTP e HTTPS no firewall usado pela máquina e também nas
regras de rede do provedor (por exemplo, Security Group da EC2):

```bash
sudo ufw allow OpenSSH
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw status
```

### 2. Gerar as imagens e o pacote de configuração localmente

Na raiz deste repositório, construa as imagens com tags explícitas, exporte-as e
monte um pacote sem nenhum arquivo `.env` ou segredo:

```bash
docker build -t totem-api:latest ./backend
docker build -t totem-web:latest ./frontend
docker save totem-api:latest -o totem-api.tar
docker save totem-web:latest -o totem-web.tar
gzip -9 totem-api.tar
gzip -9 totem-web.tar
tar -czf totem-deploy.tar.gz \
  docker-compose.yml nginx backend/migrations backend/migrate-mongo-config.js
```

Envie os três artefatos ao servidor. Substitua o usuário e IP conforme seu
ambiente:

```bash
scp totem-api.tar.gz totem-web.tar.gz totem-deploy.tar.gz usuario@IP_DO_SERVIDOR:/tmp/
```

### 3. Preparar diretórios persistentes no Ubuntu

Conecte-se ao servidor e crie as pastas antes de subir os containers. Os
uploads não ficam dentro de imagens Docker: eles persistem em
`/var/www/uploads`, são gravados pela API e montados como somente leitura no
Nginx.

```bash
ssh usuario@IP_DO_SERVIDOR
sudo install -d -m 0755 /opt/totem
sudo install -d -m 0755 /opt/totem/backend /opt/totem/frontend
sudo install -d -m 0755 /var/www/uploads
sudo install -d -m 0755 /var/www/certbot/.well-known/acme-challenge
sudo chown -R 1001:1001 /var/www/uploads
sudo chmod 0755 /var/www/uploads
sudo tar -xzf /tmp/totem-deploy.tar.gz -C /opt/totem
cd /opt/totem
gunzip -k /tmp/totem-api.tar.gz
gunzip -k /tmp/totem-web.tar.gz
docker load -i /tmp/totem-api.tar
docker load -i /tmp/totem-web.tar
docker image ls
```

O Compose principal cria a rede Docker com o nome fixo `app-network`. O Compose
do Nginx a utiliza como rede externa, permitindo que o proxy alcance
`totem-api` e `totem-web` sem publicar essas portas na Internet.

### 4. Criar os arquivos `.env` no servidor

Crie `/opt/totem/backend/.env` com valores de produção. Nunca envie esse
arquivo por SCP, não o inclua no `.tar` e não o versione. Ajuste todos os dados
de MongoDB, JWT e SMTP para o ambiente real:

```dotenv
MONGO_INITDB_ROOT_USERNAME=USUARIO_MONGO
MONGO_INITDB_ROOT_PASSWORD=SENHA_MONGO_FORTE
MONGO_INITDB_DATABASE=totem
MONGO_URL=mongodb://USUARIO_MONGO:SENHA_MONGO_FORTE@mongoDb:27017/totem?authSource=admin
PORT=9000
HOST=0.0.0.0
NODE_PRODUCTION=true
ALLOWED_ORIGINS=https://soutotem.com.br,https://colegios.soutotem.com.br,https://vestibulares.soutotem.com.br,https://on.soutotem.com.br
JWT_SECRET=UMA_CHAVE_ALEATORIA_COM_PELO_MENOS_32_CARACTERES
SMTP_HOST=SMTP_DO_PROVEDOR
SMTP_PORT=587
SMTP_USER=USUARIO_SMTP
SMTP_PASS=SENHA_SMTP
SMTP_FROM=remetente@soutotem.com.br
SMTP_TO=destino@soutotem.com.br
UPLOAD_DIRECTORY=/var/www/uploads
UPLOAD_PUBLIC_BASE_URL=https://soutotem.com.br/uploads
UPLOAD_MAX_FILE_BYTES=5242880
UPLOAD_MAX_BODY_BYTES=7340032
UPLOAD_MAX_WIDTH=2560
UPLOAD_MAX_HEIGHT=2560
UPLOAD_WEBP_QUALITY=82
```

Crie também `/opt/totem/frontend/.env`. A API interna usa a rede Docker e o
navegador usa o mesmo domínio pelo caminho `/api`:

```dotenv
NUXT_API_BASE_INTERNAL=http://totem-api:9000/api
NUXT_PUBLIC_API_BASE=/api
NUXT_COKKIE_SECURE=true
NUXT_NODE_PRODUCTION=true
```

Restrinja a leitura dos dois arquivos ao usuário de deploy:

```bash
chmod 600 /opt/totem/backend/.env /opt/totem/frontend/.env
```

### 5. Rodar as migrations e iniciar aplicação

Suba primeiro o MongoDB, execute migrations a partir da imagem da API e então
suba os serviços da aplicação. O bind mount de migrations é necessário porque
a imagem final da API contém o build de produção, não os arquivos de migration.

```bash
cd /opt/totem
docker compose up -d mongoDb
docker compose ps
docker run --rm \
  --network app-network \
  --env-file /opt/totem/backend/.env \
  -v /opt/totem/backend/migrations:/app/migrations:ro \
  -v /opt/totem/backend/migrate-mongo-config.js:/app/migrate-mongo-config.js:ro \
  totem-api:latest npm run migrate:up
docker compose up -d
docker compose ps
```

Para atualizar uma versão, envie novos `.tar.gz`, execute novamente `docker
load`, rode migrations e então use `docker compose up -d`. Os arquivos em
`/var/www/uploads` e o volume nomeado `mongo_data` permanecem preservados.

### 6. Certificado TLS com Certbot

O `app.conf` já referencia o certificado em
`/etc/letsencrypt/live/soutotem.com.br/` e agora expõe
`/.well-known/acme-challenge/` pelo volume `/var/www/certbot`. Portanto ele está
pronto para renovação por webroot, mas não consegue iniciar pela primeira vez
antes de o certificado existir. Para a emissão inicial, use o modo standalone
com o container Nginx ainda parado.

Instale Certbot via Snap no Ubuntu, conforme a recomendação atual do projeto:

```bash
sudo apt update
sudo apt install -y snapd
sudo snap install core
sudo snap refresh core
sudo snap install --classic certbot
sudo ln -sf /snap/bin/certbot /usr/local/bin/certbot
certbot --version
```

Com o DNS pronto, portas 80/443 abertas e nenhum serviço ocupando a porta 80,
emita um único certificado SAN para todos os hosts:

```bash
sudo certbot certonly --standalone \
  --cert-name soutotem.com.br \
  --agree-tos --no-eff-email --email SEU_EMAIL \
  -d soutotem.com.br -d www.soutotem.com.br \
  -d colegios.soutotem.com.br -d www.colegios.soutotem.com.br \
  -d vestibulares.soutotem.com.br -d www.vestibulares.soutotem.com.br \
  -d on.soutotem.com.br -d www.on.soutotem.com.br
```

Agora inicie o proxy a partir do diretório correto — o arquivo
`nginx/docker-compose.yml` usa caminhos relativos a ele:

```bash
cd /opt/totem/nginx
docker compose up -d
docker compose exec nginx nginx -t
docker compose exec nginx nginx -s reload
```

Troque a renovação futura do certificado para webroot, sem derrubar o Nginx, e
confirme em ambiente de staging. O comando `reconfigure` requer Certbot 2.3 ou
superior, fornecido pelo Snap atual:

```bash
sudo certbot reconfigure --cert-name soutotem.com.br --webroot -w /var/www/certbot
sudo certbot renew --dry-run
```

Crie um deploy hook para recarregar o Nginx somente quando houver certificado
renovado e torne-o executável:

```bash
sudo install -d -m 0755 /etc/letsencrypt/renewal-hooks/deploy
sudo tee /etc/letsencrypt/renewal-hooks/deploy/reload-nginx >/dev/null <<'EOF'
#!/bin/sh
/usr/bin/docker compose -f /opt/totem/nginx/docker-compose.yml exec -T nginx nginx -s reload
EOF
sudo chmod 0755 /etc/letsencrypt/renewal-hooks/deploy/reload-nginx
sudo certbot renew --dry-run
```

O Snap instala o agendamento de renovação. Confirme-o com
`systemctl list-timers | grep certbot`. Não use `certbot --nginx`: ele tenta
editar a configuração do host, enquanto este projeto monta um Nginx em Docker.

### 7. Verificação final

```bash
docker compose -f /opt/totem/docker-compose.yml ps
docker compose -f /opt/totem/nginx/docker-compose.yml ps
curl -I https://soutotem.com.br/health
curl -I https://soutotem.com.br/uploads/ARQUIVO_EXISTENTE.webp
```

O endpoint `/health` deve responder via proxy, e a URL em `/uploads/` deve
retornar a imagem diretamente pelo Nginx, com cache e sem encaminhamento ao
Nuxt ou Fastify. Consulte [a documentação do Certbot](https://eff-certbot.readthedocs.io/en/stable/using.html)
para detalhes sobre standalone, webroot e alteração de renovação.

# TUTORIAL DE DEPLOY (referência anterior)

> Use o procedimento **Deploy de produção no Ubuntu com imagens `.tar`** acima
> como fonte operacional. O material abaixo foi preservado como referência, mas
> alguns comandos antigos usam execução manual de containers e o webroot
> `/var/www/letsencrypt`, que não correspondem ao Compose e ao Certbot atuais.

Considere estes passos a passos sem utilizar CI e CD como um runner ou github actions mas sim direto 
no servidor com sua máquina via SSH, considere ainda um ambiente limpo com o docker já instalado e todos
os containers devem estar sem a permissão de root

```bash
ssh -i [sua chave] usuario@ip
```

## instalação do docker no ambiente linux


## gerando os certicados com certpot

Você precisa gerar um certificado TLS para o domínio principal e os subdomínios que pretende atender. o caminho mais simples é usar o Certbot com Let's Encrypt, gerando um certificado SAN que cubra todos os domínios sem precisar gerar uma chave separada para cada subdomínio.
Mas há um detalhe importante: para emitir certificados públicos, os domínios precisam estar configurados no DNS e ser validados pelo Let's Encrypt. Alterar apenas o arquivo /etc/hosts do seu computador não é suficiente.

Quais domínios incluir? todos os hosts que sua aplicação usar

Preparar o DNS e emitir o certificado
No provedor DNS do domínio, crie registros A apontando para o IPv4 público da EC2:
Tipo	Nome	Valor
A	@	IPv4 público da EC2
A	www	IPv4 público da EC2
A	colegios	IPv4 público da EC2
A	www.colegios	IPv4 público da EC2
A	vestibulares	IPv4 público da EC2
A	www.vestibulares	IPv4 público da EC2
A	on	IPv4 público da EC2
A	www.on	IPv4 público da EC2

1. instalação do certbot

```bash
sudo apt update
sudo apt install certbot
```

2. criar os diretorios para as chaves e certificado

```bash
sudo mkdir -p /var/www/letsencrypt/.well-known/acme-challenge
sudo chown -R www-data:www-data /var/www/letsencrypt
```

3. Solicitar certificado

```
sudo certbot certonly --webroot \
  -w /var/www/letsencrypt \
  --cert-name soutotem.com.br \
  -d soutotem.com.br \
  -d www.soutotem.com.br \
  -d colegios.soutotem.com.br \
  -d www.colegios.soutotem.com.br \
  -d vestibulares.soutotem.com.br \
  -d www.vestibulares.soutotem.com.br \
  -d on.soutotem.com.br \
  -d www.on.soutotem.com.br
```

4. conferir

```bash
sudo certbot certificates
```

5. Renovar certificado

```bash
sudo certbot renew --dry-run
```

## Docker

Criar a rede docker no servidor

```bash
docker network create -d bridge app-network
```

2. baixar uma instancia do mongo com docker

```bash
docker pull mongodb:7.0
```

3. rode o container do mongo no servidor mapeando a porta

```bash
docker run --name totem-mongo --network app-network --env-file caminho/.env -p 27017:27017 -d mongodb:7.0 
```

4. criando a imagem da api localmente e subindo para o servidor

```bash
cd backend
docker build . -t totem-api
docker save -o totem-api.tar totem-api:latest
gzip backend.tar
scp backend.tar.gz usuario@IP_DO_SERVIDOR:~/
```

5. Descompactar e verificar a imagem no servidor

```bash
gunzip backend.tar.gz
docker load -i backend.tar
docker images
```

6. repetir o mesmo processo com o front

```bash
cd frontend
docker build . -t totem-web
docker save -o totem-web.tar totem-web:latest
gzip web.tar
scp web.tar.gz usuario@IP_DO_SERVIDOR:~/
```


7. rodando o front e o back isoladamente

```bash
docker run --name totem-api --network app-network --env-file caminho/.env -p 9000:9000 -d 

docker run --name totem-web --network app-network --env-file caminho/.env -p 8000:8000 -d 
```

## migrações com dados e testando o tunning


```bash
ssh -i chave -L 27017:localhost:27017 [usuario]@[servidor_ssh]

```


## Nginx


```bash
# usar o docker-compose up -d com o arquivo docker-compose do nginx ou criar ele manualmente com
docker run -d --name nginx-proxy  --restart unless-stopped  -p 80:80 -p 443:443 \
  -v $(pwd)/nginx/conf.d:/etc/nginx/conf.d:ro \
  -v /etc/letsencrypt:/etc/letsencrypt:ro \
  -v /var/www/certbot:/var/www/certbot:ro \
  --network app-network  nginx:alpine
```

```bash
docker exec -it nginx-proxy nginx -t
docker exec -it nginx-proxy nginx -s reload
```


```bash
 ### comando uteis
 sudo systemctl start nginx
 sudo systemctl enable nginx
 sudo systemctl status nginx
 sudo systemctl stop nginx
 sudo systemctl restart nginx
sudo systemctl reload nginx
sudo systemctl disable nginx

#pagina inicial e arquivos estaticos e html ficam em
/var/www/

sudo nginx -t -c ~/caminho-projeto/nginx/nginx.conf
```

```bash
sudo certbot renew --deploy-hook "docker exec nginx-proxy nginx -s reload"
```


## funcionamento das rotas das unidades

No Nuxt, o nome [slug] é o que torna a rota dinâmica. Para cada unidade, você mantém o mesmo arquivo Vue, e o valor do slug muda conforme a URL.
Por exemplo, estas duas URLs carregariam a mesma página index.vue:
- /colegios/unidade/cachoeira-do-sul
- /colegios/unidade/santa-maria
O conteúdo muda porque a página consulta a API usando o slug recebido na rota.
A árvore de arquivos ficaria assim:

```bash
pages/
└── colegios/
    └── unidade/
        └── [slug]/
            ├── index.vue
            ├── tour.vue
            ├── diferenciais.vue
            └── niveis/
                ├── bercario.vue
                ├── educacao-infantil.vue
                ├── ensino-fundamental.vue
                └── ensino-medio.vue
```

```ts
  const config = useRuntimeConfig()

  // indica se o código atual está sendo executado no servidor.
  // Servidor: vai direto no container da API. Navegador: passa pelo nginx em /api
  const baseURL = import.meta.server
    ? String(config.apiBaseInternal)
    : String(config.public.apiBase)
```


## Configurar o frontend Nuxt

As rotas de dados da API usam o prefixo `/api`; portanto, configure a URL base
com esse prefixo e sem `/` no final. `/docs` e `/health` ficam na raiz do
domínio, sem o prefixo `/api`.

No ambiente do frontend (por exemplo, em **Settings → Environment Variables**
do projeto frontend na Vercel), configure:

```dotenv
NUXT_PUBLIC_API_BASE=https://api.exemplo.com/api
NUXT_API_BASE_INTERNAL=https://api.exemplo.com/api
NUXT_COKKIE_SECURE=true
NUXT_NODE_PRODUCTION=true
```

- `NUXT_PUBLIC_API_BASE` é usada no navegador e fica disponível publicamente.
- `NUXT_API_BASE_INTERNAL` é usada durante o SSR do Nuxt. Se o frontend e o
  backend estiverem em redes privadas compatíveis, pode apontar para a URL
  interna do backend; caso contrário, use a URL HTTPS pública.
- `NUXT_COKKIE_SECURE=true` garante que os cookies sejam enviados apenas por
  conexões HTTPS.
- `NUXT_NODE_PRODUCTION=true` habilita o modo de produção do frontend.

O Nuxt lê esses valores como configuração de runtime (`public.apiBase`,
`apiBaseInternal`, `cookieSecure` e `nodeProduction`). Configure também `ALLOWED_ORIGINS` no
backend com a origem do site frontend, incluindo `https://` e sem caminho (por
exemplo, `https://www.exemplo.com`). Para mais de uma origem, separe os valores
com vírgulas. Após alterar as variáveis, faça novo deploy do frontend e do
backend, conforme aplicável.

## Rotas úteis

- `GET /health`: verifica se a API responde por HTTP.
- `/docs`: documentação interativa Swagger.
- As rotas de recursos da API usam `/api` (por exemplo, `/api/posts` e
  `/api/auth`).

## Migrações

Os scripts de migração estão disponíveis pelo `migrate-mongo`:
certifique-se de usar as variaveis corretas e o banco certo antes de migrar
suba as migrations antes de fazer o deploy

```bash
npm run migrate:status
npm run migrate:up
npm run migrate:create --name
```

Execute migrações com a mesma `MONGO_URL` do ambiente de destino, usando um
ambiente controlado. Não execute `migrate:down` em produção sem avaliar o
impacto da reversão.


## Convenções durante o desenvolvimento

usar banco de desenvolvimento via tunning ssh   
ssh -L 0.0.0.0:27017:localhost:27017 \


```bash
docker run \
  --name totem-api \
  --network=bridge \
  --add-host=host.docker.internal:host-gateway \
  --env-file .env \
  -p 9000:9000 \
  -d totem-api:latest


alterar:

DATABASE_URL=mongodb://host.docker.internal:27017/totem
```

Isso faz com que host.docker.internal resolva para o endereço IP do host visto pela rede Docker.

depois é só parar e startar o container quando mexer só no front e sempre fazer o tunning ssh antes
