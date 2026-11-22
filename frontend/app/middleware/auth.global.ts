// app/middleware/auth.global.ts
import { useAuthSession } from '~/composables/api/session'

export default defineNuxtRouteMiddleware(async (to) => {
  const isAdmin = to.path === '/admin' || to.path.startsWith('/admin/')
  if (!isAdmin || to.path === '/admin/login') return

  const session = useAuthSession()
  await session.fetchUser()

  if (session.isLoggedIn.value) return

  if (session.statusCode.value === 503) {
    throw createError({
      statusCode: 503,
      statusMessage: 'Serviço de autenticação indisponível.',
    })
  }

  return navigateTo('/admin/login')
})