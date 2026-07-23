

export function useNavigation() {
  const navLinks = [
    {
      label: "HOME",
      href: "/"
    },
    {
      label: "NOSSA ESCOLA",
      href: "/nossa-escola",
      children: [
        { label: "Por que o Totem", href: "/nossa-escola#porque_o_totem" },
        { label: "Nossa História", href: "/nossa-escola" },
        { label: "Visão de Educação", href: "/nossa-escola" },
        { label: "Metodologias", href: "/nossa-escola" },
        { label: "Perguntas Frequentes", href: "/nossa-escola" },
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
        { label: "Cachoeira do Sul", href: "/unidades/cachoeira-do-sul#agende-visita" },
        { label: "Cruz Alta", href: "/unidades/cruz-alta#agende-visita" },
        { label: "Santa Maria", href: "/unidades/santa-maria#agende-visita" },
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