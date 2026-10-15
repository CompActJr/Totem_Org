# Frontend

O frontend está em `frontend/` e é uma aplicação **Nuxt 4.4** com **Vue 3.5**,
TypeScript e Vite. O código usa o diretório `frontend/app/` (configurado pelo
Nuxt), com roteamento baseado em arquivos em `app/pages/`.

## Tecnologias e bibliotecas

- **Nuxt 4 / Vue 3**: SSR, auto-imports, layouts, `NuxtPage`, `NuxtLayout` e
  roteamento por arquivos.
- **TypeScript**: configuração herdada dos arquivos gerados em `.nuxt/`; use os
  aliases do Nuxt, como `~/components`, `~/composables` e `~/data`.
- **Tailwind CSS 4**: integrado ao Vite por `@tailwindcss/vite`. Os estilos
  globais e utilitários do projeto ficam em `app/assets/css/main.css`.
- **@nuxt/image**: use `NuxtImg` para imagens que devem aproveitar otimização
  do Nuxt; arquivos estáticos são servidos diretamente de `public/`.
- **Swiper**: sliders/carrosséis.
- **Photo Sphere Viewer** e seu plugin de galeria: passeios 360°.
- **Chart.js** e **jsPDF**: visualização e exportação PDF no fluxo vocacional.

## Estrutura

- `app/pages/`: rotas públicas e administrativas.
- `app/layouts/`: layouts separados por portal (`main`, `vestibulares`,
  `colegios` e `on`). Páginas selecionam layouts com `definePageMeta` quando
  necessário.
- `app/components/`: componentes organizados por domínio/portal.
- `app/composables/`: composição de dados e comportamento compartilhado.
- `app/data/`: dados estáticos usados pelas telas.
- `public/`: imagens e outros assets referenciados por URL absoluta, por exemplo
  `/banners/BANNER_HOME_TOTEM_ON.jpg`.

## Rotas atuais

O nome e a hierarquia do arquivo em `app/pages/` determinam a URL:

- Gerais: `/`, `/blog`, `/vocacional`, `/on`.
- Administração: `/admin` e `/admin/login`.
- Vestibulares: `/vestibulares` e `/vestibulares/{contato,eventos,faqs,ijui,matriculas,o-totem,santa-maria,santa-rosa}`.
- Colégios: `/colegios`, `/colegios/nossa-escola` e, para cada unidade
  (`cachoeira-do-sul`, `cruz-alta`, `santa-maria`), as rotas
  `/colegios/<unidade>`, `/diferenciais`, `/tour` e seus níveis em
  `/colegios/<unidade>/niveis/<nivel>`. Cachoeira do Sul também possui
  `/colegios/cachoeira-do-sul/infantil` e o nível `bercario`.

Ao adicionar uma página, crie o arquivo no local correspondente em
`app/pages/`; não é necessário registrar a rota manualmente. Atualize os menus
e links com a URL completa da rota gerada. Em especial, os portais usam os
prefixos `/vestibulares` e `/colegios` — não há o segmento `/unidades` nas
rotas atuais.

## Configuração e execução

- `NUXT_PUBLIC_API_BASE` define a URL pública da API; sem ela, o padrão é
  `http://localhost:9000`.
- As configurações SMTP são privadas no `runtimeConfig`; nunca exponha
  credenciais em `runtimeConfig.public` ou no cliente.
- Comandos (a partir de `frontend/`): `npm run dev`, `npm run build`,
  `npm run generate` e `npm run preview`.
- O projeto não declara scripts de lint ou de testes no `package.json` atual.

## Convenções de alteração

- Preserve o idioma e o estilo já usados no componente alterado.
- Prefira componentes e composables existentes a duplicar lógica.
- Para navegação interna, use `NuxtLink`; para destinos externos, use o
  componente/link externo apropriado.
- Antes de entregar mudanças, execute ao menos `npm run build` quando a
  alteração afetar rotas, configuração, TypeScript ou componentes compartilhados.
