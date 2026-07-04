## Nitro

O **Nitro** é o servidor do Nuxt responsável por toda a execução do lado do servidor (Server Side). Ele é um runtime desenvolvido pela equipe do Nuxt que permite criar APIs, middlewares, acessar bancos de dados, consumir serviços externos e executar lógica de negócio sem a necessidade de criar um backend separado.

Diferente de um projeto Vue tradicional, onde é necessário criar uma API utilizando Express, Fastify ou Spring Boot, o Nuxt já disponibiliza um backend integrado através do Nitro.

Fluxo de funcionamento:

```text
Browser
    │
    ▼
Nuxt (Vue)
    │
    ▼
Nitro
    │
    ├── API
    ├── Middleware
    ├── Serviços
    └── Banco de Dados
```

### Principais funcionalidades

- Criação de APIs REST
- Renderização Server Side (SSR)
- Consumo de APIs externas
- Conexão com banco de dados
- Upload de arquivos
- Autenticação
- Middleware de servidor
- Cache
- Deploy para Node.js, Vercel, Netlify, Cloudflare Workers, Bun e outros ambientes

---

# Pasta Server e Backend

Toda lógica executada no servidor deve ficar dentro da pasta `server`.

```text
server/
│
├── api/
├── middleware/
├── plugins/
├── services/
├── repositories/
├── utils/
└── database/
```

Tudo que estiver dentro dessa pasta **não é enviado para o navegador**.

---

# Organização recomendada

```text
server/
│
├── api/
│   ├── auth/
│   ├── posts/
│   ├── users/
│   ├── upload/
│   └── categories/
│
├── services/
│   ├── PostService.ts
│   ├── UserService.ts
│   └── AuthService.ts
│
├── repositories/
│   ├── PostRepository.ts
│   └── UserRepository.ts
│
├── database/
│   └── prisma.ts
│
└── utils/
```

Esta organização segue uma arquitetura semelhante ao padrão utilizado em aplicações Spring Boot.

```
Controller
↓

Service

↓

Repository

↓

Database
```

---

# Criando um Endpoint

Todo arquivo dentro de `server/api` se torna automaticamente um endpoint HTTP.

Exemplo:

```text
server/api/posts/index.get.ts
```

```ts
export default defineEventHandler(async () => {
  return [
    {
      id: 1,
      title: "Primeiro Post"
    }
  ]
})
```

Endpoint gerado automaticamente:

```
GET /api/posts
```

---

## Endpoint POST

```text
server/api/posts/index.post.ts
```

```ts
export default defineEventHandler(async (event) => {

    const body = await readBody(event)

    return {
        sucesso: true,
        dados: body
    }

})
```

```
POST /api/posts
```

---

## Endpoint PUT

```text
server/api/posts/[id].put.ts
```

```ts
export default defineEventHandler(async (event) => {

    const id = getRouterParam(event, "id")

    return {
        id
    }

})
```

```
PUT /api/posts/15
```

---

## Endpoint DELETE

```text
server/api/posts/[id].delete.ts
```

```
DELETE /api/posts/15
```

---

# Convenção de nomenclatura

O Nitro utiliza o nome do arquivo para definir o método HTTP.

```
index.get.ts
```

↓

GET

---

```
index.post.ts
```

↓

POST

---

```
[id].put.ts
```

↓

PUT

---

```
[id].delete.ts
```

↓

DELETE

---

```
[id].patch.ts
```

↓

PATCH

---

# Rotas dinâmicas

Utilize colchetes para criar parâmetros.

```text
server/api/posts/[slug].get.ts
```

```
GET /api/posts/introducao-ao-nuxt
```

Obtendo o parâmetro:

```ts
const slug = getRouterParam(event, "slug")
```

---

# Consumindo uma API externa

O Nitro possui integração nativa com o `$fetch`.

Exemplo:

```ts
export default defineEventHandler(async () => {

    return await $fetch(
        "https://jsonplaceholder.typicode.com/posts"
    )

})
```

Neste caso:

```
Browser

↓

GET /api/posts

↓

Nitro

↓

API Externa

↓

Resposta
```

O navegador nunca acessa diretamente a API externa.

---

# Utilizando o Nitro como Backend for Frontend (BFF)

Uma arquitetura bastante utilizada consiste em utilizar o Nitro como intermediário entre o frontend e outro backend.

```
Browser

↓

Nuxt

↓

Nitro

↓

Spring Boot

↓

PostgreSQL
```

Exemplo:

```ts
export default defineEventHandler(async () => {

    return await $fetch(
        "https://api.meusistema.com/posts"
    )

})
```

Essa abordagem oferece diversas vantagens:

- Centralização das chamadas HTTP
- Esconder URLs internas
- Aplicar autenticação
- Cache
- Logging
- Tratamento de erros

---

# Conectando ao PostgreSQL

A maneira recomendada é utilizar um ORM.

A principal recomendação para projetos Nuxt é o Prisma.

Instalação:

```bash
npm install prisma @prisma/client
```

Inicialização:

```bash
npx prisma init
```

Estrutura criada:

```text
prisma/

schema.prisma
```

Exemplo de configuração:

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}
```

Arquivo `.env`

```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/blog"
```

---

# Criando uma conexão reutilizável

```text
server/database/prisma.ts
```

```ts
import { PrismaClient } from "@prisma/client"

export const prisma = new PrismaClient()
```

---

# Consultando dados

```ts
import { prisma } from "../database/prisma"

export default defineEventHandler(async () => {

    return await prisma.post.findMany()

})
```

---

# Criando Services

É recomendado manter toda regra de negócio em Services.

```text
server/services/PostService.ts
```

```ts
import { prisma } from "../database/prisma"

export class PostService {

    async listar() {
        return prisma.post.findMany()
    }

}
```

---

# Criando Repositories

```text
server/repositories/PostRepository.ts
```

```ts
import { prisma } from "../database/prisma"

export class PostRepository {

    async findAll() {
        return prisma.post.findMany()
    }

}
```

---

# Chamando um Service na API

```ts
import { PostService } from "../../services/PostService"

export default defineEventHandler(async () => {

    const service = new PostService()

    return await service.listar()

})
```

---

# Consumindo a API no Frontend

Utilize preferencialmente o `useFetch` para integração com SSR.

```ts
const { data } = await useFetch("/api/posts")
```

Para chamadas sob demanda, utilize:

```ts
const posts = await $fetch("/api/posts")
```

---

# Boas práticas

- Nunca acessar o banco diretamente nas páginas Vue.
- Centralizar regras de negócio em Services.
- Utilizar Repositories para acesso ao banco.
- Utilizar variáveis de ambiente para credenciais.
- Validar todos os dados recebidos antes de persistir.
- Organizar endpoints por domínio (posts, usuários, autenticação etc.).
- Utilizar `useFetch()` para SSR e `$fetch()` para chamadas iniciadas pelo usuário.
- Evitar lógica complexa diretamente nos arquivos da pasta `server/api`; eles devem apenas receber a requisição, chamar a camada de serviço e retornar a resposta.

---

# Arquitetura recomendada

```text
pages/
    │
    ▼
composables/
    │
    ▼
server/api/
    │
    ▼
services/
    │
    ▼
repositories/
    │
    ▼
Prisma
    │
    ▼
PostgreSQL
```