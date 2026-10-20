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

const { unidade } = useOrganizations(slug.value, 'colegios')

const whatsappLinks = computed<WhatsappLinks[]>(() => {
  if (!unidade) return []
  const { _id, slug, whatsapp, '@type': type } = { ...unidade }
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
      <HeroSliderCTA titulo="Educação Infantil" :subtitle="unidade.city"
        :link="`/colegios/unidade/${unidade.slug}/niveis/infantil/#agende-visita`">
        <template #cta-text>
          Agende Sua Visita
        </template>
      </HeroSliderCTA>
    </HeroSlider>

    <HeroNiveisEnsino>
      <template #nivel>Educação Infantil</template>
      <template #destaque>OS PRIMEIROS PASSOS SÃO OS MAIS IMPORTANTES</template>
      <template #descricao>
        <p class="mb-4">Um ambiente amplo, rico em cuidados, segurança, experiências e aprendizagens, pensado para que
          cada criança se sinta acolhida e segura enquanto descobre o mundo.</p>
        <p class="mb-4">Profissionais experientes e apaixonados por educar estimulam as crianças a explorar, interagir,
          brincar, criar hipóteses e enfrentar desafios, respeitando suas particularidades e potencialidades.</p>
        <p>Em sintonia com as famílias, combinamos o Sistema de Ensino J. Piaget, programa bilíngue, educação física,
          atividades extracurriculares e projetos que tornam a aprendizagem uma aventura de descoberta e autonomia.</p>
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
