import { getBearerAuthHeaders } from '../../../utils/auth'
import { idParam, updateVideoSchema } from '~~/shared/videos'

export default defineEventHandler(async (event) => {
  const id = idParam().safeParse(getRouterParam(event, 'id'))
  if (!id.success) {
    throw createError({ statusCode: 400, statusMessage: 'O ID precisa ser um número válido.' })
  }

  const body = (await readValidatedBody(event, updateVideoSchema.safeParse)).data
  if (!body) {
    throw createError({ statusCode: 400, statusMessage: 'Dados do vídeo inválidos.' })
  }

  const headers = getBearerAuthHeaders(event)
  const config = useRuntimeConfig()
  const baseURL = String(config.apiBaseInternal).replace(/\/$/, '')

  try {
    return await $fetch(`${baseURL}/videos/${id.data}`, { method: 'PUT', headers, body })
  } catch (error: unknown) {
    if (error && typeof error === 'object' && 'statusCode' in error) {
      const fetchError = error as { statusCode?: number; statusMessage?: string }
      throw createError({ statusCode: fetchError.statusCode || 502, statusMessage: fetchError.statusMessage || 'Falha ao alterar o vídeo.' })
    }
    throw createError({ statusCode: 503, statusMessage: 'Serviço de vídeos indisponível.' })
  }
})
