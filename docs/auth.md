# Autenticação administrativa

## Visão geral

O login usa o Nuxt como camada intermediária: o navegador envia as credenciais ao servidor Nuxt, que chama o Fastify e devolve um cookie HTTP seguro.

```text
Navegador -> POST /api/auth -> servidor Nuxt -> POST /api/auth -> Fastify
                                          <- { jwt, created, expiration } <-
Navegador <- Set-Cookie: auth_token=<jwt> <- servidor Nuxt
```

O backend valida o usuário em `backend/src/modules/auth/auth.service.ts`, compara a senha, assina o JWT com `@fastify/jwt` e aplica a política de expiração definida pelo plugin.

## Cookie HTTP

Cookie HTTP é um valor pequeno definido por `Set-Cookie` pelo servidor no seu cabeçalho e reenviado pelo navegador conforme o domínio e os atributos da sessão.

Atributo | Comportamento | Uso atual
---|---|---
`HttpOnly` | Impede acesso pelo JavaScript da página. | `auth_token` não pode ser usado por `document.cookie`.
`Secure` | Envia o cookie somente por HTTPS. | Controlado por `NUXT_COKKIE_SECURE=true`; use `false` apenas em localhost.
`SameSite=Lax` | Reduz envio em requisições cross-site. | Adequado ao mesmo domínio entre Nuxt e navegador.
`Path=/` | Define os caminhos onde o cookie é enviado. | Disponível em todas as rotas do site.
`Max-Age` | Define o tempo restante de vida em segundos. | Derivado de `expiration`; evita sessão além da expiração.

O cookie não é criptografado pelo navegador. `Secure` protege o transporte HTTPS; `HttpOnly` protege contra leitura via JavaScript. JWT continua sendo um valor assinável e não permite confiar apenas no conteúdo sem validação.

## Login atual

1. `login.vue` coleta email e senha em `AuthRequest`.
2. `useAuth.ts` envia `POST /api/auth` e controla `pending`, `success` e `error`.
3. `server/api/auth.post.ts` transforma email em `user`, envia ao backend e guarda o JWT em `auth_token`.
4. O Nuxt usa a URL interna em SSR e retorna a resposta ao navegador.

## Validação de sessão

1. O middleware global identifica rotas com `/admin`, exceto `/admin/login`.
2. Ele chama `GET /api/me`, reenviando o cookie durante SSR com `useRequestHeaders(['cookie'])`.
3. `server/api/me.get.ts` lê `auth_token` e chama o backend com `Authorization: Bearer <jwt>`.
4. O backend precisa validar o JWT com `fastify.authenticate` e retornar o usuário da claim `sub` ou seus dados públicos.

A implementação atual já possui os pontos 1 a 3, mas o backend ainda não oferece `/api/me`. Sem essa rota protegida, o middleware não consegue autenticar sessão real.

## Logout e falhas

O logout deve remover o mesmo nome e `Path=/` usado no login. `/api/me` deve limpar o cookie quando o JWT estiver ausente, inválido ou expirado. Falhas 401 devem redirecionar ao login; 503 deve indicar indisponibilidade sem apagar uma sessão potencialmente válida.

## Pendências críticas

- Registrar `/api/me` no backend com `onRequest: [fastify.authenticate]`.
- Validar `JWT_SECRET` no schema de ambiente; não aceitar segredo vazio.
- Confirmar que `NUXT_COKKIE_SECURE` está mapeado no runtime config do Nuxt.
- Centralizar o nome do cookie e da política de expiração para evitar divergências.
- Adicionar logout, testes de middleware e proteção CSRF para operações administrativas futuras.