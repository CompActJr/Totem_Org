import { FastifyError, FastifyReply, FastifyRequest } from "fastify";

/**
 * @author Jonas
 * @param error 
 * @param request 
 * @param reply 
 * @returns 
 * Tratamento de erros globais
 */
export const errorHandler = (error: FastifyError, request: FastifyRequest, reply: FastifyReply) => {
    request.log.error(error);

        //erros pra validação do zod
        if(error.validation){
            return reply.status(400).send({
                error: "Validation Error",
                message: error.message,
                details: error.validation,
            });
        }

        const statusCode = error.statusCode || 500;
            reply.status(statusCode).send({
            error: error.name || "InternalServerError",
            message: error.message || "An internal server error occurred",
        });
    }