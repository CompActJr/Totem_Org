import { prisma } from '../../../utils/prisma'
import { validar } from '../../../utils/validation'
import { throwBadRequest } from '../../../utils/errors'

export default defineEventHandler(async (event) => {
  const id = BigInt(getRouterParam(event, 'id')!)
  const body = await readBody(event)

  const erros = validar('eventos', body)
  if (erros.length) throwBadRequest('Dados inválidos', erros)

  const evento = await prisma.$transaction(async (tx) => {
    if (body.unidade_ids) {
      await tx.evento_unidade.deleteMany({ where: { evento_id: id } })
      if (body.unidade_ids.length) {
        await tx.evento_unidade.createMany({
          data: body.unidade_ids.map((uid: string) => ({ evento_id: id, unidade_id: BigInt(uid) })),
        })
      }
    }

    return tx.eventos.update({
      where: { id },
      data: {
        titulo: body.titulo,
        descricao: body.descricao,
        data_inicio: body.data_inicio ? new Date(body.data_inicio) : undefined,
        data_fim: body.data_fim ? new Date(body.data_fim) : undefined,
        hora_inicio: body.hora_inicio ? new Date(body.hora_inicio) : undefined,
        hora_fim: body.hora_fim ? new Date(body.hora_fim) : undefined,
        local: body.local,
        imagem_url: body.imagem_url,
        categoria: body.categoria,
        ativo: body.ativo,
        destaque: body.destaque,
      },
      include: { evento_unidade: { include: { unidades: true } } },
    })
  })

  return evento
})
