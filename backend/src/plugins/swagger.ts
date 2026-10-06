import { FastifyInstance } from "fastify";
import swagger from "@fastify/swagger";
import swaggerUi from "@fastify/swagger-ui";

/**
 * Registra a especificação OpenAPI/Swagger com a instância do Fastify.
 * @author Jonas
 */
const swaggerPlugin = async (fastify: FastifyInstance, options: object) => {
  await fastify.register(swagger, {
    openapi: {
        openapi: "3.0.0",
        info: {
            title: "Totem API",
            version: "1.0.0",
            description: "Documentação da API do Totem",
        },
        servers: [ { url: "http://localhost:9000", description: "Servidor local" } ],
        tags: [
            { name: 'user', description: 'User related end-points' },
            { name: 'code', description: 'Code related end-points' }
        ],
        components: {
            securitySchemes: {
                apiKey: {
                    type: 'apiKey',
                    name: 'apiKey',
                    in: 'header'
                }
            }
        }
    },
  });

  await fastify.register(swaggerUi, {
    routePrefix: "/docs",
    uiConfig: {
      docExpansion: "list",
      deepLinking: false,
    },
  });
};

export default swaggerPlugin;