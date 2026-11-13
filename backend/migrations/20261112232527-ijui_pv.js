import { syncCounter } from './utils/syncCounter.js';

/**
 * @param db {import('mongodb').Db}
 * @param client {import('mongodb').MongoClient}
 * @returns {Promise<void>}
 */
export const up = async (db, client) => {
    await db.collection('organizations').insertOne(
        {
            _id: 6,
            '@type': 'vestibulares',
            city: 'Ijuí',
            slug: 'ijui',
            image: '/infraestrutura/ijui-vestibulares/HALL.jpg',
            cep: '98700-000',
            address: 'Rua Álvaro Chaves, 488',
            phone: '(55) 3333-8569',
            whatsapp: '(55) 9 9142-7470',
            email: 'secretaria.ijui@soutotem.com.br',
            facebook: 'https://www.facebook.com/totemvestibular/',
            instagram: 'https://www.instagram.com/totemvestibulares/',
            maps: '',
            levels: [],
            banners: ['/banners/BANNER_PV_IJUI.jpg'],
            panoramas: [],
            diferenciais: [],
            depoimentos: [
                {
                    _id: 4,
                    nome: 'Luisa Scheeren Wust – Medicina UNIJUÍ 2025/2',
                    imagem: '',
                    depoimento: 'O Totem foi essencial para a minha aprovação. Só tenho a agradecer pelos ensinamentos. Sou completamente sincera ao dizer que é um ótimo cursinho e com certeza vou recomendar para mais pessoas.',
                },
            ],
            infraestrutura: [
                '/infraestrutura/ijui-vestibulares/AREA_DE_CONVIVIO.jpg',
                '/infraestrutura/ijui-vestibulares/ESPACO_GOURMET.jpg',
                '/infraestrutura/ijui-vestibulares/HALL.jpg',
                '/infraestrutura/ijui-vestibulares/RECEPCAO.jpg',
                '/infraestrutura/ijui-vestibulares/SALA_DE_ATENDIMENTO.jpg',
                '/infraestrutura/ijui-vestibulares/SALA_DE_AULA_1.jpg',
                '/infraestrutura/ijui-vestibulares/SALA_DE_AULA_2.jpg',
                '/infraestrutura/ijui-vestibulares/SALA_DE_ESTUDOS.jpg',
                '/infraestrutura/ijui-vestibulares/SECRETARIA.jpg',
            ],
            professores: [],
            atividades: [],
            cursos: [
                {
                    _id: 12,
                    titulo: 'Medicina Integral',
                    inicio: '23 de fevereiro de 2026',
                    fim: 'Prova da UFSM',
                    imagem: '/cursos/MED_INTEGRAL.png',
                    descricao: 'Curso em turno integral com a carga horária dividida em aulas expositivas e estudo orientado pelos professores. Preparação para o Enem, UFRGS, UFSM, UFSC e aos vestibulares das universidades particulares. Turma reduzida de alunos que oferece acompanhamento da coordenação especializada, materiais didáticos que contemplam o Enem e vestibulares do sul do Brasil e direcionada a alunos que precisam de maior aprofundamento nos conteúdos.',
                    horario: 'Aulas Expositivas de segunda a sexta-feira, das 8h às 11h45 / das 13h30 às 15h10\nEstudo Orientado das 15h30 às 17h30 (com atendimento Tira-Dúvidas)',
                    desconto: 'Irmãos recebem 5% de desconto.',
                    caracteristicas: [
                        'Projeto arquitetônico benéfico ao aprendizado;',
                        'Curso que mais aprova no Rio Grande do Sul;',
                        'Acompanhamento aos alunos nos principais vestibulares do sul do Brasil, com a presença de professores e coordenadores;',
                        'Espaço lounge e gourmet;',
                        'Simulados Totem, UFSM, UFRGS, Particulares e Evolucional;',
                        'Suporte da coordenação Medicina;',
                        'Estudo Orientado com atendimento tira-dúvidas específico para a turma;',
                        'Acesso ao Totem On;',
                        'Aulão Revisão Enem.',
                    ],
                    material: 'Coleção Med Plus; Prova Box Federais RS, Prova Box Santa Catarina, Prova Box Particulares e Prova Box Enem; Hábilis.',
                    kit: ['2 camisetas', '1 moletom', '1 mochila Totem (padrão para todas as turmas)', '1 caderno', '1 copo Totem', '1 post-it (embalagem mais simples)', '1 estojo'],
                    documentos: 'Comprovante de residência, carteira de identidade e CPF. Para aluno menor de idade é necessário o CPF do responsável.',
                },
                {
                    _id: 13,
                    titulo: 'MEDICINA SEMI-INTEGRAL',
                    inicio: '9 de março de 2026',
                    fim: 'Prova da UFSM',
                    imagem: '/cursos/MEDICINA_SEMI_INTEGRAL.png',
                    descricao: 'Curso em turno único pela manhã e acompanhado por atendimento tira-dúvidas específico para a turma no turno da tarde. Preparação para o Enem, UFRGS, UFSM, UFSC e universidades particulares. Turma reduzida de alunos que oferece acompanhamento da coordenação especializada e materiais didáticos que contemplam a prova do Enem, UFRGS, UFSM, UFSC e Particulares',
                    horario: 'Aulas Expositivas de segunda a sexta-feira, das 7h50 às 11h55\nAtendimento Tira-Dúvidas agendado, das 18h às 19h',
                    desconto: 'Irmãos recebem 5% de desconto.',
                    caracteristicas: [
                        'Projeto arquitetônico benéfico ao aprendizado;',
                        'Curso que mais aprova no Rio Grande do Sul;',
                        'Acompanhamento aos alunos nos principais vestibulares do sul do Brasil, com a presença de professores e coordenadores;',
                        'Turma reduzida para melhor rendimento do aluno;',
                        'Simulados TOTEM, UFSM, UFRGS e Evolucional;',
                        'Espaço gourmet;',
                        'Aulão Revisão Enem.',
                    ],
                    material: 'Coleção Med Plus; Prova Box Federais RS, Prova Box Santa Catarina, Prova Box Particulares e Prova Box Enem; Hábilis.',
                    kit: ['2 camisetas', '1 moletom', '1 mochila Totem (padrão para todas as turmas)', '1 caderno', '1 copo Totem', '1 post-it (embalagem mais simples)', '1 estojo'],
                    documentos: 'Comprovante de residência, carteira de identidade e CPF. Para aluno menor de idade é necessário o CPF do responsável.',
                },
                {
                    _id: 14,
                    titulo: 'Extensivo Noite',
                    inicio: '30 de março de 2026',
                    fim: 'Prova da UFSM',
                    imagem: '/cursos/EXTENSIVO_NOITE.png',
                    descricao: 'Curso anual reforçado com atendimento tira-dúvidas, aulas de segunda a sexta-feira, direcionado ao Enem e UFSM. O aluno também receberá materiais didáticos voltados especificamente para a prova do Enem e ao vestibular da UFSM.',
                    horario: 'Aulas Expositivas, das 19h10 às 22h30\nAtendimento Tira-Dúvidas agendado, das 18h às19h',
                    desconto: 'Irmãos recebem 5% de desconto.',
                    caracteristicas: [
                        'Acompanhamento aos alunos nos principais vestibulares do sul do Brasil, com a presença de professores e coordenadores;',
                        'Curso extensivo reforçado pedagogicamente direcionado ao ENEM;',
                        'Curso que mais aprova no Rio Grande do sul;',
                        'Atendimento tira-dúvidas;',
                        'Simulados Totem, UFSM e Evolucional;',
                        'Eventos Totem por adesão: Totem Games e Aulão ENEM.',
                    ],
                    material: 'Coleção Premium; Prova Box Públicas e Prova Box Enem; Hábilis.',
                    kit: ['1 camiseta', '1 moletom', '1 mochila Totem (padrão para todas as turmas)', '1 caderno', '1 copo Totem'],
                    documentos: 'Comprovante de residência, carteira de identidade e CPF. Para aluno menor de idade é necessário o CPF do responsável.',
                },
            ],
            faqs: [
                {
                    _id: 3,
                    question: 'Estou no 3º ano do Ensino Médio e estudo pela manhã e à tarde. Qual turma presencial é mais indicada?',
                    answer: 'Se o seu foco é o ENEM e o Vestibular da UFSM, a turma mais indicada é o Extensivo Noite.\n\nAs aulas iniciam em abril, permitindo que você dedique o início do ano à escola e, ao mesmo tempo, revise todo o conteúdo do Ensino Médio no cursinho.',
                },
            ],
        },
    );

    await syncCounter(db, 'organizations', 6);
    await syncCounter(db, 'depoimentos', 4);
    await syncCounter(db, 'cursos', 14);
    await syncCounter(db, 'faqs', 3);
};

/**
 * @param db {import('mongodb').Db}
 * @param client {import('mongodb').MongoClient}
 * @returns {Promise<void>}
 */
export const down = async (db, client) => {

};
