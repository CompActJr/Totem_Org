import {
  authRequestSchema,
  AuthResponse,
  type AuthBackendRequest,
} from '../../shared/auth'
import { setAuthCookie } from '../utils/auth'

export default defineEventHandler(async (event) => {
  const body = (await readValidatedBody(event, authRequestSchema.safeParse)).data
  const config = useRuntimeConfig()
  const baseURL = String(config.apiBaseInternal).replace(/\/$/, '')

  if(!body){
    throw createError({
      statusCode: 401,
      statusMessage: 'parametros inválidos.',
    })
  }

  const backendRequest: AuthBackendRequest = {
    user: body.email,
    password: body.password,
  }

  try {
    const response = await $fetch<AuthResponse>(`${baseURL}/auth`, {
      method: 'POST',
      body: backendRequest,
    })

    setAuthCookie(event, response.jwt, response.expiration)
    return response
    
  } catch (error: unknown) {
    if (error && typeof error === 'object' && 'statusCode' in error) {
      const fetchError = error as { statusCode?: number; statusMessage?: string }

      throw createError({
        statusCode: fetchError.statusCode || 401,
        statusMessage: fetchError.statusMessage || 'Credenciais inválidas.',
      })
    }

    throw createError({
      statusCode: 503,
      statusMessage: 'Serviço de autenticação indisponível.',
    })
  }
})
