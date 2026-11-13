import { syncCounter } from './utils/syncCounter.js';

/**
 * @param db {import('mongodb').Db}
 * @param client {import('mongodb').MongoClient}
 * @returns {Promise<void>}
 */
export const up = async (db, client) => {
    await db.collection('organizations').insertOne(
        {
            _id: 4,
            '@type': 'vestibulares',
            city: 'Santa Rosa',
            slug: 'santa-rosa',
            image: '/infraestrutura/santa-rosa-vestibulares/ALFABETIZAÇÃO-1.png',
            cep: '98900-000',
            address: 'Rua Santa Rosa, 305',
            phone: '(55) 2120-2003',
            whatsapp: '(55) 9 9999-2002',
            email: 'cachoeira@colegiototem.com.br',
            facebook: 'https://www.facebook.com/totemvestibular/',
            instagram: 'https://www.instagram.com/totemvestibulares/',
            maps: '',
            levels: [],
            banners: ['/banners/BANNER_PV_SANTA_ROSA.jpg'],
            panoramas: [],
            diferenciais: [],
            depoimentos: [
                {
                    _id: 2,
                    nome: 'Pedro Corsini - Medicina UFSM e UFRGS',
                    imagem: '',
                    depoimento: 'O mais importante da minha passagem pelo Totem foi minha evolução, não apenas como estudante, mas como pessoa também.',
                },
            ],
            infraestrutura: [
                '/infraestrutura/santa-rosa-vestibulares/AREA_DE_CONVIVIO.jpg',
                '/infraestrutura/santa-rosa-vestibulares/ESPACO_GOURMET.jpg',
                '/infraestrutura/santa-rosa-vestibulares/HALL.jpg',
                '/infraestrutura/santa-rosa-vestibulares/RECEPCAO.jpg',
                '/infraestrutura/santa-rosa-vestibulares/SALA_DE_ATENDIMENTO.jpg',
                '/infraestrutura/santa-rosa-vestibulares/SALA_DE_AULA_1.jpg',
                '/infraestrutura/santa-rosa-vestibulares/SALA_DE_AULA_2.jpg',
                '/infraestrutura/santa-rosa-vestibulares/SALA_DE_ESTUDOS.jpg',
                '/infraestrutura/santa-rosa-vestibulares/SECRETARIA.jpg',
            ],
            professores: [],
            atividades: [],
            cursos: [
                {
                    _id: 1,
                    titulo: 'Extensivo Manhã',
                    inicio: '23 de março de 2026',
                    fim: 'Prova da UFSM',
                    imagem: '/cursos/EXTENSIVO_MANHA.png',
                    descricao: 'Curso anual reforçado com atendimento tira-dúvidas, aulas de segunda a sexta-feira, direcionado ao Enem e UFSM. O aluno também receberá materiais didáticos voltados especificamente para a prova do Enem e ao vestibular da UFSM.',
                    horario: 'Aulas Expositivas, das 8h às 11h45\nAtendimento Tira-Dúvidas das 18h às 19h',
                    desconto: '',
                    caracteristicas: [
                        'Acompanhamento aos alunos nos principais vestibulares do sul do Brasil, com a presença de professores e coordenadores;',
                        'Curso extensivo reforçado pedagogicamente direcionado ao ENEM;',
                        'Curso que mais aprova no Rio Grande do sul;',
                        'Atendimento tira-dúvidas;',
                        'Aulão Revisão Enem;',
                        'Simulados Totem, UFSM e Evolucional;',
                        'Eventos Totem por adesão: Totem Games e Aulão ENEM',
                    ],
                    material: 'Coleção Premium; Prova Box Públicas e Prova Box Enem; Hábilis.',
                    kit: ['1 camiseta', '1 moletom', '1 mochila Totem (padrão para todas as turmas)', '1 caderno', '1 copo Totem'],
                    documentos: 'Comprovante de residência, carteira de identidade e CPF. Para aluno menor de idade é necessário o CPF do responsável.',
                },
                {
                    _id: 2,
                    titulo: 'Extensivo Noite',
                    inicio: '22 de abril de 2026',
                    fim: 'Prova do ENEM',
                    imagem: '/cursos/EXTENSIVO_NOITE.png',
                    descricao: 'Curso anual reforçado com atendimento tira-dúvidas, aulas de segunda a sexta-feira, direcionado ao Enem. O aluno também receberá materiais didáticos voltados especificamente para a prova do Enem.',
                    horario: 'Aulas Expositivas, das 19h10 às 22h30\nAtendimento Tira-Dúvidas das 18h às 19h',
                    desconto: 'Irmãos recebem 5% de desconto.',
                    caracteristicas: [
                        'Acompanhamento aos alunos nos principais vestibulares do sul do Brasil, com a presença de professores e coordenadores;',
                        'Curso extensivo reforçado pedagogicamente direcionado ao ENEM;',
                        'Curso que mais aprova no Rio Grande do sul;',
                        'Atendimento tira-dúvidas;',
                        'Aulão Revisão Enem;',
                        'Simulado Evolucional;',
                        'Eventos Totem por adesão: Totem Games e Aulão ENEM',
                    ],
                    material: 'Coleção Premium; Prova Box Públicas e Prova Box Enem; Hábilis.',
                    kit: ['1 camiseta', '1 moletom', '1 mochila Totem (padrão para todas as turmas)', '1 caderno', '1 copo Totem'],
                    documentos: 'Comprovante de residência, carteira de identidade e CPF. Para aluno menor de idade é necessário o CPF do responsável.',
                },
                {
                    _id: 3,
                    titulo: 'Medicina Integral',
                    inicio: '23 de fevereiro de 2026',
                    fim: 'Prova da UFSM',
                    imagem: '/cursos/MED_INTEGRAL.png',
                    descricao: 'Curso em turno integral com a carga horária dividida em aulas expositivas e estudo orientado pelos professores. Preparação para o Enem, UFRGS, UFSM, UFSC e aos vestibulares das universidades particulares. Turma reduzida de alunos que oferece acompanhamento da coordenação especializada, materiais didáticos que contemplam o Enem e vestibulares do sul do Brasil e direcionada a alunos que precisam de maior aprofundamento nos conteúdos.',
                    horario: 'Aulas Expositivas de segunda a sexta-feira, das 8h às 11h45\nEstudo Orientado das 15h30 às 17h10 (com atendimento Tira-Dúvidas)',
                    desconto: 'Irmãos recebem 5% de desconto',
                    caracteristicas: [
                        'Projeto arquitetônico benéfico ao aprendizado;',
                        'Curso que mais aprova no Rio Grande do Sul;',
                        'Acompanhamento aos alunos nos principais vestibulares do sul do Brasil, com a presença de professores e coordenadores;',
                        'Espaço lounge e gourmet;',
                        'Simulados Totem, UFSM, UFRGS, Particulares e Evolucional;',
                        'Suporte da coordenação Medicina;',
                        'Estudo Orientado com atendimento tira-dúvidas específico para a turma;',
                        'Aulão Revisão Enem.',
                    ],
                    material: 'Coleção Med Plus; Prova Box Federais RS, Prova Box Santa Catarina, Prova Box Particulares e Prova Box Enem; Hábilis.',
                    kit: ['2 camisetas', '1 moletom', '1 mochila Totem (padrão para todas as turmas)', '1 caderno', '1 copo Totem', '1 post-it (embalagem mais simples)', '1 estojo'],
                    documentos: 'Comprovante de residência, carteira de identidade e CPF. Para aluno menor de idade é necessário o CPF do responsável.',
                },
            ],
            faqs: [
                {
                    _id: 1,
                    question: 'As turmas Medicina PRIME e Medicina PLUS são apenas no turno da manhã?',
                    answer: 'Sim. As aulas são presenciais no turno da manhã, das 8h às 12h20.\n\nDurante a tarde, os estudantes participam dos atendimentos tira-dúvidas e, no caso da turma Medicina PLUS, também contam com estudo ativo e Totemapping.',
                },
            ],
        },
    );

    await syncCounter(db, 'organizations', 4);
    await syncCounter(db, 'depoimentos', 2);
    await syncCounter(db, 'cursos', 3);
    await syncCounter(db, 'faqs', 1);
};

/**
 * @param db {import('mongodb').Db}
 * @param client {import('mongodb').MongoClient}
 * @returns {Promise<void>}
 */
export const down = async (db, client) => {
    
};
