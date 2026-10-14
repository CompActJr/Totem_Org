<script setup lang="ts">

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

 const banners = ["/geral/BANNER.jpg", "/geral/AGENDE-SUA-VISITA.jpg"]

</script>

<template>

  <HeroSlider :banners="banners" :titulo="'Matriculas Abertas'" :subtitle="'Colégios Totem'" :link="'/#agende-visita'"/>

  <HeroTitle/>

  <HeroUnidades :unidades="unidades"/>

  <HeroDepoimentos/>

  <HeroVocacional />

  <AgendeSuaVisita :unidades="unidades" />

  <WhatsappButton :unidades="unidades"/>

</template>