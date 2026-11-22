// app/composables/api/useSession.ts
import { meResponseSchema, type MeResponse } from '~~/shared/auth'

export function useAuthSession() {
  const user = useState<MeResponse | null>('session-user', () => null)
  const pending = ref(false)
  const error = ref<string | null>(null)
  const statusCode = ref<number | null>(null)

  async function fetchUser(): Promise<MeResponse | null> {
    pending.value = true
    error.value = null
    statusCode.value = null

    try {

      const response = await $fetch<MeResponse>('/api/me', {
        headers: useRequestHeaders(['cookie']),
      })

      user.value = response
      return response

    } catch (requestError: unknown) {

      const statusError = requestError as { statusCode?: number; statusMessage?: string }
      statusCode.value = statusError.statusCode ?? null
      user.value = null
      error.value = statusError.statusMessage || 'Sessão inválida.'
      return null
      
    } finally {
      pending.value = false
    }
  }

  function clear() {
    user.value = null
    error.value = null
    statusCode.value = null
  }

  const isLoggedIn = computed(() => user.value !== null)

  return { user, isLoggedIn, pending, error, statusCode, fetchUser, clear }
}