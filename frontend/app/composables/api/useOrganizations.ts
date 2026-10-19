// composables/useOrganizations.ts
import type { Organization } from '~/types/organizations.types'

export function useOrganizations(slug: MaybeRefOrGetter<string>) {
  const config = useRuntimeConfig()

  // indica se o código atual está sendo executado no servidor.
  // Servidor: vai direto no container da API. Navegador: passa pelo nginx em /api
  const baseURL = import.meta.server
    ? String(config.apiBaseInternal)
    : String(config.public.apiBase)

  return useFetch<Organization>(() => `/units/${toValue(slug)}`, {
    baseURL,
    timeout: 5_000,
  })
}