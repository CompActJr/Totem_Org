import type { AgendamentoPayload, ContatoPayload } from "~/types/email.types"

export function useEmail() {
    const config = useRuntimeConfig()

    const baseURL = import.meta.server
        ? String(config.apiBaseInternal || config.public.apiBase || 'http://localhost:9000/api')
        : String(config.public.apiBase || config.apiBaseInternal || 'http://localhost:9000/api')

  async function enviarAgendamento(request: AgendamentoPayload) {
    return await $fetch('/emails/matricula', {
      baseURL,
      method: 'POST',
      body: request,
    })
  }

  async function enviarContato(request: ContatoPayload) {
    return await $fetch('/emails/contato', {
      baseURL,
      method: 'POST',
      body: request,
    })
  }

  return { enviarAgendamento, enviarContato }
}
