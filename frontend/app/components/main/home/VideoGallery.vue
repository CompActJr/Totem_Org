<script setup lang="ts">
import Video from '~/components/Video.vue'
import videos from '~/data/videos.json'
</script>

<template>
  <section class="w-full">
    <div class="grid-container">
      <div class="h-" v-for="video in videos" :key="video.id">
        <Video :video="video" />
      </div>
    </div>
  </section>
</template>
