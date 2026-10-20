/**
 * @author Jonas
 * O Mongo não tem AUTO_INCREMENT como o MySQL. A solução é um "caixa de senhas": 
 * uma coleção counters com um documento por sequência.
 */

import { FastifyInstance } from "fastify";
import { AppError } from "../config/errorHandler.js";

/**
 * @returns próximo id da sequencia em uma colection
 */
export async function getNextSequence(fastify: FastifyInstance, sequenceName: string): Promise<number> {
  const db = fastify.mongo.db;

  if (!db) {
    throw new AppError(503, "Banco de dados indisponível.", "Service Unavailable");
  }

  const counter = await db
    .collection<{ _id: string; seq: number }>("counters")
    .findOneAndUpdate(
      { _id: sequenceName },
      { $inc: { seq: 1 } },
      { upsert: true, returnDocument: "after"}
  );

  if (!counter) {
    throw new AppError(500, "Não foi possível gerar o ID.", "Internal Server Error");
  }

  return counter.seq as number;
}


export async function getDb(fastify: FastifyInstance) {
  const db = fastify.mongo.db;

  if (!db) {
    throw new AppError(503, "Banco de dados indisponível.", "Service Unavailable",);
  }

  return db;
}

export function notFound(message: string): never {
  throw new AppError(404, message, "Not Found");
}
