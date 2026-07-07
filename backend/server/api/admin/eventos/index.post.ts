import { prisma } from '../../../utils/prisma'
import { validar } from '../../../utils/validation'
import { throwBadRequest } from '../../../utils/errors'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const erros = validar('eventos', body)
  if (erros.length) throwBadRequest('Dados inválidos', erros)

  const evento = await prisma.eventos.create({
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
      ativo: body.ativo ?? true,
      destaque: body.destaque ?? false,
      evento_unidade: body.unidade_ids?.length
        ? { create: body.unidade_ids.map((id: string) => ({ unidade_id: BigInt(id) })) }
        : undefined,
    },
    include: { evento_unidade: { include: { unidades: true } } },
  })

  return evento
})
