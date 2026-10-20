<script setup lang="ts">
import AgendeSuaVisita from '~/components/agendamento/AgendeSuaVisita.vue'
import Depoimentos from '~/components/depoimentos/Depoimentos.vue'
import HeroNiveisEnsino from '~/components/niveis/HeroNiveisEnsino.vue'
import ProfessorCard from '~/components/professores/ProfessorCard.vue'
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
      <HeroSliderCTA titulo="Ensino Fundamental I" :subtitle="unidade.city"
        :link="`/colegios/unidade/${unidade.slug}/niveis/fundamental-i/#agende-visita`">
        <template #cta-text>
          Agende Sua Visita
        </template>
      </HeroSliderCTA>
    </HeroSlider>

    <HeroNiveisEnsino>
      <template #nivel>Fundamental I</template>
      <template #destaque>MUITO MAIS DO QUE ALFABETIZAÇÃO</template>
      <template #descricao>
        <p class="mb-4">Ambiente amplo e diversificado, rico em cuidados, segurança, experiências e aprendizagens, planejado para atender às necessidades e desenvolver a autonomia das crianças.</p>
        <p class="mb-4">Além de profissionais altamente qualificados, oferecemos material didático, programa bilíngue, atividades práticas, projetos, Laboratório de Aprendizagem, atividades extracurriculares, projetos socioemocionais e viagens de estudo.</p>
        <p>As três alfabetizações — letramento, alfabetização tecnológica e matemática — preparam crianças para o mundo real, desenvolvendo raciocínio lógico, criatividade, pensamento crítico, cooperação e autonomia.</p>
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
