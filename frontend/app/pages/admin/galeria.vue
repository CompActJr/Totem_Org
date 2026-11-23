<script lang="ts" setup>
import { useGaleria } from '~/composables/api/useGaleria'
import { useUpload } from '~/composables/api/useUpload'
import type { GalleryItem } from '~~/shared/galeria'

definePageMeta({ layout: 'admin' })

const fileInput = ref<HTMLInputElement | null>(null)
const selectedFile = ref<File | null>(null)

const {
  gallery,
  page,
  pending,
  error,
  refresh,
  mutationPending,
  mutationError,
  goToPage,
  deleteGalleryItem,
} = useGaleria()
const {
  pending: uploadPending,
  error: uploadError,
  uploadImage,
} = useUpload()

function selectFile(event: Event) {
  selectedFile.value = (event.target as HTMLInputElement).files?.[0] ?? null
}

async function submitUpload() {
  if (!selectedFile.value) return

  if (await uploadImage(selectedFile.value)) {
    selectedFile.value = null
    if (fileInput.value) fileInput.value.value = ''
    await refresh()
  }
}

async function removeItem(item: GalleryItem) {
  if (window.confirm(`Excluir a imagem "${item.nome}"?`)) {
    await deleteGalleryItem(item._id)
  }
}
</script>

<template>
  <section class="w-full">
    <div class="mb-8 flex flex-col justify-between gap-6 lg:flex-row lg:items-start">
      <div>
        <h1 class="text-4xl font-bold text-gray-700">Galeria</h1>
        <p class="pt-3 text-gray-500">Gerencie as imagens disponíveis na galeria.</p>
      </div>

      <form class="w-full max-w-md rounded-xl border border-gray-200 bg-white p-4 flex-col gap-4 shadow-sm"
         @submit.prevent="submitUpload"
        >
        <label class="text-sm font-semibold text-gray-600">
          Nova foto
        </label>

        <input ref="fileInput" 
            class="block w-full border-gray-600 p-4 shadow  text-sm text-gray-600" 
            type="file" 
            @change="selectFile" 
        />
        <p v-if="uploadError" class="mt-3 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">
            {{ uploadError }}
        </p>
       
        <button type="submit" 
            class="btn-primary mt-4 disabled:cursor-not-allowed disabled:opacity-50" 
            :disabled="!selectedFile || uploadPending"
        >
          {{ uploadPending ? 'Enviando...' : 'Adicionar foto' }}
        </button>

      </form>
    </div>

    <p v-if="pending" class="py-12 text-center text-gray-500">Carregando imagens...</p>
    <p v-else-if="error" class="rounded-lg bg-red-50 px-4 py-3 text-red-700">Não foi possível carregar a galeria.</p>

    <div v-else class="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
      <table class="min-w-full divide-y divide-gray-200 text-left">
        <thead class="bg-gray-50 text-sm text-gray-600">
          <tr>
            <th class="px-5 py-4 font-semibold">Nome</th>
            <th class="px-5 py-4 font-semibold">URL</th>
            <th class="px-5 py-4 text-right font-semibold">Ações</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100 text-sm text-gray-700">
          <tr v-for="item in gallery.items" :key="item._id">
            <td class="px-5 py-4 font-medium">{{ item.nome }}</td>
            <td class="max-w-md px-5 py-4">
              <a :href="item.url" class="block truncate text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                {{ item.url }}
              </a>
            </td>
            <td class="px-5 py-4 text-right">
              <button type="button" class="rounded-lg bg-red-600 px-4 py-2 font-semibold text-white disabled:opacity-50" :disabled="mutationPending" @click="removeItem(item)">
                Excluir
              </button>
            </td>
          </tr>
          <tr v-if="gallery.items.length === 0">
            <td colspan="3" class="px-5 py-12 text-center text-gray-500">Nenhuma imagem encontrada.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p v-if="mutationError" class="mt-4 rounded-lg bg-red-50 px-4 py-3 text-red-700">{{ mutationError }}</p>

    <nav v-if="gallery.totalPages > 1" class="mt-6 flex flex-wrap items-center justify-center gap-2" aria-label="Paginação da galeria">
      <button type="button" class="rounded border border-gray-300 px-3 py-2 disabled:opacity-50" :disabled="page === 1" @click="goToPage(page - 1)">
        Anterior
      </button>
      <button v-for="pageNumber in gallery.totalPages" :key="pageNumber" type="button" class="rounded border px-3 py-2" :class="page === pageNumber ? 'border-blue-600 bg-blue-600 text-white' : 'border-gray-300'" @click="goToPage(pageNumber)">
        {{ pageNumber }}
      </button>
      <button type="button" class="rounded border border-gray-300 px-3 py-2 disabled:opacity-50" :disabled="page === gallery.totalPages" @click="goToPage(page + 1)">
        Próxima
      </button>
    </nav>
  </section>
</template>
