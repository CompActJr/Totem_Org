import { ZodTypeProvider } from "@fastify/type-provider-zod";
import { FastifyInstance } from "fastify";
import { env } from "../../config/env.js";
import { errorResponseSchema } from "../../config/errorHandler.js";
import { createGalleryItem } from "./services/galeria.service.js";
import { galleryItemSchema, uploadImageSchema } from "./schemas/uploader.schema.js";

export const uploaderRoutes = (fastify: FastifyInstance)=>{
      const app = fastify.withTypeProvider<ZodTypeProvider>();

      const secured = {
        onRequest: [fastify.authenticate],
      };

      const security = [{ bearerAuth: [] }];

      app.post(
        "/api/uploader",
        {
          ...secured,
          bodyLimit: env.UPLOAD_MAX_BODY_BYTES,
          schema: {
            tags: ["upload"],
            summary: "Enviar imagem para a galeria",
            description: "Otimiza uma imagem base64 para WebP, salva no disco e a registra na galeria.",
            security,
            body: uploadImageSchema,
            response: {
              201: galleryItemSchema,
              400: errorResponseSchema,
              401: errorResponseSchema,
              413: errorResponseSchema,
            },
          },
        },
        async (request, reply) => {
          const item = await createGalleryItem(fastify, request.body);
          return reply.status(201).send(item);
        },
      );
}
