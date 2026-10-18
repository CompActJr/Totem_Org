export interface Video {
    id: number,
    name: string,
    url: string
}

export type Portal = {
    title: string
    description: string
    link: string
    image?: string
    color?: string
}

export interface Post {
  _id: number;
  titulo: string;
  resumo: string;
  conteudo: string;
  imagemUrl: string;
  ativo: boolean;
  destaque: boolean;
  autor: string;
  createdAt: string;
  updatedAt: string;
  categoria: string;
  unidades: string[];
}

export interface BlogFilters {
  categoria: string
  destaque: boolean
}