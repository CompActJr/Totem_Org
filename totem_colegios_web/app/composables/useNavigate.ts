import type { NavLink } from "~/types/navlink"


export function useNavigation() {
  const navLinks: NavLink[] = [
    {
      label: "HOME",
      href: "/"
    },
    {
      label: "NOSSA ESCOLA",
      href: "/sobre"
    },
    {
        label: "UNIDADES",
        href: "/unidades"
    },
    {
        label: "ESTUDE NO TOTEM",
        href: "/matriculas"
    },
    {
        label: "FALE COM A GENTE",
        href: "/contato"
    },
  ]

  return {
    navLinks
  }
}