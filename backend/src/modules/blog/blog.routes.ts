import { ZodTypeProvider } from "@fastify/type-provider-zod";
import { FastifyInstance } from "fastify";
import z from "zod";
import { errorResponseSchema } from "../../config/errorHandler.js";
import { createResponse, deleteResponse, updateResponse } from "../../types/api.types.js";
import { createPostInput, PostResponse, postResponseSchema, updatePostInput } from "./blog.schema.js";
import { createPost, deletePost, findAllPosts, findPostById, updatePost } from "./blog.service.js";

const idParam = () => z.coerce.number({ error: "O ID precisa ser um número válido" }).int().positive();

export async function blogRoutes(fastify: FastifyInstance) {
    const app = fastify.withTypeProvider<ZodTypeProvider>();
    const secured = { onRequest: [fastify.authenticate] };
    const security = [{ bearerAuth: [] }];

    app.get(
        "/api/posts", 
        {
            schema: {
                tags: ["Posts"], 
                summary: "Listar posts", 
                description: "Retorna todos os posts cadastrados.",
                response: { 
                    200: z.array(postResponseSchema) 
                },
            }
        }, 
        async (_request, reply) => {
            const posts =  await findAllPosts(fastify);
            return reply.status(200).send(posts);
        }
    );

    app.get(
        "/api/posts/:id", 
        {
            schema: {
                tags: ["Posts"], 
                summary: "Buscar post por ID", 
                description: "Retorna o conteúdo de um post cadastrado.",
                params: z.object({ id: idParam() }), 
                response: { 
                    200: postResponseSchema, 
                    404: errorResponseSchema 
                },
            }
        }, 
        async (request, reply) => {
            const post = await findPostById(fastify, request.params.id);
            return reply.status(200).send(post);
        }
    );

    app.post(
        "/api/posts", 
        {
            ...secured, 
            schema: {
                tags: ["Posts"], 
                summary: "Criar post", 
                description: "Cadastra um novo post no blog.",
                body: createPostInput, 
                security,
                response: { 
                    201: createResponse, 
                    400: errorResponseSchema, 
                    401: errorResponseSchema 
                },
            }
        }, 
        async (request, reply) => {
            const response = await createPost(fastify, request.body)
            return reply.status(201).send(response);
        }
    );


    app.put(
        "/api/posts/:id", 
        {
            ...secured, 
            schema: {
                tags: ["Posts"], 
                summary: "Alterar post", 
                description: "Altera os campos informados de um post.",
                params: z.object({ id: idParam() }), 
                body: updatePostInput, security,
                response: { 
                    200: updateResponse, 
                    400: errorResponseSchema, 
                    401: errorResponseSchema, 
                    404: errorResponseSchema 
                },
            }
        }, 
        async (request, reply) => {
            const response = await updatePost(fastify, request.params.id, request.body);
            return reply.status(200).send(response)
        }
    );

    app.delete(
        "/api/posts/:id", 
        {
            ...secured, 
            schema: {
                tags: ["Posts"], 
                summary: "Excluir post", 
                description: "Remove um post pelo ID.",
                params: z.object({ id: idParam() }), 
                security,
                response: { 
                    200: deleteResponse, 
                    400: errorResponseSchema, 
                    401: errorResponseSchema, 
                    404: errorResponseSchema 
                },
            }
        }, 
        async (request, reply) => {
            const response = await deletePost(fastify, request.params.id);
            return reply.status(200).send(response);
        }
    );
}
