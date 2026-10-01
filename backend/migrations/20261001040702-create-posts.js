/**
 * @param db {import('mongodb').Db}
 * @param client {import('mongodb').MongoClient}
 * @returns {Promise<void>}
 */
export const up = async (db, client) => {

    await db.collection('posts').insertMany([
        {
            _id: 1,
            "titulo": "Festa júnina Cachoeira do sul",
            "resumo": "Festa junina do cachoeira",
            "conteudo": "O tbt de hoje é do nosso ARRAIÁ, que foi pra lá de sucesso!\nMuito obrigada aos que vieram nos prestigiar. ❤️🚀🚀🌽.",
            "imagemUrl": "/posts/post1.jpg",
            "ativo": true,
            "destaque": true,
            "autor": "Jonas Silva",
            "createdAt": "2026-07-04",
            "updatedAt": "2026-07-04",
            "categoria": "Eventos",
            "unidades": ["ijui", "cachoeira-do-sul"]
        },
        {
            _id: 2,
            "titulo": "Evolução para Notas do Enem",
            "resumo": "",
            "conteudo": "Quando há método, dedicação e acompanhamento, os resultados aparecem.\n O crescimento das notas do ENEM no Colégio Totem reforça nosso compromisso com a excelência acadêmica e a preparação dos alunos para os grandes desafios do futuro.\nCrescimento comprovado.\nMais aprovações.\nResultados que geram confiança.",
            "imagemUrl": "/posts/post2.jpg",
            "ativo": true,
            "destaque": false,
            "autor": "Jonas Silva",
            "createdAt": "2026-06-04",
            "updatedAt": "2026-06-04",
            "categoria": "Enem",
            "unidades": ["ijui", "cachoeira-do-sul"]
        },
        {
            _id: 3,
            "titulo": "Festival do Enart 2026",
            "resumo": "",
            "conteudo": "Nossos alunos neste  final de semana  em Agudo, na Regional do Enart, da 13ª Região Tradicionalista, trouxeram grandiosas Premiações.\n🏆 Campeão em Criação Coreografica\n🏆2º Lugar Danças Tradicionais",
            "imagemUrl": "/posts/post3.jpg",
            "ativo": true,
            "destaque": true,
            "autor": "Jonas Silva",
            "createdAt": "2026-06-04",
            "updatedAt": "2026-06-04",
            "categoria": "Eventos",
            "unidades": ["santa-maria"]
        }
    ]);
};

/**
 * @param db {import('mongodb').Db}
 * @param client {import('mongodb').MongoClient}
 * @returns {Promise<void>}
 */
export const down = async (db, client) => {

    await db.collection('levels')
};
