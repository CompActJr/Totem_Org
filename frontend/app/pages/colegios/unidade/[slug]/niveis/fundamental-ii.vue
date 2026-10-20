<script setup lang="ts">
import AgendeSuaVisita from '~/components/agendamento/AgendeSuaVisita.vue'
import Depoimentos from '~/components/depoimentos/Depoimentos.vue'
import HeroNiveisEnsino from '~/components/niveis/HeroNiveisEnsino.vue'
import HeroSlider from '~/components/slider/HeroSlider.vue'
import HeroSliderCTA from '~/components/slider/HeroSliderCTA.vue'
import GoogleMaps from '~/components/ui/GoogleMaps.vue'
import WhatsappButton from '~/components/ui/WhatsappButton.vue'
import { useOrganizations } from '~/composables/api/useOrganizations'
import type { WhatsappLinks } from '~/types/navigation.types'
import { EducationalEnum } from '~/types/organizations.types'

definePageMeta({ layout: 'colegios' })

const route = useRoute()
const slug = computed(() => String(route.params.slug))

const { unidade} =  useOrganizations(slug.value, 'colegios')

const whatsappLinks = computed<WhatsappLinks[]>(() => {
  if (!unidade) return []
  const { _id, slug, whatsapp, '@type': type } = { ... unidade}
  return [{ _id, slug, whatsapp, '@type': type }]
})

const professoresFiltrados = computed(() =>
  unidade?.professores.filter(({ levels }) =>
    levels.includes(EducationalEnum.BERCARIO),
  ) ?? [],
)

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

    <ProfessoresGrid>
      <ProfessorCard v-for="professor in professoresFiltrados" :key="professor._id" :professor="professor" />
    </ProfessoresGrid>

    <Depoimentos :unidade="unidade.city" :depoimentos="unidade.depoimentos" />
    <GoogleMaps :unidade="unidade" />
    <AgendeSuaVisita :unidades="[unidade]" />
    <WhatsappButton :links="whatsappLinks" />
  </main>

  <!--
    <p v-else-if="pending" class="responsive-padding py-12 text-gray-600">Carregando unidade...</p>
  -->
  
  
  <p v-else class="responsive-padding py-12 text-red-600">Não foi possível carregar esta unidade.</p>
</template>
