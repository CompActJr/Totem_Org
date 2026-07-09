import { prisma } from '../../../utils/prisma'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const where: Record<string, unknown> = {}

  if (query.categoria) where.categoria = query.categoria
  if (query.ativo !== undefined) where.ativo = query.ativo === 'true'
  if (query.destaque !== undefined) where.destaque = query.destaque === 'true'

  const posts = await prisma.posts.findMany({
    where,
    include: {
      post_unidade: {
        include: {
          unidades: true,
        },
      },
    },
    orderBy: {
      created_at: 'desc',
    },
  })

  return posts
})