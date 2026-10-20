// src/plugins/swagger.ts

import type { FastifyInstance } from "fastify";
import swagger from "@fastify/swagger";
import swaggerUi from "@fastify/swagger-ui";
import { jsonSchemaTransform } from "@fastify/type-provider-zod";
import fastifyPlugin from "fastify-plugin";


const swaggerPlugin = async (fastify: FastifyInstance) => {
  await fastify.register(swagger, {
    openapi: {
      info: {
        title: "Totem API",
        version: "1.0.0",
        description: "Documentação da API do Totem",
      },
      servers: [
        {
          url: "/",
          description: "Servidor atual",
        },
      ],
      tags: [
        { name: "user", description: "usuarios do sistema" },
        { name: "upload", description: "upload de imagens" },
        { name: "Units", description: "Unidades da organização" },
        { name: "Posts", description: "Posts do blog" },
      ],
      components: {
        securitySchemes: {
          bearerAuth: {
            type: "http",
            scheme: "bearer",
            bearerFormat: "JWT",
            description: "Informe o JWT obtido no login.",
          },
        },
      },
    },
    transform: jsonSchemaTransform,
  });

  await fastify.register(swaggerUi, {
    routePrefix: "/docs",
    uiConfig: {
      docExpansion: "list",
      deepLinking: false,
    },
  });
};

export default fastifyPlugin(swaggerPlugin, {name: "swagger"}) ;
