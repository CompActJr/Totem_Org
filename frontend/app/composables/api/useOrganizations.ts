import type { Organization } from "~/types/organizations.types"

const apiBasePath = String(useRuntimeConfig().public.apiBasePath);

export function useOrganizations(slug: string) {

  return useFetch<Organization>(`/units/${slug}`, {
    baseURL: apiBasePath,
    timeout: 5_000,
    method: 'GET'
  })
}
