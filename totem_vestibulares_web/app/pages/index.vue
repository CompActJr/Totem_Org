<script lang="ts" setup>


import unidades from "~/data/unidades.json";

/**
 * @author Jonas
 * pagina pricipal do site, use as metatags abaixo para melhorar o SEO
 */

 definePageMeta({
  title: 'Vestibulares Totem - Educação de Qualidade',
  description: 'O Vestibulares Totem oferece educação de qualidade, preparando os alunos para o sucesso acadêmico e pessoal.',
  ogTitle: 'Vestibulares Totem - Educação de Qualidade',
  ogDescription: 'O Vestibulares Totem oferece educação de qualidade, preparando os alunos para o sucesso acadêmico e pessoal.',
  ogImage: '/images/logo.png',
  ogUrl: 'https://vestibulares.totem.com.br/',
  ogType: 'website',
 })

 const banners = [
    "/geral/BANNER.jpg",
    "/geral/AGENDE-SUA-VISITA.jpg"
]

</script>

<template>

    <HeroSlider />

    <HeroTitle />

    <HeroUnidades/>

    <HeroDepoimentos/>

    <HeroVocacional/>

    <HeroFaqs/>

    <WhatsappButton :unidades="unidades"/>

</template>