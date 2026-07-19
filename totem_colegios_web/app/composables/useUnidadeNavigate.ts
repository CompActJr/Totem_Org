export interface NavLink {
  label: string
  href: string
}

export function useNavigation(unidade: string) {
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