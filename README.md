## Deploy

[Link para documentação do deploy](/deploy.md)


## adicionar tailwild v4 com vite no projeto

```bash
npm install tailwindcss @tailwindcss/vite
```


> criar a pasta assets/stles em app e o arquvo main.css

```bash
 /assets/styles/main.css
```

> configurar o tailwild v4 no projeto

```css
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


## outras dependencias importantes

- [ ] Swipper para o carrossel
- [ ] Nuxt Images otimização de imagens antes de carregar as páginas

[https://image.nuxt.com/usage/nuxt-img](https://image.nuxt.com/usage/nuxt-img)

### uso básico do NuxtImage

```ts
<NuxtImg
  src="/images/nuxt.png"
  alt="image"
  width="400"
  height="400"
  format="webp"
  />
```


## [Documentação para o Nitro](/Nitro.docs.md)


## [Prisma](https://www.prisma.io/docs/guides/frameworks)

