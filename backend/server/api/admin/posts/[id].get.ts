import { prisma } from '../../../utils/prisma'

export default defineEventHandler(async (event) => {
  const id = BigInt(getRouterParam(event, 'id')!)

  const post = await prisma.posts.findUnique({
    where: { id },
    include: { post_unidade: { include: { unidades: true } } },
  })

  if (!post) {
    throw createError({ statusCode: 404, statusMessage: 'Post não encontrado' })
  }

  return post
})
