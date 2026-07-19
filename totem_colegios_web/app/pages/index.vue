<script setup lang="ts">
import AgendeSuaVisita from '~/components/home/AgendeSuaVisita.vue';
import HeroDepoimentos from '~/components/home/HeroDepoimentos.vue';
import HeroSlider from '~/components/HeroSlider.vue';
import HeroTitle from '~/components/home/HeroTitle.vue';
import HeroUnidades from '~/components/home/HeroUnidades.vue';
import HeroVocacional from '~/components/home/HeroVocacional.vue';

import unidades from "~/data/unidades.json";

/**
 * @author Jonas
 * pagina pricipal do site, use as metatags abaixo para melhorar o SEO
 */

 definePageMeta({
  title: 'Colégio Totem - Educação de Qualidade',
  description: 'O Colégio Totem oferece educação de qualidade, preparando os alunos para o sucesso acadêmico e pessoal.',
  ogTitle: 'Colégio Totem - Educação de Qualidade',
  ogDescription: 'O Colégio Totem oferece educação de qualidade, preparando os alunos para o sucesso acadêmico e pessoal.',
  ogImage: '/geral/logo-totem.jpg',
  ogUrl: 'https://colegios.totem.com.br/',
  ogType: 'website',
 })

 const banners = [
    "/geral/BANNER.jpg",
    "/geral/AGENDE-SUA-VISITA.jpg"
]


</script>

<template>

  <HeroSlider :banners="banners" :titulo="'Matriculas Abertas'" :subtitle="'Colégios totem'" :link="'/#agende-visita'"/>

  <HeroTitle/>

  <HeroUnidades/>

  <HeroDepoimentos/>

  <HeroVocacional />

  <AgendeSuaVisita :unidades="unidades" />

  <WhatsappButton/>

</template>