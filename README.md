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


# TUTORIAL DE DEPLOY

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