import { prisma } from '../../../utils/prisma'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const where: Record<string, unknown> = {}

  if (query.ativo !== undefined) where.ativo = query.ativo === 'true'
  if (query.disciplina) where.disciplina = query.disciplina
  if (query.unidade_id) where.unidade_id = BigInt(query.unidade_id as string)

  const professores = await prisma.professores.findMany({
    where,
    include: {
      unidades: true,
    },
    orderBy: {
      nome: 'asc',
    },
  })

  return professores
})