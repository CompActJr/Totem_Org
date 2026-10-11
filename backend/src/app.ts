//src/app.ts


import Fastify, { FastifyInstance } from "fastify";
import health from "./modules/health.js";
import dbConnector from "./plugins/dbConnector.js";
import swaggerPlugin from "./plugins/swagger.js";
import { errorHandler } from "./config/errorHandler.js";
import { serializerCompiler, validatorCompiler } from "@fastify/type-provider-zod";
import unitsRoutes from "./modules/units/units.routes.js";
import cors from "./config/cors.js";

/**
 * @author Jonas
 * @param opts optional to build the instance
 * register all plugins and modules with autoload resource
 * routes needs to have routes.ts sufix
 */

export const buildApp = async (opts: Object = {}) => {
  const fastify: FastifyInstance = Fastify({ logger: true, ...opts });

  fastify.setValidatorCompiler(validatorCompiler);
  fastify.setSerializerCompiler(serializerCompiler);
  fastify.setErrorHandler(errorHandler);

  //important: swagger e dbConnecto são plugins e precisam estar encapsulados com o fastify-plugin e vir antes das rotas
  await fastify.register(dbConnector);
  await fastify.register(swaggerPlugin);
  await fastify.register(cors);
  await fastify.register(health);
  await fastify.register(unitsRoutes);

  return fastify;
};