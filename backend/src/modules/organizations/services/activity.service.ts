import { FastifyInstance } from "fastify";
import { CreateResponse, DeleteResponse } from "../../../types/api.types.js";
import { getDb, getNextSequence, notFound } from "../../../utils/fastifyMongoService.js";
import { CreateActivityInput, CreateActivityClassInput } from "../schemas/activity.schemas.js";
import { Organization } from "../units.models.js";


const ORGANIZATIONS = "organizations";

/**
 * Cadastra uma atividade extracurricular na unidade.
 */
export async function createActivity(fastify: FastifyInstance, id: number, input: CreateActivityInput): Promise<CreateResponse> {
  const db = await getDb(fastify);
  const activityId = await getNextSequence(fastify, "atividades");
  const result = await db.collection<Organization>(ORGANIZATIONS).updateOne(
    { _id: id },
    {
      $push: {
        atividades: {
          _id: activityId,
          ...input,
          turmas: [],
        },
      },
    },
  );

  if (result.matchedCount === 0) {
    notFound("Unidade não encontrada.");
  }

  return { success: true, id: activityId, createdAt: new Date().toISOString()};
}

/**
 * Remove uma atividade e suas turmas aninhadas.
 */
export async function deleteActivity(fastify: FastifyInstance, id: number, activityId: number): Promise<DeleteResponse> {
  const db = await getDb(fastify);
  const result = await db.collection<Organization>(ORGANIZATIONS).updateOne(
    { _id: id },
    { $pull: { atividades: { _id: activityId } } },
  );

  if (result.matchedCount === 0) {
    notFound("Unidade não encontrada.");
  }

  if (result.modifiedCount === 0) {
    notFound("Atividade não encontrada nesta unidade.");
  }

  return { success: true, id: activityId, deletedAt: new Date().toISOString()};
}

/**
 * Cadastra uma turma dentro de uma atividade.
 */
export async function createActivityClass(fastify: FastifyInstance, id: number, idActivity: number, input: CreateActivityClassInput): Promise<CreateResponse> {
  const db = await getDb(fastify);
  const classId = await getNextSequence(fastify, "turmas");
  const result = await db.collection<Organization>(ORGANIZATIONS).updateOne(
    {
      _id: id,
      "atividades._id": idActivity,
    },
    {
      $push: {
        "atividades.$.turmas": {
          _id: classId,
          ...input,
        },
      },
    },
  );

  if (result.matchedCount === 0) {
    notFound("Atividade ou Unidade não encontrada.");
  }

  return { success: true, id: classId, createdAt: new Date().toISOString()};
}

/**
 * Remove uma turma de uma atividade.
 */
export async function deleteActivityClass(fastify: FastifyInstance, id: number, idActivity: number, classId: number, ): Promise<DeleteResponse> {
  const db = await getDb(fastify);
  const organizations = db.collection<Organization>(ORGANIZATIONS);
  const result = await organizations.updateOne(
    {
      _id: id,
      "atividades._id": idActivity,
      "atividades.turmas._id": classId,
    },
    {
      $pull: {
        "atividades.$[atividade].turmas": { _id: classId },
      },
    },
    {
      arrayFilters: [{ "atividade._id": idActivity }],
    },
  );

  if (result.matchedCount === 0) {
    notFound("Turma, Atividade ou Unidade não encontrada.");
  }

  return {success: true, id: classId, deletedAt: new Date().toISOString()};
}
