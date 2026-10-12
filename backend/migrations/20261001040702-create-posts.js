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
        }
    ]);
};

/**
 * @param db {import('mongodb').Db}
 * @param client {import('mongodb').MongoClient}
 * @returns {Promise<void>}
 */
export const down = async (db, client) => {

    await db.collection('posts').drop();
};
