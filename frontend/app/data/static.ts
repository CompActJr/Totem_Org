/**
 * @author Jonas 
 * @implNote Mocks e constantes estaticas que se mexer da ruim
 */

import type { Organization } from "~/types/organizations.types";

export const niveis = [
  {
    name: "Berçário",
    image: "/geral/NIVEL-BERÇARIO.jpg",
    link: "bercario"
  },
  {
    name: "Educação Infantil",
    image: "/geral/NIVEL-INFANTIL.jpg",
    link: "infantil"
  },
  {
    name: "Ensino Fundamental I",
    image: "/geral/NIVEL-FUNDAMENTAL-1.jpg",
    link: "fundamental-i"
  },
  {
    name: "Ensino Fundamental II",
    image: "/geral/NIVEL-FUNDAMENTAL-2.jpg",
    link: "fundamental-ii"
  },
  {
    name: "Ensino Médio",
    image: "/geral/NIVEL-MEDIO.jpg",
    link: "ensino-medio"
  }
]

//um mock para pegar de maneira estatica, se eles mudarem la dinamicamente ai vai ter que mudar em código
//entao sim isso é ruim, só deixa quieto por enquanto
export const footerColegios = [
  {
    "id": 1,
    "city": "Cachoeira do Sul",
    "address": "Rua Santa Rosa, 305",
    "phone": "(55) 3722-2977",
    "whatsapp": "(55) 9 9088-3334",
    "email": "cachoeira@colegiototem.com.br"
  },
  {
    "id": 2,
    "city": "Santa Maria",
    "address": "RS-287, KM 234, Trevo de Uglione",
    "phone": "55 9 9125-8480",
    "whatsapp": "(55) 9 9125-8480",
    "email": "santamaria@colegiototem.com.br"
  },
  {
    "id": 3,
    "city": "Cruz Alta",
    "address": "General Felipe Portinho, 1216",
    "phone": "(55) 3333-8569",
    "whatsapp": "(55) 9 9076-7990",
    "email": "cruzalta@colegiototem.com.br"
  }
];

//mesma coisa
export const footerVestibulares = [
   {
    "id": 1,
    "city": "Cachoeira do Sul",
    "address": "Rua Santa Rosa, 305",
    "phone": "(55) 3722-2977",
    "whatsapp": "(55) 9 9088-3334",
    "email": "cachoeira@colegiototem.com.br"
  },
  {
    "id": 2,
    "city": "Santa Maria",
    "address": "RS-287, KM 234, Trevo de Uglione",
    "phone": "55 9 9125-8480",
    "whatsapp": "(55) 9 9125-8480",
    "email": "santamaria@colegiototem.com.br"
  },
  {
    "id": 3,
    "city": "Cruz Alta",
    "address": "General Felipe Portinho, 1216",
    "phone": "(55) 3333-8569",
    "whatsapp": "(55) 9 9076-7990",
    "email": "cruzalta@colegiototem.com.br"
  }
];

export const unidadesColegios: Organization[] = [
  {
    _id: 1,
    "@type": "colegios",
    city: "Cachoeira do Sul",
    slug: "cachoeira-do-sul",
    image: "/infraestrutura/cachoeira-do-sul-colegios/SALA-ESTAR-1.png",
    cep: "98900-000",
    address: "Rua Santa Rosa, 305",
    phone: "(55) 3722-2977",
    whatsapp: "(55) 9 9088-3334",
    email: "cachoeira@colegiototem.com.br",
    facebook: "https://www.facebook.com/totemvestibular/",
    instagram: "https://www.instagram.com/totemvestibulares/",
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
    panoramas: [
      {
        _id: 1,
        name: "Hall de entrada",
        panorama: "/panoramas/cachoeira_do_sul_hall.jpeg"
      },
      {
        _id: 1,
        name: "Refeitório",
        panorama: "/panoramas/cachoeira_do_sul_refeitorio.jpeg"
      }
    ],
    diferenciais: [
      "Ambientes diferenciados para cada nível de ensino",
      "Calendário escolar prolongado",
      "Mundo Kids com refeitório",
      "Playground interno e externo com ambientes de recreação",
      "Momentos de vivências e de interação entre escola e família",
      "Apresentações artísticas com aptidões exploradas a partir da arte, da música, do teatro e da dança",
      "Projetos interdisciplinares de acordo com o interesse de cada estudante",
      "Metodologia com personagens que acompanham o desenvolvimento",
      "Horários diferenciados de entrada e saída: 13h15min até às 18h, de segunda à sexta",
      "Segurança aos estudantes e tranquilidade aos pais",
      "Material didático do J. Piaget sem custo adicional",
      "Plataforma digital do J. Piaget com mais de 500 jogos e conteúdo multimídia totalmente articulados com os conhecimentos abordados em sala de aula*",
      "Aulas de Educação Física e de Língua Inglesa (Projeto Bilíngue) com profissional especializado**",
      "Programa União Faz a Vida",
      "Projetos de transição dos alunos que se encontram no Nível II para o 1° ano do Ensino Fundamental",
      "Entrevistas individuais com os professores, no início do ano letivo",
      "Reuniões de acolhimento e orientação a cada turma",
      "Lindo Cerimonial de Formatura do Nível II, registrando a conclusão desta etapa da vida escolar",
      "Encontro Reflexivo da Aprendizagem Escolar",
      "Plataforma educacional Totem, possibilitando acesso e acompanhamento escolar dos alunos."
    ],
    depoimentos: [
      {
        _id: 1,
        nome: "Carine",
        imagem: "/geral/perfil.png",
        depoimento: "O Totem transmite confiança, segurança e estimula os alunos ao aprendizado. A equipe diretiva está constantemente envolvida e próxima dos alunos."
      }
    ],
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
    professores: [
      {
        _id: 1,
        nome: "Cássia Machado",
        areaEnsino: "Matemática",
        levels: [
          "Ensino Médio"
        ],
        imagemUrl: "/geral/perfil.png",
        texto: "para Professores pela FURG. Atuo há 15 anos em sala de aula, período em que tenho a oportunidade de guiar meus alunos na descoberta da magia e dos mistérios que a matemática revela, sendo uma linguagem que desenvolve raciocínio, criatividade e autonomia."
      }
    ],
    atividades: [
      {
        _id: 1,
        name: "Escolinha de Voleibol",
        turmas: [
          {
            _id: 1,
            nome: "Escolinha de Voleibol - 3º e 4º ano",
            detalhes: "Ginásio. Sextas, das 9h30 às 10h30"
          },
          {
            _id: 2,
            nome: "Escolinha de Voleibol - 5º ano",
            detalhes: "Ginásio. Sextas, das 10h30 às 11h30"
          },
          {
            _id: 3,
            nome: "Escolinha de Voleibol - 6º ao 8º ano + Médio",
            detalhes: "Ginásio. Sextas, das 13h40 às 15h40"
          }
        ],
        professorNome: "Jonas",
        image: "/atividades/ESCOLINHA-DE-VOLEIBOL.jpg"
      }
    ],
    cursos: [],
    faqs: []
  },
  {
    _id: 2,
    "@type": "colegios",
    city: "Santa Maria",
    slug: "santa-maria",
    image: "/infraestrutura/santa-maria-colegios/SALA-1.png",
    cep: "97010-033",
    address: "RS-287, KM 234, Trevo de Uglione",
    phone: "55 9 9125-8480",
    whatsapp: "(55) 9 9125-8480",
    email: "santamaria@colegiototem.com.br",
    facebook: "https://www.facebook.com/totemvestibular/",
    instagram: "https://www.instagram.com/totemvestibulares/",
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
    diferenciais: [
      "Atendimento personalizado, afetuoso, com equipe altamente qualificada e experiente;",
      "Estrutura física moderna, planejada para maior segurança, conforto e produtividade detodos",
      "Projeto pedagógico focado no resultado e na formação para a vida real",
      "Vivências em família com apresentações de talentos (arte, música, dança, poesia e teatro)",
      "Concurso de Fotografia, Literário e Simulados",
      "Técnicas contextualizadas à valorização do meio ambiente",
      "Participação na Olimpíada de Matemática - OBMEP e demais olimpíadas do conhecimento",
      "Realização do Simulado Enemzinho ou Avaliação Unificada Totem (AUT) como preparação para as provas do ENEM",
      "Viagens de estudo e visitas às universidades;",
      "Acompanhamento do estudante às principais excursões e eventos do Totem Vestibulares para integração e familiarização com a rede"
    ],
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
  },
  {
    _id: 3,
    "@type": "colegios",
    city: "Cruz Alta",
    slug: "cruz-alta",
    image: "/infraestrutura/cruz-alta-colegios/ALFABETIZAÇÃO-1.png",
    cep: "98700-000",
    address: "General Felipe Portinho, 1216",
    phone: "(55) 3333-8569",
    whatsapp: "(55) 9 9076-7990",
    email: "cruzalta@colegiototem.com.br",
    facebook: "https://www.facebook.com/totemvestibular/",
    instagram: "https://www.instagram.com/totemvestibulares/",
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
    diferenciais: [
      "Atendimento personalizado, afetuoso, com equipe altamente qualificada e experiente;",
      "Estrutura física moderna, planejada para maior segurança, conforto e produtividade detodos",
      "Projeto pedagógico focado no resultado e na formação para a vida real",
      "Material didático colorido, atualizado e com suporte digital, em plataformas modernas e interativas",
      "Reconhecido pelo ambiente familiar – Família Totem – e pelo total apoio ao estudante e seus responsáveis",
      "Salas de aula com mobiliário adequado a cada nível de ensino, climatizadas, com acesso à internet e recursos multimídia completos"
    ],
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
  }
];


export const unidadesVestibulares: Organization[] = [
  {
    _id: 4,
    "@type": "vestibulares",
    city: "Santa Rosa",
    slug: "santa-rosa",
    image: "/infraestrutura/santa-rosa-vestibulares/ALFABETIZAÇÃO-1.png",
    cep: "98900-000",
    address: "Rua Santa Rosa, 305",
    phone: "(55) 2120-2003",
    whatsapp: "(55) 9 9999-2002",
    email: "cachoeira@colegiototem.com.br",
    facebook: "https://www.facebook.com/totemvestibular/",
    instagram: "https://www.instagram.com/totemvestibulares/",
    maps: "",
    levels: [],
    banners: [
      "/banners/BANNER_PV_SANTA_ROSA.jpg",
    ],
    panoramas: [],
    diferenciais: [],
    depoimentos: [
      {
        _id: 1,
        nome: "Pedro Corsini - Medicina UFSM e UFRGS",
        imagem: "",
        depoimento: "O mais importante da minha passagem pelo Totem foi minha evolução, não apenas como estudante, mas como pessoa também.",
      },
    ],
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
    faqs: [
      {
        _id: 1,
        question: "As turmas Medicina PRIME e Medicina PLUS são apenas no turno da manhã?",
        answer: "Sim. As aulas são presenciais no turno da manhã, das 8h às 12h20.\n\nDurante a tarde, os estudantes participam dos atendimentos tira-dúvidas e, no caso da turma Medicina PLUS, também contam com estudo ativo e Totemapping."
      },
    ],
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
    maps: "",
    levels: [],
    banners: [
      "/banners/BANNER_PV_SANTA_MARIA.jpg",
    ],
    panoramas: [],
    diferenciais: [],
    depoimentos: [
      {
        _id: 2,
        nome: "Isabela Marra - Medicina Veterinária UFSM",
        imagem: "",
        depoimento: "O Totem é muito mais que um cursinho, ele realmente se torna a tua família, com quem tu pode contar, chorar, sorrir e soltar as risadas mais sinceras.",
      },
    ],
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
    faqs: [
      {
        _id: 2,
        question: "Por que o valor varia conforme o turno do Extensivo?",
        answer: "O Totem oferece os Extensivos Manhã, Tarde e Noite.\n\nO Extensivo Manhã inicia em março e possui três períodos diários.\n\nO Extensivo Tarde inicia em abril e também possui três períodos diários.\n\nJá o Extensivo Noite inicia em abril e conta com dois períodos diários.\n\nComo as cargas horárias são diferentes, os valores também variam entre os turnos."
      },
    ]
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
    maps: "",
    levels: [],
    banners: [
      "/banners/BANNER_PV_IJUI.jpg",
    ],
    panoramas: [],
    diferenciais: [],
    depoimentos: [
      {
        _id: 4,
        nome: "Luisa Scheeren Wust – Medicina UNIJUÍ 2025/2",
        imagem: "",
        depoimento: "O Totem foi essencial para a minha aprovação. Só tenho a agradecer pelos ensinamentos. Sou completamente sincera ao dizer que é um ótimo cursinho e com certeza vou recomendar para mais pessoas.",
      },
    ],
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
    faqs: [
      {
        _id: 3,
        question: "Estou no 3º ano do Ensino Médio e estudo pela manhã e à tarde. Qual turma presencial é mais indicada?",
        answer: "Se o seu foco é o ENEM e o Vestibular da UFSM, a turma mais indicada é o Extensivo Noite.\n\nAs aulas iniciam em abril, permitindo que você dedique o início do ano à escola e, ao mesmo tempo, revise todo o conteúdo do Ensino Médio no cursinho."
      },
    ]
  }
];