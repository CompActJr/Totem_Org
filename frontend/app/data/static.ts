/**
 * @author Jonas 
 * @implNote Mocks e constantes estaticas que se mexer da ruim
 */

import type { Portal } from "~/types/blog.types";
import type { WhatsappLinks } from "~/types/navigation.types";
import type { Organization } from "~/types/organizations.types";

export const niveis = [
  {
    name: "Berçário",
    image: "/niveis/NIVEL-BERÇARIO.jpg",
    link: "bercario"
  },
  {
    name: "Educação Infantil",
    image: "/niveis/NIVEL-INFANTIL.jpg",
    link: "infantil"
  },
  {
    name: "Ensino Fundamental I",
    image: "/niveis/NIVEL-FUNDAMENTAL-1.jpg",
    link: "fundamental-i"
  },
  {
    name: "Ensino Fundamental II",
    image: "/niveis/NIVEL-FUNDAMENTAL-2.jpg",
    link: "fundamental-ii"
  },
  {
    name: "Ensino Médio",
    image: "/niveis/NIVEL-MEDIO.jpg",
    link: "ensino-medio"
  }
] as const;


export const whatssapLinks: WhatsappLinks[] = [
  {
    _id: 1,
    slug: "cachoeira-do-sul",
    whatsapp: "(55) 9 9088-3334",
    "@type": "colegios"
  },
  {
    _id: 2,
    slug: "santa-maria",
    whatsapp: "(55) 9 9125-8480",
    "@type": "colegios"
  },
  {
    _id: 3,
    slug: "cruz-alta",
    whatsapp: "(55) 9 9076-7990",
    "@type": "colegios"
  },
  {
    _id: 4,
    slug: "santa-rosa",
    whatsapp: "(55) 9 9999-2002",
    "@type": "vestibulares"
  },
  {
    _id: 5,
    slug: "santa-maria",
    whatsapp: "(55) 9 9922-8969",
    "@type": "vestibulares"
  },
  {
    _id: 6,
    slug: "ijui",
    whatsapp: "(55) 9 9142-7470",
    "@type": "vestibulares"
  }
]


export const unidadesColegios: Organization[] = [
  {
    _id: 1,
    "@type": "colegios",
    city: "Cachoeira do Sul",
    slug: "cachoeira-do-sul",
    image: "/infraestrutura/cachoeira-do-sul-colegios/SALA-ESTAR-1.png",
    cep: "98900-000",
    address: "Avenida Presidente Vargas, 1958",
    phone: "51 3722-2577",
    whatsapp: " 51 9 9599-2004",
    email: "colegiocachoeira@soutotem.com.br",
    facebook: "https://www.facebook.com/ColegioTotemCachoeira",
    instagram: "https://www.instagram.com/colegiototem/",
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d863.4459269831603!2d-52.90042467518325!3d-30.043062487779572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10bd3a1f59f31b7%3A0x8ee2bf50c91b4ae3!2sCol%C3%A9gio%20Totem%20Cachoeira%20do%20Sul!5e0!3m2!1spt-BR!2sbr!4v1784490880093!5m2!1spt-BR!2sbr",
    levels: [
      "Berçário",
      "Educação Infantil",
      "Ensino Fundamental I",
      "Ensino Fundamental II",
      "Ensino Médio"
    ],
    banners: [
      "/banners/BANNER_CACHOEIRA_1.jpg",
      "/banners/BANNER_COLEGIOS.jpg"
    ],
    panoramas: [],
    diferenciais: [],
    depoimentos: [],
    infraestrutura: [
      "/infraestrutura/cachoeira-do-sul-colegios/BERCARIO-1.png",
      "/infraestrutura/cachoeira-do-sul-colegios/BRINQUEDOS-1.png",
      "/infraestrutura/cachoeira-do-sul-colegios/LAB-1.png",
      "/infraestrutura/cachoeira-do-sul-colegios/QUADRA-1.png",
      "/infraestrutura/cachoeira-do-sul-colegios/RECEPCAO-1.png",
      "/infraestrutura/cachoeira-do-sul-colegios/SALA-2.png",
      "/infraestrutura/cachoeira-do-sul-colegios/SALA-ESTAR-1.png",
      "/infraestrutura/cachoeira-do-sul-colegios/SALA-FUND-1.png"
    ],
    professores: [],
    atividades: [],
    cursos: [],
    faqs: []
  },
  {
    _id: 2,
    "@type": "colegios",
    city: "Cruz Alta",
    slug: "cruz-alta",
    image: "/infraestrutura/cruz-alta-colegios/ALFABETIZAÇÃO-1.png",
    cep: "98700-000",
    address: "General Felipe Portinho, 1216",
    phone: "(55) 3333-8569",
    whatsapp: "(55) 9 9076-7990",
    email: "colegiocruzalta@soutotem.com.br",
    facebook: "https://www.facebook.com/ColegioTotemCruzAlta ",
    instagram: "https://www.instagram.com/colegiototem/",
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1909.2088506259433!2d-53.61070915676212!3d-28.644612207439764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94fd97c87e5202ab%3A0xc4883daf58e00f03!2sCol%C3%A9gio%20Totem%20Cruz%20Alta!5e0!3m2!1spt-BR!2sbr!4v1784497585649!5m2!1spt-BR!2sbr",
    levels: [
      "Educação Infantil",
      "Ensino Fundamental I",
      "Ensino Fundamental II",
      "Ensino Médio"
    ],
    banners: [
      "/banners/BANNER_COLEGIOS.jpg"
    ],
    panoramas: [],
    diferenciais: [],
    depoimentos: [],
    infraestrutura: [
      "/infraestrutura/cruz-alta-colegios/ALFABETIZAÇÃO-1.png",
      "/infraestrutura/cruz-alta-colegios/biblioteca-1.png",
      "/infraestrutura/cruz-alta-colegios/cantina-1.png",
      "/infraestrutura/cruz-alta-colegios/PÁTIO-1.png",
      "/infraestrutura/cruz-alta-colegios/recepção-1.png",
      "/infraestrutura/cruz-alta-colegios/SALA-1.png",
      "/infraestrutura/cruz-alta-colegios/SALA-2.png"
    ],
    professores: [],
    atividades: [],
    cursos: [],
    faqs: []
  },
  {
    _id: 3,
    "@type": "colegios",
    city: "Santa Maria",
    slug: "santa-maria",
    image: "/infraestrutura/santa-maria-colegios/SALA-1.png",
    cep: "97010-033",
    address: "BR287, 8480/8485 - Trevo da Uglione6",
    phone: "55 9 9125-8480",
    whatsapp: "(55) 9 9125-8480",
    email: "colegiosantamaria@soutotem.com.br",
    facebook: "https://www.facebook.com/ColegioTotemSantaMaria",
    instagram: "https://www.instagram.com/colegiototem/",
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2312.7482640472363!2d-53.81819665087276!3d-29.713761335139225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9503cb1424027733%3A0x29a4830246f042e2!2sCol%C3%A9gio%20Totem%20Santa%20Maria!5e0!3m2!1spt-BR!2sbr!4v1784497464004!5m2!1spt-BR!2sbr",
    levels: [
      "Educação Infantil",
      "Ensino Fundamental I",
      "Ensino Fundamental II",
      "Ensino Médio"
    ],
    banners: [
      "/banners/BANNER_COLEGIOS.jpg"
    ],
    panoramas: [],
    diferenciais: [],
    depoimentos: [],
    infraestrutura: [
      "/infraestrutura/santa-maria-colegios/SALA-1.png",
      "/infraestrutura/santa-maria-colegios/ÁREA-VERDE-1.png",
      "/infraestrutura/santa-maria-colegios/BIBLIOTECA-1.png",
      "/infraestrutura/santa-maria-colegios/CANTINA-1.png",
      "/infraestrutura/santa-maria-colegios/QUADRA-1.png",
      "/infraestrutura/santa-maria-colegios/SAGUÃO-1.png",
      "/infraestrutura/santa-maria-colegios/SALA-PEQUENOS-1.png"
    ],
    professores: [],
    atividades: [],
    cursos: [],
    faqs: []
  }
];


export const unidadesVestibulares: Organization[] = [
  {
    _id: 4,
    "@type": "vestibulares",
    city: "Santa Rosa",
    slug: "santa-rosa",
    image: "/infraestrutura/santa-rosa-vestibulares/HALL.jpg",
    cep: "98900-000",
    address: "Rua Santa Rosa, 305",
    phone: "(55) 2120-2003",
    whatsapp: "(55) 9 9999-2002",
    email: "cachoeira@colegiototem.com.br",
    facebook: "https://www.facebook.com/totemvestibular/",
    instagram: "https://www.instagram.com/totemvestibulares/",
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14108.512394063462!2d-54.490794312841786!3d-27.86733509999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f934499abe6d47%3A0xb57f8f005f5566c9!2sTotem%20Vestibulares%20-%20Santa%20Rosa!5e0!3m2!1spt-BR!2sbr!4v1792520350185!5m2!1spt-BR!2sbr",
    levels: [],
    banners: [
      "/banners/BANNER_PV_SANTA_ROSA.jpg",
    ],
    panoramas: [],
    diferenciais: [],
    depoimentos: [],
    infraestrutura: [
      "/infraestrutura/santa-rosa-vestibulares/AREA_DE_CONVIVIO.jpg",
      "/infraestrutura/santa-rosa-vestibulares/ESPACO_GOURMET.jpg",
      "/infraestrutura/santa-rosa-vestibulares/HALL.jpg",
      "/infraestrutura/santa-rosa-vestibulares/RECEPCAO.jpg",
      "/infraestrutura/santa-rosa-vestibulares/SALA_DE_ATENDIMENTO.jpg",
      "/infraestrutura/santa-rosa-vestibulares/SALA_DE_AULA_1.jpg",
      "/infraestrutura/santa-rosa-vestibulares/SALA_DE_AULA_2.jpg",
      "/infraestrutura/santa-rosa-vestibulares/SALA_DE_ESTUDOS.jpg",
      "/infraestrutura/santa-rosa-vestibulares/SECRETARIA.jpg"
    ],
    professores: [],
    atividades: [],
    cursos: [
      {
        _id: 1,
        titulo: "Extensivo Manhã",
        inicio: "23 de março de 2026",
        fim: "Prova da UFSM",
        imagem: "/cursos/EXTENSIVO_MANHA.png",
        descricao: "Curso anual reforçado com atendimento tira-dúvidas, aulas de segunda a sexta-feira, direcionado ao Enem e UFSM. O aluno também receberá materiais didáticos voltados especificamente para a prova do Enem e ao vestibular da UFSM.",
        horario: "Aulas Expositivas, das 8h às 11h45\nAtendimento Tira-Dúvidas das 18h às 19h",
        desconto: "",
        caracteristicas: [
          "Acompanhamento aos alunos nos principais vestibulares do sul do Brasil, com a presença de professores e coordenadores;",
          "Curso extensivo reforçado pedagogicamente direcionado ao ENEM;",
          "Curso que mais aprova no Rio Grande do sul;",
          "Atendimento tira-dúvidas;",
          "Aulão Revisão Enem;",
          "Simulados Totem, UFSM e Evolucional;",
          "Eventos Totem por adesão: Totem Games e Aulão ENEM"
        ],
        material: "Coleção Premium; Prova Box Públicas e Prova Box Enem; Hábilis.",
        kit: [
          " 1 camiseta",
          " 1 moletom",
          " 1 mochila Totem (padrão para todas as turmas)",
          " 1 caderno",
          " 1 copo Totem"
        ],
        documentos: "Comprovante de residência, carteira de identidade e CPF. Para aluno menor de idade é necessário o CPF do responsável."
      },
      {
        _id: 2,
        "titulo": "Extensivo Noite",
        "inicio": "22 de abril de 2026",
        "fim": "Prova do ENEM",
        "imagem": "/cursos/EXTENSIVO_NOITE.png",
        "descricao": "Curso anual reforçado com atendimento tira-dúvidas, aulas de segunda a sexta-feira, direcionado ao Enem. O aluno também receberá materiais didáticos voltados especificamente para a prova do Enem.",
        "horario": "Aulas Expositivas, das 19h10 às 22h30\nAtendimento Tira-Dúvidas das 18h às 19h",
        "desconto": "Irmãos recebem 5% de desconto.",
        "caracteristicas": [
          "Acompanhamento aos alunos nos principais vestibulares do sul do Brasil, com a presença de professores e coordenadores;",
          "Curso extensivo reforçado pedagogicamente direcionado ao ENEM;",
          "Curso que mais aprova no Rio Grande do sul;",
          "Atendimento tira-dúvidas;",
          "Aulão Revisão Enem;",
          "Simulado Evolucional;",
          "Eventos Totem por adesão: Totem Games e Aulão ENEM"
        ],
        "material": "Coleção Premium; Prova Box Públicas e Prova Box Enem; Hábilis.",
        "kit": [
          " 1 camiseta",
          " 1 moletom",
          " 1 mochila Totem (padrão para todas as turmas)",
          " 1 caderno",
          " 1 copo Totem"
        ],
        "documentos": "Comprovante de residência, carteira de identidade e CPF. Para aluno menor de idade é necessário o CPF do responsável."
      },
      {
        _id: 3,
        "titulo": "Medicina Integral",
        "inicio": "23 de fevereiro de 2026",
        "fim": "Prova da UFSM",
        "imagem": "/cursos/MED_INTEGRAL.png",
        "descricao": "Curso em turno integral com a carga horária dividida em aulas expositivas e estudo orientado pelos professores. Preparação para o Enem, UFRGS, UFSM, UFSC e aos vestibulares das universidades particulares. Turma reduzida de alunos que oferece acompanhamento da coordenação especializada, materiais didáticos que contemplam o Enem e vestibulares do sul do Brasil e direcionada a alunos que precisam de maior aprofundamento nos conteúdos.",
        "horario": "Aulas Expositivas de segunda a sexta-feira, das 8h às 11h45\nEstudo Orientado das 15h30 às 17h10 (com atendimento Tira-Dúvidas)",
        "desconto": "Irmãos recebem 5% de desconto",
        "caracteristicas": [
          "Projeto arquitetônico benéfico ao aprendizado;",
          "Curso que mais aprova no Rio Grande do Sul;",
          "Acompanhamento aos alunos nos principais vestibulares do sul do Brasil, com a presença de professores e coordenadores;",
          "Espaço lounge e gourmet;",
          "Simulados Totem, UFSM, UFRGS, Particulares e Evolucional;",
          "Suporte da coordenação Medicina;",
          "Estudo Orientado com atendimento tira-dúvidas específico para a turma;",
          "Aulão Revisão Enem."
        ],
        "material": "Coleção Med Plus; Prova Box Federais RS, Prova Box Santa Catarina, Prova Box Particulares e Prova Box Enem; Hábilis.",
        "kit": [
          "2 camisetas",
          "1 moletom",
          "1 mochila Totem (padrão para todas as turmas)",
          "1 caderno",
          "1 copo Totem",
          "1 post-it (embalagem mais simples)",
          "1 estojo"
        ],
        "documentos": "Comprovante de residência, carteira de identidade e CPF. Para aluno menor de idade é necessário o CPF do responsável.",
      },

    ],
    faqs: [],
  },
  {
    _id: 5,
    "@type": "vestibulares",
    city: "Santa Maria",
    slug: "santa-maria",
    image: "/infraestrutura/santa-maria-vestibulares/HALL.jpg",
    cep: "97010-033",
    address: "Rua dos Andradas, 1799",
    phone: "(55) 3222-8833",
    whatsapp: "(55) 9 9922-8969",
    email: "secretaria.santamaria@soutotem.com.br",
    facebook: "https://www.facebook.com/totemvestibular/",
    instagram: "https://www.instagram.com/totemvestibulares/",
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13862.961557465114!2d-53.812881051998744!3d-29.69830555318613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9503cb558e9192bd%3A0xe66df1eee7acb952!2sTotem%20Vestibulares%20-%20Santa%20Maria!5e0!3m2!1spt-BR!2sbr!4v1792520159413!5m2!1spt-BR!2sbr",
    levels: [],
    banners: [
      "/banners/BANNER_PV_SANTA_MARIA.jpg",
    ],
    panoramas: [],
    diferenciais: [],
    depoimentos: [],
    infraestrutura: [
      "/infraestrutura/santa-maria-vestibulares/AREA_DE_CONVIVIO.jpg",
      "/infraestrutura/santa-maria-vestibulares/ESPACO_GOURMET.jpg",
      "/infraestrutura/santa-maria-vestibulares/HALL.jpg",
      "/infraestrutura/santa-maria-vestibulares/RECEPCAO.jpg",
      "/infraestrutura/santa-maria-vestibulares/SALA_DE_ATENDIMENTO.jpg",
      "/infraestrutura/santa-maria-vestibulares/SALA_DE_AULA_1.jpg",
      "/infraestrutura/santa-maria-vestibulares/SALA_DE_AULA_2.jpg",
      "/infraestrutura/santa-maria-vestibulares/SALA_DE_ESTUDOS.jpg",
      "/infraestrutura/santa-maria-vestibulares/SECRETARIA.jpg"
    ],
    professores: [],
    atividades: [],
    cursos: [
      {
        _id: 4,
        titulo: "MEDPLUS",
        inicio: "23 de fevereiro de 2026",
        fim: "Até a prova da UFRGS ou UFSM",
        imagem: "/cursos/MED_PLUS.png",
        descricao: "Curso com a carga horária dividida em aulas expositivas e um reforçado atendimento tira-dúvidas orientado pelos professores. Preparação para o Enem, UFRGS, UFSM, UFSC e aos vestibulares das universidades particulares. Turma reduzida de alunos que oferece acompanhamento da coordenação especializada, materiais didáticos que contemplam o Enem e vestibulares do sul do Brasil e direcionada a alunos que necessitam de mais aprofundamento nos conteúdos.",
        horario: "Aulas Expositivas de segunda a sexta-feira, das 8h às 12h20 / Estudo ativo das 13h30 às 15h30\nEstudo Orientado das 15h30 às 17h30 (com atendimento Tira-Dúvidas)",
        desconto: "Irmãos recebem 5% de desconto.",
        caracteristicas: [
          "Projeto arquitetônico benéfico ao aprendizado;",
          "Curso que mais aprova no Rio Grande do Sul;",
          "Acompanhamento aos alunos nos principais vestibulares do sul do Brasil, com a presença de professores e coordenadores;",
          "Espaço lounge e gourmet;",
          "Simulados Totem, UFSM, UFRGS, Particulares e Evolucional;",
          "Acesso ao Totem On",
          "Vídeos de resoluções dos testes mais difíceis das provas do Enem, UFRGS e UFSM contemplados nos materiais",
          "Aulas de atualidades, interdisciplinas, mapeamento de provas e revisão para os vestibulares de inverno",
          "Suporte da coordenação Medicina;",
          "Estudo Orientado com atendimento tira-dúvidas específico para a turma;",
          "Aulão Revisão Enem."
        ],
        material: "Coleção Med Plus; Prova Box Federais RS, Prova Box Santa Catarina, Prova Box Particulares e Prova Box Enem; Hábilis.",
        kit: [
          "2 camisetas",
          "1 moletom",
          "1 mochila Totem (padrão para todas as turmas)",
          "1 caderno",
          "1 copo Totem",
          "1 post-it (embalagem mais simples)",
          "1 estojo"
        ],
        documentos: "Comprovante de residência, carteira de identidade e CPF. Para aluno menor de idade é necessário o CPF do responsável."
      },
      {
      _id: 5,
      "titulo": "Medicina Prime",
      "inicio": "09 de março de 2026",
      "fim": "Prova da UFRGS ou UFSM",
      "imagem": "/cursos/MEDICINA_PRIME.png",
      "descricao": "Curso em turno único pela manhã e acompanhado por atendimento tira-dúvidas específico para a turma no turno da tarde. Preparação para o Enem, UFRGS, UFSM, UFSC e universidades particulares. Turma reduzida de alunos que oferece acompanhamento da coordenação especializada e materiais didáticos que contemplam a prova do Enem, UFRGS, UFSM, UFSC e Particulares.",
      "horario": "Aulas Expositivas de segunda a sexta-feira, das 8h às 12h20\nEstudo Orientado das 14h às 15h (com atendimento Tira-Dúvidas)",
      "desconto": "Irmãos recebem 5% de desconto.",
      "caracteristicas": [
        "Projeto arquitetônico benéfico ao aprendizado;",
        "Curso que mais aprova no Rio Grande do Sul;",
        "Acompanhamento aos alunos nos principais vestibulares do sul do Brasil, com a presença de professores e coordenadores;",
        "Espaço lounge e gourmet;",
        "Simulados Totem, UFSM, UFRGS, e Evolucional;",
        "Suporte da coordenação Medicina;",
        "Estudo Orientado com atendimento tira-dúvidas específico para a turma;",
        "Aulão Revisão Enem."
      ],
      "material": "Coleção Med Plus; Pova Box Federais RS, Prova Box Santa Catarina, Prova Box Particulares e Prova Box Enem; Hábilis.",
      "kit": [
        "2 camisetas",
        "1 moletom",
        "1 mochila Totem (padrão para todas as turmas)",
        "1 caderno",
        "1 copo Totem",
        "1 post-it (embalagem mais simples)",
        "1 estojo"
      ],
      "documentos": "Comprovante de residência, carteira de identidade e CPF. Para aluno menor de idade é necessário o CPF do responsável."
    },
    {
      _id: 6,
      "titulo": "Extensivo Manhã",
      "inicio": "16 de março de 2026",
      "fim": "Prova da UFSM",
      "imagem": "/cursos/EXTENSIVO_MANHA.png",
      "descricao": "Curso anual reforçado com atendimento tira-dúvidas, aulas de segunda a sexta-feira, direcionado ao Enem e UFSM. O aluno também receberá materiais didáticos voltados especificamente para a prova do Enem e ao vestibular da UFSM.",
      "horario": "Aulas Expositivas, das 8h às 11h55\nAtendimento Tira-Dúvidas, das 18h às 19h",
      "desconto": "Irmãos recebem 5% de desconto.",
      "caracteristicas": [
        "Acompanhamento aos alunos nos principais vestibulares do sul do Brasil, com a presença de professores e coordenadores;",
        "Curso extensivo reforçado pedagogicamente direcionado ao ENEM;",
        "Curso que mais aprova no Rio Grande do sul;",
        "Atendimento tira-dúvidas;",
        "Aulão Revisão Enem;",
        "Simulados Totem, UFSM e Evolucional;",
        "Eventos Totem por adesão: Totem Games e Aulão ENEM"
      ],
      "material": "Coleção Premium; Prova Box Públicas e Prova Box Enem; Hábilis.",
      "kit": [
        "1 camiseta",
        "1 moletom",
        "1 mochila Totem (padrão para todas as turmas)",
        "1 caderno",
        "1 copo Totem"
      ],
      "documentos": "Comprovante de residência, carteira de identidade e CPF. Para aluno menor de idade é necessário o CPF do responsável."
    },
    {
      _id: 7,
      "titulo": "Extensivo Tarde",
      "inicio": "13 de abril de 2026",
      "fim": "Prova da UFSM",
      "imagem": "/cursos/EXTENSIVO_TARDE.png",
      "descricao": "Curso anual reforçado com atendimento tira-dúvidas, aulas de segunda a sexta-feira, direcionado ao Enem e UFSM. O aluno também receberá materiais didáticos voltados especificamente para a prova do Enem e ao vestibular da UFSM.",
      "horario": "Aulas expositivas, das 13h30 às 17h50\nAtendimento Tira-Dúvidas das 18h às 19h",
      "desconto": "Irmãos recebem 5% de desconto.",
      "caracteristicas": [
        "Acompanhamento aos alunos nos principais vestibulares do sul do Brasil, com a presença de professores e coordenadores;",
        "Curso extensivo reforçado pedagogicamente direcionado ao ENEM;",
        "Curso que mais aprova no Rio Grande do sul;",
        "Atendimento tira-dúvidas;",
        "Aulão Revisão Enem;",
        "Simulados Totem, UFSM e Evolucional;",
        "Eventos Totem por adesão: Totem Games e Aulão ENEM"
      ],
      "material": "Coleção Premium; Prova Box Públicas e Prova Box Enem; Hábilis.",
      "kit": [
        "1 camiseta",
        "1 moletom",
        "1 mochila Totem (padrão para todas as turmas)",
        "1 caderno",
        "1 copo Totem"
      ],
      "documentos": "Comprovante de residência, carteira de identidade e CPF. Para aluno menor de idade é necessário o CPF do responsável."
    },
    {
      _id: 8,
      "titulo": "Extensivo Noite",
      "inicio": "13 de abril de 2026",
      "fim": "Prova da UFSM",
      "imagem": "/cursos/EXTENSIVO_NOITE.png",
      "descricao": "Curso anual reforçado com atendimento tira-dúvidas, aulas de segunda a sexta-feira, direcionado ao Enem e UFSM. O aluno também receberá materiais didáticos voltados especificamente para a prova do Enem e ao vestibular da UFSM.",
      "horario": "Aulas expositivas das 19h10 às 22h25\nAtendimento Tira-Dúvidas das 18h às 19h",
      "desconto": "Irmãos recebem 5% de desconto.",
      "caracteristicas": [
        "Acompanhamento aos alunos nos principais vestibulares do sul do Brasil, com a presença de professores e coordenadores;",
        "Curso extensivo reforçado pedagogicamente direcionado ao ENEM;",
        "Curso que mais aprova no Rio Grande do sul;",
        "Atendimento tira-dúvidas;",
        "Aulão Revisão Enem;",
        "Simulados Totem, UFSM e Evolucional;",
        "Eventos Totem por adesão: Totem Games e Aulão ENEM"
      ],
     "material": "Coleção Premium; Prova Box Públicas e Prova Box Enem; Hábilis.",
      "kit": [
        "1 camiseta",
        "1 moletom",
        "1 mochila Totem (padrão para todas as turmas)",
        "1 caderno",
        "1 copo Totem"
      ],
      "documentos": "Comprovante de residência, carteira de identidade e CPF. Para aluno menor de idade é necessário o CPF do responsável."
    },
    {
      _id: 9,
      "titulo": "Turma PSS 1 UFSM",
      "inicio": "11 de agosto de 2025",
      "fim": "Vestibular da UFSM",
      "imagem": "/cursos/PSS1.png",
      "descricao": "Turma focada na preparação para a realização das provas do PSS 1 da UFSM. Oferece também apoio e reforço nos conteúdos estudados no 1º ano do ensino médio.",
      "horario": "Horário das Aulas\nAulas Expositivas: das 18h30 às 21h15, de segundas, terças e quintas.",
      "desconto": "",
      "caracteristicas": [
        "Aulão Revisão Enem e UFSM - Evento em que os professores irão lançar as últimas dicas na véspera do vestibular.",
        "Simulado PSS 1",
        "Reforço Escolar"
      ],
      "material": "Coleção UFSM PSS 1 (Teoria e exercícios para prova do PSS 1 UFSM)",
      "kit": [],
      "documentos": "Comprovante de residência, carteira de identidade e CPF. Para aluno menor de idade é necessário o CPF do responsável."
    },
    {
      _id: 10,
      "titulo": "Turma PSS 2 UFSM",
      "inicio": "11 de agosto de 2025",
      "fim": "Vestibular da UFSM",
      "imagem": "/cursos/PSS2.png",
      "descricao": "Turma focada na preparação para a realização das provas do PSS 2 da UFSM. Oferece também apoio e reforço nos conteúdos estudados no 2º ano do ensino médio.",
      "horario": "Horário das Aulas\nAulas Expositivas: das 18h30 às 21h15, de segundas, quartas e quintas.",
      "desconto": "",
        "caracteristicas": [
          "Aulão Revisão Enem e UFSM - Evento em que os professores irão lançar as últimas dicas na véspera do vestibular.",
          "Simulado PSS 2",
          "Reforço Escolar"
        ],
        "material": "Coleção UFSM PSS 2 (Teoria e exercícios para prova do PSS 2 UFSM)",
        "kit": [],
        "documentos": "Comprovante de residência, carteira de identidade e CPF. Para aluno menor de idade é necessário o CPF do responsável."
      },
      {
        _id: 11,
        "titulo": "Turma PSS 3 UFSM",
        "inicio": "11 de agosto de 2025",
        "fim": "Vestibular da UFSM",
        "imagem": "/cursos/PSS3.png",
        "descricao": "Turma focada na preparação para a realização das provas do PSS 3 da UFSM. Oferece também apoio e reforço nos conteúdos estudados no 3º ano do ensino médio.",
        "horario": "Horário das Aulas\nAulas Expositivas: das 18h30 às 21h15, de segundas, terças e quintas.",
        "desconto": "",
        "caracteristicas": [
          "Aulão Revisão Enem e UFSM - Evento em que os professores irão lançar as últimas dicas na véspera do vestibular.",
          "Simulado PSS 3",
          "Reforço Escolar"
        ],
        "material": "Coleção UFSM PSS 3 (Teoria e exercícios para prova do PSS 3 UFSM)",
        "kit": [],
        "documentos": "Comprovante de residência, carteira de identidade e CPF. Para aluno menor de idade é necessário o CPF do responsável."
      },
    ],
    faqs: []
  },
  {
    _id: 6,
    "@type": "vestibulares",
    city: "Ijuí",
    slug: "ijui",
    image: "/infraestrutura/ijui-vestibulares/HALL.jpg",
    cep: "98700-000",
    address: "Rua Álvaro Chaves, 488",
    phone: "(55) 3333-8569",
    whatsapp: "(55) 9 9142-7470",
    email: "secretaria.ijui@soutotem.com.br",
    facebook: "https://www.facebook.com/totemvestibular/",
    instagram: "https://www.instagram.com/totemvestibulares/",
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.1120066534404!2d-53.92079892369732!3d-28.385684775800463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94fc2d9bfa42f1a1%3A0xedce56f980556818!2sTotem%20Vestibulares%20-%20Iju%C3%AD!5e0!3m2!1spt-BR!2sbr!4v1792520414610!5m2!1spt-BR!2sbr",
    levels: [],
    banners: [
      "/banners/BANNER_PV_IJUI.jpg",
    ],
    panoramas: [],
    diferenciais: [],
    depoimentos: [],
    infraestrutura: [
      "/infraestrutura/ijui-vestibulares/AREA_DE_CONVIVIO.jpg",
      "/infraestrutura/ijui-vestibulares/ESPACO_GOURMET.jpg",
      "/infraestrutura/ijui-vestibulares/HALL.jpg",
      "/infraestrutura/ijui-vestibulares/RECEPCAO.jpg",
      "/infraestrutura/ijui-vestibulares/SALA_DE_ATENDIMENTO.jpg",
      "/infraestrutura/ijui-vestibulares/SALA_DE_AULA_1.jpg",
      "/infraestrutura/ijui-vestibulares/SALA_DE_AULA_2.jpg",
      "/infraestrutura/ijui-vestibulares/SALA_DE_ESTUDOS.jpg",
      "/infraestrutura/ijui-vestibulares/SECRETARIA.jpg"
    ],
    professores: [],
    atividades: [],
    cursos: [
      {
        _id: 12,
        "titulo": "Medicina Integral",
        "inicio": "23 de fevereiro de 2026",
        "fim": "Prova da UFSM",
        "imagem": "/cursos/MED_INTEGRAL.png",
        "descricao": "Curso em turno integral com a carga horária dividida em aulas expositivas e estudo orientado pelos professores. Preparação para o Enem, UFRGS, UFSM, UFSC e aos vestibulares das universidades particulares. Turma reduzida de alunos que oferece acompanhamento da coordenação especializada, materiais didáticos que contemplam o Enem e vestibulares do sul do Brasil e direcionada a alunos que precisam de maior aprofundamento nos conteúdos.",
        "horario": "Aulas Expositivas de segunda a sexta-feira, das 8h às 11h45 / das 13h30 às 15h10\nEstudo Orientado das 15h30 às 17h30 (com atendimento Tira-Dúvidas)",
        "desconto": "Irmãos recebem 5% de desconto.",
        "caracteristicas": [
          "Projeto arquitetônico benéfico ao aprendizado;",
          "Curso que mais aprova no Rio Grande do Sul;",
          "Acompanhamento aos alunos nos principais vestibulares do sul do Brasil, com a presença de professores e coordenadores;",
          "Espaço lounge e gourmet;",
          "Simulados Totem, UFSM, UFRGS, Particulares e Evolucional;",
          "Suporte da coordenação Medicina;",
          "Estudo Orientado com atendimento tira-dúvidas específico para a turma;",
          "Acesso ao Totem On;",
          "Aulão Revisão Enem."
        ],
        "material": "Coleção Med Plus; Prova Box Federais RS, Prova Box Santa Catarina, Prova Box Particulares e Prova Box Enem; Hábilis.",
        "kit": [
          "2 camisetas",
          "1 moletom",
          "1 mochila Totem (padrão para todas as turmas)",
          "1 caderno",
          "1 copo Totem",
          "1 post-it (embalagem mais simples)",
          "1 estojo"
        ],
        "documentos": "Comprovante de residência, carteira de identidade e CPF. Para aluno menor de idade é necessário o CPF do responsável."
      },
      {
        _id: 13,
        "titulo": "MEDICINA SEMI-INTEGRAL",
        "inicio": "9 de março de 2026",
        "fim": "Prova da UFSM",
        "imagem": "/cursos/MEDICINA_SEMI_INTEGRAL.png",
        "descricao": "Curso em turno único pela manhã e acompanhado por atendimento tira-dúvidas específico para a turma no turno da tarde. Preparação para o Enem, UFRGS, UFSM, UFSC e universidades particulares. Turma reduzida de alunos que oferece acompanhamento da coordenação especializada e materiais didáticos que contemplam a prova do Enem, UFRGS, UFSM, UFSC e Particulares",
        "horario": "Aulas Expositivas de segunda a sexta-feira, das 7h50 às 11h55\nAtendimento Tira-Dúvidas agendado, das 18h às 19h",
        "desconto": "Irmãos recebem 5% de desconto.",
        "caracteristicas": [
          "Projeto arquitetônico benéfico ao aprendizado;",
          "Curso que mais aprova no Rio Grande do Sul;",
          "Acompanhamento aos alunos nos principais vestibulares do sul do Brasil, com a presença de professores e coordenadores;",
          "Turma reduzida para melhor rendimento do aluno;",
          "Simulados TOTEM, UFSM, UFRGS e Evolucional;",
          "Espaço gourmet;",
          "Aulão Revisão Enem."
        ],
        "material": "Coleção Med Plus; Prova Box Federais RS, Prova Box Santa Catarina, Prova Box Particulares e Prova Box Enem; Hábilis.",
        "kit": [
          "2 camisetas",
          "1 moletom",
          "1 mochila Totem (padrão para todas as turmas)",
          "1 caderno",
          "1 copo Totem",
          "1 post-it (embalagem mais simples)",
          "1 estojo"
        ],
        "documentos": "Comprovante de residência, carteira de identidade e CPF. Para aluno menor de idade é necessário o CPF do responsável."
      },
      {
        _id: 14,
        "titulo": "Extensivo Noite",
        "inicio": "30 de março de 2026",
        "fim": "Prova da UFSM",
        "imagem": "/cursos/EXTENSIVO_NOITE.png",
        "descricao": "Curso anual reforçado com atendimento tira-dúvidas, aulas de segunda a sexta-feira, direcionado ao Enem e UFSM. O aluno também receberá materiais didáticos voltados especificamente para a prova do Enem e ao vestibular da UFSM.",
        "horario": "Aulas Expositivas, das 19h10 às 22h30\nAtendimento Tira-Dúvidas agendado, das 18h às19h",
        "desconto": "Irmãos recebem 5% de desconto.",
        "caracteristicas": [
          "Acompanhamento aos alunos nos principais vestibulares do sul do Brasil, com a presença de professores e coordenadores;",
          "Curso extensivo reforçado pedagogicamente direcionado ao ENEM;",
          "Curso que mais aprova no Rio Grande do sul;",
          "Atendimento tira-dúvidas;",
          "Simulados Totem, UFSM e Evolucional;",
          "Eventos Totem por adesão: Totem Games e Aulão ENEM."
        ],
        "material": "Coleção Premium; Prova Box Públicas e Prova Box Enem; Hábilis.",
        "kit": [
          "1 camiseta",
          "1 moletom",
          "1 mochila Totem (padrão para todas as turmas)",
          "1 caderno",
          "1 copo Totem"
        ],
        "documentos": "Comprovante de residência, carteira de identidade e CPF. Para aluno menor de idade é necessário o CPF do responsável."
      }
    ],
    faqs: []
  }
];