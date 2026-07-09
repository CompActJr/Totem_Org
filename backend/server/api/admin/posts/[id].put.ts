import { prisma } from '../../../utils/prisma'
import { validar } from '../../../utils/validation'
import { throwBadRequest } from '../../../utils/errors'

export default defineEventHandler(async (event) => {
  const id = BigInt(getRouterParam(event, 'id')!)
  const body = await readBody(event)

  const erros = validar('posts', body)
  if (erros.length) throwBadRequest('Dados inválidos', erros)

  const post = await prisma.$transaction(async (tx) => {
    if (body.unidade_ids) {
      await tx.post_unidade.deleteMany({ where: { post_id: id } })
      if (body.unidade_ids.length) {
        await tx.post_unidade.createMany({
          data: body.unidade_ids.map((uid: string) => ({ post_id: id, unidade_id: BigInt(uid) })),
        })
      }
    }

    return tx.posts.update({
      where: { id },
      data: {
        titulo: body.titulo,
        resumo: body.resumo,
        conteudo: body.conteudo,
        imagem_url: body.imagem_url,
        autor: body.autor,
        categoria: body.categoria,
        ativo: body.ativo,
        destaque: body.destaque,
      },
      include: { post_unidade: { include: { unidades: true } } },
    })
  })

  return post
})
