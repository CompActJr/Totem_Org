import { z } from "zod"

export const agendamentoSchema = z.object({
  nome: z.string().trim().min(2).max(120),
  cidade: z.string().trim().min(2).max(120),
  nivel: z.string().trim().min(2).max(120),
  whatsapp: z.string().trim().min(8).max(30),
  email: z.email(),
})

export type AgendamentoRequest = z.infer<typeof agendamentoSchema>

