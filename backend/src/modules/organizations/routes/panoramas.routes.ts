import { ZodTypeProvider } from "@fastify/type-provider-zod";
import { FastifyInstance } from "fastify";
import z from "zod";
import { errorResponseSchema } from "../../../config/errorHandler.js";
import { createResponse, deleteResponse } from "../../../types/api.types.js";
import { createPanoramaInput } from "../schemas/panorama.schemas.js";
import { createPanorama, deletePanorama } from "../services/panorama.service.js";

const idParam = () => z.coerce.number({ error: "O ID precisa ser um número válido" }).int().positive();

export async function panoramaRoutes(fastify: FastifyInstance) {
    const app = fastify.withTypeProvider<ZodTypeProvider>();

    const secured = {
        onRequest: [fastify.authenticate],
    };

    const security = [{ bearerAuth: [] }];


    app.post(
        "/api/units/:id/panoramas",
        {
            ...secured,
            schema: {
                tags: ["Units"],
                summary: "Cadastrar um novo panorama",
                description: "Cadastra um panorama em uma unidade (imagem já enviada por upload).",
                params: z.object({ id: idParam() }),
                body: createPanoramaInput,
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
            const response = await createPanorama(fastify, request.params.id, request.body);
            return reply.status(201).send(response);
        },
    );

    app.delete(
        "/api/units/:id/panoramas/:panorama",
        {
            ...secured,
            schema: {
                tags: ["Units"],
                summary: "Deletar um panorama",
                description: "Remove um panorama de uma unidade.",
                params: z.object({ id: idParam(), panorama: idParam() }),
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
            const { id, panorama } = request.params;
            const response = await deletePanorama(fastify, id, panorama);
            return reply.status(200).send(response);
        },
    );
}