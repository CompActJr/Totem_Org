<template>
  <div class="home">
    <AppHeader />

    <HeroSection />

    <AboutSection />

    <UnitsSection />

    <TestimonialsSection />

    <VocationalSection />

    <ScheduleVisitSection @submitted="onFormSubmitted" />

    <AppFooter />
  </div>
</template>

<script setup>
// Este arquivo só compõe a página — toda a lógica e estilo de cada
// bloco vive dentro do próprio componente. O style.css global (tokens,
// grid, tipografia, botões) deve ser importado uma única vez no ponto
// de entrada da aplicação (main.js / App.vue), e não aqui.

import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import HeroSection from '@/components/home/HeroSection.vue'
import AboutSection from '@/components/home/AboutSection.vue'
import UnitsSection from '@/components/home/UnitsSection.vue'
import TestimonialsSection from '@/components/home/TestimonialsSection.vue'
import VocationalSection from '@/components/home/VocationalSection.vue'
import ScheduleVisitSection from '@/components/home/ScheduleVisitSection.vue'

function onFormSubmitted(data) {
  console.log('Formulário enviado:', data)
}
</script>