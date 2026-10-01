import bcrypt from 'bcrypt';
import 'dotenv/config';

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

/**
 * @param db {import('mongodb').Db}
 * @param client {import('mongodb').MongoClient}
 * @returns {Promise<void>}
 */
export const up = async (db, client) => {
    if (!ADMIN_PASSWORD) {
        throw new Error('ADMIN_PASSWORD não foi definida nas variáveis de ambiente.');
    }

    const passwordHash = await bcrypt.hash(ADMIN_PASSWORD, 10);

    await db.collection('users').insertOne({
        name: 'Administrador',
        email: 'admin@soutotem.com.br',
        password: passwordHash,
        createdAt: new Date(),
        updatedAt: new Date()
    });
};

/**
 * @param db {import('mongodb').Db}
 * @param client {import('mongodb').MongoClient}
 * @returns {Promise<void>}
 */
export const down = async (db, client) => {
    await db.collection('users').deleteOne({
        email: 'admin@soutotem.com.br'
    });
};