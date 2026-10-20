// src/modules/units/units.service.ts

import { FastifyInstance } from "fastify";
import { AppError } from "../../../config/errorHandler.js";
import { UpdateResponse, CreateResponse, DeleteResponse } from "../../../types/api.types.js";
import { getDb, notFound } from "../../../utils/fastifyMongoService.js";
import { UpdateUnitInput } from "../schemas/units.schemas.js";
import { Organization } from "../units.models.js";


const ORGANIZATIONS = "organizations";


export async function findUnitBySlug(fastify: FastifyInstance, slug: string) {
  const db = await getDb(fastify);
  return db
    .collection<Organization>(ORGANIZATIONS)
    .findOne({ slug });
}

/**
 * Atualiza os dados de contato da unidade.
 */
export async function updateUnit(fastify: FastifyInstance, slug: string, input: UpdateUnitInput): Promise<UpdateResponse> {
  const db = await getDb(fastify);
  const result = await db.collection<Organization>(ORGANIZATIONS).updateOne(
    { slug },
    { $set: input },
  );

  if (result.matchedCount === 0) {
    notFound("Unidade não encontrada.");
  }

  return {
    success: true,
    updatedAt: new Date().toISOString(),
  };
}

/**
 * Adiciona um diferencial à unidade, impedindo duplicatas.
 */
export async function addDiferencial(fastify: FastifyInstance, id: number, diferencial: string): Promise<CreateResponse> {
  const db = await getDb(fastify);
  const unit = await db.collection<Organization>(ORGANIZATIONS).findOne(
    { _id: id },
    { projection: { _id: 1, diferenciais: 1 } },
  );

  if (!unit) {
    notFound("Unidade não encontrada.");
  }

  if (unit.diferenciais?.includes(diferencial)) {
    throw new AppError(409, "Este diferencial já está cadastrado.", "Conflict");
  }

  const result = await db.collection<Organization>(ORGANIZATIONS).updateOne(
    {
      _id: id,
      diferenciais: { $ne: diferencial },
    },
    { $addToSet: { diferenciais: diferencial } },
  );

  if (result.matchedCount === 0) {
    throw new AppError(409, "Este diferencial já está cadastrado.","Conflict");
  }
  return {success: true, id: id, createdAt: new Date().toISOString()};
}


export async function removeDiferencial(fastify: FastifyInstance, id: number, diferencial: string): Promise<DeleteResponse> {
  const db = await getDb(fastify);

  const result = await db.collection<Organization>(ORGANIZATIONS).updateOne(
    { _id: id },
    { $pull: { diferenciais: diferencial } },
  );

  if (result.matchedCount === 0) {
    notFound("Unidade não encontrada.");
  }

  if (result.modifiedCount === 0) {
    notFound("Diferencial não encontrado nesta unidade.");
  }

  return {success: true, id: id, deletedAt: new Date().toISOString()};
}


// TODO: testar com o front depois nas rotas dos portais
export async function findAll(fastify: FastifyInstance, type: string) {
    const db = await getDb(fastify);

    return db.collection<Organization>(ORGANIZATIONS)
      .find({ })
      .toArray();
}