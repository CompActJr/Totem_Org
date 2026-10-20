import { FastifyInstance } from "fastify";
import { CreateResponse, DeleteResponse } from "../../../types/api.types.js";
import { getDb, getNextSequence, notFound } from "../../../utils/fastifyMongoService.js";
import { CreateTeacherInput } from "../schemas/teacher.schemas.js";
import { Organization } from "../units.models.js";


const ORGANIZATIONS = "organizations";

/**
 * Cadastra um professor na unidade.
 */
export async function createTeacher(fastify: FastifyInstance, id: number, input: CreateTeacherInput): Promise<CreateResponse> {
  const db = await getDb(fastify);
  const teacherId = await getNextSequence(fastify, "professores");
  const result = await db.collection<Organization>(ORGANIZATIONS).updateOne(
    { _id: id },
    {
      $push: {
        professores: { _id: teacherId, ...input },
      },
    },
  );

  if (result.matchedCount === 0) {
    notFound("Unidade não encontrada.");
  }

  return {success: true, id: teacherId, createdAt: new Date().toISOString(),};
}

/**
 * Remove um professor da unidade.
 */
export async function deleteTeacher(fastify: FastifyInstance, id: number, teacherId: number): Promise<DeleteResponse> {
  const db = await getDb(fastify);
  const result = await db.collection<Organization>(ORGANIZATIONS).updateOne(
    { _id: id },
    { $pull: { professores: { _id: teacherId } } },
  );

  if (result.matchedCount === 0) {
    notFound("Unidade não encontrada.");
  }

  if (result.modifiedCount === 0) {
    notFound("Professor não encontrado nesta unidade.");
  }

  return { success: true, id: teacherId, deletedAt: new Date().toISOString()};
}