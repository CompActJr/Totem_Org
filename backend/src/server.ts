// src/server.ts

import { FastifyInstance } from "fastify";
import { buildApp } from "./app.js";
import { transporter } from "./config/email.js";

const PORT = Number(process.env.PORT ?? 9000);
const HOST = "0.0.0.0";

const start = async () => {
  const fastify = await buildApp();

  try {
    await fastify.ready();

    fastify.log.info("MongoDB PING OK");
    await verificarSMTP(fastify);

    await fastify.listen({ port: PORT, host: HOST });

    fastify.log.info(`Server successfully listening on http://${HOST}:${PORT}`);
    fastify.log.info(`Swagger docs available at http://${HOST}:${PORT}/docs`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

async function verificarSMTP(fastify: FastifyInstance) {
    try {
      await transporter.verify()
      fastify.log.info('SMTP autenticado com sucesso')
    } catch (error) {
      fastify.log.warn(
        { err: error },
        'SMTP indisponível na inicialização'
      )
    }
}


start();