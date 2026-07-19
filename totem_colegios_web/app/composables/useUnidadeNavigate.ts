import type { NavLink } from "~/types/navlink"


export function useUnidadeNavigation(unidade: string) {
  const navLinks: NavLink[] = [
    {
      label: "HOME",
      href: "/"
    },
    {
      label: "NOSSA ESCOLA",
      href: `/unidades/${unidade}/sobre`
    },
    {
        label: "UNIDADES",
        href: "/unidades"
    },
    {
        label: "DIFERENCIAIS",
        href: `/unidades/${unidade}/diferenciais`
    },
    {
        label: "FALE COM A GENTE",
        href: `/unidades/${unidade}/#contato`
    },
  ]

  return {
    navLinks
  }
}