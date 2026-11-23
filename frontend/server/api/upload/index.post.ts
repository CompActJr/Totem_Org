import { galleryItemSchema, uploadImageSchema } from '~~/shared/galeria'
import { getBearerAuthHeaders } from '../../utils/auth'

export default defineEventHandler(async (event) => {
  const body = (await readValidatedBody(event, uploadImageSchema.safeParse)).data
  if (!body) {
    throw createError({ statusCode: 400, statusMessage: 'Dados da imagem inválidos.' })
  }

  const config = useRuntimeConfig()
  const baseURL = String(config.apiBaseInternal).replace(/\/$/, '')
  const response = await $fetch(`${baseURL}/uploader`, {
    method: 'POST',
    headers: getBearerAuthHeaders(event),
    body,
  })

  return galleryItemSchema.parse(response)
})
