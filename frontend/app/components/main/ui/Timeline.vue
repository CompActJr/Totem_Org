<script setup lang="ts">
import type { Portal } from '~/types/portal';

    const config = useRuntimeConfig();
    const colegiosUrl: string = config.public.colegiosUrl as string;
    const vestibularesUrl: string = config.public.vestibularesUrl as string;
    console.log('logger: ' + colegiosUrl);
    console.log('logger: ' + vestibularesUrl);

const portals: Portal[] = [
  {
    title: 'Totem Pré-Vestibulares',
    description:
      'Conheça nossos cursos preparatórios para ENEM e vestibulares, descubra a metodologia de ensino, explore nossas unidades em tour 360°, conheça a equipe de professores e realize sua pré-matrícula de forma rápida e segura.',
    image: '/images/totem-on.png',
    link: vestibularesUrl
  },
  {
    title: 'Totem Colégios',
    description:
      'Explore tudo sobre nossos colégios: proposta pedagógica, estrutura das unidades, tour virtual 360°, corpo docente, atividades extracurriculares e o formulário de matrícula para novos alunos.',
    image: '/images/FACHADA-CRUZ-ALTA.jpg',
     link: colegiosUrl
  },
  {
    title: 'Totem Vocacional',
    description:
      'Descubra quais carreiras combinam com o seu perfil por meio do nosso Teste Vocacional. Responda às perguntas, receba um resultado personalizado e encontre os cursos mais indicados para o seu futuro.',
    image: '/img/cursos.png',
    link: '/vocacional'
  }
]

</script>

<template>

<div class="relative p-8">

    <div class="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-orange-500 -translate-x-1/2"/>
    <TimelineCard
        v-for="(portal,index) in portals"
        :key="portal.title"
        :portal="portal"
        :reverse="index % 2 === 1"
    />

</div>

</template>