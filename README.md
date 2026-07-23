# Totem.Org



## Authors

![Jonas](https://img.shields.io/badge/Jonas-000000?style=for-the-badge&logo=github&logoColor=white)
![A.Asan](https://img.shields.io/badge/A.Asan-360276?style=for-the-badge&logo=github&logoColor=white)
![Jean](https://img.shields.io/badge/Jean-760202?style=for-the-badge&logo=github&logoColor=white)
![Mari](https://img.shields.io/badge/Mari-00d2ac?style=for-the-badge&logo=github&logoColor=white)
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
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)


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


## Usando o Backend e API

projeto criado com nitro SSR e prisma para ORM com postgres e supabase para testes

```bash
npx create-nitro-app
```

> primeiros passos

```bash
cd backend
npm i
cp .env.example .env
```

> substitua as variaveis de ambiente

DATABASE_URL="postgresql://user:password@localhost:5432/mydb?schema=public"

> rodando banco local com docker

```bash
docker compose up -d
```

O Nitro usa c12, então você não precisa instalar o dotenv.

é só usar 

```bash
process.env.ADMIN_EMAIL
```

Nitro é construído em cima do H3.

O H3 é um framework HTTP criado pela equipe do Nuxt/UnJS. O Nitro utiliza o H3 para todo o tratamento de requisições.

### [H3 DOCS](https://v1.h3.dev/)

### adicionando prisma ORM no projeto já criado com o nitro

```bash
npm install @prisma/client @prisma/adapter-pg pg
npm install -D prisma dotenv
npx prisma init
```

vai criar uma pasta /prisma com um schema.prisma onde você ira fazer a
sua configuração dos seus models que virão a ser as tabelas e de migrations
se tiver ja o .env com a variavel de ambiente configurada com a url de conexão
do banco não será nescessário ajustes

### executando as migrations para desenvolvimento

```bash
npx prisma migrate dev --name nome_da_migration
```

1. O Prisma compara o banco com o schema.
2. Gera um SQL.
3. Cria uma migration.
4. Executa esse SQL.
5. Atualiza o banco.
6. Gera o Prisma Client.

### apenas executar as migrations existentes (para ambiente de produção)

```bash
npx prisma migrate deploy
```

### cenário onde o banco já existe e quer atualizar seu schema

```bash
npx prisma db pull
```


### arquitetura do back

```bash

```