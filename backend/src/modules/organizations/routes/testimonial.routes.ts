import { ZodTypeProvider } from "@fastify/type-provider-zod";

import z from "zod";
import { errorResponseSchema } from "../../../config/errorHandler.js";
import { createResponse, deleteResponse } from "../../../types/api.types.js";
import { createTestimonialInput } from "../schemas/testimonial.schema.js";
import { createTestimonial, deleteTestimonial } from "../services/testimonial.service.js";
import { FastifyInstance } from "fastify";

const idParam = () => z.coerce.number({ error: "O ID precisa ser um número válido" }).int().positive();

export async function testimonialRoutes(fastify: FastifyInstance) {
    const app = fastify.withTypeProvider<ZodTypeProvider>();

    const secured = {
        onRequest: [fastify.authenticate],
    };

    const security = [{ bearerAuth: [] }];

    app.post(
        "/api/units/:id/testimonial",
        {
          ...secured,
          schema: {
            tags: ["Units"],
            summary: "Cadastrar depoimento",
            description: "Cadastra um novo depoimento em uma unidade (imagem já enviada por upload).",
            params: z.object({ id: idParam() }),
            body: createTestimonialInput,
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
          const response = await createTestimonial(fastify, request.params.id, request.body);
          return reply.status(201).send(response);
        },
      );
    
      app.delete(
        "/api/units/:id/testimonial/:testimonial",
        {
          ...secured,
          schema: {
            tags: ["Units"],
            summary: "Deletar um depoimento de uma unidade",
            description: "Remove um depoimento de uma unidade.",
            params: z.object({ id: idParam(), testimonial: idParam() }),
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
          const { id, testimonial } = request.params;
          const response = await deleteTestimonial(fastify, id, testimonial);
          return reply.status(200).send(response);
        },
      );
    
}