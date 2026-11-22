import type { BlogEditorMode, BlogFilters, CreatePostSchema, Post, UpdatePostSchema } from "~~/shared/posts"


export function useBlogPosts() {
  const config = useRuntimeConfig()
  const baseURL = import.meta.server
    ? String(config.apiBaseInternal)
    : String(config.public.apiBase)

  const filters = useState<BlogFilters>('blog-post-filters', () => ({
    categoria: '',
    destaque: undefined,
    ativo: undefined,
    unidades: [],
  }))
  const editorMode = useState<BlogEditorMode>('blog-editor-mode', () => 'closed')
  const selectedId = useState<number | null>('blog-selected-id', () => null)
  const mutationPending = ref(false)
  const mutationError = ref<string | null>(null)

  const query = computed(() => ({
    categoria: filters.value.categoria.trim() || undefined,
    destaque: filters.value.destaque,
    ativo: filters.value.ativo,
    unidades: filters.value.unidades.length ? filters.value.unidades : undefined,
  }))

  const listKey = computed(() => `blog-posts:${JSON.stringify(query.value)}`)

  const {
    data: posts,
    pending,
    error,
    status,
    refresh,
  } = useFetch<Post[]>('/posts', {
    baseURL,
    query,
    timeout: 5000,
    key: listKey,
    dedupe: 'defer',
    default: () => [],
  })

  const postInList = computed(() =>
    selectedId.value === null
      ? null
      : posts.value.find((post) => post._id === selectedId.value) ?? null,
  )

  const shouldFetchSelectedPost = computed(() =>
    editorMode.value === 'edit'
    && selectedId.value !== null
    && postInList.value === null,
  )

  const fallbackKey = computed(() =>
    selectedId.value === null ? 'blog-post:empty' : `blog-post:${selectedId.value}`,
  )

  const { data: fallbackPost, refresh: refreshFallbackPost } = useFetch<Post>(() =>
    selectedId.value === null ? '/posts/0' : `/posts/${selectedId.value}`,
    {
      baseURL,
      key: fallbackKey,
      immediate: false,
    })

  watchEffect(() => {
    if (shouldFetchSelectedPost.value) refreshFallbackPost()
  })

  const selectedPost = computed<Post | null>(() =>
    postInList.value as Post | null
    ?? fallbackPost.value as Post | null
    ?? null,
  )

  function openCreate() {
    selectedId.value = null
    editorMode.value = 'create'
  }

  function openEdit(id: number) {
    selectedId.value = id
    editorMode.value = 'edit'
  }

  function closeEditor() {
    editorMode.value = 'closed'
    selectedId.value = null
  }

  function getMutationError(requestError: unknown, fallback: string) {
    if (requestError && typeof requestError === 'object') {
      const fetchError = requestError as { statusMessage?: string }
      return fetchError.statusMessage || fallback
    }
    return fallback
  }

  async function createPost(input: CreatePostSchema): Promise<boolean> {
    mutationPending.value = true
    mutationError.value = null

    try {
      await $fetch('/api/admin/posts', { method: 'POST', body: input })
      await refresh()
      closeEditor()
      return true
    } catch (requestError: unknown) {
      mutationError.value = getMutationError(requestError, 'Falha ao cadastrar o post.')
      return false
    } finally {
      mutationPending.value = false
    }
  }

  async function updatePost(id: number, input: UpdatePostSchema): Promise<boolean> {
    mutationPending.value = true
    mutationError.value = null

    try {
      await $fetch(`/api/admin/posts/${id}`, { method: 'PUT', body: input })
      await refresh()
      closeEditor()
      return true
    } catch (requestError: unknown) {
      mutationError.value = getMutationError(requestError, 'Falha ao alterar o post.')
      return false
    } finally {
      mutationPending.value = false
    }
  }

  async function deletePost(id: number): Promise<boolean> {
    mutationPending.value = true
    mutationError.value = null

    try {
      await $fetch(`/api/admin/posts/${id}`, { method: 'DELETE' })
      await refresh()
      closeEditor()
      return true
    } catch (requestError: unknown) {
      mutationError.value = getMutationError(requestError, 'Falha ao excluir o post.')
      return false
    } finally {
      mutationPending.value = false
    }
  }

  watch(query, () => refresh(), { deep: true, flush: 'post' })

  return {
    posts,
    filters,
    pending,
    error,
    status,
    refresh,
    selectedId,
    selectedPost,
    editorMode,
    mutationPending,
    mutationError,
    openCreate,
    openEdit,
    closeEditor,
    createPost,
    updatePost,
    deletePost,
  }
}
