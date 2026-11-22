import type { H3Event } from 'h3'

export const AUTH_COOKIE_NAME = 'auth_token'

export function getAuthToken(event: H3Event) {
  return getCookie(event, AUTH_COOKIE_NAME)
}

export function getBearerAuthHeaders(event: H3Event) {
  const token = getAuthToken(event)

  if (!token) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Não autenticado.',
    })
  }

  return { Authorization: `Bearer ${token}` }
}

export function setAuthCookie(event: H3Event, token: string, expiration: string) {
  const expirationDate = new Date(expiration)
  const fallbackMaxAge = 2 * 60 * 60
  const maxAge = Number.isNaN(expirationDate.getTime())
    ? fallbackMaxAge
    : Math.max(0, Math.floor((expirationDate.getTime() - Date.now()) / 1000))

  const config = useRuntimeConfig()

  setCookie(event, AUTH_COOKIE_NAME, token, {
    httpOnly: true,
    secure: Boolean(config.cookieSecure),
    sameSite: 'lax',
    path: '/',
    maxAge,
  })
}

export function clearAuthCookie(event: H3Event) {
  deleteCookie(event, AUTH_COOKIE_NAME, { path: '/' })
}
