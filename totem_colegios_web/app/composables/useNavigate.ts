import type { NavLink } from "~/types/navlink"


export function useNavigation() {
  const navLinks: NavLink[] = [
    {
      label: "HOME",
      href: "/"
    },
    {
      label: "NOSSA ESCOLA",
      href: "/sobre",
      children: [
        { label: "Por que o Totem", href: "#porque_o_totem" },
        { label: "Nossa História", href: "/" },
        { label: "Visão de Educação", href: "/" },
        { label: "Metodologias", href: "/" },
        { label: "Perguntas Frequentes", href: "/" },
      ]
    },
    {
      label: "UNIDADES",
      href: "/unidades",
      children: [
        { label: "Cachoeira do Sul", href: "/unidades/cachoeira-do-sul" },
        { label: "Cruz Alta", href: "/unidades/cruz-alta" },
        { label: "Santa Maria", href: "/unidades/santa-maria" },
      ]
    },
    {
      label: "MATRÍCULAS",
      href: "/matriculas",
      children: [
        { label: "Nosso Processo", href: "/" },
        { label: "Agende sua Visita", href: "#agende-visita" },
      ]
    },
    {
      label: "ESTUDE NO TOTEM",
      href: "/matriculas",
      children: [
        { label: "Cachoeira do Sul", href: "/unidades/cachoeira-do-sul" },
        { label: "Cruz Alta", href: "/unidades/cruz-alta" },
        { label: "Santa Maria", href: "/unidades/santa-maria" },
      ]
    },
    {
      label: "FALE COM A GENTE",
      href: "/contato",
      children: [
        { label: "Cachoeira do Sul", href: "/unidades/cachoeira-do-sul#section_contato" },
        { label: "Cruz Alta", href: "/unidades/cruz-alta#section_contato" },
        { label: "Santa Maria", href: "/unidades/santa-maria#section_contato" },
      ]
    },
  ]

  return {
    navLinks
  }
}