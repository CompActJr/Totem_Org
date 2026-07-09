# Backend — API Totem

API intermediária construída com **Nuxt 4** + **Nitro** + **Prisma 7** + **Postgres (Supabase)**.

---

## Estrutura do projeto

```
backend/
├── server/
│   ├── api/
│   │   ├── public/              # Rotas públicas (somente GET)
│   │   │   ├── posts/              index.get.ts, [id].get.ts
│   │   │   ├── professores/        index.get.ts, [id].get.ts
│   │   │   ├── eventos/            index.get.ts, [id].get.ts
│   │   │   ├── depoimentos/        index.get.ts, [id].get.ts
│   │   │   └── unidades/           index.get.ts, [id].get.ts
│   │   │
│   │   ├── admin/               # Rotas protegidas (CRUD completo)
│   │   │   ├── upload.post.ts       Upload de imagens (5MB max)
│   │   │   ├── posts/              index.get.ts, index.post.ts, [id].get.ts, [id].put.ts, [id].delete.ts
│   │   │   ├── professores/        (mesmo padrão)
│   │   │   ├── eventos/            (mesmo padrão)
│   │   │   ├── depoimentos/        (mesmo padrão)
│   │   │   └── unidades/           (mesmo padrão)
│   │
│   ├── middleware/
│   │   ├── cors.ts             # Libera origens permitidas
│   │   └── admin-auth.ts       # Valida JWT do Supabase em /api/admin
│   │
│   ├── plugins/
│   │   └── bigint-serializer.ts  # Serializa BigInt para JSON
│   │
│   └── utils/
│       ├── prisma.ts           # Singleton do PrismaClient
│       ├── errors.ts           # Classes AppError, parsePrismaError
│       ├── error-handler.ts    # Handler global de erros
│       └── validation.ts       # Validação de campos por entidade
│
├── prisma/
│   ├── schema.prisma        # Modelos do banco
│   └── migrations/          
│
├── prisma.config.ts         # Config do Prisma CLI
├── nuxt.config.ts           # Config do Nuxt
├── .env                     # Variáveis de ambiente
├── Dockerfile               # Build para produção
└── README.md
```

---

## Padrão de rotas (Nitro file-based routing)

O Nitro segue o padrão **arquivo = rota**:

| Arquivo | Rota |
|---|---|
| `index.get.ts` | `GET /` |
| `index.post.ts` | `POST /` |
| `[id].get.ts` | `GET /:id` |
| `[id].put.ts` | `PUT /:id` |
| `[id].delete.ts` | `DELETE /:id` |

O prefixo é definido pela posição em `server/api/`:

```
server/api/public/posts/index.get.ts  →  GET /api/public/posts
server/api/admin/posts/index.post.ts  →  POST /api/admin/posts
server/api/admin/posts/[id].put.ts    →  PUT /api/admin/posts/:id
```

---

## Fluxo de requisição

```
Requisição → cors.ts → admin-auth.ts (se /api/admin) → handler da rota → resposta
                                      ↓ se OPTIONS
                                      204 (CORS preflight)
```

- **cors.ts**: sempre executa, adiciona headers de CORS
- **admin-auth.ts**: só age em `/api/admin/*`. Extrai o `Authorization: Bearer <token>`, valida no Supabase Auth. Se inválido → 401. Se válido → passa. **Todo usuário logado tem acesso total**.
- **Handler**: executa a lógica específica da rota

---

## Validação de campos

Toda rota **POST** e **PUT** em `/api/admin` valida os campos antes de processar. A validação checa:

- **Campos obrigatórios** — retorna erro se ausentes/vazios
- **Tipo do valor** — string, boolean, number, date
- **Formato** — datas precisam ser strings ISO válidas, arrays precisam conter IDs válidos

### Exemplo de envio inválido

```json
// POST /api/admin/posts
{ "conteudo": "texto" }
```

**Resposta (400):**

```json
{
  "statusCode": 400,
  "statusMessage": "Dados inválidos",
  "fields": [
    { "field": "titulo", "message": "Título é obrigatório" },
    { "field": "ativo", "message": "Ativo deve ser verdadeiro ou falso" }
  ]
}
```

### Como o frontend deve tratar

O `$fetch` (ofetch) lança um erro com `e.data` contendo o body da resposta. O frontend deve ler `e.data.fields` para exibir os erros campo a campo:

```ts
try {
  await api('/posts', { method: 'POST', body })
} catch (e: any) {
  const data = e.data
  if (data?.fields?.length) {
    // Exibir cada { field, message } no formulário
    data.fields.forEach(f => console.log(f.field, f.message))
  } else {
    // Erro genérico (500, 401, etc.)
    showToast(data?.statusMessage || 'Erro inesperado')
  }
}
```

Sugestão de renderização no template:

```html
<!-- Lista de erros -->
<ul v-if="erros.length" class="erros-campo">
  <li v-for="e in erros">{{ e.message }}</li>
</ul>

<!-- Highlight no campo com erro -->
<input :class="['input', { erro: erros.some(e => e.field === 'titulo') }]" />
```

### Erros do banco de dados (Prisma)

Além da validação explícita, erros do Prisma são capturados pelo error handler global e retornam no mesmo formato:

| Código | Significado | Exemplo `fields` |
|--------|-------------|------------------|
| `P2002` | Registro duplicado | `[{ field: "email", message: "Já existe um registro com este email" }]` |
| `P2003` | Chave estrangeira inválida | `[{ field: "unidade_id", message: "Valor referenciado não encontrado para unidade_id" }]` |
| `P2025` | Registro não encontrado | `statusCode: 404`, sem `fields` |

### Validações por entidade

| Entidade | Campos obrigatórios | Tipos |
|----------|-------------------|-------|
| posts | `titulo` (string) | `ativo`, `destaque` → boolean; `unidade_ids` → array de IDs |
| professores | `nome` (string), `unidade_id` (string) | `ativo` → boolean |
| eventos | `titulo` (string) | `ativo`, `destaque` → boolean; `data_inicio`, `data_fim` → date; `unidade_ids` → array de IDs |
| depoimentos | `conteudo` (string), `autor` (string) | — |
| unidades | `nome` (string) | — |

Campos não obrigatórios são ignorados se ausentes. Se presentes, o tipo é validado.

---

## Variáveis de ambiente (.env)

```
DATABASE_URL        # Conexão Postgres (transaction pooler, porta 6543)
DIRECT_URL          # Conexão direta (migrations, porta 5432)
SUPABASE_URL        # URL do projeto Supabase
SUPABASE_SECRET_KEY # Service role key (valida JWTs)
```

---

## Adicionar uma nova entidade

1. Criar model no `prisma/schema.prisma`
2. `npx prisma migrate dev --name <nome>` (cria migration + gera client)
3. Criar pastas:
   - `server/api/public/<entidade>/` → `index.get.ts`, `[id].get.ts`
   - `server/api/admin/<entidade>/` → CRUD completo
4. Seguir o padrão de handler:
   ```ts
   import { prisma } from '../../../utils/prisma'
   export default defineEventHandler(async (event) => {
     // lógica aqui
   })
   ```

---

## Segurança

### Achados da auditoria (07/2026)

Itens documentados para correção futura, priorizados por severidade:

#### 🔴 Crítico

| Item | Local | Risco | Correção |
|------|-------|-------|----------|
| **Falta verificação de role admin** | `server/middleware/admin-auth.ts:23-29` | Qualquer usuário logado no Supabase (inclusive via signUp público) tem acesso total a CRUD de todas as entidades | Adicionar tabela `admins` ou verificar claim `role` no JWT |
| **Zero rate limiting** | Nenhuma rota | Atacante pode fazer scraping em massa ou DoS sem restrição | Implementar rate limiting (ex: `h3-rate-limit` ou Nitro route rules) |

#### 🟠 Alto

| Item | Local | Risco | Correção |
|------|-------|-------|----------|
| **Sem limite de payload em POST/PUT** | Todas as rotas usam `readBody(event)` sem verificar `content-length` | Body gigante pode causar DoS por esgotamento de memória (exceto upload, limitado a 5MB) | Validar `content-length` em middleware global |
| **Sem timeout no PrismaClient** | `server/utils/prisma.ts:8` | Query lenta pode travar o processo indefinidamente | Configurar `timeout` e `maxWait` no construtor |
| **Rotas públicas sem `select` explícito** | Todas as rotas em `server/api/public/` usam `findMany` sem `select` | Qualquer coluna adicionada no schema no futuro será automaticamente exposta na API pública | Adicionar `select: { ... }` com apenas os campos necessários |
| **Sem sanitização XSS em campos de texto** | `conteudo` (posts), `descricao` (eventos), `conteudo` (depoimentos) | Se o frontend renderizar com `v-html`, administrador pode injetar script persistente que atinge todos os visitantes | Sanitizar na saída ou usar DOMPurify no client |

#### 🟡 Médio

| Item | Local | Risco | Correção |
|------|-------|-------|----------|
| **Nome do modelo Prisma vaza em erros** | `server/utils/errors.ts:56` | Erro P2025 retorna `"Posts não encontrado(a)"` — ajuda atacante a mapear tabelas | Usar mensagens genéricas |
| **Nomes de coluna vazam em erros de unique constraint** | `server/utils/errors.ts:46-47` | Erro P2002 retorna `"Já existe um registro com este email"` — vaza nomes de coluna | Generalizar mensagem |
| **Path matching sem normalização** | `server/middleware/admin-auth.ts:11` | `startsWith('/api/admin')` sem normalizar path pode ser contornado com `//api/admin`, encoding, etc. | Normalizar path com `replace(/\/+/g, '/')` |
| **Validação de formato de email inexistente** | `server/utils/validation.ts:20` | Campo `email` de professor validado só como `string`, sem regex de email | Adicionar validação de formato de email |
| **Upload loga erro do Supabase** | `server/api/admin/upload.post.ts:43` | `console.error` pode vazar detalhes internos do bucket em logs de produção | Logar apenas mensagem genérica, sem o objeto de erro |

#### 🟢 Baixo

| Item | Local | Risco | Correção |
|------|-------|-------|----------|
| **Delete sem verificação prévia de existência** | `[id].delete.ts` em todas as entidades | Depende de erro P2025 do Prisma para retornar 404 — funcional, mas fluxo não-intencional | Verificar existência antes de deletar |

### Upload de imagens

- **Tipos permitidos:** JPEG, PNG, WebP, GIF (`server/api/admin/upload.post.ts:10`)
- **Tamanho máximo:** 5 MB (`server/api/admin/upload.post.ts:11`)
- **Validação feita antes do upload ao Supabase Storage:** tipo MIME e tamanho são verificados no handler (`upload.post.ts:19-29`)
- **Bucket:** `images` no Supabase Storage, sob path `uploads/<uuid>.<ext>`

---

## Comandos

```bash
npm run dev                  # Desenvolvimento (porta 3000)
npm run build                # Build produção → .output/
npm run preview              # Preview local do build
npx prisma generate          # Gerar client Prisma
npx prisma migrate dev       # Criar migration
npx prisma db push           # Sincronizar schema sem migration
```

---

## Arquitetura de produção

```
                        INTERNET
                            │
              ┌─────────────┴─────────────┐
              │       DNS / Domínios      │
              │                           │
              │  api.totem.com.br         │
              │  admin.totem.com.br       │
              │  escola.totem.com.br      │
              │  totem.com.br             │
              │  vestibular.totem.com.br  │
              │  vocacional.totem.com.br  │
              └──────────┬────────────────┘
                         │
              ┌──────────┴──────────────────┐
              │       Servidor Docker        │
              │                              │
              │  ┌──────────────────────┐   │
              │  │  Nginx (reverso)     │   │
              │  │  porta 80 / 443      │   │
              │  └──────┬───────────────┘   │
              │         │                    │
              │  ┌──────┴───────────────┐   │
              │  │  docker-compose      │   │
              │  │                     │   │
              │  │  api.totem.com.br   │   │
              │  │  → backend:3000     │   │
              │  │                     │   │
              │  │  admin.totem.com.br │   │
              │  │  → totem_admin:3000 │   │
              │  │                     │   │
              │  │  escola.totem.com.br│   │
              │  │  → colegios_web:3000│   │
              │  │                     │   │
              │  │  totem.com.br       │   │
              │  │  → totem_main:3000  │   │
              │  │                     │   │
              │  │  vestibular.totem   │   │
              │  │  → vestibulares:3000│   │
              │  │                     │   │
              │  │  vocacional.totem   │   │
              │  │  → vocacional:80    │   │
              │  └─────────────────────┘   │
              │                              │
              │  ┌──────────────────────┐   │
              │  │  Supabase (externo)  │   │
              │  │  Auth + Postgres     │   │
              │  └──────────────────────┘   │
              └─────────────────────────────┘
```

### Como cada frontend consome a API

Cada projeto Nuxt precisa de:

**1. `.env` com a URL da API:**
```
API_BASE_URL=https://api.totem.com.br
```

**2. `nuxt.config.ts` com runtimeConfig:**
```ts
runtimeConfig: {
  public: { apiBaseUrl: process.env.API_BASE_URL }
}
```

**3. Composables para consumir a API:**

```ts
// app/composables/useApiPublic.ts — para sites públicos (sem auth)
export function useApiPublic() {
  const config = useRuntimeConfig()
  return $fetch.create({ baseURL: config.public.apiBaseUrl + '/api/public' })
}

// app/composables/useApiAdmin.ts — para admin (com JWT)
export function useApiAdmin() {
  const config = useRuntimeConfig()
  const session = useAuthSession()
  return $fetch.create({
    baseURL: config.public.apiBaseUrl + '/api/admin',
    onRequest({ options }) {
      options.headers = {
        ...options.headers,
        Authorization: `Bearer ${session.value?.access_token ?? ''}`,
      }
    },
  })
}
```

**4. Uso em páginas:**
```ts
const api = useApiPublic()
const professores = await api('/professores')
const eventos = await api('/eventos')
const posts = await api('/posts')
```

Cada frontend pede **só o que precisa**. A API não filtra por projeto — cada um chama as rotas que fazem sentido pra ele.

---

## Checklist de produção

### Backend

| # | Item | Status | Detalhes |
|---|------|--------|----------|
| 1 | Role check em admin-auth | ❌ Falta | Qualquer usuário Supabase acessa CRUD admin. Ver seção Segurança |
| 2 | Rate limiting | ❌ Falta | Nenhuma rota tem limite. Ver seção Segurança |
| 3 | Payload limit em POST/PUT | ❌ Falta | Apenas upload tem limite (5MB). Ver seção Segurança |
| 4 | Timeout no PrismaClient | ❌ Falta | `prisma.ts` sem `timeout`/`maxWait`. Ver seção Segurança |
| 5 | `select` explícito nas rotas públicas | ❌ Falta | Todas usam `findMany` sem `select`. Ver seção Segurança |
| 6 | Sanitização XSS em campos de texto | ❌ Falta | `conteudo`, `descricao` salvos sem limpeza. Ver seção Segurança |
| 7 | Nomes de modelo/coluna vazam em erros | ❌ Falta | `parsePrismaError` expõe nomes internos. Ver seção Segurança |
| 8 | Path normalization em admin-auth | ❌ Falta | `startsWith` sem normalizar path. Ver seção Segurança |
| 9 | Validação de formato de email | ❌ Falta | Apenas tipo `string`, sem regex |
| 10 | `NODE_ENV=production` | ✅ Pronto | `Dockerfile` já seta |
| 11 | `.env` no `.dockerignore` | ✅ Pronto | Excluído no build da imagem |
| 12 | Error handler sem stack trace | ✅ Pronto | Erros 500 viram "Erro interno do servidor" |
| 13 | Health check endpoint | ❌ Falta | Não existe `GET /api/health` |
| 14 | CORS com origins de produção | ⚠️ Parcial | Lista contém `localhost` — remover antes do deploy |
| 15 | Migrations automatizadas no startup | ❌ Falta | `npm run migrate:deploy` não roda no `Dockerfile` |
| 16 | Logging estruturado | ❌ Falta | Só `console.error` — sem winston/pino |
| 17 | Monitoramento de erros | ❌ Falta | Sem Sentry, OpenTelemetry ou similar |

### Infraestrutura (raiz do repositório)

| # | Item | Status | Detalhes |
|---|------|--------|----------|
| 1 | `docker-compose.yml` | ⚠️ Vazio | Arquivo existe mas está vazio — precisa definir todos os serviços |
| 2 | `nginx.conf` | ❌ Falta | Precisa criar para rotear cada domínio ao container correto |
| 3 | `.env.example` na raiz | ⚠️ Desatualizado | Só tem `SUPABASE_URL`/`SUPABASE_KEY` — falta `API_BASE_URL`, `DATABASE_URL`, etc. |
| 4 | SSL/TLS (certbot/Let's Encrypt) | ❌ Falta | Nginx precisa de certificado para HTTPS |
| 5 | Network isolation (Docker networks) | ❌ Falta | Container devem estar na mesma rede Docker |

### Frontends — consumo da API

Cada frontend precisa de 4 coisas para consumir a API real:

1. **`.env`** com `API_BASE_URL` apontando para produção
2. **`nuxt.config.ts`** com `runtimeConfig.public.apiBaseUrl`
3. **Composable** `useApiPublic.ts` (chamadas GET públicas)
4. **Páginas** trocarem dados mockados por chamadas reais à API

---

#### totem_admin

| Item | Status |
|------|--------|
| `.env` com `API_BASE_URL` | ✅ Existe (aponta `localhost:3000` — trocar para produção) |
| `runtimeConfig.public.apiBaseUrl` | ✅ Configurado |
| `useApiAdmin.ts` | ✅ Existe |
| Supabase auth config | ✅ `useSupabase.ts` + `useAuth.ts` prontos |
| Precisa de servidor Nitro | ✅ Nuxt 4 — `Dockerfile` pronto |

---

#### totem_colegios_web

| Item | Status |
|------|--------|
| `.env` com `API_BASE_URL` | ❌ `.env.example` existe mas com `SUPABASE_URL`/`SUPABASE_ANON_KEY` — não tem `API_BASE_URL` |
| `runtimeConfig.public.apiBaseUrl` | ❌ `nuxt.config.ts` não tem `runtimeConfig` |
| `useApiPublic.ts` | ❌ `app/composables/` está vazio (só `.gitkeep`) |
| Páginas usam dados mockados? | Sim — `app/data/totem.js` tem dados fixos. Blog (`pages/blog.vue`) usa dados mockados |
| `Dockerfile` | ✅ Pronto (Nuxt 4) |

**O que fazer:**
```ts
// nuxt.config.ts — adicionar:
runtimeConfig: {
  public: { apiBaseUrl: process.env.API_BASE_URL }
}
```

```ts
// app/composables/useApiPublic.ts — criar:
export function useApiPublic() {
  const config = useRuntimeConfig()
  return $fetch.create({ baseURL: config.public.apiBaseUrl + '/api/public' })
}
```

```env
# .env — criar:
API_BASE_URL=https://api.totem.com.br
```

---

#### totem_main

| Item | Status |
|------|--------|
| `.env` | ❌ Não existe |
| `runtimeConfig.public.apiBaseUrl` | ❌ `nuxt.config.ts` não tem `runtimeConfig` |
| `useApiPublic.ts` | ❌ `app/composables/` só tem `useAnchorsMenu.ts`, `useNavigation.ts`, `usePosts.ts` (este último usa mock: `data/posts.mock.ts`) |
| Páginas usam dados mockados? | Sim — `usePosts.ts` importa de `data/posts.mock.ts` |
| `Dockerfile` | ✅ Pronto (Nuxt 4) |

**O que fazer:**
```ts
// nuxt.config.ts — adicionar:
runtimeConfig: {
  public: { apiBaseUrl: process.env.API_BASE_URL }
}
```

```ts
// app/composables/useApiPublic.ts — criar:
export function useApiPublic() {
  const config = useRuntimeConfig()
  return $fetch.create({ baseURL: config.public.apiBaseUrl + '/api/public' })
}
```

```env
# .env — criar:
API_BASE_URL=https://api.totem.com.br
```

---

#### totem_vestibulares_web

| Item | Status |
|------|--------|
| `.env` | ❌ Não existe |
| `runtimeConfig.public.apiBaseUrl` | ❌ `nuxt.config.ts` não tem `runtimeConfig` |
| `useApiPublic.ts` | ❌ `app/composables/` só tem `useAnchorsMenu.ts`, `useNavigation.ts` |
| Páginas usam dados mockados? | Provavelmente (dados fixos nos componentes) |
| `Dockerfile` | ✅ Pronto (Nuxt 4) |

**O que fazer:**
```ts
// nuxt.config.ts — adicionar:
runtimeConfig: {
  public: { apiBaseUrl: process.env.API_BASE_URL }
}
```

```ts
// app/composables/useApiPublic.ts — criar:
export function useApiPublic() {
  const config = useRuntimeConfig()
  return $fetch.create({ baseURL: config.public.apiBaseUrl + '/api/public' })
}
```

```env
# .env — criar:
API_BASE_URL=https://api.totem.com.br
```

---

#### totem_vocacional

| Item | Status |
|------|--------|
| `.env` | ❌ Não existe |
| `VITE_API_BASE_URL` | ❌ `vite.config.ts` não define |
| Serviços chamam API? | `src/services/` tem `AnalysisService.ts`, `QuestionsService.ts`, `ResponseService.ts`, `TesteStorageService.ts`, `UsuarioService.ts` — usam dados mockados ou localStorage |
| `Dockerfile` | ✅ Pronto (Nginx para arquivos estáticos) |

**O que fazer:**
```env
# .env — criar:
VITE_API_BASE_URL=https://api.totem.com.br
```

```ts
// src/services/*.ts — substituir dados mockados por fetch à API:
const api = `${import.meta.env.VITE_API_BASE_URL}/api/public`
const resposta = await fetch(`${api}/professores`).then(r => r.json())
```

---

### Ordem recomendada de deploy

```
1º ─ Backend (API)
    ├── Corrigir itens de segurança (role check, rate limit, etc.)
    ├── Rodar migrations pendentes: npx prisma migrate deploy
    ├── docker build -t totem-backend ./backend
    └── docker run -p 3000:3000 --env-file ./backend/.env totem-backend

2º ─ Frontends (qualquer ordem)
    ├── Configurar .env + runtimeConfig + useApiPublic
    ├── Trocar dados mockados por chamadas à API
    ├── docker build -t totem-<projeto> ./<projeto>
    └── docker run -p <porta>:3000 totem-<projeto>

3º ─ Infraestrutura
    ├── Preencher docker-compose.yml com todos os serviços
    ├── Criar nginx.conf com roteamento por domínio
    ├── Configurar SSL (certbot / Let's Encrypt)
    └── docker-compose up -d
```
