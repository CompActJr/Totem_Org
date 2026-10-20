<script lang="ts" setup>
import Depoimentos from '~/components/depoimentos/Depoimentos.vue';
import HeroSlider from '~/components/slider/HeroSlider.vue';
import Grid from '~/components/ui/cards/Grid.vue';
import HeroVocacional from '~/components/ui/HeroVocacional.vue';
import WhatsappButton from '~/components/ui/WhatsappButton.vue';
import CardUnitPV from '~/components/unidades/CardUnitPV.vue';
import { faqsVestibulares } from '~/data/faqsON';
import { unidadesVestibulares, whatssapLinks } from '~/data/static';
import type { WhatsappLinks } from '~/types/navigation.types';

definePageMeta({
    layout: 'vestibulares',
    title: 'Vestibulares Totem - Educação de Qualidade',
    description: 'O Vestibulares Totem oferece educação de qualidade, preparando os alunos para o sucesso acadêmico e pessoal.',
    ogTitle: 'Vestibulares Totem - Educação de Qualidade',
    ogDescription: 'O Vestibulares Totem oferece educação de qualidade, preparando os alunos para o sucesso acadêmico e pessoal.',
    ogImage: '/logos/logo-vestibulares.png',
    ogUrl: 'https://vestibulares.compactjr.com.br/',
    ogType: 'website',
    robots: 'index, follow',
})

const whatsappLinksFiltered: WhatsappLinks[] = whatssapLinks.filter( f => f['@type'] === "vestibulares");

const unidades = unidadesVestibulares;

const banners = [
    "/banners/BANNER_PV_IJUI.jpg",
    "/banners/BANNER_PV_SANTA_MARIA.jpg",
    "/banners/BANNER_PV_SANTA_ROSA.jpg"
];

</script>

<template>

    <HeroSlider :banners="banners">
        
    </HeroSlider>

    <section class="min-h-128 w-full responsive-padding">
        <div class="flex items-center">
            <h2 class="text-orange-600 mt-4 font-bold" aria-label="nossas unidades">
                PORQUE O TOTEM?
            </h2>
            <div class="bg-orange-600 w-16 h-0.5 ml-8"></div>
        </div>

        <h2 class="text-4xl mt-4 lg:mt-8 font-bold pt-8 lg:pt-12">
            GIGANTE<br />
            EM APROVAÇÃO
        </h2>

        <p class="pt-8 lg:pt-12 text-xl">
            No Totem Vestibulares você encontra:
        </p>

        <ul class="pt-8 lg:pt-12 ml-6 list-disc space-y-6 text-lg lg:text-xl leading-relaxed marker:text-orange-500 marker:text-2xl">
            <li>
                Atendimento ao aluno de forma personalizada.
            </li>

            <li>
                Estrutura física planejada para o conforto, segurança e rendimento do aluno.
            </li>

            <li>
                Metodologia de ensino adequada ao modelo de prova e universidade desejada pelo aluno.
            </li>

            <li>
                Material didático produzido pelos próprios professores, atualizado anualmente,
                contemplado com testes dos vestibulares do sul do Brasil.
            </li>
        </ul>

         <NuxtLink
                :to="`/vestibulares/faqs`"
                class="mt-6 inline-flex w-fit rounded-full bg-white shadow-2xl px-6 py-3 font-semibold text-gray-700 transition-all duration-300 hover:scale-115"
            >
                Saiba mais →
        </NuxtLink>
    </section>

    <section class="min-h-128 bg-white py-8 px-10 md:px-10 lg:py-16 lg:px-9 xl:px-40">
    <div class="flex items-center">
      <h2 class="text-orange-600 font-bold" aria-label="nossas unidades">
        NOSSAS UNIDADES
      </h2>
      <div class="bg-orange-600 w-16 h-0.5 ml-8"></div>
    </div>

    <Grid>
       <CardUnitPV v-for="unidade in unidades" :unidade="unidade" />
    </Grid>
  </section>

    <Depoimentos
      v-if="unidades[0]"
      :unidade="unidades[0].city"
      :depoimentos="unidades[0].depoimentos"
    />

    <HeroVocacional />

    <FaqsSection :faqs="faqsVestibulares"/>

    <WhatsappButton :links="whatsappLinksFiltered" />

</template>
