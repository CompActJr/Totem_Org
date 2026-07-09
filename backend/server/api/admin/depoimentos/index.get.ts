import { prisma } from '../../../utils/prisma'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const page = Math.max(1, Number(query.page) || 1)
  const limit = Math.min(100, Math.max(1, Number(query.limit) || 20))
  const skip = (page - 1) * limit

  const where: Record<string, unknown> = {}
  if (query.categoria) where.categoria = query.categoria

  const [data, total] = await Promise.all([
    prisma.depoimentos.findMany({
      where,
      orderBy: { created_at: 'desc' },
      skip,
      take: limit,
    }),
    prisma.depoimentos.count({ where }),
  ])

  return { data, total, page, limit }
})
