<script lang="ts" setup>
import VideoGallery from '~/components/totem-tv/VideoGallery.vue';

definePageMeta({ layout: 'default' })

useSeoMeta({
  title: 'Página principal',
  description: 'esta é a página principal do Site',
})

</script>

<template>
  <HeroSlider />

  <section class="px-4 py-32">
    <h1 class="px-4 py-3 text-gray-600 text-6xl text-center font-bold">
      Nossas Instituições
    </h1>
  </section>

  <section id="portais">
    <Timeline />
  </section>

  <VideoGallery /> 
 
</template>
