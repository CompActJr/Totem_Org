import type { BlogFilters, Post } from "~/types/blog.types"

export function useBlogPosts() {

  const config = useRuntimeConfig()

  // indica se o código atual está sendo executado no servidor.
  // Servidor: vai direto no container da API. Navegador: passa pelo nginx em /api
  const baseURL = import.meta.server
    ? String(config.apiBaseInternal)
    : String(config.public.apiBase)

  const filters = reactive<BlogFilters>({
    categoria: '',
    destaque: true,
    unidades: [],
  })
  
  const {
    data,
    pending,
    error,
    status,
    refresh,
  } = useFetch<Post[]>('/posts', {
    baseURL,
    query: {
      categoria: filters.categoria.trim(),
      destaque: filters.destaque ? true : undefined,
    },
    timeout: 5000,
    key: 'blog-posts',
    default: () => [],
  })

  return {
    posts: data,
    filters,
    pending,
    error,
    status,
    refresh,
  }
  
}
