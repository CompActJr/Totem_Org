import Fastify from "fastify";
import { buildApp } from "./app.js";

const PORT = 9000;
const HOST = "0.0.0.0";

const start = async () => {
  const fastify = await buildApp();

  try {
    await fastify.ready();

    await fastify.mongo.db?.command({
      ping: 1,
    });

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