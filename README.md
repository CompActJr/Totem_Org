## Deploy

[Link para documentação do deploy](/deploy.md)


## adicionar tailwild v4 com vite no projeto
## Authors

<div style="display: flex; gap: 8px">
<span style="background-color: #000000; font-size: 1rem; color: white; padding: 3px 8px; border-radius: 5px">
@Jonas
</span>

<span style="background-color: #360276; font-size: 1rem; color: white; padding: 3px 8px; border-radius: 5px">
@A.Asan
</span>

<span style="background-color: #760202; font-size: 1rem; color: white; padding: 3px 8px; border-radius: 5px">
@Jean
</span>

<span style="background-color: #00d2ac; font-size: 1rem; color: white; padding: 3px 8px; border-radius: 5px">
@Mari
</span>

<span style="background-color: #016325; font-size: 1rem; color: white; padding: 3px 8px; border-radius: 5px">
@A.Pão
</span>

<span style="background-color: #c98300; font-size: 1rem; color: white; padding: 3px 8px; border-radius: 5px">
@Matheus
</span>

<span style="background-color: #0072c4; font-size: 1rem; color: white; padding: 3px 8px; border-radius: 5px">
@Fabricio
</span>

</div>

</br>
</br>

<span style="background-color: #4CAF50; font-size: 2rem; color: white; padding: 3px 8px; border-radius: 5px;">
Totem Org
</span>

---

## Stack


---

## For Devs

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

3. NuxtUi para componentes prontos


### [NuxImages Docs](https://image.nuxt.com/usage/nuxt-img)

### [NuxtUi Docs](https://ui.nuxt.com/docs/getting-started)

### [Documentação para o Nitro](/Nitro.docs.md)

### [Prisma Docs](https://www.prisma.io/docs/guides/frameworks)

