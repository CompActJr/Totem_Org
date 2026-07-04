import type { Post } from "~/types/post";

export const posts: Post[] = [
  {
    id: 1,
    title: "Introdução ao Nuxt 4",
    description:
      "Conheça os principais recursos do Nuxt 4 e descubra como ele simplifica o desenvolvimento de aplicações Vue.",
    content: `
O Nuxt é um framework baseado em Vue que oferece renderização no servidor,
geração de sites estáticos, APIs integradas através do Nitro e uma experiência
de desenvolvimento extremamente produtiva.

Neste artigo veremos como criar projetos, entender a estrutura de pastas,
layouts, composables e muito mais.
`,
    image: "https://picsum.photos/800/500?random=1",
    author: "Jonas Silva",
    createdAt: "2026-07-04",
    category: "Nuxt",
    unidade: "Ijuí"
  },

  {
    id: 2,
    title: "Conhecendo o Nitro",
    description:
      "Entenda como funciona o servidor do Nuxt e por que ele substituiu o Express.",
    content: `
O Nitro é responsável por executar o SSR, disponibilizar APIs e permitir
deploys em Node, Bun, Cloudflare Workers, Vercel e AWS Lambda sem alteração
de código.
`,
    image: "https://picsum.photos/800/500?random=2",
    author: "Jonas Silva",
    createdAt: "2026-07-03",
    category: "Backend",
    unidade: "Cachoeira"
  },

  {
    id: 3,
    title: "Tailwind CSS 4",
    description:
      "Veja as novidades do Tailwind CSS 4 e sua integração com o Vite.",
    content: `
A versão 4 do Tailwind eliminou a dependência direta do PostCSS e passou a
utilizar um plugin próprio para o Vite, tornando a compilação significativamente
mais rápida.
`,
    image: "https://picsum.photos/800/500?random=3",
    author: "Jonas Silva",
    createdAt: "2026-07-02",
    category: "CSS",
    unidade: "Santa Maria"
  }
];