<script lang="ts" setup>
import IntroSection from '~/components/main/home/IntroSection.vue';
import PortalTimelineSection from '~/components/main/home/PortalTimelineSection.vue';
import VideoGallery from '~/components/main/home/VideoGallery.vue';
import HeroSlider from '~/components/main/ui/HeroSlider.vue';

definePageMeta({
  layout: 'main-default'
})

useSeoMeta({
  title: 'Página principal',
  description: 'esta é a página principal do Site',
})
</script>

<template>
  <HeroSlider />

  <IntroSection />

  <PortalTimelineSection />

  <div class="w-full bg-gray-600 mt-8 mb-8 h-2" />

  //TODO: implementar seção de videos dinamica
  <VideoGallery /> 
 
</template>