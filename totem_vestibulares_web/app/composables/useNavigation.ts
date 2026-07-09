export interface NavLink {
  label: string
  href: string
}

export function useNavigation() {
  const navLinks: NavLink[] = [
    {
      label: "HOME",
      href: "/"
    },
    {
      label: "EVENTOS",
      href: "/eventos"
    },
    {
        label: "UNIDADES",
        href: "/unidades"
    },
    {
        label: "FALE COM A GENTE",
        href: "/contato"
    },
    {
        label: "APOSTILHAS",
        href: "/biblioteca"
    },
    {
        label: "CURSOS",
        href: "/cursos"
    }
  ]

  return {
    navLinks
  }
}