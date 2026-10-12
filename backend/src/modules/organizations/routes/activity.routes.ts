import { ZodTypeProvider } from "@fastify/type-provider-zod";
import { FastifyInstance } from "fastify";
import z from "zod";
import { errorResponseSchema } from "../../../config/errorHandler.js";
import { createResponse, deleteResponse } from "../../../types/api.types.js";
import { createActivityInput, createActivityClassInput } from "../schemas/activity.schemas.js";
import { createActivity, deleteActivity, createActivityClass, deleteActivityClass } from "../services/activity.service.js";

const idParam = () => z.coerce.number({ error: "O ID precisa ser um número válido" }).int().positive();

export async function activityRoutes(fastify: FastifyInstance) {
    const app = fastify.withTypeProvider<ZodTypeProvider>();
    
        const secured = {
            onRequest: [fastify.authenticate],
        };
    
        const security = [{ bearerAuth: [] }];

    app.post(
        "/api/units/:id/activity",
        {
          ...secured,
          schema: {
            tags: ["Units"],
            summary: "Cadastrar uma nova atividade",
            description: "Cadastra uma atividade extracurricular em uma unidade.",
            params: z.object({ id: idParam() }),
            body: createActivityInput,
            security,
            response: { 
                201: createResponse,
                400: errorResponseSchema,
                401: errorResponseSchema,
                404: errorResponseSchema, 
            },
          },
        },
        async (request, reply) => {
          const response = await createActivity(fastify, request.params.id, request.body);
          return reply.status(201).send(response);
        },
      );
    
      app.delete(
        "/api/units/:id/activity/:activity",
        {
          ...secured,
          schema: {
            tags: ["Units"],
            summary: "Deletar uma atividade",
            description: "Remove uma atividade e todas as suas turmas.",
            params: z.object({ id: idParam(), activity: idParam() }),
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
          const { id, activity } = request.params;
          const response = await deleteActivity(fastify, id, activity);
          return reply.status(200).send(response);
        },
      );
    
      app.post(
        "/api/units/:id/activity/:activity/class",
        {
          ...secured,
          schema: {
            tags: ["Units"],
            summary: "Cadastrar turma",
            description: "Cadastra uma nova turma em uma atividade.",
            params: z.object({ id: idParam(), activity: idParam() }),
            body: createActivityClassInput,
            security,
            response: { 
                201: createResponse,
                400: errorResponseSchema,
                401: errorResponseSchema,
                404: errorResponseSchema, 
             },
          },
        },
        async (request, reply) => {
          const { id, activity } = request.params;
          const response = await createActivityClass(fastify, id, activity, request.body);
          return reply.status(201).send(response);
        },
      );
    
      app.delete(
        "/api/units/:id/activity/:activity/class/:classId",
        {
          ...secured,
          schema: {
            tags: ["Units"],
            summary: "Deletar uma turma de uma atividade",
            description: "Remove uma turma de uma atividade.",
            params: z.object({ id: idParam(), activity: idParam(), classId: idParam() }),
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
          const { id, activity, classId } = request.params;
          const response = await deleteActivityClass(fastify, id, activity, classId);
          return reply.status(200).send(response);
        },
      );
    
}