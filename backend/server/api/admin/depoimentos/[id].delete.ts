import { prisma } from '../../../utils/prisma'

export default defineEventHandler(async (event) => {
  const id = BigInt(getRouterParam(event, 'id')!)

  await prisma.depoimentos.delete({ where: { id } })

  return { success: true }
})
