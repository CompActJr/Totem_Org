// src/plugins/cors.js
import fp from 'fastify-plugin';
import cors from '@fastify/cors';
import { FastifyInstance } from 'fastify';
import { env } from './env.js';

async function corsPlugin(fastify: FastifyInstance, opts: Object) {
  const allowedOrigins = env.ALLOWED_ORIGINS
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean);

  fastify.register(cors, {
    origin: env.NODE_PRODUCTION  ? allowedOrigins : true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  });
}

// O 'fastify-plugin' garante que as configurações do CORS sejam aplicadas globalmente
export default fp(corsPlugin);