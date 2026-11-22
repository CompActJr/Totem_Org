import { syncCounter } from './utils/syncCounter.js';

/**
 * @param db {import('mongodb').Db}
 * @param client {import('mongodb').MongoClient}
 * @returns {Promise<void>}
 */
export const up = async (db, client) => {
    await db.collection('videos').insertMany([
        {
            _id: 1,
            name: "Totem SM Tour Medicina",
            url: "https://www.youtube.com/embed/lhzIDjjw5T0"

        },
        {
            _id: 2,
            name: "Oficina das finanças",
            url: "https://www.youtube.com/embed/IrhXsHwarC4"
        },
        {
            _id: 3,
            name: "O DEZ ESPERADO - ensino médio e otras cositas más",
            url: "https://www.youtube.com/embed/9EQAfL4Sv7c"
        }
    ]
    );

    await syncCounter(db, 'videos', 3);
};

/**
 * @param db {import('mongodb').Db}
 * @param client {import('mongodb').MongoClient}
 * @returns {Promise<void>}
 */
export const down = async (db, client) => {

};
