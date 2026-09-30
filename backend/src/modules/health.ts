import { FastifyInstance } from "fastify";

/**
 * @author Jonas
 * @description Health route to check the API HTTP
 * @param {FastifyInstance} fastify  Encapsulated Fastify Instance
 * @param {Object} options plugin options, refer to https://fastify.dev/docs/latest/Reference/Plugins/#plugin-options
 */
async function health(fastify: FastifyInstance, options: Object) {
  fastify.get('/api', async (request, response)=>{
    return {
        hello: 'OK'
    }
  })
}

export default health;