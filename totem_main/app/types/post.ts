export interface PostType {
  id: number
  titulo: string,
  resumo: string,
  conteudo: string,
  imagemUrl: string,
  ativo: boolean,
  destaque: boolean,
  autor: string,
  createdAt: string,
  updatedAt: string,
  categoria: string,
  unidades: string[]
}