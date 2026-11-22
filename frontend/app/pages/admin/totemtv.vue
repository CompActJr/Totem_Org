<script lang="ts" setup>
import VideoEditorSidebar from '~/components/admin/VideoEditorSidebar.vue'
import { useVideos } from '~/composables/api/useVideos'
import type { CreateVideoSchema } from '~~/shared/videos'

definePageMeta({ layout: 'admin' })

const {
  videos,
  pending,
  error,
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
} = useVideos()

async function saveVideo(payload: CreateVideoSchema) {
  if (editorMode.value === 'create') {
    await createVideo(payload)
    return
  }

  if (selectedVideo.value) await updateVideo(selectedVideo.value._id, payload)
}
</script>

<template>
  <section class="w-full">
    <div class="mb-8 flex items-center justify-between gap-4">
      <div>
        <h1 class="text-4xl font-bold text-gray-700">Totem TV</h1>
        <p class="pt-8 text-gray-500">Gerencie os vídeos exibidos na página inicial.</p>
      </div>
      <button type="button" class="btn-primary" @click="openCreate">Adicionar vídeo</button>
    </div>

    <p v-if="pending" class="py-12 text-center text-gray-500">Carregando vídeos...</p>
    <p v-else-if="error" class="rounded-lg bg-red-50 px-4 py-3 text-red-700">Não foi possível carregar os vídeos.</p>
    <p v-else-if="videos.length === 0" class="py-12 text-center text-gray-500">Nenhum vídeo encontrado.</p>

    <div v-else class="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
      <article v-for="video in videos" :key="video._id" class="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        <div class="aspect-video bg-gray-100">
          <iframe class="pointer-events-none h-full w-full" :src="video.url" :title="video.name" tabindex="-1" />
        </div>
        <div class="flex items-center justify-between gap-3 p-4">
          <p class="font-semibold text-gray-700">{{ video.name }}</p>
          <button type="button" class="btn-primary shrink-0" @click="openEdit(video._id)">Editar</button>
        </div>
      </article>
    </div>

    <VideoEditorSidebar
      :mode="editorMode"
      :video="selectedVideo"
      :pending="mutationPending"
      :error="mutationError"
      @close="closeEditor"
      @save="saveVideo"
      @delete="deleteVideo"
    />
  </section>
</template>
