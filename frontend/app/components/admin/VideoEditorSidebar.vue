<script setup lang="ts">
import type { CreateVideoSchema, Video, VideoEditorMode } from '~~/shared/videos'

const props = defineProps<{
  mode: VideoEditorMode
  video: Video | null
  pending: boolean
  error: string | null
}>()

const emit = defineEmits<{
  close: []
  save: [payload: CreateVideoSchema]
  delete: [id: number]
}>()

const emptyVideo = (): CreateVideoSchema => ({ name: '', url: '' })
const form = ref<CreateVideoSchema>(emptyVideo())

watch(
  () => [props.mode, props.video] as const,
  ([mode, video]) => {
    if (mode === 'edit' && video) {
      form.value = { name: video.name, url: video.url }
      return
    }
    if (mode === 'create') form.value = emptyVideo()
  },
  { immediate: true },
)

function submit() {
  emit('save', { ...form.value })
}

function removeVideo() {
  if (props.video && window.confirm(`Excluir o vídeo "${props.video.name}"?`)) {
    emit('delete', props.video._id)
  }
}
</script>

<template>
  <Teleport to="body">
    <Transition name="fade">
      <aside v-if="mode !== 'closed'" class="fixed inset-y-0 right-0 z-50 w-full max-w-xl overflow-y-auto bg-white shadow-2xl">
        <div class="sticky top-0 z-10 flex items-center justify-between border-b border-gray-200 bg-white px-6 py-5">
          <h2 class="text-2xl font-bold text-gray-700">{{ mode === 'create' ? 'Cadastrar vídeo' : 'Editar vídeo' }}</h2>
          <button type="button" class="button-primary" @click="emit('close')">Fechar</button>
        </div>

        <form class="flex min-h-[calc(100%-76px)] flex-col gap-5 px-6 py-6" @submit.prevent="submit">
          <label class="flex flex-col gap-2 text-sm font-semibold text-gray-600">
            Nome
            <input v-model="form.name" class="input" maxlength="150" required />
          </label>

          <label class="flex flex-col gap-2 text-sm font-semibold text-gray-600">
            URL do vídeo
            <input v-model="form.url" class="input" type="url" maxlength="255" required />
          </label>

          <p v-if="error" class="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">{{ error }}</p>

          <div class="mt-auto flex items-center justify-between gap-4 border-t border-gray-200 pt-6">
            <button v-if="mode === 'edit'" type="button" class="rounded-lg bg-red-600 px-5 py-3 font-semibold text-white disabled:opacity-50" :disabled="pending" @click="removeVideo">
              Excluir
            </button>
            <button type="submit" class="btn-primary" :disabled="pending">
              {{ pending ? 'Salvando...' : 'Salvar vídeo' }}
            </button>
          </div>
        </form>
      </aside>
    </Transition>
  </Teleport>
</template>
