<template>
  <div class="eventos">
    <AppHeader />

    <NewsSection />

    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import NewsSection from '@/components/news/NewsSection.vue'
</script>
