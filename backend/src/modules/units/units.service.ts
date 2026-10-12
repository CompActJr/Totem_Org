// src/modules/units/units.service.ts

import type { FastifyInstance } from "fastify";
import type { Organization, Teacher } from "./units.models.js";
import { AppError } from "../../config/errorHandler.js";
import { ObjectId } from "@fastify/mongodb";
import { CreateTeacherInput } from "./schemas/teacher.schemas.js";
import { CreateResponse } from "../../types/createResponse.js";
import { getNextSequence } from "../../utils/getNextSequence.js";

/**
 * fastify.mongo O objeto disponibilizado pelo plugin @fastify/mongodb. Ele expõe recursos da integração MongoDB, 
 * incluindo o cliente e o banco configurado.
 */

export async  function findUnitBySlug(fastify: FastifyInstance, slug: string,) {

  const db = fastify.mongo.db;

  if (!db) {
    throw new AppError(503, "Banco de dados indisponível.", "Service Unavailable");
  }

  return db
    .collection<Organization>('organizations')
    .findOne({ slug });
}


export async function createTeacher(fastify: FastifyInstance, id: number, input: CreateTeacherInput): Promise<CreateResponse> {
  const db = fastify.mongo.db;
  
  if (!db) {
    throw new AppError(503, "Banco de dados indisponível.", "Service Unavailable");
  }

  const teacherId = await getNextSequence(fastify, "professores")
  const result = await db.collection<Organization>("organizations").updateOne(
    { _id: id },
    { $push: { professores: { _id: teacherId, ...input } } },
  );

  if (result.matchedCount === 0) {
    throw new AppError(404, "Unidade não encontrada.", "Not Found");
  }

  return { success: true, id: teacherId, createdAt: new Date().toISOString()};
}

