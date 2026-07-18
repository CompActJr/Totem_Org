<script setup lang="ts">
import AgendeSuaVisita from '~/components/home/AgendeSuaVisita.vue';
import HeroDepoimentos from '~/components/home/HeroDepoimentos.vue';
import HeroSlider from '~/components/home/HeroSlider.vue';
import HeroTitle from '~/components/home/HeroTitle.vue';
import HeroUnidades from '~/components/home/HeroUnidades.vue';
import HeroVocacional from '~/components/home/HeroVocacional.vue';

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

</script>

<template>

  <HeroSlider/>

  <HeroTitle/>

  <HeroUnidades/>

  <HeroDepoimentos/>

  <HeroVocacional />

  <AgendeSuaVisita />

  <WhatsappButton/>

</template>