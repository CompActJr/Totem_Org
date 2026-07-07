import { prisma } from '../../../utils/prisma'

export default defineEventHandler(async (event) => {
  const id = BigInt(getRouterParam(event, 'id')!)

  const unidade = await prisma.unidades.findUnique({
    where: { id },
  })

  if (!unidade) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Unidade não encontrada',
    })
  }

  return unidade
})