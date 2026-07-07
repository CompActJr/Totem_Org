import { prisma } from '../../../utils/prisma'
import { validar } from '../../../utils/validation'
import { throwBadRequest } from '../../../utils/errors'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const erros = validar('posts', body)
  if (erros.length) throwBadRequest('Dados inválidos', erros)

  const post = await prisma.posts.create({
    data: {
      titulo: body.titulo,
      resumo: body.resumo,
      conteudo: body.conteudo,
      imagem_url: body.imagem_url,
      autor: body.autor,
      categoria: body.categoria,
      ativo: body.ativo ?? true,
      destaque: body.destaque ?? false,
      post_unidade: body.unidade_ids?.length
        ? { create: body.unidade_ids.map((id: string) => ({ unidade_id: BigInt(id) })) }
        : undefined,
    },
    include: { post_unidade: { include: { unidades: true } } },
  })

  return post
})
