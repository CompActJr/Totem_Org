<script lang="ts" setup>

import HeroSlider from '~/components/global/HeroSlider.vue';
import Grid from '~/components/ui/cards/Grid.vue';
import WhatsappButton from '~/components/global/WhatsappButton.vue';
import { faqsVestibulares } from '~/data/faqsON';
import { unidadesVestibulares, whatssapLinks } from '~/data/static';
import type { WhatsappLinks } from '~/types/navigation.types';
import IntroSectionHeader from '~/components/global/IntroSectionHeader.vue';
import SectionLayout from '~/components/ui/SectionLayout.vue';
import DepoimentosCarousel from '~/components/global/DepoimentosCarousel.vue';
import type { Organization } from '~/types/organizations.types';
import { useOrganizations } from '~/composables/api/useOrganizations';
import CardUnit from '~/components/global/CardUnit.vue';
import FaqsSection from '~/components/vestibulares/FaqsSection.vue';
import CTA from '~/components/ui/buttons/CTA.vue';

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


const unidades = unidadesVestibulares;

const banners = [
    "/banners/BANNER_PV_IJUI.jpg",
    "/banners/BANNER_PV_SANTA_MARIA.jpg",
    "/banners/BANNER_PV_SANTA_ROSA.jpg"
];

const whatsappLinksFiltered: WhatsappLinks[] = whatssapLinks.filter(f => f['@type'] === "colegios");

const slug = ref('santa-maria')

const { data: unidadeData, pending, error, } = await useOrganizations(slug, 'vestibulares')
const unidade = computed<Organization | undefined>(() => unidadeData.value)

if (!unidade.value) {
  throw createError({
    statusCode: error.value?.statusCode ?? 404,
    statusMessage: 'Unidade não encontrada',
    fatal: true,
  })
}

</script>

<template>

    <HeroSlider :banners="banners"/> 
  
     <SectionLayout class="bg-gray-200">
        <template #header>
            <IntroSectionHeader>
                PORQUE O TOTEM
            </IntroSectionHeader>
        </template>
        <template #content>
             <h2 class="text-4xl mt-4 lg:mt-8 font-bold pt-8 lg:pt-12">
                GIGANTE<br />
                EM APROVAÇÃO
            </h2>

            <p class="pt-8 lg:pt-12 text-xl">
                No Totem Vestibulares você encontra:
            </p>

            <ul class="ml-6 list-disc space-y-6 pt-8 text-lg leading-relaxed text-gray-700 marker:text-orange-500 marker:text-2xl lg:pt-12 lg:text-xl">
                <li class="pl-2 flex items-center gap-2">
                    <div class="w-2 h-2 bg-orange-400 rounded-full"></div>
                    Atendimento ao aluno de forma personalizada.
                </li>

                <li class="pl-2 flex items-center gap-2">
                    <div class="w-2 h-2 bg-orange-400 rounded-full"></div>
                    física planejada para o conforto, segurança e rendimento do aluno.
                </li>

                <li class="pl-2 flex items-center gap-2">
                    <div class="w-2 h-2 bg-orange-400 rounded-full"></div>
                    Metodologia de ensino adequada ao modelo de prova e universidade desejada pelo aluno.
                </li>

                <li class="pl-2 flex items-center gap-2">
                    <div class="w-2 h-2 bg-orange-400 rounded-full"></div>
                    Material didático produzido pelos próprios professores, atualizado anualmente,
                    contemplado com testes dos vestibulares do sul do Brasil.
                </li>
            </ul>

            <NuxtLink :to="`/vestibulares#faqs`"
                    class="mt-6 inline-flex w-fit rounded-full bg-white shadow-2xl px-6 py-3 font-semibold text-gray-700 transition-all duration-300 hover:scale-115"
                >
                    Saiba mais →
            </NuxtLink>
        </template>
    </SectionLayout>

    <SectionLayout class="bg-transparent">
        <template #header>
            <IntroSectionHeader>
                NOSSAS UNIDADES
            </IntroSectionHeader>
        </template>
        <template #content>
            <Grid>
                <CardUnit v-for="unidade in unidades" :unidade="unidade" />
            </Grid>
        </template>
    </SectionLayout>


    <SectionLayout class="bg-[#FFF6C9]">
        <template #header>
        <IntroSectionHeader>RELATOS</IntroSectionHeader>
        <h2 class="pt-6 text-2xl md:text-5xl text-gray-700 font-bold leading-tight">
            DE QUEM CONHECE <br>
            O COLÉGIO TOTEM
        </h2>
        </template>

        <template #content>
        <DepoimentosCarousel :depoimentos="unidade?.depoimentos ?? []" :unidade-name="unidade?.city ?? 'error'" />
        </template>
    </SectionLayout>

     <SectionLayout class="bg-white">
        <template #header>
            <IntroSectionHeader>TESTE VOCACIONAL</IntroSectionHeader>
        </template>
        <template #content>
            <div class="mt-4 flex flex-col-reverse md:flex-row lg:mt-8 items-center gap-16">
                <NuxtImg src="/geral/vocacional.jpg" alt="Estudante do Colégio Totem pensativa" width="420" height="520"
                    class="w-55 shrink-0 object-cover rounded-xl sm:w-65 md:w-70 lg:w-[320px] xl:w-90 h-auto max-h-105"
                    loading="lazy" format="webp" />

                <div class="w-full lg:max-w-xl flex flex-col items-start gap-8">
                    <h2 class="font-bold text-2xl">QUAL É O SEU TALENTO?</h2>

                    <p class="text-gray-600">
                        Escolher uma profissão ou área de estudo é uma decisão importante — e o
                        <strong>teste vocacional</strong> pode trazer mais clareza para esse momento. Em
                        apenas 8 minutos, você acessa uma experiência rápida, prática e pensada para ajudar a
                        identificar seus interesses, pontos fortes e possibilidades de futuro.
                    </p>

                    <p class="text-gray-600">
                        Se você quer tomar essa decisão com mais segurança, vale dar esse passo importante.
                        Clique e faça o teste vocacional do Totem.
                    </p>

                    <CTA href="/vocacional">REALIZAR TESTE</CTA>
                </div>
            </div>
        </template>
    </SectionLayout>

    <FaqsSection :faqs="faqsVestibulares"/>

    <WhatsappButton :links="whatsappLinksFiltered" />

</template>
