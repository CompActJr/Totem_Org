
/**
 * src/config/errorHandler.ts
 * @author Jonas
 * tratamento de erros globais no processo de execução
 */

import type { FastifyError, FastifyReply, FastifyRequest } from "fastify";
import { hasZodFastifySchemaValidationErrors } from "@fastify/type-provider-zod";
import z from "zod";

export class AppError extends Error {
  constructor(
    public statusCode: number,
    message: string,
    public error: string = "Error",
  ) {
    super(message);
  }
}

export const errorResponseSchema = z.object({
  statusCode: z.number(),
  error: z.string(),
  message: z.string(),
});

export const errorHandler = (err: FastifyError | AppError, request: FastifyRequest, reply: FastifyReply) => {
  // validação do Zod (params, body, querystring)
  if (hasZodFastifySchemaValidationErrors(err)) {
    return reply.code(400).send({
      statusCode: 400,
      error: "Bad Request",
      message: err.validation.map((v) => `${v.instancePath || "campo"}: ${v.message}`).join("; "),
    });
  }

  // erros lançados em execução
  if (err instanceof AppError) {
    return reply.code(err.statusCode).send({
      statusCode: err.statusCode,
      error: err.error,
      message: err.message,
    });
  }

  // qualquer outro: loga o detalhe, devolve mensagem genérica
  request.log.error(err);
  return reply.code(500).send({
    statusCode: 500,
    error: "Internal Server Error",
    message: "Erro interno do servidor.",
  });
};