<script lang="ts" setup>
import Depoimentos from '~/components/depoimentos/Depoimentos.vue';
import HeroSlider from '~/components/slider/HeroSlider.vue';
import HeroSliderCTA from '~/components/slider/HeroSliderCTA.vue';
import HeroVocacional from '~/components/ui/HeroVocacional.vue';
import WhatsappButton from '~/components/ui/WhatsappButton.vue';
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
    ""
];

</script>

<template>

    <HeroSlider :banners="banners">
        <HeroSliderCTA titulo="Matriculas Abertas" subtitle="Vestibulares Totem" link="/matriculas" />
    </HeroSlider>

    <section class="min-h-128 w-full responsive-padding">
        <div class="flex items-center">
            <h2 class="text-orange-600 font-bold" aria-label="nossas unidades">
                PORQUE O TOTEM?
            </h2>
            <div class="bg-orange-600 w-16 h-0.5 ml-8"></div>
        </div>

        <h2 class="text-4xl mt-4 lg:mt-8 font-bold">
            GIGANTE<br />
            EM APROVAÇÃO
        </h2>

        <p class="mt-4 lg:mt-8 text-xl">
            No Totem Vestibulares você encontra:
        </p>

        <ul
            class="mt-6 lg:mt-8 ml-6 list-disc space-y-6 text-lg lg:text-xl leading-relaxed marker:text-orange-500 marker:text-2xl">
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
    </section>

    <HeroUnidades />

    <Depoimentos
      v-if="unidades[0]"
      :unidade="unidades[0].city"
      :depoimentos="unidades[0].depoimentos"
    />

    <HeroVocacional />

    <section class="h-128 w-full responsive-padding">
        <div class="flex items-center">
            <h2 class="text-orange-600 font-bold" aria-label="depoimentos">
                FAQS
            </h2>
            <div class="bg-orange-600 w-16 h-0.5 ml-8"></div>
        </div>
        <div>
            <h2 class="mt-6 text-3xl font-bold">Ainda tem dúvidas?</h2>
            <p class="mt-6 text-gray-600">Reunimos as perguntas mais frequentes de pais, responsáveis e alunos para
                ajudar você a conhecer melhor o Colégio Totem.</p>

            <NuxtLink to="/faqs"
                class="mt-6 inline-flex items-center rounded-full bg-orange-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-orange-600 hover:shadow-lg">
                Saiba mais →
            </NuxtLink>

        </div>
    </section>

    <WhatsappButton :links="whatsappLinksFiltered" />

</template>
