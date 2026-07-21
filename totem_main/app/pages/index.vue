<script lang="ts" setup>
import HeroSlider from '~/components/HeroSlider.vue'
import IntroSection from '~/components/home/IntroSection.vue'
import PortalTimelineSection from '~/components/home/PortalTimelineSection.vue'
import VideoGallery from '~/components/home/VideoGallery.vue'

definePageMeta({
  layout: 'public'
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

  <VideoGallery />
</template>