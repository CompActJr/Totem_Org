import { galleryDeleteResponseSchema, galleryIdParamSchema } from '~~/shared/galeria'
import { getBearerAuthHeaders } from '../../utils/auth'

export default defineEventHandler(async (event) => {
  const params = galleryIdParamSchema.safeParse({ id: getRouterParam(event, 'id') })
  if (!params.success) {
    throw createError({ statusCode: 400, statusMessage: 'O ID precisa ser um ObjectId válido.' })
  }

  const config = useRuntimeConfig()
  const baseURL = String(config.apiBaseInternal).replace(/\/$/, '')
  const response = await $fetch(`${baseURL}/galeria/${params.data.id}`, {
    method: 'DELETE',
    headers: getBearerAuthHeaders(event),
  })

  return galleryDeleteResponseSchema.parse(response)
})
