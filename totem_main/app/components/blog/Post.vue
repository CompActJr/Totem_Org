<script setup lang="ts">
import type { Post } from '~/types/post'

const props = defineProps<{
  post: Post
}>()

const open = ref(false);

const shortDescription = computed(() => {
  return props.post.conteudo
    .split(' ')
    .slice(0, 20)
    .join(' ') + (
      props.post.conteudo.split(' ').length > 50
        ? '...'
        : ''
    )
});

function openModal() {
  open.value = true
}

</script>

<template>
  <div class="card">
    <NuxtImg :src="post.imagemUrl" class="w-full h-52 object-cover rounded-lg" loading="lazy" format="webp" />

    <div class="w-full bg-gray-200 mt-2 h-1"></div>

    <div class="flex items-center justify-between gap-3 my-4">
      <div class="flex items-center gap-4">
        <img src="/icons/tabler--user.svg" alt="author" />
        <p class="font-semibold text-gray-600">
          {{ post.autor }}
        </p>
      </div>

      <div class="flex items-center gap-4 text-sm text-gray-500">
        <img src="/icons/boxicons--calendar-filled.svg" alt="calendar" />
        {{ post.createdAt }}
      </div>
    </div>

    <div class="flex flex-col items-start gap-4 justify-evelyn">
      <h2 class="mt-5 text-2xl font-bold text-gray-600">
        {{ post.titulo }}
      </h2>

      <p class="mt-3 flex-1 text-gray-600">
        {{ shortDescription }}
      </p>

      <button class="button-primary" @click="openModal">
        <img src="/icons/icon-park-solid--next.svg" />
        Ler mais
      </button>
    </div>
  </div>

</template>