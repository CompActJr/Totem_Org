import postsData from '~/data/posts.json'
import type { PostType } from '~/types/post'

export type BlogOrder = 'recentes' | 'antigos'

export interface BlogFilters {
  categoria: string
  order: BlogOrder
  destaque: boolean
}

export function useBlogPosts() {
  const filters = reactive<BlogFilters>({
    categoria: '',
    order: 'recentes',
    destaque: true
  })

  const applyFilterDate = (posts: PostType[]) => {
    switch (filters.order) {
      case 'antigos':
        return [...posts].sort(
          (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        )
      case 'recentes':
      default:
        return [...posts].sort(
          (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )
    }
  }

  const applyFilterDestaques = (posts: PostType[]) => {
    if (!filters.destaque) return posts

    return [...posts].sort((a, b) => Number(b.destaque) - Number(a.destaque))
  }

  const applyCategoryFilter = (posts: PostType[]) => {
    const category = filters.categoria.trim().toLowerCase()

    if (!category) return posts

    return posts.filter((post) =>
      post.categoria.toLowerCase().includes(category)
    )
  }

  const filteredPosts = computed<PostType[]>(() => {
    let posts = [...postsData] as PostType[]

    posts = applyFilterDate(posts)
    posts = applyFilterDestaques(posts)
    posts = applyCategoryFilter(posts)

    return posts
  })

  return {
    filters,
    filteredPosts
  }
}
