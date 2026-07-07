import { prisma } from '../../../utils/prisma'
import { validar } from '../../../utils/validation'
import { throwBadRequest } from '../../../utils/errors'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const erros = validar('unidades', body)
  if (erros.length) throwBadRequest('Dados inválidos', erros)

  const unidade = await prisma.unidades.create({
    data: {
      nome: body.nome,
      cep: body.cep,
      cidade: body.cidade,
      estado: body.estado,
      endereco: body.endereco,
    },
  })

  return unidade
})