
import Fastify, { FastifyError, FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import health from "./modules/health.js";
import dbConnector from "./plugins/dbConnector.js";
import { errorHandler } from "./config/errorHandler.js";


/**
 * @author Jonas
 * @param opts optional to build the instance
 * register all plugins and modules with autoload resource
 * routes needs to have routes.ts sufix
 */

export const buildApp = async (opts: Object = {})=> {
    const fastify: FastifyInstance = Fastify({ logger: true, ...opts });
    

    await fastify.register(dbConnector);
    await fastify.register(health);

    fastify.setErrorHandler(errorHandler)

    return fastify;
}