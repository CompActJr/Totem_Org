<script setup lang="ts">
import AgendeSuaVisita from '~/components/colegios/AgendeSuaVisita.vue'
import HeroNiveisEnsino from '~/components/colegios/HeroNiveisEnsino.vue'
import HeroSlider from '~/components/global/HeroSlider.vue'
import HeroSliderCTA from '~/components/global/HeroSliderCTA.vue'
import GoogleMaps from '~/components/global/GoogleMaps.vue'
import WhatsappButton from '~/components/global/WhatsappButton.vue'
import { useOrganizations } from '~/composables/api/useOrganizations'
import type { WhatsappLinks } from '~/types/navigation.types'
import { EducationalEnum, type Organization } from '~/types/organizations.types'
import ProfessorCard from '~/components/global/ProfessorCard.vue'
import IntroSectionHeader from '~/components/global/IntroSectionHeader.vue'

definePageMeta({ layout: 'colegios' })

const route = useRoute()
const slug = computed(() => String(route.params.slug))


const { data: unidadeData, pending, error } =  useOrganizations(slug.value, 'colegios')

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
    levels.includes(EducationalEnum.ENSINO_FUNDAMENTAL_II)
  )
})

</script>

<template>
  <main v-if="unidade != null">
     <HeroSlider :banners="unidade.banners">
      <HeroSliderCTA titulo="Ensino Fundamental II" :subtitle="unidade.city"
        :link="`/colegios/unidade/${unidade.slug}/niveis/fundamental-ii/#agende-visita`">
        <template #cta-text>
          Agende Sua Visita
        </template>
      </HeroSliderCTA>
    </HeroSlider>

    <HeroNiveisEnsino>
      <template #nivel>Fundamental II</template>
      <template #destaque>HORA DE DECOLAR</template>
      <template #descricao>
        <p class="mb-4">Um ambiente rico em cuidados, segurança e aprendizagens, com profissionais experientes para consolidar conhecimentos e ampliar a visão de mundo e de futuro de cada estudante.</p>
        <p class="mb-4">Esta é uma fase essencial para aprofundar os saberes do Fundamental I, formar hábitos de estudo, desenvolver autonomia e viver uma transição pedagógica e emocional segura para o Ensino Médio.</p>
        <p>Educação financeira, empreendedorismo, programa bilíngue, produção textual, cooperativa escolar, laboratórios e projetos socioemocionais formam cidadãos conscientes e preparados para os desafios do futuro.</p>
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

  <p v-else-if="pending" class="responsive-padding py-12 text-gray-600">Carregando unidade...</p>
  
  <p v-else class="responsive-padding py-12 text-red-600">Não foi possível carregar esta unidade.</p>
</template>
