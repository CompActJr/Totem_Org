import { prisma } from '../../../utils/prisma'

export default defineEventHandler(async (event) => {
  const id = BigInt(getRouterParam(event, 'id')!)

  const evento = await prisma.eventos.findUnique({
    where: { id },
    include: { evento_unidade: { include: { unidades: true } } },
  })

  if (!evento) {
    throw createError({ statusCode: 404, statusMessage: 'Evento não encontrado' })
  }

  return evento
})
