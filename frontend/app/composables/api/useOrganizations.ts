
import type { Organization, OrganizationType } from '~/types/organizations.types'

/**
 * @author Jonas
 * @param slug 
 * @param type 
 * @returns 
 */
export function useOrganizations(slug: MaybeRefOrGetter<string>, type: OrganizationType) {
  const config = useRuntimeConfig()

  const baseURL = import.meta.server
    ? String(config.apiBaseInternal || config.public.apiBase || 'http://localhost:9000/api')
    : String(config.public.apiBase || config.apiBaseInternal || 'http://localhost:9000/api')

  const key = computed(
    () => `organization:${toValue(type)}:${toValue(slug)}`
  )
                                                                                                                
  return useFetch<Organization>(
    () => `/units/${toValue(type)}/${toValue(slug)}`,
    {
      key,            
      baseURL,
      timeout: 5_000,
      dedupe: 'defer',
    }
  )
}
