// src/modules/units/units.routes.ts

import { ZodTypeProvider } from "@fastify/type-provider-zod";
import { FastifyInstance } from "fastify";
import { AppError, errorResponseSchema } from "../../config/errorHandler.js";
import z from "zod";
import { createTeacher, findUnitBySlug } from "./units.service.js";
import { unitResponseSchema } from "./schemas/units.schemas.js";
import { createTeacherInput } from "./schemas/teacher.schemas.js";
import { createResponse } from "../../types/createResponse.js";


export async function unitsRoutes(fastify: FastifyInstance) {
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

      return reply.status(200).send(unit);
    },
  );

  app.post(
    "/api/units/:id/teachers",
    {
        onRequest: [fastify.authenticate],
        schema: {
            tags: ["Units"],
            summary: "Criar professor",
            description: "Cadastrar em uma unidade um novo professor",
            params: z.object({
                 id: z.coerce.number({
                    error: "O ID precisa ser um número válido"
                }).int()
            }),
            security: [{ bearerAuth: [] }],
            body: createTeacherInput,
            response: {
                200: createResponse
            }
        }
    },
    async (request, reply) => {
        const {id} = request.params
        const body = request.body;
        const response = await createTeacher(fastify, id, body);
        reply.status(200).send(response);
    }
  );
}
