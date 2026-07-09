import { prisma } from '../../../utils/prisma'
import { validar } from '../../../utils/validation'
import { throwBadRequest } from '../../../utils/errors'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const erros = validar('depoimentos', body)
  if (erros.length) throwBadRequest('Dados inválidos', erros)

  const depoimento = await prisma.depoimentos.create({
    data: {
      conteudo: body.conteudo,
      autor: body.autor,
      image_url: body.image_url,
      categoria: body.categoria,
    },
  })

  return depoimento
})
