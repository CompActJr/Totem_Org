<script setup lang="ts">

import type { Post } from '~/types/blog.types.ts';
import ModalPost from './ModalPost.vue';
import I_Tags from '../ui/icons/I_Tags.vue';
import I_Calendar from '../ui/icons/I_Calendar.vue';
import I_Favorite from '../ui/icons/I_Favorite.vue';

const props = defineProps<{post: Post}>()
const open = ref(false);

const shortDescription = computed(() => {
  return props.post.conteudo
    .split(' ')
    .slice(0, 10)
    .join(' ') + ' [...]'
});

function openModal() {
  open.value = true
}

function closeModal() {
  open.value = false
}

</script>

<template>
  <div class="h-130 flex flex-col rounded-2xl shadow-lg bg-white overflow-hidden transition-all duration-300 hover:scale-105 p-4">
    <NuxtImg :src="post.imagemUrl" class="w-full h-52 object-cover rounded-lg" loading="lazy" format="webp" />

    <div class="w-full bg-gray-200 mt-2 h-1 rounded-full"></div>

    <div class="flex items-center justify-between gap-2 my-2">
      <div class="flex items-center gap-4">
        <I_Tags/>
        <p class="font-semibold text-gray-600">
          {{ post.categoria }}
        </p>
      </div>

      <div class="flex items-center gap-4 text-sm text-gray-500">
        <I_Calendar/>
        {{ post.createdAt }}
      </div>
    </div>

    <div class="w-full bg-gray-200 mt-2 h-1 rounded-full"></div>

    <div class="mt-4 flex flex-col h-full  items-start justify-around gap-4 ">
      <div class="relative group w-full">
        <h2 class="text-2xl font-bold text-gray-600 truncate cursor-help">
          {{ post.titulo }}
        </h2>

        <div
          class="absolute left-0 top-full z-20 mt-2 hidden max-w-sm rounded-lg bg-gray-600 px-3 py-2 text-sm text-white shadow-lg group-hover:block">
          {{ post.titulo }}
        </div>
      </div>

      <p class="flex-1 text-gray-600">
        {{ shortDescription }}
      </p>

      <div class="flex items-center justify-between w-full">
        <button class="button-primary" @click="openModal">
          Ler mais
        </button>

        <I_Favorite  v-if="post.destaque"/>
       
      </div>
    </div>
  </div>

  <ModalPost
    :post="post"
    :open="open"
    @close="closeModal"
  />

</template>