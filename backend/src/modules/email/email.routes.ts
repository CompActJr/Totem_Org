import type { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { enviarConfirmacaoAgendamento, enviarEmailAgendamento } from './sender.service.js'
import { agendamentoSchema } from './email.schema.js'
import { errorResponseSchema } from '../../config/errorHandler.js'


export async function emailRoutes(app: FastifyInstance) {
  app.post(
    '/api/emails/matricula', 
    {
        schema: {
            tags: ["Email"],
            summary: "enviar um agendamento de visita",
            description: "Envia os dados de um agendamento de visita ao Colégio Totem.",
            body: agendamentoSchema,
            response: {
                200: z.object({
                    message: z.string()
                }),
                400: errorResponseSchema,
                502: errorResponseSchema,
            },
        }
    },
    async (request, reply) => {
        const parsed = agendamentoSchema.safeParse(request.body);
        
        if(!parsed.success || !parsed.data){
            return reply.code(400).send({
                message: "Dados inválidos: " + parsed.error
            })
        }
        
        try {
            await enviarEmailAgendamento(parsed.data)
            await enviarConfirmacaoAgendamento(parsed.data)
            
            return reply.code(200).send({
                message: 'Agendamento recebido com sucesso',
            })
        } 
        catch (error) {
            request.log.error({ err: error }, 'Falha no envio SMTP')
            return reply.code(502).send({
                message: 'Não foi possível enviar a solicitação',
            })
        }
  })
}
