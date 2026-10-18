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
    levels.includes(EducationalEnum.EDUCACAO_INFANTIL),
  ) ?? [],
)
</script>

<template>
  <main v-if="data != null">
    <HeroSlider :banners="data.banners">
      <HeroSliderCTA
        titulo="Educação Infantil"
        :subtitle="data.city"
        :link="`/colegios/unidade/${data.slug}/niveis/infantil/#agende-visita`"
      />
    </HeroSlider>

    <HeroNiveisEnsino>
      <template #nivel>Educação Infantil</template>
      <template #destaque>OS PRIMEIROS PASSOS SÃO OS MAIS IMPORTANTES</template>
      <template #descricao>
        <p class="mb-4">Um ambiente amplo, rico em cuidados, segurança, experiências e aprendizagens, pensado para que cada criança se sinta acolhida e segura enquanto descobre o mundo.</p>
        <p class="mb-4">Profissionais experientes e apaixonados por educar estimulam as crianças a explorar, interagir, brincar, criar hipóteses e enfrentar desafios, respeitando suas particularidades e potencialidades.</p>
        <p>Em sintonia com as famílias, combinamos o Sistema de Ensino J. Piaget, programa bilíngue, educação física, atividades extracurriculares e projetos que tornam a aprendizagem uma aventura de descoberta e autonomia.</p>
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
