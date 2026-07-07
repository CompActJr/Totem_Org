# Totem Admin — Esqueleto do Painel Administrativo

Projeto **Nuxt 4** preparado para consumir a API do backend (`/api/admin`).
Esta branch contém apenas a estrutura de integração — o frontend visual será
desenvolvido posteriormente.

---

## O que já está configurado

### Autenticação Supabase

`app/composables/useSupabase.ts` — cliente Supabase com as chaves públicas.

`app/composables/useAuth.ts` — funções `login()`, `logout()` e `useAuthSession()` (estado
reativo da sessão via `useState` do Nuxt).

### Consumo da API admin

`app/composables/useApiAdmin.ts` — `$fetch.create()` que já injeta o token JWT
automaticamente em toda requisição:

```ts
const api = useApiAdmin()
const posts = await api('/posts')
const post = await api('/posts/1')
const novo = await api('/posts', { method: 'POST', body: { ... } })
```

### Runtime config (`nuxt.config.ts`)

| Variável | Uso |
|---|---|
| `SUPABASE_URL` | URL do projeto Supabase |
| `SUPABASE_PUBLISHABLE_KEY` | Chave pública do Supabase Auth |
| `API_BASE_URL` | URL da API backend (ex: `http://localhost:3000`) |

---

## Para começar a desenvolver o frontend

1. Criar páginas em `app/pages/`
2. Usar `useApiAdmin()` para chamar as rotas `/api/admin/**`
3. Usar `useAuthSession()` para verificar se o usuário está logado
4. Chamar `login(email, senha)` e `logout()` para gerenciar sessão

### Exemplo de página protegida

```vue
<script setup lang="ts">
const session = useAuthSession()
const api = useApiAdmin()

if (!session.value) await navigateTo('/login')

const { data: posts } = await api('/posts')
</script>

<template>
  <div v-for="post in posts" :key="post.id">
    {{ post.titulo }}
  </div>
</template>
```

---

## Mapa de rotas da API

Consulte o `README.md` do projeto `backend/` para a documentação completa
das rotas, validação de campos e tratamento de erros.
