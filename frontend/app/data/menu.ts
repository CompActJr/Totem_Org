/**
 * @author Jonas
 * all routes are  here
 */


import type { NavLink } from "~/types/navigation.types";

export const mainRoutes: NavLink[] = [
    { label: "HOME", href: "/" },
    { label: "BLOG", href: "/blog" },
    { label: "VOCACIONAL", href: "/vocacional" }
];

//menu raiz do portal vestibulares
export const vestibularesRoutes: NavLink = {
    label: "HOME",
    href: "/vestibulares",
    children: [
        {
            label: "TOTEM EVENTOS",
            href: "/vestibulares/eventos"
        },
        {
            label: "UNIDADES",
            href: "/vestibulares",
            children: [
                {
                    label: "Ijui",
                    href: "/vestibulares/ijui"
                },
                {
                    label: "Santa Maria",
                    href: "/vestibulares/santa-maria"
                },
                {
                    label: "Santa Rosa",
                    href: "/vestibulares/santa-rosa"
                }
            ]
        },
        {
            label: "FALE COM A GENTE",
            href: "/vestibulares/contato"
        },
        {
            label: "ESCOLHA SUA TURMA",
            href: "/vestibulares/matriculas"
        },
        {
            label: "O TOTEM",
            href: "/vestibulares/o-totem"
        },
        {
            label: "DÚVIDAS",
            href: "/vestibulares/faqs"
        },
    ]
};

//menu da unidade do portal colegios
export const cachoeiraDoSulRoutes: NavLink = {
    label: "Cachoeira do Sul",
    href: "/colegios/cachoeira-do-sul",
    children: [
        {
            label: "NIVEIS DE ENSINO",
            href: "/colegios/cachoeira-do-sul",
            children: [
                {
                    label: "Berçário",
                    href: "/colegios/cachoeira-do-sul/niveis/bercario"
                },
                {
                    label: "Ensino Médio",
                    href: "/colegios/cachoeira-do-sul/niveis/ensino-medio"
                },
                {
                    label: "Fundamental I",
                    href: "/colegios/cachoeira-do-sul/niveis/fundamental-i"
                },
                {
                    label: "Fundamental II",
                    href: "/colegios/cachoeira-do-sul/niveis/fundamental-ii"
                }
            ]
        }
    ]
};

//menu da unidade do portal colegios
export const cruzAltaRoutes: NavLink = {
    label: "Cruz Alta",
    href: "/colegios/cruz-alta",
    children: [
        {
            label: "NIVEIS DE ENSINO",
            href: "/colegios/cruz-alta",
            children: [
                {
                    label: "Ensino Médio",
                    href: "/colegios/cruz-alta/niveis/ensino-medio"
                },
                {
                    label: "Fundamental I",
                    href: "/colegios/cruz-alta/niveis/fundamental-i"
                },
                {
                    label: "Fundamental II",
                    href: "/colegios/cruz-alta/niveis/fundamental-ii"
                }
            ]
        }
    ]
};

//menu da unidade do portal colegios
export const santaMariaRoutes: NavLink = {
    label: "Santa Maria",
    href: "/colegios/santa-maria",
    children: [
        {
            label: "NIVEIS DE ENSINO",
            href: "/colegios/santa-maria",
            children: [
                {
                    label: "Ensino Médio",
                    href: "/colegios/santa-maria/niveis/ensino-medio"
                },
                {
                    label: "Fundamental I",
                    href: "/colegios/santa-maria/niveis/fundamental-i"
                },
                {
                    label: "Fundamental II",
                    href: "/colegios/santa-maria/niveis/fundamental-ii"
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
            href: "/colegios/nossa-escola",
            children: [
                {
                    label: "Por que o Totem",
                    href: "/colegios/nossa-escola#porque_o_totem"
                },
                {
                    label: "Nossa História",
                    href: "/colegios/nossa-escola#nossa_historia"
                },
                {
                    label: "Visão de Educação",
                    href: "/colegios/nossa-escola#visao_de_educacao"
                },
                {
                    label: "Metodologias",
                    href: "/colegios/nossa-escola#metodologias"
                },
                {
                    label: "Perguntas Frequentes",
                    href: "/colegios/nossa-escola#faq"
                },
            ]
        },
        {
            label: "FALE COM A GENTE",
            href: "/colegios",
            children: [
                {
                    label: "Cachoeira do Sul",
                    href: "/colegios/cachoeira-do-sul#section_contato"
                },
                {
                    label: "Cruz Alta",
                    href: "/colegios/cruz-alta#section_contato"
                },
                {
                    label: "Santa Maria",
                    href: "/colegios/santa-maria#section_contato"
                },
            ]
        },
        {
            label: "MATRÍCULAS",
            href: "/colegios",
            children: [
                {
                    label: "Nosso Processo",
                    href: "/colegios"
                },
                {
                    label: "Agende sua Visita",
                    href: "/colegios#agende-visita"
                },
            ]
        },
        {
            label: "UNIDADES",
            href: "/colegios",
            children: [
                {
                    label: "Santa Maria",
                    href: "/colegios/santa-maria"
                },
                {
                    label: "Cruz Alta",
                    href: "/colegios/cruz-alta"
                },
                {
                    label: "Cachoeira do Sul",
                    href: "/colegios/cachoeira-do-sul"
                }
            ]
        }
    ]
};

export const totemOnRoutes: NavLink = {
    label: "HOME",
    href: "/on"
};
