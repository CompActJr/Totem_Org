```bash
npm init -y
npm install fastify
npm install -D typescript tsx @types/node
npm i fastify-plugin @fastify/mongodb
npm install @fastify/autoload
npm install migrate-mongo
npm install zod
```

```bash
src/
├── @types/          # Tipagens globais do TypeScript
├── app.ts           # Configuração e Build da instancia do Fastify (plugins, errorHandler) em memória
├── server.ts        # Ponto de entrada (Bootstrap / Listen)
├── config/          # Variáveis de ambiente (ex: Zod env)
├── plugins/         # Plugins globais (database, jwt, cors)
└── modules/         # Organização por domínio/recurso
    └── user/
        ├── user.controller.ts
        ├── user.service.ts
        ├── user.schema.ts     # Validação com Zod
        └── user.routes.ts     # Rotas encapsuladas como plugin
```

```bash
migrate-mongo init
npx migrate-mongo create create-users
migrations/
└── 20260929230000-create-users.js
```

Se você tiver dezenas de plugins e módulos e não quiser registrar um por um manualmente, a comunidade do Fastify criou o @fastify/autoload. Ele varre as suas pastas e registra tudo de forma automática respeitando a ordem correta.

Um arquivo env.ts (ou a pasta de ambientes) em projetos serve para centralizar, validar e tipar as variáveis de ambiente usando TypeScript, garantindo segurança e autocomcompletion

[docs](https://imasters.com.br/typescript/typescript-tipando-variaveis-de-ambiente-do-jeito-certo-com-ts)

process.env é o objeto global do Node que contém as variáveis de ambiente do processo.


