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

const { data, pending, error, refresh, } = await useOrganizations(slug.value)

const whatsappLinks = computed<WhatsappLinks[]>(() => {
  if (!data.value) return []
  const { _id, slug, whatsapp, '@type': type } = data.value
  return [{ _id, slug, whatsapp, '@type': type }]
})

const professoresFiltrados = computed(() =>
  data.value?.professores.filter(({ levels }) =>
    levels.includes(EducationalEnum.BERCARIO),
  ) ?? [],
)

</script>

<template>
  <main v-if="data != null">

    <HeroSlider :banners="data.banners">
      <HeroSliderCTA :titulo="'Berçário'" :subtitle="data.city"
        :link="'/colegios/unidade/nives/bercario/#agende-visita'" />
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

    <ProfessoresGrid>
      <ProfessorCard v-for="professor in professoresFiltrados" :key="professor._id" :professor="professor" />
    </ProfessoresGrid>

    <Depoimentos v-if="data" :unidade="data.city" :depoimentos="data.depoimentos" />

    <GoogleMaps :unidade="data" />

    <AgendeSuaVisita :unidades="[data]" />

    <WhatsappButton :links="whatsappLinks" />
  </main>
  <p v-else-if="pending" class="responsive-padding py-12 text-gray-600">
    Carregando unidade...
  </p>

  <p v-else class="responsive-padding py-12 text-red-600">
    Não foi possível carregar esta unidade.
  </p>

</template>
