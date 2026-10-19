/**
 * @param db {import('mongodb').Db}
 * @param client {import('mongodb').MongoClient}
 * @returns {Promise<void>}
 */
export const up = async (db, client) => {

    await db.collection('posts').insertMany([
        {
            _id: 1,
            "titulo": "Teste de Postagem no portal",
            "resumo": "resumo da postagem",
            "conteudo": "postagem ❤️🚀.",
            "imagemUrl": "/geral/perfil.png",
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
            "titulo": "Teste de Postagem 2 no portal",
            "resumo": "resumo da postagem",
            "conteudo": "postagem ❤️🚀.",
            "imagemUrl": "/geral/perfil.png",
            "ativo": true,
            "destaque": true,
            "autor": "Jonas Silva",
            "createdAt": "2026-07-04",
            "updatedAt": "2026-07-04",
            "categoria": "Eventos",
            "unidades": ["cruz-alta"]
        },
        {
            _id: 3,
            "titulo": "Teste de Postagem 3 no portal",
            "resumo": "resumo da postagem",
            "conteudo": "postagem ❤️🚀.",
            "imagemUrl": "/geral/perfil.png",
            "ativo": true,
            "destaque": true,
            "autor": "Jonas Silva",
            "createdAt": "2026-07-04",
            "updatedAt": "2026-07-04",
            "categoria": "Eventos",
            "unidades": ["cruz-alta"]
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
