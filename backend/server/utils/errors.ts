export interface ValidationError {
  field: string
  message: string
}

export class AppError extends createError {
  fields?: ValidationError[]

  constructor(statusCode: number, message: string, fields?: ValidationError[]) {
    super({ statusCode, statusMessage: message })
    this.fields = fields
  }
}

export function throwBadRequest(message: string, fields?: ValidationError[]) {
  throw new AppError(400, message, fields)
}

export function throwNotFound(entidade: string) {
  throw new AppError(404, `${entidade} não encontrado`)
}

export function throwUnauthorized(msg?: string) {
  throw new AppError(401, msg || 'Token ausente ou inválido')
}

export function throwForbidden() {
  throw new AppError(403, 'Acesso não autorizado')
}

const mensagensPrisma: Record<string, string> = {
  P2000: 'Valor muito longo para o campo',
  P2002: 'Registro duplicado',
  P2003: 'Registro relacionado não encontrado',
  P2025: 'Registro não encontrado para atualizar ou excluir',
  P1001: 'Não foi possível conectar ao banco de dados',
  P1002: 'Conexão com o banco de dados foi encerrada',
}

export function parsePrismaError(error: any): AppError {
  const code = error.code as string
  const message = mensagensPrisma[code] || 'Erro inesperado no banco de dados'
  const fields: ValidationError[] = []

  if (code === 'P2002') {
    const target = (error.meta?.target as string[]) || []
    fields.push(...target.map((t) => ({ field: t, message: `Já existe um registro com este ${t}` })))
  }

  if (code === 'P2003') {
    const field = (error.meta?.field_name as string) || 'campo'
    fields.push({ field, message: `Valor referenciado não encontrado para ${field}` })
  }

  if (code === 'P2025') {
    const model = (error.meta?.modelName as string) || 'Registro'
    return new AppError(404, `${model} não encontrado(a)`)
  }

  return new AppError(400, message, fields)
}
