<script setup lang="ts">
import AgendeSuaVisita from '~/components/colegios/AgendeSuaVisita.vue';
import IntroBody from '~/components/global/IntroBody.vue';
import HeroSlider from '~/components/global/HeroSlider.vue';
import HeroSliderCTA from '~/components/global/HeroSliderCTA.vue';
import Grid from '~/components/ui/cards/Grid.vue';
import SectionLayout from '~/components/ui/SectionLayout.vue';
import HeroVocacional from '~/components/colegios/HeroVocacional.vue';
import WhatsappButton from '~/components/global/WhatsappButton.vue';
import CardUnit from '~/components/global/CardUnit.vue';
import { useOrganizations } from '~/composables/api/useOrganizations';
import { unidadesColegios, whatssapLinks } from '~/data/static';
import type { WhatsappLinks } from '~/types/navigation.types';
import type { Organization } from '~/types/organizations.types';
import IntroSectionHeader from '~/components/global/IntroSectionHeader.vue';


definePageMeta({
  layout: 'colegios',
  title: 'Colégio Totem - Educação de Qualidade',
  description: 'O Colégio Totem oferece educação de qualidade, preparando os alunos para o sucesso acadêmico e pessoal.',
  ogTitle: 'Colégio Totem - Educação de Qualidade',
  ogDescription: 'O Colégio Totem oferece educação de qualidade, preparando os alunos para o sucesso acadêmico e pessoal.',
  ogImage: '/geral/logo-totem.jpg',
  ogUrl: 'https://colegios.totem.com.br/',
  ogType: 'website',
})

const banners = [
  "/banners/BANNER_COLEGIOS.jpg",
  "/geral/AGENDE-SUA-VISITA.jpg"
]

const unidades: Organization[] = unidadesColegios;
const whatsappLinksFiltered: WhatsappLinks[] = whatssapLinks.filter(f => f['@type'] === "colegios");

const slug = ref('cachoeira-do-sul')

const { data: unidadeData, pending, error, } = await useOrganizations(slug, 'colegios')
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

  <HeroSlider :banners="banners">
    <HeroSliderCTA titulo="Matriculas Abertas" subtitle="Colégios Totem" link="/#agende-visita'">
      <template #cta-text>
        Agende Sua Visita
      </template>
    </HeroSliderCTA>
  </HeroSlider>

  <SectionLayout class="bg-gray-200">
    <template #header>
      <IntroSectionHeader />
    </template>
    <template #content>
      <IntroBody image-src="/geral/POR-QUE-O-TOTEM.jpg" image-alt="Pátio do Colégio Totem visto de cima">
        <template #title>
          É MAIS QUE<br />
          COLÉGIO...
        </template>

        <template #content>
          <p>
            Bem-vindo(a) ao SEU FUTURO! Prepare-se para construir o amanhã.
            No <strong>Colégio Totem</strong>, acreditamos que a escolha certa é a que motiva,
            acolhe e faz feliz. Aqui, nossos estudantes encontram um ambiente onde o afeto e a
            atenção são prioridades, proporcionando bem-estar e segurança para todos. Oferecemos
            a educação que desperta a criatividade e entrega um mundo de conhecimento nas mãos de
            nossas crianças e jovens.
          </p>
        </template>

        <template #after-content>
          <p class="mt-4 md:mt-8"><strong>É MAIS QUE COLÉGIO: É TOTEM!</strong></p>
        </template>
      </IntroBody>
    </template>
  </SectionLayout>


  <section class="min-h-128  py-8 px-10 md:px-10 lg:py-16 lg:px-9 xl:px-40">
    <IntroSectionHeader>
      NOSSAS UNIDADES
    </IntroSectionHeader>

    <Grid>
      <CardUnit v-for="unidade in unidades" :unidade="unidade" />
    </Grid>
  </section>

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

  <HeroVocacional />

  <AgendeSuaVisita :unidades="unidades" />

  <WhatsappButton :links="whatsappLinksFiltered" />

</template>
