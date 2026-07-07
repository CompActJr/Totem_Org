import { prisma } from '../../../utils/prisma'

export default defineEventHandler(async (event) => {
  const id = BigInt(getRouterParam(event, 'id')!)

  await prisma.posts.delete({ where: { id } })

  return { success: true }
})
