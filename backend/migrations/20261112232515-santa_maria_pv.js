import { syncCounter } from './utils/syncCounter.js';

/**
 * @param db {import('mongodb').Db}
 * @param client {import('mongodb').MongoClient}
 * @returns {Promise<void>}
 */
export const up = async (db, client) => {
    await db.collection('organizations').insertOne(
        {
            _id: 5,
            '@type': 'vestibulares',
            city: 'Santa Maria',
            slug: 'santa-maria',
            image: '/infraestrutura/santa-maria-vestibulares/HALL.jpg',
            cep: '97010-033',
            address: 'Rua dos Andradas, 1799',
            phone: '(55) 3222-8833',
            whatsapp: '(55) 9 9922-8969',
            email: 'secretaria.santamaria@soutotem.com.br',
            facebook: 'https://www.facebook.com/totemvestibular/',
            instagram: 'https://www.instagram.com/totemvestibulares/',
            maps: '',
            levels: [],
            banners: ['/banners/BANNER_PV_SANTA_MARIA.jpg'],
            panoramas: [],
            diferenciais: [],
            depoimentos: [
                {
                    _id: 3,
                    nome: 'Isabela Marra - Medicina Veterinária UFSM',
                    imagem: '',
                    depoimento: 'O Totem é muito mais que um cursinho, ele realmente se torna a tua família, com quem tu pode contar, chorar, sorrir e soltar as risadas mais sinceras.',
                },
            ],
            infraestrutura: [
                '/infraestrutura/santa-maria-vestibulares/AREA_DE_CONVIVIO.jpg',
                '/infraestrutura/santa-maria-vestibulares/ESPACO_GOURMET.jpg',
                '/infraestrutura/santa-maria-vestibulares/HALL.jpg',
                '/infraestrutura/santa-maria-vestibulares/RECEPCAO.jpg',
                '/infraestrutura/santa-maria-vestibulares/SALA_DE_ATENDIMENTO.jpg',
                '/infraestrutura/santa-maria-vestibulares/SALA_DE_AULA_1.jpg',
                '/infraestrutura/santa-maria-vestibulares/SALA_DE_AULA_2.jpg',
                '/infraestrutura/santa-maria-vestibulares/SALA_DE_ESTUDOS.jpg',
                '/infraestrutura/santa-maria-vestibulares/SECRETARIA.jpg',
            ],
            professores: [],
            atividades: [],
            cursos: [
                {
                    _id: 4,
                    titulo: 'MEDPLUS',
                    inicio: '23 de fevereiro de 2026',
                    fim: 'Até a prova da UFRGS ou UFSM',
                    imagem: '/cursos/MED_PLUS.png',
                    descricao: 'Curso com a carga horária dividida em aulas expositivas e um reforçado atendimento tira-dúvidas orientado pelos professores. Preparação para o Enem, UFRGS, UFSM, UFSC e aos vestibulares das universidades particulares. Turma reduzida de alunos que oferece acompanhamento da coordenação especializada, materiais didáticos que contemplam o Enem e vestibulares do sul do Brasil e direcionada a alunos que necessitam de mais aprofundamento nos conteúdos.',
                    horario: 'Aulas Expositivas de segunda a sexta-feira, das 8h às 12h20 / Estudo ativo das 13h30 às 15h30\nEstudo Orientado das 15h30 às 17h30 (com atendimento Tira-Dúvidas)',
                    desconto: 'Irmãos recebem 5% de desconto.',
                    caracteristicas: [
                        'Projeto arquitetônico benéfico ao aprendizado;',
                        'Curso que mais aprova no Rio Grande do Sul;',
                        'Acompanhamento aos alunos nos principais vestibulares do sul do Brasil, com a presença de professores e coordenadores;',
                        'Espaço lounge e gourmet;',
                        'Simulados Totem, UFSM, UFRGS, Particulares e Evolucional;',
                        'Acesso ao Totem On',
                        'Vídeos de resoluções dos testes mais difíceis das provas do Enem, UFRGS e UFSM contemplados nos materiais',
                        'Aulas de atualidades, interdisciplinas, mapeamento de provas e revisão para os vestibulares de inverno',
                        'Suporte da coordenação Medicina;',
                        'Estudo Orientado com atendimento tira-dúvidas específico para a turma;',
                        'Aulão Revisão Enem.',
                    ],
                    material: 'Coleção Med Plus; Prova Box Federais RS, Prova Box Santa Catarina, Prova Box Particulares e Prova Box Enem; Hábilis.',
                    kit: ['2 camisetas', '1 moletom', '1 mochila Totem (padrão para todas as turmas)', '1 caderno', '1 copo Totem', '1 post-it (embalagem mais simples)', '1 estojo'],
                    documentos: 'Comprovante de residência, carteira de identidade e CPF. Para aluno menor de idade é necessário o CPF do responsável.',
                },
                {
                    _id: 5,
                    titulo: 'Medicina Prime',
                    inicio: '09 de março de 2026',
                    fim: 'Prova da UFRGS ou UFSM',
                    imagem: '/cursos/MEDICINA_PRIME.png',
                    descricao: 'Curso em turno único pela manhã e acompanhado por atendimento tira-dúvidas específico para a turma no turno da tarde. Preparação para o Enem, UFRGS, UFSM, UFSC e universidades particulares. Turma reduzida de alunos que oferece acompanhamento da coordenação especializada e materiais didáticos que contemplam a prova do Enem, UFRGS, UFSM, UFSC e Particulares.',
                    horario: 'Aulas Expositivas de segunda a sexta-feira, das 8h às 12h20\nEstudo Orientado das 14h às 15h (com atendimento Tira-Dúvidas)',
                    desconto: 'Irmãos recebem 5% de desconto.',
                    caracteristicas: [
                        'Projeto arquitetônico benéfico ao aprendizado;',
                        'Curso que mais aprova no Rio Grande do Sul;',
                        'Acompanhamento aos alunos nos principais vestibulares do sul do Brasil, com a presença de professores e coordenadores;',
                        'Espaço lounge e gourmet;',
                        'Simulados Totem, UFSM, UFRGS, e Evolucional;',
                        'Suporte da coordenação Medicina;',
                        'Estudo Orientado com atendimento tira-dúvidas específico para a turma;',
                        'Aulão Revisão Enem.',
                    ],
                    material: 'Coleção Med Plus; Pova Box Federais RS, Prova Box Santa Catarina, Prova Box Particulares e Prova Box Enem; Hábilis.',
                    kit: ['2 camisetas', '1 moletom', '1 mochila Totem (padrão para todas as turmas)', '1 caderno', '1 copo Totem', '1 post-it (embalagem mais simples)', '1 estojo'],
                    documentos: 'Comprovante de residência, carteira de identidade e CPF. Para aluno menor de idade é necessário o CPF do responsável.',
                },
                {
                    _id: 6,
                    titulo: 'Extensivo Manhã',
                    inicio: '16 de março de 2026',
                    fim: 'Prova da UFSM',
                    imagem: '/cursos/EXTENSIVO_MANHA.png',
                    descricao: 'Curso anual reforçado com atendimento tira-dúvidas, aulas de segunda a sexta-feira, direcionado ao Enem e UFSM. O aluno também receberá materiais didáticos voltados especificamente para a prova do Enem e ao vestibular da UFSM.',
                    horario: 'Aulas Expositivas, das 8h às 11h55\nAtendimento Tira-Dúvidas, das 18h às 19h',
                    desconto: 'Irmãos recebem 5% de desconto.',
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
                    _id: 7,
                    titulo: 'Extensivo Tarde',
                    inicio: '13 de abril de 2026',
                    fim: 'Prova da UFSM',
                    imagem: '/cursos/EXTENSIVO_TARDE.png',
                    descricao: 'Curso anual reforçado com atendimento tira-dúvidas, aulas de segunda a sexta-feira, direcionado ao Enem e UFSM. O aluno também receberá materiais didáticos voltados especificamente para a prova do Enem e ao vestibular da UFSM.',
                    horario: 'Aulas expositivas, das 13h30 às 17h50\nAtendimento Tira-Dúvidas das 18h às 19h',
                    desconto: 'Irmãos recebem 5% de desconto.',
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
                    _id: 8,
                    titulo: 'Extensivo Noite',
                    inicio: '13 de abril de 2026',
                    fim: 'Prova da UFSM',
                    imagem: '/cursos/EXTENSIVO_NOITE.png',
                    descricao: 'Curso anual reforçado com atendimento tira-dúvidas, aulas de segunda a sexta-feira, direcionado ao Enem e UFSM. O aluno também receberá materiais didáticos voltados especificamente para a prova do Enem e ao vestibular da UFSM.',
                    horario: 'Aulas expositivas das 19h10 às 22h25\nAtendimento Tira-Dúvidas das 18h às 19h',
                    desconto: 'Irmãos recebem 5% de desconto.',
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
                    _id: 9,
                    titulo: 'Turma PSS 1 UFSM',
                    inicio: '11 de agosto de 2025',
                    fim: 'Vestibular da UFSM',
                    imagem: '/cursos/PSS1.png',
                    descricao: 'Turma focada na preparação para a realização das provas do PSS 1 da UFSM. Oferece também apoio e reforço nos conteúdos estudados no 1º ano do ensino médio.',
                    horario: 'Horário das Aulas\nAulas Expositivas: das 18h30 às 21h15, de segundas, terças e quintas.',
                    desconto: '',
                    caracteristicas: [
                        'Aulão Revisão Enem e UFSM - Evento em que os professores irão lançar as últimas dicas na véspera do vestibular.',
                        'Simulado PSS 1',
                        'Reforço Escolar',
                    ],
                    material: 'Coleção UFSM PSS 1 (Teoria e exercícios para prova do PSS 1 UFSM)',
                    kit: [],
                    documentos: 'Comprovante de residência, carteira de identidade e CPF. Para aluno menor de idade é necessário o CPF do responsável.',
                },
                {
                    _id: 10,
                    titulo: 'Turma PSS 2 UFSM',
                    inicio: '11 de agosto de 2025',
                    fim: 'Vestibular da UFSM',
                    imagem: '/cursos/PSS2.png',
                    descricao: 'Turma focada na preparação para a realização das provas do PSS 2 da UFSM. Oferece também apoio e reforço nos conteúdos estudados no 2º ano do ensino médio.',
                    horario: 'Horário das Aulas\nAulas Expositivas: das 18h30 às 21h15, de segundas, quartas e quintas.',
                    desconto: '',
                    caracteristicas: [
                        'Aulão Revisão Enem e UFSM - Evento em que os professores irão lançar as últimas dicas na véspera do vestibular.',
                        'Simulado PSS 2',
                        'Reforço Escolar',
                    ],
                    material: 'Coleção UFSM PSS 2 (Teoria e exercícios para prova do PSS 2 UFSM)',
                    kit: [],
                    documentos: 'Comprovante de residência, carteira de identidade e CPF. Para aluno menor de idade é necessário o CPF do responsável.',
                },
                {
                    _id: 11,
                    titulo: 'Turma PSS 3 UFSM',
                    inicio: '11 de agosto de 2025',
                    fim: 'Vestibular da UFSM',
                    imagem: '/cursos/PSS3.png',
                    descricao: 'Turma focada na preparação para a realização das provas do PSS 3 da UFSM. Oferece também apoio e reforço nos conteúdos estudados no 3º ano do ensino médio.',
                    horario: 'Horário das Aulas\nAulas Expositivas: das 18h30 às 21h15, de segundas, terças e quintas.',
                    desconto: '',
                    caracteristicas: [
                        'Aulão Revisão Enem e UFSM - Evento em que os professores irão lançar as últimas dicas na véspera do vestibular.',
                        'Simulado PSS 3',
                        'Reforço Escolar',
                    ],
                    material: 'Coleção UFSM PSS 3 (Teoria e exercícios para prova do PSS 3 UFSM)',
                    kit: [],
                    documentos: 'Comprovante de residência, carteira de identidade e CPF. Para aluno menor de idade é necessário o CPF do responsável.',
                },
            ],
            faqs: [
                {
                    _id: 2,
                    question: 'Por que o valor varia conforme o turno do Extensivo?',
                    answer: 'O Totem oferece os Extensivos Manhã, Tarde e Noite.\n\nO Extensivo Manhã inicia em março e possui três períodos diários.\n\nO Extensivo Tarde inicia em abril e também possui três períodos diários.\n\nJá o Extensivo Noite inicia em abril e conta com dois períodos diários.\n\nComo as cargas horárias são diferentes, os valores também variam entre os turnos.',
                },
            ],
        },
    );

    await syncCounter(db, 'organizations', 5);
    await syncCounter(db, 'depoimentos', 3);
    await syncCounter(db, 'cursos', 11);
    await syncCounter(db, 'faqs', 2);
};

/**
 * @param db {import('mongodb').Db}
 * @param client {import('mongodb').MongoClient}
 * @returns {Promise<void>}
 */
export const down = async (db, client) => {

};
