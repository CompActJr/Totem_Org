import { meResponseSchema } from '../../shared/auth'
import { clearAuthCookie, getBearerAuthHeaders } from '../utils/auth'

export default defineEventHandler(async (event) => {
  const headers = getBearerAuthHeaders(event)
  const config = useRuntimeConfig()
  const baseURL = String(config.apiBaseInternal).replace(/\/$/, '')

  try {
    const rawResponse = await $fetch(`${baseURL}/me`, { headers })
    return meResponseSchema.parse(rawResponse)
  } catch (error: unknown) {
    if (error && typeof error === 'object' && 'statusCode' in error) {
      const fetchError = error as { statusCode?: number }

      if (fetchError.statusCode === 401) {
        clearAuthCookie(event)
        throw createError({
          statusCode: 401,
          statusMessage: 'Sessão inválida.',
        })
      }
    }

    throw createError({
      statusCode: 503,
      statusMessage: 'Serviço de autenticação indisponível.',
    })
  }
})