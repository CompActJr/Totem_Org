<script setup lang="ts">
import { videos } from '~/data/videos'
import Video from './Video.vue';
</script>

<template>
  <section class="w-full py-16" aria-labelledby="videos-title">
    <h2 id="videos-title" class="mb-10 text-center text-4xl font-bold text-gray-600 md:text-5xl">
      Totem TV
    </h2>
    <div class="mx-auto mt-8 grid max-w-7xl grid-cols-1 gap-8 px-6 md:grid-cols-2 lg:grid-cols-3">
      <div v-for="video in videos" :key="video.id">
        <Video :video="video" />
      </div>
    </div>
  </section>
</template>
