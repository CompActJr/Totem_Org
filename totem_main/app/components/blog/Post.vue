<script setup lang="ts">
import type { Post } from '~/types/post'

const props = defineProps<{
  post: Post
}>()

const open = ref(false)

const image = computed(() =>
  props.post.image || '/images/logo-totem-colegios.png'
)

const shortDescription = computed(() => {
  return props.post.description
    .split(' ')
    .slice(0, 50)
    .join(' ') + (
      props.post.description.split(' ').length > 50
        ? '...'
        : ''
    )
})

const formattedDate = computed(() =>
  new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'long'
  }).format(new Date(props.post.createdAt))
)

function openModal() {
  open.value = true
}

</script>

<template>
  <div
    class="
      h-full
      flex
      flex-col
      rounded-2xl
      bg-white
      overflow-hidden
      transition-all
      duration-300
      hover:scale-105
    "
  >
    <img src="" class="h-52 w-full object-cover rounded-lg">

    <div class="flex items-center gap-3 my-4">
      <img :alt="post.author" :text="post.author.charAt(0)" />
      <p class="font-semibold text-gray-600">
        {{ post.author }}
      </p>

      <div class="flex items-center gap-1 text-sm text-gray-500">
        <UIcon name="i-lucide-calendar" />
        {{ formattedDate }}
      </div>
    </div>

    <h2 class="mt-5 text-2xl font-bold text-gray-600">
      {{ post.title }}
    </h2>

    <p class="mt-3 text-gray-600 flex-1 text-gray-600">
      {{ shortDescription }}
    </p>

    <div class="mt-4 flex flex-wrap gap-2">
      <span v-for="tag in post.tags" :key="tag" class="rounded-md p-1 min-w-15 text-center bg-orange-600" variant="soft">
        {{ tag }}
      </span>
    </div>

    <button 
      color="warning"
      variant="solid"
      class="
        mt-6
        self-start
        font-semibold
        px-5
        transition-all
        duration-300
        hover:scale-105
      "
      icon="i-lucide-arrow-right"
      trailing
      @click="openModal"
    >
      Ler mais
    </button>
  </div>

</template>