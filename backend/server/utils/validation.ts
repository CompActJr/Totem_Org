import type { ValidationError } from './errors'

type Rules = Record<string, { type?: string; required?: boolean; label?: string }>

const regras: Record<string, Rules> = {
  posts: {
    titulo: { type: 'string', required: true, label: 'Título' },
    conteudo: { type: 'string', label: 'Conteúdo' },
    resumo: { type: 'string', label: 'Resumo' },
    autor: { type: 'string', label: 'Autor' },
    categoria: { type: 'string', label: 'Categoria' },
    imagem_url: { type: 'string', label: 'URL da imagem' },
    ativo: { type: 'boolean', label: 'Ativo' },
    destaque: { type: 'boolean', label: 'Destaque' },
    unidade_ids: { type: 'array-string', label: 'Unidades' },
  },
  professores: {
    nome: { type: 'string', required: true, label: 'Nome' },
    disciplina: { type: 'string', label: 'Disciplina' },
    email: { type: 'string', label: 'Email' },
    telefone: { type: 'string', label: 'Telefone' },
    descricao: { type: 'string', label: 'Descrição' },
    instagram: { type: 'string', label: 'Instagram' },
    linkedin: { type: 'string', label: 'LinkedIn' },
    foto_url: { type: 'string', label: 'URL da foto' },
    ativo: { type: 'boolean', label: 'Ativo' },
    unidade_id: { type: 'string', required: true, label: 'Unidade' },
  },
  eventos: {
    titulo: { type: 'string', required: true, label: 'Título' },
    descricao: { type: 'string', label: 'Descrição' },
    data_inicio: { type: 'date', label: 'Data início' },
    data_fim: { type: 'date', label: 'Data fim' },
    hora_inicio: { type: 'date', label: 'Hora início' },
    hora_fim: { type: 'date', label: 'Hora fim' },
    local: { type: 'string', label: 'Local' },
    imagem_url: { type: 'string', label: 'URL da imagem' },
    categoria: { type: 'string', label: 'Categoria' },
    ativo: { type: 'boolean', label: 'Ativo' },
    destaque: { type: 'boolean', label: 'Destaque' },
    unidade_ids: { type: 'array-string', label: 'Unidades' },
  },
  depoimentos: {
    conteudo: { type: 'string', required: true, label: 'Conteúdo' },
    autor: { type: 'string', required: true, label: 'Autor' },
    image_url: { type: 'string', label: 'URL da imagem' },
    categoria: { type: 'string', label: 'Categoria' },
  },
  unidades: {
    nome: { type: 'string', required: true, label: 'Nome' },
    cep: { type: 'string', label: 'CEP' },
    cidade: { type: 'string', label: 'Cidade' },
    estado: { type: 'string', label: 'Estado' },
    endereco: { type: 'string', label: 'Endereço' },
  },
}

function inferirTipo(valor: any): string {
  if (valor === null || valor === undefined) return 'undefined'
  if (Array.isArray(valor)) return 'array'
  return typeof valor
}

export function validar(entidade: string, body: any): ValidationError[] {
  const erros: ValidationError[] = []
  const campos = regras[entidade]

  if (!campos) return erros

  for (const [campo, regra] of Object.entries(campos)) {
    const valor = body[campo]
    const tipo = inferirTipo(valor)

    if (regra.required && (valor === undefined || valor === null || valor === '' || (Array.isArray(valor) && valor.length === 0))) {
      erros.push({ field: campo, message: `${regra.label || campo} é obrigatório` })
      continue
    }

    if (valor === undefined || valor === null || valor === '') continue

    switch (regra.type) {
      case 'string':
        if (tipo !== 'string') {
          erros.push({ field: campo, message: `${regra.label || campo} deve ser texto` })
        }
        break
      case 'boolean':
        if (tipo !== 'boolean') {
          erros.push({ field: campo, message: `${regra.label || campo} deve ser verdadeiro ou falso` })
        }
        break
      case 'number':
        if (tipo !== 'number' || isNaN(valor)) {
          erros.push({ field: campo, message: `${regra.label || campo} deve ser um número` })
        }
        break
      case 'date':
        if (tipo !== 'string' || isNaN(Date.parse(valor))) {
          erros.push({ field: campo, message: `${regra.label || campo} deve ser uma data válida` })
        }
        break
      case 'array-string':
        if (tipo !== 'array') {
          erros.push({ field: campo, message: `${regra.label || campo} deve ser uma lista` })
        } else if (!valor.every((v: any) => typeof v === 'string' || typeof v === 'number')) {
          erros.push({ field: campo, message: `${regra.label || campo} deve conter apenas IDs` })
        }
        break
    }
  }

  return erros
}
