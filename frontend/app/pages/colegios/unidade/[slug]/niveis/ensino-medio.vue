<script setup lang="ts">
import AgendeSuaVisita from '~/components/colegios/AgendeSuaVisita.vue'
import DepoimentosCarousel from '~/components/global/DepoimentosCarousel.vue'
import HeroNiveisEnsino from '~/components/colegios/HeroNiveisEnsino.vue'
import ProfessorCard from '~/components/global/ProfessorCard.vue'
import HeroSlider from '~/components/global/HeroSlider.vue'
import HeroSliderCTA from '~/components/global/HeroSliderCTA.vue'
import GoogleMaps from '~/components/global/GoogleMaps.vue'
import SectionLayout from '~/components/ui/SectionLayout.vue'
import WhatsappButton from '~/components/global/WhatsappButton.vue'
import { useOrganizations } from '~/composables/api/useOrganizations'
import type { WhatsappLinks } from '~/types/navigation.types'
import { EducationalEnum, type Organization } from '~/types/organizations.types'
import IntroSectionHeader from '~/components/global/IntroSectionHeader.vue'

definePageMeta({ layout: 'colegios' })

const route = useRoute()
const slug = computed(() => String(route.params.slug))

const { data: unidadeData} =  useOrganizations(slug.value, 'colegios')

const unidade = computed<Organization | undefined>(() => unidadeData.value)

if (!unidade.value) {
  throw createError({ statusCode: 404, statusMessage: 'Unidade não encontrada', fatal: true })
}

const whatsappLinks = computed<WhatsappLinks[]>(() => {
  const currentUnidade = unidade.value

  if (!currentUnidade) {
    return []
  }

  const { _id, slug, whatsapp, '@type': type } = currentUnidade
  return [{ _id, slug, whatsapp, '@type': type }]
})

const professoresFiltrados = computed(() => {
  const currentUnidade = unidade.value

  if (!currentUnidade) {
    return []
  }

  return currentUnidade.professores.filter(({ levels }) => 
    levels.includes(EducationalEnum.ENSINO_MEDIO)
  )
})

</script>

<template>
  <main v-if="unidade != null">
     <HeroSlider :banners="unidade.banners">
      <HeroSliderCTA titulo="Ensino Médio" :subtitle="unidade.city"
        :link="`/colegios/unidade/${unidade.slug}/niveis/ensino-medio/#agende-visita`">
        <template #cta-text>
          Agende Sua Visita
        </template>
      </HeroSliderCTA>
    </HeroSlider>

    <HeroNiveisEnsino>
      <template #nivel>
        Ensino Médio
      </template>

      <template #destaque>
        FORMAÇÃO PARA
        GRANDES RESULTADOS
      </template>

      <template #descricao>
        <p class="mb-4">
          Preparação para ENEM, Vestibulares e Muito Mais\nAmbiente perfeito para aulas dinâmicas e interativas,
          com segurança e muito aprendizado.
          Profissionais experientes e gabaritados que desenvolvem competências e habilidades essenciais para os
          futuros profissionais.
          Material Didático do Sistema SAS, um dos melhores do Brasil, aliado à Plataforma SAS,
          oferece múltiplas possibilidades de aprendizado, além de ser perfeitamente aliado ao método Totem de ensino.
          Atendimentos tira-dúvidas realizados diariamente, simulados constantes e mentorias personalizadas preparam
          os alunos com maestria.
        </p>

        <p class="mb-4">
          Desenvolvimento Integral e Protagonismo Clubes de Ciências, Xadrez, Cinema e Literatura expandem horizontes0.
          Escolinhas de Futebol e Vôlei desenvolvem bem-estar e liderança.
          Projetos de protagonismo estudantil transformam aprendizagem em ação real.
          Relações Humanas e Bem-Estar\nSomos uma escola que pensa no ser humano. Sabemos que, junto com a família,
          o bem-estar do nosso estudante é prioridade. Acolhimento, escuta ativa e suporte emocional caminham lado a
          lado
          com a excelência acadêmica.
          Nesta etapa final, preparamos não apenas para aprovações, mas para uma vida de sucesso, propósito e impacto.
        </p>
      </template>
    </HeroNiveisEnsino>

    <SectionLayout class="bg-[#FFF6C9]">
        <template #header>
            <IntroSectionHeader class="text-gray-600 text-xl md:text-2xl">
                 CONHEÇA NOSSOS PROFISSIONAIS
            </IntroSectionHeader>
        </template>
        <template #content>
            <ProfessorCard v-for="professor in professoresFiltrados" :key="professor._id" :professor="professor" />
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
        <DepoimentosCarousel :depoimentos="unidade.depoimentos" :unidade-name="unidade.city" />
      </template>
    </SectionLayout>

    <GoogleMaps :unidade="unidade" />

    <AgendeSuaVisita :unidades="[unidade]" />

    <WhatsappButton :links="whatsappLinks" />
  </main>

  <!--
    <p v-else-if="pending" class="responsive-padding py-12 text-gray-600">
    Carregando unidade...
  </p>
  -->


  <p v-else class="responsive-padding py-12 text-red-600">
    Não foi possível carregar esta unidade.
  </p>
</template>
