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


## instalando o nginx no linux ubuntu

```bash
 sudo apt update && sudo apt upgrade -y
 sudo apt install nginx -y

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


# Testando configuração
Antes de aplicar, é fundamental verificar se o seu novo arquivo de configuração não possui erros de sintaxe:

sudo nginx -t -c ~/caminho-projeto/nginx/nginx.conf

## gerando os certicados

Você precisa gerar um certificado TLS para o domínio principal e os subdomínios que pretende atender. o caminho mais simples é usar o Certbot com Let's Encrypt, gerando um certificado SAN que cubra todos os domínios sem precisar gerar uma chave separada para cada subdomínio.
Mas há um detalhe importante: para emitir certificados públicos, os domínios precisam estar configurados no DNS e ser validados pelo Let's Encrypt. Alterar apenas o arquivo /etc/hosts do seu computador não é suficiente.

1. Quais domínios incluir?
- soutotem.com.br
- www.soutotem.com.br
- colegios.soutotem.com.br
- www.colegios.soutotem.com.br
- vestibulares.soutotem.com.br
- www.vestibulares.soutotem.com.br
- on.soutotem.com.br
- www.on.soutotem.com.br

Todos esses nomes precisam resolver para o servidor e estar acessíveis para validação. Se algum subdomínio não for ser usado, você pode removê-lo da lista.

2. Preparar o DNS e emitir o certificado
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

## instalar o certbot no ubuntu

sudo apt update
sudo apt install certbot

## criar os diretorios para as chaves e certificado

sudo mkdir -p /var/www/letsencrypt/.well-known/acme-challenge
sudo chown -R www-data:www-data /var/www/letsencrypt

## Solicitar certificado
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

## Conferir
sudo certbot certificates


## Renovar certificado
sudo certbot renew --dry-run
```

## Rodando a imagem do mongo localmente pra testes

```bash

criando a rede

docker network create -d bridge app-network

cd backend
docker run --name totem-mongo \
  --network app-network \
  --env-file .env \
  -p 27017:27017 \
  -d mongo:8.3.11-noble
```

## rodando o fastify

```bash
docker build . -t totem-api

> ajustar variaveis de ambiente no .env, a url de conexao no mongo
> deve ser o nome do container ou ip dele

executar o container

docker run --name totem-api \
  --network app-network \
  --env-file .env \
  -p 9000:9000 \
  -d totem-api:latest
```

Para utilizar os dados estáticos, mude para:
NUXT_NODE_PRODUCTION=false


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

Fluxo resultante:

SSR: frontend-totem chama http://backend-totem:9000/api/units/santa-maria, que consulta o mongoDb.
Navegador: colegios.soutotem.com.br/api/units/santa-maria, que passa pelo nginx e chega em 127.0.0.1:900