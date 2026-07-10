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
      label: "TOTEM EVENTOS",
      href: "/eventos"
    },
    {
        label: "UNIDADES",
        href: "/unidades"
    },
    {
      label: "FAQS",
      href: "/faqs"
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
        label: "ESCOLHA SUA TURMA",
        href: "/cursos"
    }
  ]

  return {
    navLinks
  }
}