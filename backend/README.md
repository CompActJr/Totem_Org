# Backend Totem

API REST construída com Fastify, TypeScript e MongoDB.

## Executar localmente

1. Instale as dependências:

   ```bash
   npm ci
   ```

2. Copie `.env.example` para `.env` e preencha, no mínimo, `MONGO_URL` e
   `JWT_SECRET`. Use uma string forte e mantenha o arquivo `.env` fora do Git.

3. Inicie o servidor:

   ```bash
   npm run dev
   ```

O servidor local escuta em `http://localhost:9000`. A porta e o host estão
definidos atualmente em `src/server.ts`; `PORT` e `HOST` do `.env` não são
usados por esse ponto de entrada.

## Publicar na Vercel

O servidor local (`src/server.ts`) chama `listen()` e não é o ponto de entrada
de uma função serverless. Para publicar o Fastify na Vercel, crie os dois
arquivos abaixo na raiz de `backend/` antes de fazer o deploy.

### 1. Criar um handler para as funções Vercel

Crie `backend/api/[...path].ts`:

```ts
import type { IncomingMessage, ServerResponse } from "node:http";
import { buildApp } from "../src/app.js";

const appPromise = buildApp();

export default async function handler(
  req: IncomingMessage,
  res: ServerResponse,
) {
  const app = await appPromise;
  await app.ready();

  // O rewrite abaixo encaminha todos os caminhos pelo prefixo interno /api.
  if (req.url?.startsWith("/api/")) {
    req.url = req.url.slice("/api".length);
  }

  app.server.emit("request", req, res);
}
```

`buildApp()` registra os plugins e as rotas sem abrir uma porta. A instância é
reutilizada durante a vida da função. Não use `src/server.ts` como handler da
Vercel.

### 2. Encaminhar as rotas para o handler

Crie `backend/vercel.json`:

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/api"
    }
  ]
}
```

O rewrite encaminha `/health`, `/docs` e as rotas `/api/...` para a função; o
handler remove o prefixo interno antes de entregar a requisição ao Fastify.

### 3. Configurar o projeto e as variáveis na Vercel

1. Importe o repositório na Vercel e selecione `backend` como **Root Directory**.
2. Use `npm ci` para instalar as dependências e `npm run build` como Build
   Command. Não configure um Output Directory estático.
3. Em **Settings → Environment Variables**, configure as variáveis abaixo para
   cada ambiente que usará o deploy (Production, Preview ou Development):

   | Variável | Valor |
   | --- | --- |
   | `MONGO_URL` | URI de conexão do MongoDB, incluindo credenciais e nome do banco. |
   | `JWT_SECRET` | Segredo forte e aleatório para assinar os tokens JWT. |
   | `NODE_PRODUCTION` | `true`, para ativar a lista de origens CORS permitidas. |
   | `ALLOWED_ORIGINS` | Origens exatas do frontend, separadas por vírgula, sem caminhos. Ex.: `https://www.exemplo.com,https://admin.exemplo.com`. |

   Não publique credenciais no Git nem use o `.env.example` como arquivo de
   produção. Restrinja o usuário e as permissões do MongoDB ao necessário para a
   aplicação; configure o acesso de rede do banco para aceitar conexões da
   Vercel conforme as opções disponíveis no provedor do MongoDB.

4. Faça o deploy. A cada alteração nas variáveis de ambiente, faça um novo
   deploy para que as funções usem os valores atualizados.

> `PORT` e `HOST` não são necessários para a função serverless: a Vercel
> gerencia a porta HTTP. O handler acima também não executa o `ping` feito pelo
> `src/server.ts` no startup. O endpoint `/health` verifica a resposta HTTP da
> aplicação, não a conectividade com o MongoDB.

## Configurar um subdomínio no DNS

1. No projeto da Vercel, abra **Settings → Domains** e adicione, por exemplo,
   `api.exemplo.com`.
2. No painel do provedor DNS, crie o registro indicado pela Vercel. Para um
   subdomínio, normalmente será um registro **CNAME**:

   | Tipo | Nome/Host | Destino/Target |
   | --- | --- | --- |
   | `CNAME` | `api` | O destino CNAME informado pela Vercel (comumente `cname.vercel-dns.com`). |

   Use o destino apresentado no painel da Vercel, pois ele pode variar conforme
   a configuração do domínio. Remova registros conflitantes para o mesmo host.
3. Aguarde a propagação e a validação do domínio na Vercel. Depois da validação,
   a Vercel provisiona HTTPS automaticamente.

Não inclua `https://` no valor do registro DNS. Depois que o domínio estiver
ativo, use os endereços HTTPS:

- Swagger UI: `https://api.exemplo.com/docs`
- Health check: `https://api.exemplo.com/health`
- Resposta esperada do health check: `{"hello":"world"}`

Para verificar:

```bash
curl -i https://api.exemplo.com/health
```

## Configurar o frontend Nuxt

As rotas de dados da API usam o prefixo `/api`; portanto, configure a URL base
com esse prefixo e sem `/` no final. `/docs` e `/health` ficam na raiz do
domínio, sem o prefixo `/api`.

No ambiente do frontend (por exemplo, em **Settings → Environment Variables**
do projeto frontend na Vercel), configure:

```dotenv
NUXT_PUBLIC_API_BASE=https://api.exemplo.com/api
NUXT_API_BASE_INTERNAL=https://api.exemplo.com/api
NUXT_NODE_PRODUCTION=true
```

- `NUXT_PUBLIC_API_BASE` é usada no navegador e fica disponível publicamente.
- `NUXT_API_BASE_INTERNAL` é usada durante o SSR do Nuxt. Se o frontend e o
  backend estiverem em redes privadas compatíveis, pode apontar para a URL
  interna do backend; caso contrário, use a URL HTTPS pública.
- `NUXT_NODE_PRODUCTION=true` habilita o modo de produção do frontend.

O Nuxt lê esses valores como configuração de runtime (`public.apiBase`,
`apiBaseInternal` e `nodeProduction`). Configure também `ALLOWED_ORIGINS` no
backend com a origem do site frontend, incluindo `https://` e sem caminho (por
exemplo, `https://www.exemplo.com`). Para mais de uma origem, separe os valores
com vírgulas. Após alterar as variáveis, faça novo deploy do frontend e do
backend, conforme aplicável.

## Rotas úteis

- `GET /health`: verifica se a API responde por HTTP.
- `/docs`: documentação interativa Swagger.
- As rotas de recursos da API usam `/api` (por exemplo, `/api/posts` e
  `/api/auth`).

## Migrações

Os scripts de migração estão disponíveis pelo `migrate-mongo`:

```bash
npm run migrate:status
npm run migrate:up
```

Execute migrações com a mesma `MONGO_URL` do ambiente de destino, usando um
ambiente controlado. Não execute `migrate:down` em produção sem avaliar o
impacto da reversão.
