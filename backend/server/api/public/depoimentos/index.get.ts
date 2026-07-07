import { prisma } from '../../../utils/prisma'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const where: Record<string, unknown> = {}
  if (query.categoria) where.categoria = query.categoria

  const depoimentos = await prisma.depoimentos.findMany({
    where,
    orderBy: { created_at: 'desc' },
  })

  return depoimentos
})
