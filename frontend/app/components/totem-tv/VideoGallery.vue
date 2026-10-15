<script setup lang="ts">
 import { videos } from '~/data/videos';
</script>

<template>
  <section class="w-full">
    <div class=" @apply mx-auto grid min-h-250 max-w-7xl grid-cols-1 gap-8 px-6 py-10 md:grid-cols-2 lg:grid-cols-3">
      <div class="h-" v-for="video in videos" :key="video.id">
        <Video :video="video" />
      </div>
    </div>
  </section>
</template>
