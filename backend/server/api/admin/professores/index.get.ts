import { prisma } from '../../../utils/prisma'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const page = Math.max(1, Number(query.page) || 1)
  const limit = Math.min(100, Math.max(1, Number(query.limit) || 20))
  const skip = (page - 1) * limit

  const where: Record<string, unknown> = {}

  if (query.ativo !== undefined) where.ativo = query.ativo === 'true'
  if (query.disciplina) where.disciplina = query.disciplina
  if (query.unidade_id) where.unidade_id = BigInt(query.unidade_id as string)

  const [data, total] = await Promise.all([
    prisma.professores.findMany({
      where,
      include: {
        unidades: true,
      },
      orderBy: {
        nome: 'asc',
      },
      skip,
      take: limit,
    }),
    prisma.professores.count({ where }),
  ])

  return { data, total, page, limit }
})