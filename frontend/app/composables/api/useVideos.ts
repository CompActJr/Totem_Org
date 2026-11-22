import type { CreateVideoSchema, UpdateVideoSchema, Video, VideoEditorMode } from "~~/shared/videos";

export function useVideos() {
    const config = useRuntimeConfig();
    const baseURL = import.meta.server
        ? String(config.apiBaseInternal || config.public.apiBase || 'http://localhost:9000/api')
        : String(config.public.apiBase || config.apiBaseInternal || 'http://localhost:9000/api')

    const key = computed(() => 'videos');
    const editorMode = useState<VideoEditorMode>('video-editor-mode', () => 'closed')
    const selectedId = useState<number | null>('video-selected-id', () => null)
    const mutationPending = ref(false)
    const mutationError = ref<string | null>(null)

                                                                                                                   
    const {data: videos, pending, error, status, refresh} = useFetch<Video[]>('/videos', {
        baseURL,
        timeout: 5000,
        key: key,
        dedupe: 'defer',
        default: () => [],
    })

    const selectedVideo = computed(() =>
        selectedId.value === null
            ? null
            : videos.value.find((video) => video._id === selectedId.value) ?? null,
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

    async function createVideo(input: CreateVideoSchema): Promise<boolean> {
        mutationPending.value = true
        mutationError.value = null

        try {
            await $fetch('/api/admin/videos', { method: 'POST', body: input })
            await refresh()
            closeEditor()
            return true
        } catch (requestError: unknown) {
            mutationError.value = getMutationError(requestError, 'Falha ao cadastrar o vídeo.')
            return false
        } finally {
            mutationPending.value = false
        }
    }

    async function updateVideo(id: number, input: UpdateVideoSchema): Promise<boolean> {
        mutationPending.value = true
        mutationError.value = null

        try {
            await $fetch(`/api/admin/videos/${id}`, { method: 'PUT', body: input })
            await refresh()
            closeEditor()
            return true
        } catch (requestError: unknown) {
            mutationError.value = getMutationError(requestError, 'Falha ao alterar o vídeo.')
            return false
        } finally {
            mutationPending.value = false
        }
    }

    async function deleteVideo(id: number): Promise<boolean> {
        mutationPending.value = true
        mutationError.value = null

        try {
            await $fetch(`/api/admin/videos/${id}`, { method: 'DELETE' })
            await refresh()
            closeEditor()
            return true
        } catch (requestError: unknown) {
            mutationError.value = getMutationError(requestError, 'Falha ao excluir o vídeo.')
            return false
        } finally {
            mutationPending.value = false
        }
    }

    return {
        videos,
        pending,
        error,
        status,
        refresh,
        selectedId,
        selectedVideo,
        editorMode,
        mutationPending,
        mutationError,
        openCreate,
        openEdit,
        closeEditor,
        createVideo,
        updateVideo,
        deleteVideo,
    }

}
