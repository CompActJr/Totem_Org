// src/modules/units/units.routes.ts
import { ZodTypeProvider } from "@fastify/type-provider-zod";
import { FastifyInstance } from "fastify";
import z from "zod";
import { errorResponseSchema, AppError } from "../../../config/errorHandler.js";
import { updateResponse, createResponse, deleteResponse } from "../../../types/api.types.js";
import { unitResponseSchema, updateUnitInput } from "../schemas/units.schemas.js";
import { findUnitBySlug, updateUnit, addDiferencial, removeDiferencial } from "../services/unit.service.js";

const idParam = () => z.coerce.number({ error: "O ID precisa ser um número válido" }).int().positive();

export async function unitsRoutes(fastify: FastifyInstance) {

  const app = fastify.withTypeProvider<ZodTypeProvider>();

  const secured = {
    onRequest: [fastify.authenticate],
  };

  const security = [{ bearerAuth: [] }];

  app.get(
    "/api/units/:slug",
    {
      schema: {
        tags: ["Units"],
        summary: "Buscar unidade por slug",
        description: "Retorna os dados públicos de uma unidade cadastrada.",
        params: z.object({ slug: z.string().trim().min(1) }),
        response: {
          200: unitResponseSchema,
          404: errorResponseSchema,
        },
      },
    },
    async (request, reply) => {
      const unit = await findUnitBySlug(fastify, request.params.slug);

      if (!unit) {
        throw new AppError(404, "Unidade não encontrada.", "Not Found");
      }

      return reply.status(200).send(unit);
    },
  );

  app.put(
    "/api/units/:slug",
    {
      ...secured,
      schema: {
        tags: ["Units"],
        summary: "Alterar informações de contato de uma unidade",
        description: "Altera maps, email, facebook, instagram e whatsapp.",
        params: z.object({ slug: z.string().trim().min(1) }),
        body: updateUnitInput,
        security,
        response: { 
            200: updateResponse,
            400: errorResponseSchema,
            401: errorResponseSchema,
            404: errorResponseSchema,
        },
      },
    },
    async (request, reply) => {
      const response = await updateUnit(fastify, request.params.slug, request.body);
      return reply.status(200).send(response);
    },
  );

  app.post(
    "/api/units/:id/diferenciais",
    {
      ...secured,
      schema: {
        tags: ["Units"],
        summary: "Cadastrar diferencial",
        description: "Adiciona um diferencial ao array da unidade.",
        params: z.object({ id: idParam() }),
        body: z.object({ diferencial: z.string().trim().min(1) }),
        security,
        response: { 
            201: createResponse, 
            409: errorResponseSchema, 
            400: errorResponseSchema,
            401: errorResponseSchema,
            404: errorResponseSchema, 
        },
      },
    },
    async (request, reply) => {
      const response = await addDiferencial(fastify, request.params.id, request.body.diferencial);
      return reply.status(201).send(response);
    },
  );

  app.delete(
    "/api/units/:id/diferenciais",
    {
      ...secured,
      schema: {
        tags: ["Units"],
        summary: "Remover diferencial",
        description: "Remove um diferencial do array da unidade.",
        params: z.object({ id: idParam() }),
        body: z.object({ diferencial: z.string().trim().min(1) }),
        security,
        response: { 
            200: deleteResponse,
            400: errorResponseSchema,
            401: errorResponseSchema,
            404: errorResponseSchema, 
        },
      },
    },
    async (request, reply) => {
      const response = await removeDiferencial(fastify, request.params.id, request.body.diferencial);
      return reply.status(200).send(response);
    },
  );
}