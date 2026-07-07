import { prisma } from '../../../utils/prisma'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const where: Record<string, unknown> = {}
  if (query.categoria) where.categoria = query.categoria
  if (query.ativo !== undefined) where.ativo = query.ativo === 'true'
  if (query.destaque !== undefined) where.destaque = query.destaque === 'true'

  const eventos = await prisma.eventos.findMany({
    where,
    include: { evento_unidade: { include: { unidades: true } } },
    orderBy: { data_inicio: 'asc' },
  })

  return eventos
})
