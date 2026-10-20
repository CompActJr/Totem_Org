// src/server.ts

import { buildApp } from "./app.js";

const PORT = Number(process.env.PORT ?? 9000);
const HOST = "0.0.0.0";

const start = async () => {
  const fastify = await buildApp();

  try {
    await fastify.ready();

    fastify.log.info("MongoDB PING OK");

    await fastify.listen({ port: PORT, host: HOST });

    fastify.log.info(`Server successfully listening on http://${HOST}:${PORT}`);
    fastify.log.info(`Swagger docs available at http://${HOST}:${PORT}/docs`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();