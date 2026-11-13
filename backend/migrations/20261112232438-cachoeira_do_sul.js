import { syncCounter } from './utils/syncCounter.js';

/**
 * @param db {import('mongodb').Db}
 * @param client {import('mongodb').MongoClient}
 * @returns {Promise<void>}
 */
export const up = async (db, client) => {
    await db.collection('organizations').insertOne({
        _id: 1,
        '@type': 'colegios',
        city: 'Cachoeira do Sul',
        slug: 'cachoeira-do-sul',
        image: '/infraestrutura/cachoeira-do-sul-colegios/SALA-ESTAR-1.png',
        cep: '98900-000',
        address: 'Avenida Presidente Vargas, 1958',
        phone: '51 3722-2577',
        whatsapp: ' 51 9 9599-2004',
        email: 'colegiocachoeira@soutotem.com.br',
        facebook: 'https://www.facebook.com/ColegioTotemCachoeira',
        instagram: 'https://www.instagram.com/colegiototem/',
        maps: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d863.4459269831603!2d-52.90042467518325!3d-30.043062487779572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10bd3a1f59f31b7%3A0x8ee2bf50c91b4ae3!2sCol%C3%A9gio%20Totem%20Cachoeira%20do%20Sul!5e0!3m2!1spt-BR!2sbr!4v1784490880093!5m2!1spt-BR!2sbr',
        levels: ['Berçário', 'Educação Infantil', 'Ensino Fundamental I', 'Ensino Fundamental II', 'Ensino Médio'],
        banners: ['/banners/BANNER_CACHOEIRA_1.jpg', '/banners/BANNER_COLEGIOS.jpg'],
        panoramas: [
            {
                _id: 1,
                name: 'Hall de entrada',
                panorama: '/panoramas/cachoeira_do_sul_hall.jpeg',
            },
            {
                _id: 2,
                name: 'Refeitório',
                panorama: '/panoramas/cachoeira_do_sul_refeitorio.jpeg',
            },
        ],
        diferenciais: [
            'Ambientes diferenciados para cada nível de ensino',
            'Calendário escolar prolongado',
            'Mundo Kids com refeitório',
            'Playground interno e externo com ambientes de recreação',
            'Momentos de vivências e de interação entre escola e família',
            'Apresentações artísticas com aptidões exploradas a partir da arte, da música, do teatro e da dança',
            'Projetos interdisciplinares de acordo com o interesse de cada estudante',
            'Metodologia com personagens que acompanham o desenvolvimento',
            'Horários diferenciados de entrada e saída: 13h15min até às 18h, de segunda à sexta',
            'Segurança aos estudantes e tranquilidade aos pais',
            'Material didático do J. Piaget sem custo adicional',
            'Plataforma digital do J. Piaget com mais de 500 jogos e conteúdo multimídia totalmente articulados com os conhecimentos abordados em sala de aula*',
            'Aulas de Educação Física e de Língua Inglesa (Projeto Bilíngue) com profissional especializado**',
            'Programa União Faz a Vida',
            'Projetos de transição dos alunos que se encontram no Nível II para o 1° ano do Ensino Fundamental',
            'Entrevistas individuais com os professores, no início do ano letivo',
            'Reuniões de acolhimento e orientação a cada turma',
            'Lindo Cerimonial de Formatura do Nível II, registrando a conclusão desta etapa da vida escolar',
            'Encontro Reflexivo da Aprendizagem Escolar',
            'Plataforma educacional Totem, possibilitando acesso e acompanhamento escolar dos alunos.',
        ],
        depoimentos: [
            {
                _id: 1,
                nome: 'Carine',
                imagem: '/geral/perfil.png',
                depoimento: 'O Totem transmite confiança, segurança e estimula os alunos ao aprendizado. A equipe diretiva está constantemente envolvida e próxima dos alunos.',
            },
        ],
        infraestrutura: [
            '/infraestrutura/cachoeira-do-sul-colegios/BERCARIO-1.png',
            '/infraestrutura/cachoeira-do-sul-colegios/BRINQUEDOS-1.png',
            '/infraestrutura/cachoeira-do-sul-colegios/LAB-1.png',
            '/infraestrutura/cachoeira-do-sul-colegios/QUADRA-1.png',
            '/infraestrutura/cachoeira-do-sul-colegios/RECEPCAO-1.png',
            '/infraestrutura/cachoeira-do-sul-colegios/SALA-2.png',
            '/infraestrutura/cachoeira-do-sul-colegios/SALA-ESTAR-1.png',
            '/infraestrutura/cachoeira-do-sul-colegios/SALA-FUND-1.png',
        ],
        professores: [
            {
                _id: 1,
                nome: 'Cássia Machado',
                areaEnsino: 'Matemática',
                levels: ['Ensino Médio'],
                imagemUrl: '/geral/perfil.png',
                texto: 'para Professores pela FURG. Atuo há 15 anos em sala de aula, período em que tenho a oportunidade de guiar meus alunos na descoberta da magia e dos mistérios que a matemática revela, sendo uma linguagem que desenvolve raciocínio, criatividade e autonomia.',
            },
        ],
        atividades: [
            {
                _id: 1,
                name: 'Escolinha de Voleibol',
                turmas: [
                    {
                        _id: 1,
                        nome: 'Escolinha de Voleibol - 3º e 4º ano',
                        detalhes: 'Ginásio. Sextas, das 9h30 às 10h30',
                    },
                    {
                        _id: 2,
                        nome: 'Escolinha de Voleibol - 5º ano',
                        detalhes: 'Ginásio. Sextas, das 10h30 às 11h30',
                    },
                    {
                        _id: 3,
                        nome: 'Escolinha de Voleibol - 6º ao 8º ano + Médio',
                        detalhes: 'Ginásio. Sextas, das 13h40 às 15h40',
                    },
                ],
                professorNome: 'Jonas',
                image: '/atividades/ESCOLINHA-DE-VOLEIBOL.jpg',
            },
        ],
        cursos: [],
        faqs: [],
    },
    );

    await syncCounter(db, 'organizations', 1);
    await syncCounter(db, 'professores', 1);
    await syncCounter(db, 'panoramas', 2);
    await syncCounter(db, 'depoimentos', 1);
    await syncCounter(db, 'atividades', 1);
    await syncCounter(db, 'turmas', 3);
};

/**
 * @param db {import('mongodb').Db}
 * @param client {import('mongodb').MongoClient}
 * @returns {Promise<void>}
 */
export const down = async (db, client) => {

};
