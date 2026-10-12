// src/plugins/authenticate.ts

import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import fp from "fastify-plugin";

//importante pra tipagem
declare module "fastify" {
  interface FastifyInstance {
    authenticate: (
      request: FastifyRequest,
      reply: FastifyReply,
    ) => Promise<void>;
  }
}

const authenticatePlugin = async (fastify: FastifyInstance) => {
  fastify.decorate(
    "authenticate",
    async function (request: FastifyRequest, reply: FastifyReply) {
      try {
        await request.jwtVerify();
      } catch {
        return reply.code(401).send({
          message: "Token ausente, inválido ou expirado.",
        });
      }
    },
  );
};

export default fp(authenticatePlugin);
