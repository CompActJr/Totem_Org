/**
 * @param db {import('mongodb').Db}
 * @param client {import('mongodb').MongoClient}
 * @returns {Promise<void>}
 */
export const up = async (db, client) => {
  await db.collection('counters').insertMany([
    { _id: 'posts', seq: 3 },
    { _id: 'users', seq: 1 },
    { _id: 'organizations', seq: 6 },
    { _id: 'professores', seq: 2 },
    { _id: 'panoramas', seq: 3 },
    { _id: 'depoimentos', seq: 4 },
    { _id: 'atividades', seq: 1 },
    { _id: 'turmas', seq: 4 },
    { _id: 'cursos', seq: 14},
    { _id: 'faqs', seq: 3}
  ])
}

/**
 * @param db {import('mongodb').Db}
 * @param client {import('mongodb').MongoClient}
 * @returns {Promise<void>}
 */
export const down = async (db, client) => {
  await db.collection('counters').drop()
}
