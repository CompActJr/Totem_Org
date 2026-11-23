import { galleryListQuerySchema, galleryListResponseSchema } from '~~/shared/galeria'
import { getBearerAuthHeaders } from '../../utils/auth'

export default defineEventHandler(async (event) => {
  const query = galleryListQuerySchema.safeParse(getQuery(event))
  if (!query.success) {
    throw createError({ statusCode: 400, statusMessage: 'Parâmetros de paginação inválidos.' })
  }

  const config = useRuntimeConfig()
  const baseURL = String(config.apiBaseInternal).replace(/\/$/, '')
  const response = await $fetch(`${baseURL}/galeria`, {
    headers: getBearerAuthHeaders(event),
    query: query.data,
  })

  return galleryListResponseSchema.parse(response)
})
