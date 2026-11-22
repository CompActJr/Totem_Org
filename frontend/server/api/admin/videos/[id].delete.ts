import { getBearerAuthHeaders } from '../../../utils/auth'
import { idParam } from '~~/shared/videos'

export default defineEventHandler(async (event) => {
  const id = idParam().safeParse(getRouterParam(event, 'id'))
  if (!id.success) {
    throw createError({ statusCode: 400, statusMessage: 'O ID precisa ser um número válido.' })
  }

  const headers = getBearerAuthHeaders(event)
  const config = useRuntimeConfig()
  const baseURL = String(config.apiBaseInternal).replace(/\/$/, '')

  try {
    return await $fetch(`${baseURL}/videos/${id.data}`, { method: 'DELETE', headers })
  } catch (error: unknown) {
    if (error && typeof error === 'object' && 'statusCode' in error) {
      const fetchError = error as { statusCode?: number; statusMessage?: string }
      throw createError({ statusCode: fetchError.statusCode || 502, statusMessage: fetchError.statusMessage || 'Falha ao excluir o vídeo.' })
    }
    throw createError({ statusCode: 503, statusMessage: 'Serviço de vídeos indisponível.' })
  }
})
