import { prisma } from '../../../utils/prisma'

export default defineEventHandler(async (event) => {
  const id = BigInt(getRouterParam(event, 'id')!)

  const depoimento = await prisma.depoimentos.findUnique({ where: { id } })

  if (!depoimento) {
    throw createError({ statusCode: 404, statusMessage: 'Depoimento não encontrado' })
  }

  return depoimento
})
