<template>
  <div class="unidade-page">
    <AppHeader />

    <UnitHeroSection :unidade="unidade" />

    <AboutSection />

    <LevelsSection :unidade="unidade" />

    <InfraSection :gallery="unidade.infraGallery" />

    <ActivitiesSection />

    <PlatformsSection />

    <TestimonialsSection />

    <ResultsCarouselSection />

    <NewsCarouselSection />

    <VocationalSection />

    <ContactSection :unidade="unidade" />

    <ScheduleVisitSection
      :default-city="unidade.city"
      @submitted="onFormSubmitted"
    />

    <AppFooter />
  </div>
</template>

<script setup>
// Esta página só compõe os blocos — a lógica e o estilo de cada
// seção vivem dentro do próprio componente. Os dados desta unidade
// vêm da fonte única em @/data/totem.js (mesma usada na Home e no
// rodapé), então bastaria trocar o slug para gerar a página de
// outra unidade (ver observação no final da resposta sobre rota
// dinâmica /unidade-[slug]).

import AppHeader from "@/components/layout/AppHeader.vue";
import AppFooter from "@/components/layout/AppFooter.vue";
import AboutSection from "@/components/home/AboutSection.vue";
import VocationalSection from "@/components/home/VocationalSection.vue";
import TestimonialsSection from "@/components/home/TestimonialsSection.vue";
import ScheduleVisitSection from "@/components/home/ScheduleVisitSection.vue";

import UnitHeroSection from "@/components/unit/UnitHeroSection.vue";
import LevelsSection from "@/components/unit/LevelsSection.vue";
import InfraSection from "@/components/unit/InfraSection.vue";
import ActivitiesSection from "@/components/unit/ActivitiesSection.vue";
import PlatformsSection from "@/components/unit/PlatformsSection.vue";
import ResultsCarouselSection from "@/components/unit/ResultsCarouselSection.vue";
import NewsCarouselSection from "@/components/unit/NewsCarouselSection.vue";
import ContactSection from "@/components/unit/ContactSection.vue";

import { findUnidadeBySlug } from "@/data/totem.js";

const unidade = findUnidadeBySlug("cachoeira-do-sul");

function onFormSubmitted(data) {
  console.log("Formulário enviado:", data);
}
</script>
