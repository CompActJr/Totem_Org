<script setup lang="ts">
import AgendeSuaVisita from '~/components/agendamento/AgendeSuaVisita.vue'
import Depoimentos from '~/components/depoimentos/Depoimentos.vue'
import HeroNiveisEnsino from '~/components/niveis/HeroNiveisEnsino.vue'
import HeroSlider from '~/components/slider/HeroSlider.vue'
import GoogleMaps from '~/components/ui/GoogleMaps.vue'
import WhatsappButton from '~/components/ui/WhatsappButton.vue'
import { useOrganizations } from '~/composables/api/useOrganizations'
import type { WhatsappLinks } from '~/types/navigation.types'
import { EducationalEnum } from '~/types/organizations.types'

definePageMeta({ layout: 'colegios' })

const route = useRoute()
const slug = computed(() => String(route.params.slug))
const { data, pending } = await useOrganizations(slug.value)

const whatsappLinks = computed<WhatsappLinks[]>(() => {
  if (!data.value) return []
  const { _id, slug, whatsapp, '@type': type } = data.value
  return [{ _id, slug, whatsapp, '@type': type }]
})

const professoresFiltrados = computed(() =>
  data.value?.professores.filter(({ levels }) =>
    levels.includes(EducationalEnum.ENSINO_FUNDAMENTAL_I),
  ) ?? [],
)
</script>

<template>
  <main v-if="data != null">
    <HeroSlider :banners="data.banners">
      <HeroSliderCTA
        titulo="Fundamental I"
        :subtitle="data.city"
        :link="`/colegios/unidade/${data.slug}/niveis/fundamental-i/#agende-visita`"
      />
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

    <Depoimentos :unidade="data.city" :depoimentos="data.depoimentos" />
    <GoogleMaps :unidade="data" />
    <AgendeSuaVisita :unidades="[data]" />
    <WhatsappButton :links="whatsappLinks" />
  </main>

  <p v-else-if="pending" class="responsive-padding py-12 text-gray-600">Carregando unidade...</p>
  <p v-else class="responsive-padding py-12 text-red-600">Não foi possível carregar esta unidade.</p>
</template>
