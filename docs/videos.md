# Implementação do CRUD de vídeos

## Visão geral

O Totem TV terá listagem pública e administração autenticada na página `/admin/totemtv`.

```text
/admin/totemtv
  -> useVideos() carrega GET /api/videos
  -> botão ou card abre a sidebar em modo create/edit
  -> POST/PUT/DELETE em /api/admin/videos
  -> proxy Nuxt lê o cookie HTTP-only e encaminha o Bearer ao Fastify
  -> listagem é atualizada e a sidebar é fechada
```

## Alterações previstas

- `backend/src/modules/videos/videos.schemas.ts`: validação de atualização parcial, com ao menos um campo.
- `backend/src/modules/videos/videos.service.ts` e `videos.routes.ts`: operação `PUT /api/videos/:id`, autenticada como criação e exclusão.
- `frontend/shared/videos.ts`: contrato único do vídeo, usando `_id` — o mesmo campo retornado pelo MongoDB — e tipos do editor.
- `frontend/server/api/admin/videos/`: proxies autenticados para criar, editar e excluir. O JWT nunca é exposto ao browser.
- `frontend/app/composables/api/useVideos.ts`: estado da sidebar, vídeo selecionado, mutations e tratamento de erro.
- `frontend/app/components/admin/VideoEditorSidebar.vue`: novo formulário lateral reutilizável para cadastro e edição, com exclusão confirmada somente no modo de edição.
- `frontend/app/pages/admin/totemtv.vue`: listagem administrativa, abertura da sidebar e ligação dos eventos de CRUD.

## Pontos críticos

- O vídeo selecionado é derivado de `videos` pelo `_id` guardado em memória. Ao clicar em um card não há uma segunda requisição para obter seus dados, seguindo o padrão de posts.
- A listagem pública e a administrativa devem usar `_id`; o campo anterior `id` não corresponde à resposta do backend.
- As mutations vão para as rotas internas `/api/admin/videos`, não diretamente ao Fastify. Assim o cookie `auth_token` continua HTTP-only e somente o servidor Nuxt cria o cabeçalho `Authorization`.
- Depois de criar, editar ou excluir, `refresh()` atualiza a lista antes de fechar a sidebar. Erros deixam o formulário aberto para correção.
- A URL é enviada como texto. A normalização para embed do YouTube continua sendo responsabilidade do componente público `Video.vue`; upload e hospedagem de arquivos não fazem parte deste escopo.
