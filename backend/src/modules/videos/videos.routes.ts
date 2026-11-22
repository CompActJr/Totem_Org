import { ZodTypeProvider } from "@fastify/type-provider-zod";
import { FastifyInstance } from "fastify";
import { createVideo, deleteVideo, findAllVideos, updateVideo } from "./videos.service.js";
import { createVideoSchema, idParam, updateVideoSchema, videoSchema } from "./videos.schemas.js";
import z from "zod";
import { createResponse, deleteResponse, updateResponse } from "../../types/api.types.js";
import { errorResponseSchema } from "../../config/errorHandler.js";

export const videoRoutes = (fastify: FastifyInstance) => {
    const app = fastify.withTypeProvider<ZodTypeProvider>();
    const secured = { onRequest: [fastify.authenticate] };
    const security = [{ bearerAuth: [] }];

    app.get(
        "/api/videos",
        {
            schema: {
                tags: ["Videos"],
                summary: "Listar videos no portal",
                description: "Retorna todos os videos cadastrados.",
                response: {
                    200: z.array(videoSchema)
                },
            }
        },
        async (request, reply) => {
            const posts = await findAllVideos(fastify);
            return reply.status(200).send(posts);
        }
    );

    app.post(
        "/api/videos",
        {
            ...secured,
            schema: {
                tags: ["Videos"],
                summary: "Cadastrat Video",
                description: "Cadastrar a url de um novo video para ser embutida",
                security,
                body: createVideoSchema, 
                response: {
                    201: createResponse,
                    400: errorResponseSchema,
                    401: errorResponseSchema,
                    404: errorResponseSchema 
                },
            }
        },
        async (request, reply) => {
            const response = await createVideo(fastify, request.body);
            return reply.status(201).send(response);
        },
    )

    app.put(
        "/api/videos/:id",
        {
            ...secured,
            schema: {
                tags: ["Videos"],
                summary: "Alterar vídeo",
                description: "Altera os dados de um vídeo cadastrado.",
                params: z.object({ id: idParam() }),
                body: updateVideoSchema,
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
            const response = await updateVideo(fastify, request.params.id, request.body);
            return reply.status(200).send(response);
        },
    );

    app.delete(
        "/api/videos/:id",
        {
            ...secured,
            schema: {
                tags: ["Videos"],
                summary: "Deletar um professor",
                description: "Remove um professor de uma unidade.",
                params: z.object({ id: idParam() }),
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
            const { id } = request.params;
            const response = await deleteVideo(fastify, id);
            return reply.status(200).send(response);
        },
    );
}
