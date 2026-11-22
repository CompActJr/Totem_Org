# Implementação do CRUD de posts

## Visão geral

O blog possui leitura pública e administração autenticada.

- Visitantes usam `GET /api/posts` e `GET /api/posts/:id` diretamente pelo backend.
- Administradores usam a página `/admin/blog`, protegida pelo middleware `auth.global.ts`.
- Criar, editar e excluir passa pelos endpoints privados do servidor Nuxt.
- O servidor Nuxt lê o cookie HTTP-only `auth_token` e envia o JWT ao Fastify.
- O backend Fastify valida a autenticação nas operações protegidas.

## Fluxo público

```text
/blog
  -> useBlogPosts()
  -> GET /api/posts
  -> filtros enviados como query
  -> MongoDB
  -> Grade e cards públicos
```

`useBlogPosts` mantém os filtros em `useState` e monta uma key computada contendo categoria, destaque, ativo e unidades. Isso atualiza o cache do `useFetch` sem criar uma consulta fixa.

## Fluxo administrativo

```text
/admin/blog
  -> middleware global valida a sessão
  -> useBlogPosts carrega os posts
  -> clique no card abre a sidebar em modo edit
  -> cadastra a partir do botão superior em modo create
  -> POST/PUT/DELETE por /api/admin/posts
  -> servidor Nuxt encaminha ao Fastify com Bearer
  -> refresh da listagem
```

Ao clicar em um card, o `_id` é enviado ao composable. A função procura o post completo em `posts` antes de consultar a API. Assim, a edição não realiza uma segunda busca em condições normais.

Se o post não estiver na grade, o composable possui uma consulta cacheada por `_id` como fallback.

## Arquivos principais

- `frontend/app/composables/api/useBlog.ts`: centraliza consulta, filtros, cache, seleção e CRUD.
- `frontend/app/pages/admin/blog.vue`: grade administrativa, botão cadastrar e controle da sidebar.
- `frontend/app/components/admin/PostEditorSidebar.vue`: formulário lateral de criação e edição.
- `frontend/app/components/posts/Post.vue`: card reutilizado nos modos público e administrativo.
- `frontend/app/pages/blog.vue`: filtros públicos e grade de posts.
- `frontend/app/types/blog.types.ts`: tipos de post, filtros e payloads.
- `frontend/server/api/admin/posts/index.post.ts`: proxy autenticado de criação.
- `frontend/server/api/admin/posts/[id].put.ts`: proxy autenticado de edição.
- `frontend/server/api/admin/posts/[id].delete.ts`: proxy autenticado de exclusão.
- `backend/src/modules/blog/blog.routes.ts`: rotas públicas e privadas.
- `backend/src/modules/blog/blog.service.ts`: filtros MongoDB e operações CRUD.
- `backend/src/modules/blog/blog.schema.ts`: validação Zod dos dados e filtros.

## Pontos críticos

- `destaque=false` deve representar um filtro real, não ausência de filtro.
- `ativo` segue a mesma regra: `undefined`, `true` e `false` precisam ser distintos.
- A key de listagem deve incluir todos os filtros ativos para não reutilizar dados incorretos.
- Operações privadas não recebem ou manipulam o JWT no cliente.
- O cookie `auth_token` permanece HTTP-only e é convertido em `Authorization: Bearer` somente no servidor Nuxt.
- Ao criar ou alterar, o backend mantém responsabilidade por `_id`, `createdAt` e `updatedAt`.
- A exclusão fica no rodapé da sidebar somente no modo edição e deve exigir confirmação.
- `imagemUrl` é temporariamente uma URL ou caminho informado por texto.
- Upload, Base64, bucket e CDN não fazem parte desta implementação.
