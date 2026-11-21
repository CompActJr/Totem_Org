import { transporter } from "../../config/email.js"
import { env } from "../../config/env.js"
import { AgendamentoRequest, ContatoRequest } from "./email.schema.js"

export async function enviarEmailAgendamento(request: AgendamentoRequest) {
  console.log('enviando: de ' + request.email + ' para: ' + env.SMTP_TO + ' por: ' + env.SMTP_FROM)
  const info = await transporter.sendMail({
    from: env.SMTP_FROM,
    to: env.SMTP_TO,
    replyTo: request.email,
    subject: 'Novo agendamento de visita',
    text: `
      Nome: ${request.nome}
      Cidade: ${request.cidade}
      Nível de ensino: ${request.nivel}
      WhatsApp: ${request.whatsapp}
      E-mail: ${request.email}
    `,
  })

  console.log('SMTP RESULTADO:', {
    messageId: info.messageId,
    accepted: info.accepted,
    rejected: info.rejected,
    response: info.response,
    envelope: info.envelope,
  })

  return info;
}

export async function enviarConfirmacaoAgendamento(request: AgendamentoRequest) {
  const info = await transporter.sendMail({
    from: env.SMTP_FROM,
    to: request.email,
    subject: 'Recebemos seu agendamento de visita',
    text: `Olá, ${request.nome}!
          Recebemos seu agendamento de visita ao Colégio Totem.
          Em breve, nossa equipe entrará em contato para confirmar os detalhes da visita.`,
  });

  console.log('SMTP RESULTADO:', {
    messageId: info.messageId,
    accepted: info.accepted,
    rejected: info.rejected,
    response: info.response,
    envelope: info.envelope,
  })
}

export async function enviarContato(request: ContatoRequest) {
  const info = await transporter.sendMail({
    from: env.SMTP_FROM,
    to: env.SMTP_TO,
    subject: request.assunto,
    text: `
      Nome: ${request.nome}
      Cidade: ${request.cidade}
      WhatsApp: ${request.whatsapp}
      Mensagem: ${request.mensagem}
    `,
  });

  console.log('SMTP RESULTADO:', {
    messageId: info.messageId,
    accepted: info.accepted,
    rejected: info.rejected,
    response: info.response,
    envelope: info.envelope,
  });

  return info;
}