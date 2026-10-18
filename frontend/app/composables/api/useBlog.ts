import type { BlogFilters, Post } from "~/types/blog.types"

const apiBasePath = String(useRuntimeConfig().public.apiBasePath);

export function useBlogPosts() {

  const filters = reactive<BlogFilters>({
    categoria: '',
    destaque: true
  })
  
  const {
    data,
    pending,
    error,
    status,
    refresh,
  } = useFetch<Post[]>('/posts', {
    baseURL: apiBasePath,
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
