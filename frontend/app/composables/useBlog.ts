import type { PostType } from "~/types/blog.types"

export type BlogOrder = 'recentes' | 'antigos'
export interface BlogFilters {
  categoria: string
  order: BlogOrder
  destaque: boolean
}

export function useBlogPosts() {

  const posts = reactive<PostType[]>([]);

  const filters = reactive<BlogFilters>({
    categoria: '',
    order: 'recentes',
    destaque: true
  })

  
}
