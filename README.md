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

**O projeto possui 3 modulos principais para o frontend**
- totem_colegios_web
- totem_main
- totem_vestibulares_web

**O projeto possui estas outras pastas o backend e o painel admin**
- totem_admin
- backend

**arquivos e pastas importantes**
- nginx -> para o proxy em produção
- env.example -> variaveis de ambiente globais e para o back
- Dockerfile -> arquivo de configuração em cada modulo para o build da imagem daquele módulo
- docker-compose.yml -> arquivo na raiz para orquestração de todos os containers

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

## [Deploy.MD]()


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

## Outras dependencias importantes

1. Swipper para o carrossel

2. Nuxt Images otimização de imagens antes de carregar as páginas




### [NuxImages Docs](https://image.nuxt.com/usage/nuxt-img)

### [NuxtUi Docs](https://ui.nuxt.com/docs/getting-started)

### [Documentação para o Nitro](/Nitro.docs.md)

### [Prisma Docs](https://www.prisma.io/docs/guides/frameworks)
