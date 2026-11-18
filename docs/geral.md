## Backend: contador Mongo

- A coleção `counters` armazena o último valor de cada sequência e é usada por
  `getNextSequence` em `backend/src/utils/fastifyMongoService.ts`.
- O contador não deve ficar em uma migração isolada; ele precisa ser atualizado
  no mesmo momento em que os dados iniciais forem inseridos.
- Em qualquer seed/migração que insira registros com `_id` sequencial, use a
  mesma lógica de atualização do máximo da sequência para manter `orgs`,
  `posts`, `professores`, `panoramas`, `depoimentos`, `atividades`, `turmas`,
  `cursos` e `faqs` consistentes.
- A convenção é: se o documento da sequência ainda não existir, criar com
  `insertOne({ _id: ..., seq: valor })`; se já existir, apenas atualizá-lo quando
  o novo valor for maior.

## Frontend: buscar unidade pela api e cache de dados

- Composable: frontend/app/composables/api/useOrganizations.ts
- requisição usando useFetch do nuxt e controle de cache para navegar entre componentes que utilizem a mesma key e evitar chamadas independentes
- key: identifica exclusivamente cada organização.
- dedupe: 'defer': se já existir uma requisição em andamento com a mesma chave, aguarda seu resultado em vez de iniciar outra.

- Reutilizando dados com useNuxtData
- O Nuxt também possui um composable chamado useNuxtData, que permite recuperar os dados armazenados por uma chave específica ex: useNuxtData<Organization>(key)

- no entanto eu manteria a responsabilidade do cache centralizada no composable.

## Fluxo de requisição via email

O fluxo ideal é:
1. O usuário preenche o formulário de matrícula.
2. O frontend Nuxt valida os dados e envia uma requisição HTTP para sua API.
3. O backend valida novamente os dados.
4. O backend utiliza um provedor SMTP ou uma API de e-mail para enviar a mensagem.
5. O responsável (rh@empresa.com) recebe o e-mail.
6. O endereço informado pelo usuário recebe uma cópia da confirmação.