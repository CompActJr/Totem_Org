import { prisma } from '../../../utils/prisma'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const page = Math.max(1, Number(query.page) || 1)
  const limit = Math.min(100, Math.max(1, Number(query.limit) || 20))
  const skip = (page - 1) * limit

  const where: Record<string, unknown> = {}
  if (query.categoria) where.categoria = query.categoria
  if (query.ativo !== undefined) where.ativo = query.ativo === 'true'

  const [data, total] = await Promise.all([
    prisma.eventos.findMany({
      where,
      include: { evento_unidade: { include: { unidades: true } } },
      orderBy: { data_inicio: 'asc' },
      skip,
      take: limit,
    }),
    prisma.eventos.count({ where }),
  ])

  return { data, total, page, limit }
})
