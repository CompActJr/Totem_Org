import { prisma } from '../../../utils/prisma'
import { validar } from '../../../utils/validation'
import { throwBadRequest } from '../../../utils/errors'

export default defineEventHandler(async (event) => {
  const id = BigInt(getRouterParam(event, 'id')!)
  const body = await readBody(event)

  const erros = validar('unidades', body)
  if (erros.length) throwBadRequest('Dados inválidos', erros)

  const unidade = await prisma.unidades.update({
    where: { id },
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