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

const { data, pending, error, refresh, } = await useOrganizations(slug.value, 'colegios')

const whatsappLinks = computed<WhatsappLinks[]>(() => {
  if (!data.value) return []
  const { _id, slug, whatsapp, '@type': type } = data.value
  return [{ _id, slug, whatsapp, '@type': type }]
})

const professoresFiltrados = computed(() =>
  data.value?.professores.filter(({ levels }) =>
    levels.includes(EducationalEnum.ENSINO_MEDIO),
  ) ?? [],
)


</script>

<template>
  <main v-if="data != null">

    <HeroSlider :banners="data.banners">
      <HeroSliderCTA :titulo="'Ensino Médio'" :subtitle="data.city"
        :link="`/colegios/unidade/${data.slug}/niveis/ensino-medio/#agende-visita`" />
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
