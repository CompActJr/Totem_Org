import { ZodTypeProvider } from "@fastify/type-provider-zod";
import { FastifyInstance } from "fastify";
import { authRequest, authResponse } from "./auth.schemas.js";
import { findUser } from "./auth.service.js";
import fastifyJwt from "@fastify/jwt";
import { AppError, errorResponseSchema } from "../../config/errorHandler.js";
import { PasswordService } from "../../utils/PasswordService.js";

const passwordService = new PasswordService();

export async function authRoutes(fastify: FastifyInstance) {
  const app = fastify.withTypeProvider<ZodTypeProvider>();

  app.post(
    '/api/auth',
    {
        schema: {
            tags: ["user"],
            summary: "Buscar unidade por slug",
            description: "Retorna os dados públicos de uma unidade cadastrada.",
            body: authRequest,
            response: {
                200: authResponse,
                401: errorResponseSchema
            },
        },
    },
    async (request, reply) => {
        const {user, password} = request.body;
        const userFind = await findUser(fastify, user);

        if(!userFind || !(await passwordService.compare(password, userFind.password))){
            throw new AppError(401, "credenciais inválidas", "Unauthorized")
        }

        const created = new Date();

        const expiration = new Date(
            created.getTime() + 2 * 60 * 60 * 1000,
        );

        const token = fastify.jwt.sign({
            sub: userFind._id.toString(),
            name: userFind.name,
            email: userFind.email,
        });

        return reply.code(200).send({
            jwt: token,
            created,
            expiration,
        });

    }
  )

}