import { z } from "zod"

export const agendamentoSchema = z.object({
  nome: z.string().trim().min(2).max(120),
  cidade: z.string().trim().min(2).max(120),
  nivel: z.string().trim().min(2).max(120),
  whatsapp: z.string().trim().min(8).max(30),
  email: z.email(),
})


export const contatoPayload = z.object({
  nome: z.string().trim().min(2).max(120),
  cidade: z.string().trim().min(2).max(120),
  whatsapp: z.string().trim().min(8).max(30),
  email: z.email(),
  mensagem: z.string().trim().min(2).max(500),
  assunto: z.string().trim().min(8).max(30),
})

export type AgendamentoRequest = z.infer<typeof agendamentoSchema>

export type ContatoRequest = z.infer<typeof contatoPayload>