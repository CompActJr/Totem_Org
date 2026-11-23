import {
  galleryDeleteResponseSchema,
  galleryListResponseSchema,
  type GalleryListResponseSchema,
} from '~~/shared/galeria'

export function useGaleria() {
  const page = useState<number>('gallery-page', () => 1)
  const limit = useState<number>('gallery-limit', () => 24)
  const mutationPending = ref(false)
  const mutationError = ref<string | null>(null)

  const query = computed(() => ({ page: page.value, limit: limit.value }))
  const key = computed(() => `gallery:${page.value}:${limit.value}`)

  const {
    data: gallery,
    pending,
    error,
    status,
    refresh,
  } = useFetch<GalleryListResponseSchema>('/api/galeria', {
    query,
    key,
    dedupe: 'defer',
    transform: (response) => galleryListResponseSchema.parse(response),
    default: () => ({
      items: [],
      page: page.value,
      limit: limit.value,
      total: 0,
      totalPages: 0,
    }),
  })

  function goToPage(nextPage: number) {
    if (nextPage >= 1 && nextPage <= gallery.value.totalPages) {
      page.value = nextPage
    }
  }

  async function deleteGalleryItem(id: string): Promise<boolean> {
    mutationPending.value = true
    mutationError.value = null

    try {
      const response = await $fetch(`/api/galeria/${id}`, { method: 'DELETE' })
      galleryDeleteResponseSchema.parse(response)
      await refresh()
      return true
    } catch (requestError: unknown) {
      mutationError.value = requestError instanceof Error
        ? requestError.message
        : 'Falha ao excluir a imagem.'
      return false
    } finally {
      mutationPending.value = false
    }
  }

  return {
    gallery,
    page,
    limit,
    pending,
    error,
    status,
    refresh,
    mutationPending,
    mutationError,
    goToPage,
    deleteGalleryItem,
  }
}
