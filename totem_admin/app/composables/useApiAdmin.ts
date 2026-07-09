import type { FetchOptions } from 'ofetch'

export function useApiAdmin() {
  const config = useRuntimeConfig()
  const session = useAuthSession()

  return $fetch.create({
    baseURL: `${config.public.apiBaseUrl}/api/admin`,
    onRequest({ options }: { options: FetchOptions }) {
      options.headers = {
        ...options.headers,
        Authorization: `Bearer ${session.value?.access_token ?? ''}`,
      }
    },
  })
}