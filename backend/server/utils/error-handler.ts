import type { AppError } from './errors'
import { parsePrismaError } from './errors'

export default function (error: any, event: any) {
  const statusCode = error.statusCode || error.status || 500
  const fields = error.fields
  let message = error.statusMessage || error.message || 'Erro interno do servidor'

  if (!error.statusCode && !error.statusMessage) {
    if (error.code?.startsWith?.('P')) {
      const parsed = parsePrismaError(error)
      setResponseStatus(event, parsed.statusCode || 500)
      return send(event, JSON.stringify({
        statusCode: parsed.statusCode || 500,
        statusMessage: parsed.statusMessage || 'Erro no banco de dados',
        fields: parsed.fields,
      }))
    }
    message = 'Erro interno do servidor'
    console.error('Erro não tratado:', error)
  }

  if (statusCode >= 500) {
    console.error('Erro interno:', error)
  }

  setResponseStatus(event, statusCode)
  return send(event, JSON.stringify({
    statusCode,
    statusMessage: message,
    fields: fields || undefined,
  }))
}
