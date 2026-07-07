import { prisma } from '../../../utils/prisma'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const page = Math.max(1, Number(query.page) || 1)
  const limit = Math.min(100, Math.max(1, Number(query.limit) || 20))
  const skip = (page - 1) * limit

  const where: Record<string, unknown> = {}

  if (query.cidade) where.cidade = query.cidade
  if (query.estado) where.estado = query.estado
  if (query.nome) where.nome = query.nome

  const [data, total] = await Promise.all([
    prisma.unidades.findMany({
      where,
      orderBy: {
        nome: 'asc',
      },
      skip,
      take: limit,
    }),
    prisma.unidades.count({ where }),
  ])

  return { data, total, page, limit }
})