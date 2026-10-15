/**
 * @author Jonas
 * all routes are here
 */

export type NavLink = {
  label: string
  href: string
  children?: NavLink[]
}

export const mainRoutes: NavLink[] = [
  { label: "HOME", href: "/" },
  { label: "BLOG", href: "/blog" },
  { label: "VOCACIONAL", href: "/vocacional" }
]

//menu raiz do portal vestibulares
export const vestibularesNavigation: NavLink = {
  label: "HOME",
  href: "/vestibulares",
  children: [
    { 
      label: "TOTEM EVENTOS", 
      href: "/eventos" 
    },
    { 
      label: "UNIDADES", 
      href: "/",
      children: [
        {
          label: "Ijui",
          href: "/ijui"
        },
        {
          label: "Santa Maria",
          href: "/santa-maria"
        },
        {
          label: "Santa Rosa",
          href: "/santa-rosa"
        }
      ]
    },
    { 
      label: "FALE COM A GENTE", 
      href: "/contato" 
    },
    { 
      label: "ESCOLHA SUA TURMA", 
      href: "/matriculas" 
    },
    { 
      label: "O TOTEM", 
      href: "/o-totem" 
    },
    { 
      label: "DÚVIDAS", 
      href: "/faqs" 
    },
  ]
}

//menu da unidade do portal colegios
export const cachoeiraDoSulRoutes: NavLink = {
  label: "Cachoeira do Sul",
  href: "/colegios/unidades/cachoeira-do-sul",
  children: [
    {
      label: "NIVEIS DE ENSINO",
      href: "/niveis",
      children: [
        { 
          label: "Berçário", 
          href: "/bercario" 
        },
        { 
          label: "Ensino Médio", 
          href: "/ensino-medio" 
        },
        { 
          label: "Fundamental I", 
          href: "/fundamental-i" 
        },
        { 
          label: "Fundamental II", 
          href: "/fundamental-ii" 
        }
      ]
    }
  ]
};

//menu da unidade do portal colegios
export const cruzAltaRoutes: NavLink = {
  label: "Cruz Alta",
  href: "/colegios/unidades/cruz-alta",
  children: [
    {
      label: "NIVEIS DE ENSINO",
      href: "/niveis",
      children: [
         { 
          label: "Ensino Médio", 
          href: "/ensino-medio" 
        },
        { 
          label: "Fundamental I", 
          href: "/fundamental-i" 
        },
        { 
          label: "Fundamental II", 
          href: "/fundamental-ii" 
        }
      ]
    }
  ]
};

//menu da unidade do portal colegios
export const santaMariaRoutes: NavLink = {
  label: "Santa Maria",
  href: "/colegios/unidades/santa-maria",
  children: [
    {
      label: "NIVEIS DE ENSINO",
      href: "/niveis",
      children: [
         { 
          label: "Ensino Médio", 
          href: "/ensino-medio" 
        },
        { 
          label: "Fundamental I", 
          href: "/fundamental-i" 
        },
        { 
          label: "Fundamental II", 
          href: "/fundamental-ii" 
        }
      ]
    }
  ]
};

//menu raiz do portal colegios
export const colegiosRoutes: NavLink = {
  label: "HOME",
  href: "/colegios",
  children: [
    {
      label: "NOSSA ESCOLA",
      href: "/nossa-escola",
      children: [
        { 
          label: "Por que o Totem", 
          href: "/nossa-escola#porque_o_totem" 
        },
        { 
          label: "Nossa História", 
          href: "/nossa-escola#nossa_historia" 
        },
        { 
          label: "Visão de Educação", 
          href: "/nossa-escola#visao_de_educacao" 
        },
        { 
          label: "Metodologias", 
          href: "/nossa-escola#metodologias" 
        },
        { 
          label: "Perguntas Frequentes", 
          href: "/nossa-escola#faq" 
        },
      ]
    },
    {
      label: "FALE COM A GENTE",
      href: "/",
      children: [
        { 
          label: "Cachoeira do Sul", 
          href: "/unidades/cachoeira-do-sul#section_contato"
        },
        { 
          label: "Cruz Alta", 
          href: "/unidades/cruz-alta#section_contato" 
        },
        { 
          label: "Santa Maria", 
          href: "/unidades/santa-maria#section_contato" 
        },
      ]
    },
    {
      label: "MATRÍCULAS",
      href: "/matriculas",
      children: [
        { 
          label: "Nosso Processo", 
          href: "/" 
        },
        { 
          label: "Agende sua Visita", 
          href: "#agende-visita" 
        },
      ]
    },
    {
      label: "UNIDADES",
      href: "/",
      children: [
        { 
          label: "Santa Maria", 
          href: "/santa-maria" 
        },
        { 
          label: "Cruz Alta", 
          href: "/cruz-alta" 
        },
        { 
          label: "Cachoeira do Sul", 
          href: "/cachoeira-do-sul" 
        }
      ]
    }
  ]
};


export const totemOnRoutes: NavLink = {
    label: "HOME",
    href: "/on"
}