import { ZodTypeProvider } from "@fastify/type-provider-zod";
import { FastifyInstance } from "fastify";
import { errorResponseSchema } from "../../config/errorHandler.js";
import { deleteGalleryItem, findAllGalleryItems } from "./services/galeria.service.js";
import {
    galleryDeleteResponseSchema,
    galleryIdParamSchema,
    galleryListQuerySchema,
    galleryListResponseSchema,
} from "./schemas/galeria.schema.js";

export const galeriaRoutes = (fastify: FastifyInstance)=>{
    const app = fastify.withTypeProvider<ZodTypeProvider>();
    const secured = { onRequest: [fastify.authenticate] };
    const security = [{ bearerAuth: [] }];

    app.get(
        "/api/galeria",
        {
            ...secured,
            schema: {
                tags: ["upload"],
                summary: "Listar imagens da galeria",
                security,
                querystring: galleryListQuerySchema,
                response: {
                    200: galleryListResponseSchema,
                    400: errorResponseSchema,
                    401: errorResponseSchema,
                },
            },
        },
        async (request, reply) => {
            const response = await findAllGalleryItems(fastify, request.query);
            return reply.status(200).send(response);
        },
    );

    app.delete(
        "/api/galeria/:id",
        {
            ...secured,
            schema: {
                tags: ["upload"],
                summary: "Excluir imagem da galeria",
                security,
                params: galleryIdParamSchema,
                response: {
                    200: galleryDeleteResponseSchema,
                    400: errorResponseSchema,
                    401: errorResponseSchema,
                    404: errorResponseSchema,
                },
            },
        },
        async (request, reply) => {
            const response = await deleteGalleryItem(fastify, request.params.id);
            return reply.status(200).send({
                ...response,
                success: true as const,
                fileDeleted: Boolean(response.fileDeleted),
            });
        },
    );

}
