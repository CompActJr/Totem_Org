// composables/useNavigation.ts

import {
  cachoeiraDoSulRoutes, cruzAltaRoutes, santaMariaRoutes,
  colegiosRoutes, totemOnRoutes, vestibularesRoutes
} from '~/data/menu'

// a ordem é muito importante aqui, ele busca as rotas para o menu de acordo com a url atual e usa o primeiro match
const menuByPrefix = [
  { prefix: '/colegios/cachoeira-do-sul', routes: cachoeiraDoSulRoutes },
  { prefix: '/colegios/cruz-alta', routes: cruzAltaRoutes },
  { prefix: '/colegios/santa-maria', routes: santaMariaRoutes },
  { prefix: '/colegios', routes: colegiosRoutes },
  { prefix: '/on', routes: totemOnRoutes },
  { prefix: '/vestibulares', routes: vestibularesRoutes}
]

export const useNavigation = () => {
  const route = useRoute()
  const current = computed( () =>
      menuByPrefix.find(
        ({ prefix }) => route.path === prefix || route.path.startsWith(`${prefix}/`),
      )?.routes ?? colegiosRoutes,
  )

  // o item raiz (HOME / nome da unidade) vira o primeiro link, seguido dos filhos
  const links = computed(() => {
    const { children = [], ...root } = current.value
    return [root, ...children]
  })

  return { links }
}
