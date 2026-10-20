<script lang="ts" setup>
import type { Video } from '~/types/blog.types'

const props = defineProps<{ video: Video }>()

const embedUrl = computed(() => {
  const videoId = props.video.url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([^?&/]+)/)?.[1]

  return videoId ? `https://www.youtube.com/embed/${videoId}` : props.video.url
})
</script>

<template>
  <article class="overflow-hidden rounded-2xl bg-white shadow-lg transition-transform duration-300 hover:scale-[1.02]">
    <iframe
      class="aspect-video w-full"
      :src="embedUrl"
      :title="video.name"
      loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    />
    <h3 class="p-4 text-lg font-semibold text-gray-700">{{ video.name }}</h3>
  </article>
</template>
