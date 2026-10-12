import { FastifyInstance } from "fastify";
import { CreateResponse, DeleteResponse } from "../../../types/api.types.js";
import { getDb, getNextSequence, notFound } from "../../../utils/fastifyMongoService.js";
import { CreatePanoramaInput } from "../schemas/panorama.schemas.js";
import { Organization } from "../units.models.js";


const ORGANIZATIONS = "organizations";

/**
 * Cadastra um panorama na unidade.
 */
export async function createPanorama(fastify: FastifyInstance, id: number, input: CreatePanoramaInput): Promise<CreateResponse> {
  const db = await getDb(fastify);
  const panoramaId = await getNextSequence(fastify, "panoramas");
  const result = await db.collection<Organization>(ORGANIZATIONS).updateOne(
    { _id: id },
    {
      $push: {
        panoramas: {
          _id: panoramaId,
          ...input,
        },
      },
    },
  );

  if (result.matchedCount === 0) {
    notFound("Unidade não encontrada.");
  }

  return {success: true, id: panoramaId, createdAt: new Date().toISOString()};
}

/**
 * Remove um panorama da unidade.
 */
export async function deletePanorama(fastify: FastifyInstance, id: number, panoramaId: number): Promise<DeleteResponse> {
  const db = await getDb(fastify);
  const result = await db.collection<Organization>(ORGANIZATIONS).updateOne(
    { _id: id },
    { $pull: { panoramas: { _id: panoramaId } } },
  );

  if (result.matchedCount === 0) {
    notFound("Unidade não encontrada.");
  }

  if (result.modifiedCount === 0) {
    notFound("Panorama não encontrado nesta unidade.");
  }

  return {success: true, id: panoramaId, deletedAt: new Date().toISOString()};
}