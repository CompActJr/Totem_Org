import { prisma } from '../../../utils/prisma'

export default defineEventHandler(async (event) => {
  const id = BigInt(getRouterParam(event, 'id')!)

  const professor = await prisma.professores.findUnique({
    where: { id },
    include: {
      unidades: true,
    },
  })

  if (!professor) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Professor não encontrado',
    })
  }

  return professor
})