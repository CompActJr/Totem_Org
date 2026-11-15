<script setup lang="ts">
import AgendeSuaVisita from '~/components/colegios/AgendeSuaVisita.vue'
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

const { data: unidadeData, pending, error} =  useOrganizations(slug.value, 'colegios')
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
    levels.includes(EducationalEnum.BERCARIO)
  )
})

</script>

<template>
  <main v-if="unidade != null">

     <HeroSlider :banners="unidade.banners">
      <HeroSliderCTA titulo="Berçário" :subtitle="unidade.city"
        :link="`/colegios/unidade/${unidade.slug}/niveis/bercario/#agende-visita`">
        <template #cta-text>
          Agende Sua Visita
        </template>
      </HeroSliderCTA>
    </HeroSlider>

    <HeroNiveisEnsino>
      <template #nivel>
        Berçário
      </template>

      <template #destaque>
        MUITO MAIS
        GUTI GUTI...
      </template>

      <template #descricao>
        <p class="mb-4">
          Os primeiros anos de vida de um bebê são intensos e cheios
          de descobertas — e entendemos que escolher a escola é uma
          decisão importante para toda a família.
        </p>

        <p class="mb-4">
          No Colégio Totem, o Berçário 1 e 2 funciona como uma
          extensão do lar: um ambiente seguro, acolhedor e preparado
          para cuidar, estimular e respeitar o tempo de cada criança.
        </p>

        <p>
          Escolher o berçário é oferecer ao seu filho um espaço onde
          será cuidado, estimulado e amado — um ambiente rico em
          experiências desde os primeiros passos.
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

  <p v-else-if="pending" class="responsive-padding py-12 text-gray-600">
    Carregando unidade...
  </p>

  <p v-else class="responsive-padding py-12 text-red-600">
    Não foi possível carregar esta unidade.
  </p>

</template>
