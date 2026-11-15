<script lang="ts" setup>
import HeroSlider from '~/components/global/HeroSlider.vue';
import VideoGallery from '~/components/totem-tv/VideoGallery.vue';
import { portais } from '~/data/static';

definePageMeta({ layout: 'default' })

useSeoMeta({
  title: 'Página principal',
  description: 'esta é a página principal do Site',
})

</script>

<template>

  <section class="px-4 py-32">
    <h1 class="px-4 py-3 text-gray-600 text-6xl text-center font-bold">
      Nossas Instituições
    </h1>
  </section>

  <section class="relative p-8" id="portais">
    <div class="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-orange-500 -translate-x-1/2"/>
    <TimelineCard
        v-for="(portal,index) in portais"
        :key="portal.title"
        :portal="portal"
        :reverse="index % 2 === 1"
    />
  </section>

  <VideoGallery /> 
 
</template>
