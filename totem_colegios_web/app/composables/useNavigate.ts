/*const ancoras = [
  { label: "Home", href: "#" },
  { label: "Nossa Escola", href: "#sobre" },
  { label: "Unidades", href: "#unidades" },
  { label: "Matrículas", href: "#agende" },
  { label: "Fale com a Gente", href: "#contato" },
];
*/

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
      label: "NOSSA ESCOLA",
      href: "/sobre"
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