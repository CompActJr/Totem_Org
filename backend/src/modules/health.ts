import { FastifyInstance } from "fastify";
import z from "zod";

/**
 * @author Jonas
 * @description Health route to check the API HTTP
 * @param {FastifyInstance} fastify  Encapsulated Fastify Instance
 * @param {Object} options plugin options, refer to https://fastify.dev/docs/latest/Reference/Plugins/#plugin-options
 */
async function health(fastify: FastifyInstance, options: Object) {
  fastify.get("/health", {
    schema: {
      tags: ["health"],
      response: {
        200: z.object({ hello: z.string() }),
      },
    },
  }, async () => ({ hello: "world" }));
}

export default health;