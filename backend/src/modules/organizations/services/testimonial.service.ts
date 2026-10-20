import { FastifyInstance } from "fastify";
import { CreateResponse, DeleteResponse } from "../../../types/api.types.js";
import { getDb, getNextSequence, notFound } from "../../../utils/fastifyMongoService.js";
import { CreateTestimonialInput } from "../schemas/testimonial.schema.js";
import { Organization } from "../units.models.js";


const ORGANIZATIONS = "organizations";

/**
 * Cadastra um depoimento na unidade.
 */
export async function createTestimonial(fastify: FastifyInstance, id: number, input: CreateTestimonialInput): Promise<CreateResponse> {
  const db = await getDb(fastify);
  const testimonialId = await getNextSequence(fastify, "depoimentos");
  const result = await db.collection<Organization>(ORGANIZATIONS).updateOne(
    { _id: id },
    {
      $push: {
        depoimentos: {
          _id: testimonialId,
          ...input,
        },
      },
    },
  );

  if (result.matchedCount === 0) {
    notFound("Unidade não encontrada.");
  }

  return {success: true, id: testimonialId, createdAt: new Date().toISOString()};
}

/**
 * Remove um depoimento da unidade.
 */
export async function deleteTestimonial(fastify: FastifyInstance, id: number, testimonialId: number): Promise<DeleteResponse> {
  const db = await getDb(fastify);
  const result = await db.collection<Organization>(ORGANIZATIONS).updateOne(
    { _id: id },
    { $pull: { depoimentos: { _id: testimonialId } } },
  );

  if (result.matchedCount === 0) {
    notFound("Unidade não encontrada.");
  }

  if (result.modifiedCount === 0) {
    notFound("Depoimento não encontrado nesta unidade.");
  }

  return {success: true, id: testimonialId, deletedAt: new Date().toISOString()};
}
