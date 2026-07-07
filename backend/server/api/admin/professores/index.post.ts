import { prisma } from '../../../utils/prisma'
import { validar } from '../../../utils/validation'
import { throwBadRequest } from '../../../utils/errors'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const erros = validar('professores', body)
  if (erros.length) throwBadRequest('Dados inválidos', erros)

  const professor = await prisma.professores.create({
    data: {
      nome: body.nome,
      foto_url: body.foto_url,
      disciplina: body.disciplina,
      email: body.email,
      telefone: body.telefone,
      descricao: body.descricao,
      instagram: body.instagram,
      linkedin: body.linkedin,
      ativo: body.ativo ?? true,
      unidade_id: BigInt(body.unidade_id),
    },
    include: {
      unidades: true,
    },
  })

  return professor
})