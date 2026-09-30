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


## Rodando a imagem do mongo localmente

```bash
docker run --name totem_mongo \
  --env-file .env \
  -p 27017:27017 \
  -d mongo:8.3.11-noble
```

## Subindo o Backend


## Compilando e gerando as imagens
```bash
docker build -t totem-main:latest ./totem_main
docker build -t totem-colegios:latest ./totem_colegios_web
docker build -t totem-vestibulares:latest ./totem_vestibulares_web
```

## Compilando o nginx

```bash
$ docker build -t nginx-totem .
$ docker run --name nginx-totem -d some-content-nginx
```

## Customize configuration


# Salvando em arquivos .tar para enviar via SCP
```bash
docker save totem-main:latest | gzip > totem-main.tar.gz
docker save totem-colegios:latest | gzip > totem-colegios.tar.gz
docker save totem-vestibulares:latest | gzip > totem-vestibulares.tar.gz
```

Na AWS Lightsail (Servidor de Produção)

No servidor, não precisará do código fonte nem do código de build dos Dockerfiles. precisa apenas
- Dos arquivos .tar.gz (carregados via docker load)
- Do arquivo docker-compose.yml da raiz
- Do arquivo .env (ou arquivos .env específicos) contendo as variáveis de produção e o caminho deles certinho com as pastas


## Como testar localmente na sua máquina antes de subir para a Lightsail

Edite o arquivo hosts da sua máquina (C:\Windows\System32\drivers\etc\hosts no Windows ou /etc/hosts no Linux/Mac) e adicione:

sudo nano /etc/hosts

```bash
127.0.0.1 totem.com
127.0.0.1 colegios.totem.com
127.0.0.1 vestibulares.totem.com
```

Execute o comando docker para executar o script do docker-compose.yml para orquetrar os containers
mas antes certifique de ter as imagens tudo em mão com o nome batendo ali no script

```bash
docker images
docker compose up -d
docker compose stats -> monitora uso de RAM e CPU dos containers
```


## Deploy do Backend


## Gerar certificado ssl no nginx


> ENV no Dockerfile

```bash
-e / --env (no docker run):
```

- Momento: Fica gravado dentro da imagem durante o build (construção) e persiste na execução do contêiner.
- Visibilidade: Fica embutido na imagem; qualquer pessoa que inspecionar a imagem (docker inspect) consegue ler os valores.
- Uso ideal: Definir padrões fixos, caminhos de sistema (PATH) ou configurações padrão que não mudam entre ambientes


> ARG (no Dockerfile)

- Momento: Disponível apenas durante o processo de build da imagem.
- Visibilidade: Não persiste no contêiner em execução (desaparece após gerar a imagem).
- Uso ideal: Definir parâmetros transitórios para compilar o código (ex: versão de um pacote ou chave temporária de build).

> Arquivo .env / env_file (Docker Compose)

- Momento: Carregado externamente em tempo de execução pelo Docker Compose.
- Visibilidade: Mantido fora do código-fonte da imagem (geralmente ignorado no controle de versão).
- Uso ideal: Organizar múltiplos segredos e parâmetros de configuração local ou de produção de forma limpa.

## For Devs

```bash
Internet
      │
      ▼
┌────────────────────────────────────────────┐
│ Ubuntu Lightsail                           │
│                                            │
│ Certbot (host)                             │
│ /etc/letsencrypt                           │
│                                            │
│ Docker                                     │
│                                            │
│ ┌──────────────┐                           │
│ │ nginx        │ 443                       │
│ └──────┬───────┘                           │
│        │                                   │
│ ┌──────┴──────┐                            │
│ │ principal   │ :8001                      │
│ └─────────────┘                            │
│                                            │
│ ┌─────────────┐                            │
│ │ colegios    │ :8002                      │
│ └─────────────┘                            │
│                                            │
│ ┌─────────────┐                            │
│ │ vestibulares│ :8003                      │
│ └─────────────┘                            │
└────────────────────────────────────────────┘
```

**O projeto possui 4 modulos principais**
- **totem_colegios_web** -> frontend para o portal institucional dos colégios
- **totem_main** -> blog interativo, totem tv totem vocacional e painel administrativo
- **totem_vestibulares_web** -> frontend para o portal institucional dos pré vestibulares


**arquivos e pastas importantes**
- **nginx** -> para o proxy em produção
- **env.example** -> variaveis de ambiente globais
- **Dockerfile** -> arquivo de configuração em cada modulo para o build da imagem daquele módulo
- **docker-compose.yml** -> arquivo na raiz para orquestração de todos os containers
- **backend/docker-compose.yml** -> arquivo para rodar o postgres localmente

## Baixar a chave privada:

 Acesse o painel da sua conta do Amazon Lightsail, vá em Account > Account > aba SSH Keys e baixe a chave correspondente à região da sua instância (ou baixe diretamente na aba Connect da própria instância)
 
## Mudar a permissão da chave:
  No seu terminal local, mude as permissões do arquivo .pem baixado para que ele seja seguro e legível apenas por você. Execute:

  ```bash
  chmod 400 nome-da-chave.pem
  ```

## Identificar os dados de acesso: 
  Copie o Endereço IP público da sua instância no painel do Lightsail e descubra o nome de usuário padrão conforme o sistema operacional (ex: ubuntu para Ubuntu, admin para Debian, bitnami para Bitnami, ec2-user para Amazon Linux)
  .Executar o comando de conexão: No terminal, navegue até a pasta onde salvou a chave e conecte-se usando:

  ```bash  
  ssh -i nome-da-chave.pem usuario@endereco-ip-publico
  ```

## NUXT

<b>
framework NuxtJs SSR melhora de SEO, usa vue 3+, e depencias listadas abaixo
para executar em modo de desenvolvimento va até a pasta do projeto onde tem
o package.json e realize os seguintes comandos
</b>

---

```bash
npm i
npm run dev
```

<i>
As portas já foram configuradas para rodarem apartir da 8000 e por padrão em
todas as interfaces de rede em 0.0.0.0 desta forma um outro computador
na mesma rede pode acessar por seu IP
</i>

</br>
</br>

<b>
Componentes de Cliente (Client-Side Components)Por padrão, o Nuxt utiliza renderização universal (SSR). Se você tem um componente que precisa rodar exclusivamente no navegador (por interagir com a janela do navegador, usar localStorage ou exigir uma biblioteca que dependa do objeto window), você pode usar a tag <ClientOnly> ou criar um componente com .client no nome.
</b>


> definindo variaveis de ambiente no nuxt:

```bash
// nuxt.config.ts em cada projeto Nuxt
export default defineNuxtConfig({
  runtimeConfig: {
    // Variáveis privadas (apenas no servidor Node)
    apiSecret: '', 

    // Variáveis públicas (disponíveis no cliente/navegador)
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'http://localhost:3000'
    }
  }
})
```

## [Deploy.MD](/deploy.md)


## Adicionar tailwild v4 com vite no projeto

```bash
npm install tailwindcss @tailwindcss/vite
```


configurar o tailwild v4 no projeto

```css
 /assets/styles/main.css
@import "tailwindcss";
```

e no nuxt.config.ts

```ts
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  vite: {
    plugins: [
      tailwindcss()
    ]
  },

  css: [
    '~/assets/styles/main.css'
  ]
})
```

## Bibliotecas importantes

1. Swipper para o carrossel

2. Nuxt Images otimização de imagens antes de carregar as páginas


### [NuxImages Docs](https://image.nuxt.com/usage/nuxt-img)

### [NuxtUi Docs](https://ui.nuxt.com/docs/getting-started)

### [Prisma Docs](https://www.prisma.io/docs/guides/frameworks)

