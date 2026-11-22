import { ZodTypeProvider } from "@fastify/type-provider-zod";
import { FastifyInstance } from "fastify";
import { authRequest, authResponse, meResponse } from "./auth.schemas.js";
import { findUser, findUserById } from "./auth.service.js";
import { AppError, errorResponseSchema } from "../../config/errorHandler.js";
import { PasswordService } from "../../utils/PasswordService.js";

const passwordService = new PasswordService();

export async function authRoutes(fastify: FastifyInstance) {
  const app = fastify.withTypeProvider<ZodTypeProvider>();
  const secured = { onRequest: [fastify.authenticate] };
  const security = [{ bearerAuth: [] }];

  app.get(
    '/api/me',
    {
      ...secured,
      schema: {
        tags: ["user"],
        summary: "Obter usuário autenticado",
        description: "Valida o JWT e retorna os dados públicos do usuário atual.",
        security,
        response: {
          200: meResponse,
          401: errorResponseSchema,
        },
      },
    },
    async (request, reply) => {
      const payload = request.user as { sub?: string };

      if (!payload.sub) {
        throw new AppError(401, "Token inválido.", "Unauthorized");
      }

      const user = await findUserById(fastify, payload.sub);

      if (!user) {
        throw new AppError(401, "Usuário não encontrado.", "Unauthorized");
      }

      return reply.status(200).send({
        name: user.name,
        email: user.email,
      });
    }
  );

  app.post(
    '/api/auth',
    {
      schema: {
        tags: ["user"],
        summary: "Autenticar usuário",
        description: "Valida as credenciais e retorna um JWT.",
        body: authRequest,
        response: {
          200: authResponse,
          401: errorResponseSchema,
        },
      },
    },
    async (request, reply) => {
      const { user, password } = request.body;
      const userFind = await findUser(fastify, user);

      if (!userFind || !(await passwordService.compare(password, userFind.password))) {
        throw new AppError(401, "credenciais inválidas", "Unauthorized");
      }

      const created = new Date();
      const expiration = new Date(created.getTime() + 2 * 60 * 60 * 1000);

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
  );
}