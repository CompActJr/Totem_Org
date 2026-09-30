import fastifyMongodb from "@fastify/mongodb"
import { FastifyInstance } from "fastify"
import fastifyPlugin from "fastify-plugin"
import { env } from "../config/env.js"

/**
 * @param {FastifyInstance} fastify
 * @param {Object} options
 * Wrapping a plugin function with fastify-plugin exposes the decorators
 * and hooks, declared inside the plugin to the parent scope.
 */
const dbConnector = async (fastify: FastifyInstance, options: Object) => {
  fastify.register(fastifyMongodb, {
    url: env.MONGO_URL
  })
}

export default fastifyPlugin(dbConnector)