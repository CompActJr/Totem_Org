//src/app.ts

import Fastify, { FastifyInstance } from "fastify";
import health from "./modules/health.js";
import dbConnector from "./plugins/dbConnector.js";
import swaggerPlugin from "./plugins/swagger.js";
import { errorHandler } from "./config/errorHandler.js";
import { serializerCompiler, validatorCompiler } from "@fastify/type-provider-zod";
import cors from "./config/cors.js";
import { authRoutes } from "./modules/auth/auth.routes.js";
import fastifyJwt from "@fastify/jwt";
import authenticate from "./plugins/authenticate.js";
import { unitsRoutes } from "./modules/organizations/routes/units.routes.js";
import { panoramaRoutes } from "./modules/organizations/routes/panoramas.routes.js";
import { testimonialRoutes } from "./modules/organizations/routes/testimonial.routes.js";
import { teacherRoutes } from "./modules/organizations/routes/teacher.routes.js";
import { activityRoutes } from "./modules/organizations/routes/activity.routes.js";
import { blogRoutes } from "./modules/blog/blog.routes.js";

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

  await fastify.register(fastifyJwt, {
    secret: process.env.JWT_SECRET ?? "",
    sign: {
      expiresIn: "2h",
    },
  });

  await fastify.register(authenticate);
  await fastify.register(swaggerPlugin);
  await fastify.register(cors);
  await fastify.register(health);
  await fastify.register(unitsRoutes);
  await fastify.register(panoramaRoutes);
  await fastify.register(testimonialRoutes);
  await fastify.register(teacherRoutes);
  await fastify.register(activityRoutes);
  await fastify.register(blogRoutes);
  await fastify.register(authRoutes);

  return fastify;
};
