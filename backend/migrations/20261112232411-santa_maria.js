import { syncCounter } from './utils/syncCounter.js';

/**
 * @param db {import('mongodb').Db}
 * @param client {import('mongodb').MongoClient}
 * @returns {Promise<void>}
 */
export const up = async (db, client) => {
    await db.collection('organizations').insertOne(
        {
            _id: 3,
            '@type': 'colegios',
            city: 'Santa Maria',
            slug: 'santa-maria',
            image: '/infraestrutura/santa-maria-colegios/SALA-1.png',
            cep: '97010-033',
            address: 'BR287, 8480/8485 - Trevo da Uglione6',
            phone: '55 9 9125-8480',
            whatsapp: '(55) 9 9125-8480',
            email: 'colegiosantamaria@soutotem.com.br',
            facebook: 'https://www.facebook.com/ColegioTotemSantaMaria',
            instagram: 'https://www.instagram.com/colegiototem/',
            maps: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2312.7482640472363!2d-53.81819665087276!3d-29.713761335139225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9503cb1424027733%3A0x29a4830246f042e2!2sCol%C3%A9gio%20Totem%20Santa%20Maria!5e0!3m2!1spt-BR!2sbr!4v1784497464004!5m2!1spt-BR!2sbr',
            levels: ['Educação Infantil', 'Ensino Fundamental I', 'Ensino Fundamental II', 'Ensino Médio'],
            banners: ['/banners/BANNER_COLEGIOS.jpg'],
            panoramas: [],
            diferenciais: [
                'Atendimento personalizado, afetuoso, com equipe altamente qualificada e experiente;',
                'Estrutura física moderna, planejada para maior segurança, conforto e produtividade detodos',
                'Projeto pedagógico focado no resultado e na formação para a vida real',
                'Vivências em família com apresentações de talentos (arte, música, dança, poesia e teatro)',
                'Concurso de Fotografia, Literário e Simulados',
                'Técnicas contextualizadas à valorização do meio ambiente',
                'Participação na Olimpíada de Matemática - OBMEP e demais olimpíadas do conhecimento',
                'Realização do Simulado Enemzinho ou Avaliação Unificada Totem (AUT) como preparação para as provas do ENEM',
                'Viagens de estudo e visitas às universidades;',
                'Acompanhamento do estudante às principais excursões e eventos do Totem Vestibulares para integração e familiarização com a rede',
            ],
            depoimentos: [],
            infraestrutura: [
                '/infraestrutura/santa-maria-colegios/SALA-1.png',
                '/infraestrutura/santa-maria-colegios/ÁREA-VERDE-1.png',
                '/infraestrutura/santa-maria-colegios/BIBLIOTECA-1.png',
                '/infraestrutura/santa-maria-colegios/CANTINA-1.png',
                '/infraestrutura/santa-maria-colegios/QUADRA-1.png',
                '/infraestrutura/santa-maria-colegios/SAGUÃO-1.png',
                '/infraestrutura/santa-maria-colegios/SALA-PEQUENOS-1.png',
            ],
            professores: [],
            atividades: [],
            cursos: [],
            faqs: [],
        },
    );

    await syncCounter(db, 'organizations', 3);
};

/**
 * @param db {import('mongodb').Db}
 * @param client {import('mongodb').MongoClient}
 * @returns {Promise<void>}
 */
export const down = async (db, client) => {

};
