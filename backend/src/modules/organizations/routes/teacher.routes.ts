import { ZodTypeProvider } from "@fastify/type-provider-zod";
import { FastifyInstance } from "fastify";
import z from "zod";
import { errorResponseSchema } from "../../../config/errorHandler.js";
import { createResponse, deleteResponse } from "../../../types/api.types.js";
import { createTeacherInput } from "../schemas/teacher.schemas.js";
import { createTeacher, deleteTeacher } from "../services/teacher.service.js";

const idParam = () => z.coerce.number({ error: "O ID precisa ser um número válido" }).int().positive();

export async function teacherRoutes(fastify: FastifyInstance) {
    const app = fastify.withTypeProvider<ZodTypeProvider>();

    const secured = {
        onRequest: [fastify.authenticate],
    };

    const security = [{ bearerAuth: [] }];

    app.post(
        "/api/units/:id/teachers",
        {
            ...secured,
            schema: {
                tags: ["Units"],
                summary: "Criar professor",
                description: "Cadastra um novo professor em uma unidade.",
                params: z.object({ id: idParam() }),
                body: createTeacherInput,
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
            const response = await createTeacher(fastify, request.params.id, request.body);
            return reply.status(201).send(response);
        },
    );

    app.delete(
        "/api/units/:id/teachers/:teacher",
        {
            ...secured,
            schema: {
                tags: ["Units"],
                summary: "Deletar um professor",
                description: "Remove um professor de uma unidade.",
                params: z.object({ id: idParam(), teacher: idParam() }),
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
            const { id, teacher } = request.params;
            const response = await deleteTeacher(fastify, id, teacher);
            return reply.status(200).send(response);
        },
    );

}