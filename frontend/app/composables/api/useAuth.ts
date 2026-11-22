import { logoutResponseSchema, type AuthRequest, type AuthResponse } from '~~/shared/auth'
import { useAuthSession } from './session'

export function useAuth() {
  const pending = ref(false)
  const success = ref(false)
  const error = ref<string | null>(null)

  async function login(credentials: AuthRequest): Promise<boolean> {
    pending.value = true
    success.value = false
    error.value = null

    try {
      await $fetch<AuthResponse>('/api/auth', {
        method: 'POST',
        body: credentials,
      })

      const session = useAuthSession()
      await session.fetchUser()

      if (!session.isLoggedIn.value) {
        throw new Error('Falha ao carregar a sessão.')
      }

      success.value = true
      return true
    } catch (requestError: unknown) {
      const statusError = requestError as { statusMessage?: string }
      error.value = statusError.statusMessage || 'Falha ao autenticar.'
      return false
    } finally {
      pending.value = false
    }
  }

  async function logout(): Promise<boolean> {
    pending.value = true
    success.value = false
    error.value = null

    try {
      await $fetch('/api/logout', {
        method: 'POST',
      })

      useAuthSession().clear()
      success.value = true
      return true
      
    } catch (requestError: unknown) {
      const statusError = requestError as { statusMessage?: string }
      error.value = statusError.statusMessage || 'Falha ao encerrar a sessão.'
      return false
    } finally {
      pending.value = false
    }
  }

  return { login, logout, pending, success, error }
}