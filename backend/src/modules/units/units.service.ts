// src/modules/units/units.service.ts

import type { FastifyInstance } from "fastify";
import type { Organization } from "./units.types.js";
import { AppError } from "../../config/errorHandler.js";

/**
 * fastify.mongo O objeto disponibilizado pelo plugin @fastify/mongodb. Ele expõe recursos da integração MongoDB, 
 * incluindo o cliente e o banco configurado.
 */

export async  function findUnitBySlug(
  fastify: FastifyInstance,
  slug: string,
) {

  const db = fastify.mongo.db;

  if (!db) {
    throw new AppError(503, "Banco de dados indisponível.", "Service Unavailable");
  }

  return db
    .collection<Organization>("organizations")
    .findOne({ slug });
}

export async function findUnitById(
  fastify: FastifyInstance,
  unitId: number,
) {
  const db = fastify.mongo.db;

  if (!db) {
    throw new AppError(503, "Banco de dados indisponível.", "Service Unavailable");
  }

  return db
    .collection<Organization>("organizations")
    .findOne({ _id: unitId });
}

