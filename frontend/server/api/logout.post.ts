import { logoutResponseSchema } from '../../shared/auth'
import { clearAuthCookie, getAuthToken } from '../utils/auth'

export default defineEventHandler(async (event) => {
  if (!getAuthToken(event)) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Não autenticado.',
    })
  }

  clearAuthCookie(event)

  return logoutResponseSchema.parse({ success: true })
})
