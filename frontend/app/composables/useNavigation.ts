// composables/useNavigation.ts

import {
  cachoeiraDoSulRoutes, cruzAltaRoutes, santaMariaRoutes,
  colegiosRoutes, totemOnRoutes, vestibularesRoutes,
  mainRoutes
} from '~/data/menu'
import type { NavLink } from '~/types/navigation.types'

const menuByPrefix = [
  { prefix: '/colegios/unidade/cachoeira-do-sul', routes: cachoeiraDoSulRoutes },
  { prefix: '/colegios/unidade/cruz-alta', routes: cruzAltaRoutes },
  { prefix: '/colegios/unidade/santa-maria', routes: santaMariaRoutes },
  { prefix: '/colegios', routes: colegiosRoutes },
  { prefix: '/on', routes: totemOnRoutes },
  { prefix: '/vestibulares', routes: vestibularesRoutes }
] as const

const normalizeLinks = (source: NavLink | NavLink[]): NavLink[] => {
  const items = Array.isArray(source) ? source : [source]

  return items.flatMap((item) => {
    const { children = [], ...root } = item
    return [root as NavLink, ...children]
  })
}

export const useNavigation = () => {
  const route = useRoute()

  const current = computed<NavLink | NavLink[]>(() =>
    menuByPrefix.find(
      ({ prefix }) => route.path === prefix || route.path.startsWith(`${prefix}/`),
    )?.routes ?? mainRoutes,
  )

  const links = computed(() => normalizeLinks(current.value))

  return { links }
}
