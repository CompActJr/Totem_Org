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

## Fluxo de requisição via email usando nodeemail no backend

Como acontece uma solicitação?
1. O usuário preenche o formulário no Nuxt.
2. O Nuxt realiza um POST /api/emails/matricula.
3. O Fastify recebe os dados e realiza a validação.
4. O Nodemailer estabelece uma conexão com o servidor SMTP via tcp na porta 543.
5. O tráfego sai do container pela rede Docker e pela interface de rede da EC2.
6. O servidor SMTP recebe a conexão na porta 587.
7. O servidor responde pela conexão já estabelecida e inicia o processo de entrega.
6. A API retorna uma resposta HTTP ao frontend.

Principais componentes
Componente	Responsabilidade
Nodemailer	Cliente SMTP que roda no seu Node.js.
SMTP Server	Servidor responsável por aceitar e encaminhar mensagens.
SMTP Host	Endereço DNS do servidor SMTP, por exemplo smtp.exemplo.com.
SMTP Port	Porta TCP utilizada na conexão, normalmente 465 ou 587.
TLS	Criptografa a comunicação entre sua API e o servidor SMTP.
SMTP AUTH	Autentica sua aplicação utilizando credenciais.
DNS MX	Indica quais servidores recebem e-mails de determinado domínio.
SPF, DKIM e DMARC	Mecanismos de autenticação e política que ajudam a evitar falsificação de remetentes.

Confira os apontamentos DNS exigidos para esse serviço, especialmente MX, SPF, DKIM e DMARC, quando disponibilizados.

# Transportador SMPT no backend

É um objeto que encapsula as configurações e os mecanismos necessários para enviar mensagens.
O método createTransport() não envia um e-mail imediatamente. Ele cria um objeto configurado para estabelecer conexões SMTP quando necessário.

Podemos verificar a conexão:
await transporter.verify()

Observe três propriedades importantes:
- from: o remetente autorizado pelo seu provedor SMTP.
- to: o destinatário da mensagem.
- replyTo: o endereço que receberá a resposta quando a empresa clicar em "Responder".
O replyTo é especialmente útil em formulários de contato, pois permite responder diretamente ao usuário sem falsificar o remetente.

## integrando o email no backend

Arquivo composables/api/useEmail.ts:

## Padrao .env no backend

em /backend/src/config/env.ts há um parser de todas as variaveis de ambiente usando zod