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
        label: "FAQS",
        href: "/faqs"
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
        label: "MATRÍCULAS",
        href: "/matriculas"
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