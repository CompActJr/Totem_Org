// src/modules/units/units.routes.ts

import { ZodTypeProvider } from "@fastify/type-provider-zod";
import { FastifyInstance } from "fastify";
import { AppError, errorResponseSchema } from "../../config/errorHandler.js";
import z from "zod";
import { findUnitBySlug } from "./units.service.js";
import { unitResponseSchema } from "./schemas/units.schemas.js";

export default async function unitsRoutes(fastify: FastifyInstance) {
  const app = fastify.withTypeProvider<ZodTypeProvider>();

  app.get(
    "/api/units/:slug",
    {
      schema: {
        tags: ["Units"],
        summary: "Buscar unidade por slug",
        description: "Retorna os dados públicos de uma unidade cadastrada.",
        params: z.object({
            slug: z.string().trim()
        }),
        response: {
            200: unitResponseSchema,
            404: errorResponseSchema,
        },
      },
    },
    async (request, reply) => {
      const { slug } = request.params;
      console.log('log de teste');
      const unit = await findUnitBySlug(fastify, slug);

      if (!unit) {
        throw new AppError(404, "Entidate não encontrada");
      }

      return unit;
    },
  );
}