import { FastifyInstance } from "fastify";

/**
 * @author Jonas
 * @description Health route to check the API HTTP
 * @param {FastifyInstance} fastify  Encapsulated Fastify Instance
 * @param {Object} options plugin options, refer to https://fastify.dev/docs/latest/Reference/Plugins/#plugin-options
 */
async function health(fastify: FastifyInstance, options: Object) {
  fastify.get(
    "/api",
    {
      schema: {
        tags: ["Health"],
        summary: "Health check da API",
        description: "Verifica se a API está respondendo corretamente.",
        response: {
          200: {
            type: "object",
            properties: {
              hello: { type: "string" },
            },
          },
        },
      },
    },
    async (request, response) => {
      return {
        hello: "OK",
      };
    }
  );
}

export default health;