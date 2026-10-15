<script setup lang="ts">

import HeroSlider from '~/components/ui/HeroSlider.vue';
import HeroSliderCTA from '~/components/ui/HeroSliderCTA.vue';

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

  <HeroSlider :banners="banners">
    <HeroSliderCTA titulo="Matriculas Abertas" subtitle="Colégios Totem" link="/#agende-visita'" />
  </HeroSlider>

  <section id="porque_o_totem" class="scroll-mt-24 min-h-128 w-full flex flex-col md:flex-row 
      gap-4 bg-gray-200  xl:gap-[5vw] responsive-padding">
    <article class="w-full md:w-7/12 lg:w-8/12">
      <div class="flex items-center">
        <h2 class="text-gray-600 font-bold" aria-label="nossas unidades">
          PORQUE O TOTEM?
        </h2>
        <div class="bg-orange-600 w-32 h-0.5 ml-8"></div>
      </div>

      <h2 class="text-2xl md:text-4xl mt-4 lg:text-6xl text-gray-700 font-bold">
        É MAIS QUE<br />
        COLÉGIO...
      </h2>

      <p class="mt-4 md:mt-8 lg:text-lg">Bem-vindo(a) ao SEU FUTURO! Prepare-se para construir o amanhã.
        No <strong>Colégio Totem</strong>, acreditamos que a escolha certa é a que motiva,
        acolhe e faz feliz. Aqui, nossos estudantes encontram um ambiente onde o afeto e a
        atenção são prioridades, proporcionando bem-estar e segurança para todos. Oferecemos
        a educação que desperta a criatividade e entrega um mundo de conhecimento nas mãos de
        nossas crianças e jovens.
      </p>

      <p class="mt-4 md:mt-8"><strong>É MAIS QUE COLÉGIO: É TOTEM!</strong></p>
    </article>

    <div class="w-full md:w-5/12 lg:w=4/12">
      <img src="/geral/POR-QUE-O-TOTEM.jpg" alt="Pátio do Colégio Totem visto de cima"
        class="w-full md:min-h-[90%] object-cover" />
    </div>
  </section>


  <section class="min-h-128 bg-white py-8 px-10 md:px-10 lg:py-16 lg:px-9 xl:px-40">
    <div class="flex items-center">
      <h2 class="text-orange-600 font-bold" aria-label="nossas unidades">
        NOSSAS UNIDADES
      </h2>
      <div class="bg-orange-600 w-16 h-0.5 ml-8"></div>
    </div>

    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-4 lg:mt-8">
      <CardUnit v-for="unidade in unidades" :unidade="unidade" />
    </div>
  </section>

  <HeroDepoimentos />

  <HeroVocacional />

  <AgendeSuaVisita :unidades="unidades" />

  <WhatsappButton :unidades="unidades" />

</template>