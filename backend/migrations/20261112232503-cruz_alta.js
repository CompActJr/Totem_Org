import { syncCounter } from './utils/syncCounter.js';

/**
 * @param db {import('mongodb').Db}
 * @param client {import('mongodb').MongoClient}
 * @returns {Promise<void>}
 */
export const up = async (db, client) => {
    await db.collection('organizations').insertOne(
        {
            _id: 2,
            '@type': 'colegios',
            city: 'Cruz Alta',
            slug: 'cruz-alta',
            image: '/infraestrutura/cruz-alta-colegios/ALFABETIZAÇÃO-1.png',
            cep: '98700-000',
            address: 'General Felipe Portinho, 1216',
            phone: '(55) 3333-8569',
            whatsapp: '(55) 9 9076-7990',
            email: 'colegiocruzalta@soutotem.com.br',
            facebook: 'https://www.facebook.com/ColegioTotemCruzAlta ',
            instagram: 'https://www.instagram.com/colegiototem/',
            maps: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1909.2088506259433!2d-53.61070915676212!3d-28.644612207439764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94fd97c87e5202ab%3A0xc4883daf58e00f03!2sCol%C3%A9gio%20Totem%20Cruz%20Alta!5e0!3m2!1spt-BR!2sbr!4v1784497585649!5m2!1spt-BR!2sbr',
            levels: ['Educação Infantil', 'Ensino Fundamental I', 'Ensino Fundamental II', 'Ensino Médio'],
            banners: ['/banners/BANNER_COLEGIOS.jpg'],
            panoramas: [],
            diferenciais: [
                'Atendimento personalizado, afetuoso, com equipe altamente qualificada e experiente;',
                'Estrutura física moderna, planejada para maior segurança, conforto e produtividade detodos',
                'Projeto pedagógico focado no resultado e na formação para a vida real',
                'Material didático colorido, atualizado e com suporte digital, em plataformas modernas e interativas',
                'Reconhecido pelo ambiente familiar – Família Totem – e pelo total apoio ao estudante e seus responsáveis',
                'Salas de aula com mobiliário adequado a cada nível de ensino, climatizadas, com acesso à internet e recursos multimídia completos',
            ],
            depoimentos: [],
            infraestrutura: [
                '/infraestrutura/cruz-alta-colegios/ALFABETIZAÇÃO-1.png',
                '/infraestrutura/cruz-alta-colegios/biblioteca-1.png',
                '/infraestrutura/cruz-alta-colegios/cantina-1.png',
                '/infraestrutura/cruz-alta-colegios/PÁTIO-1.png',
                '/infraestrutura/cruz-alta-colegios/recepção-1.png',
                '/infraestrutura/cruz-alta-colegios/SALA-1.png',
                '/infraestrutura/cruz-alta-colegios/SALA-2.png',
            ],
            professores: [],
            atividades: [],
            cursos: [],
            faqs: [],
        });

    await syncCounter(db, 'organizations', 2);
};

/**
 * @param db {import('mongodb').Db}
 * @param client {import('mongodb').MongoClient}
 * @returns {Promise<void>}
 */
export const down = async (db, client) => {

};
