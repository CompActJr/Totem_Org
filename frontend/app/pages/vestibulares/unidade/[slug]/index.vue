<script setup lang="ts">
import ProfessorCard from '~/components/professores/ProfessorCard.vue';
import HeroSlider from '~/components/slider/HeroSlider.vue';
import HeroSliderCTA from '~/components/slider/HeroSliderCTA.vue';
import Grid from '~/components/ui/cards/Grid.vue';
import GoogleMaps from '~/components/ui/GoogleMaps.vue';
import HeroVocacional from '~/components/ui/HeroVocacional.vue';
import WhatsappButton from '~/components/ui/WhatsappButton.vue';
import { useOrganizations } from '~/composables/api/useOrganizations';
import type { WhatsappLinks } from '~/types/navigation.types';

definePageMeta({ layout: 'vestibulares' })

const route = useRoute()

const slug = computed(() => String(route.params.slug))

const {
    unidade
} =  useOrganizations(slug.value, 'vestibulares')

const whatsappLinks = computed<WhatsappLinks[]>(() => {
  if (!unidade) return []
  const { _id, slug, whatsapp, '@type': type } = unidade
  return [{ _id, slug, whatsapp, '@type': type }]
});

useSeoMeta({
  title: () =>
    unidade
      ? `Vestibulares Totem em ${unidade.city} | Educação`
      : 'Vestibulares Totem',

  description: () =>
    unidade
      ? `Conheça o Vestibulares Totem em ${unidade.city}, sua estrutura e níveis de ensino.`
      : 'Conheça as unidades dos Vestibulares Totem.',

  ogTitle: () =>
    `Vestibulares Totem${unidade ? ` em ${unidade.city}` : ''}`,

  ogDescription: () =>
    unidade
      ? `Conheça a unidade Totem em ${unidade.city}.`
      : 'Conheça nossos pŕe vestibulares.',

  ogType: 'website',
  robots: 'index, follow',
});

</script>


<template>
  <main v-if="unidade != null">

    <HeroSlider :banners="unidade.banners">

    </HeroSlider>

    <section class="min-h-128 w-full flex flex-col md:flex-row gap-4 items-center  bg-gray-200 responsive-padding">
        <article class="w-full md:w-7/12 lg:w-8/12 flex flex-col items-start">
            <div class="flex items-center">
                <h2 class="text-gray-600 text-xl md:text-2xl font-bold">
                   VESTIBULARES TOTEM
                </h2>

                <div class="bg-orange-600 w-32 h-0.5 ml-8"></div>
            </div>

            <h2 class="pt-8 lg:pt-12 text-2xl md:text-4xl lg:text-6xl text-gray-700 font-bold">
               CONHEÇA O TOTEM {{ unidade.city.toUpperCase() }}
            </h2>

            <h4 class="pt-8 lg:pt-12 text-xl md:text-1xl lg:text-2xl text-gray-700 font-bold">
               GIGANTES EM APROVAÇÃO
            </h4>

            <p class="pt-8 lg:pt-12 leading-8">
                Para ser gigante em aprovação, é necessario focar em resultados. Nosso objetivo é a realização dos sonhos de ingresso ao ensino superior dos nossos alunos. Os resultados dos gigantes consolidaram o Totem como o curso que mais aprova no Rio Grande do Sul.
            </p>

            <h4 class="pt-8 lg:pt-12 text-xl md:text-1xl lg:text-2xl text-gray-700 font-bold">
               AMBIENTE FAMILIAR
            </h4>

            <p class="pt-8 lg:pt-12 leading-8">
                Além de ser reconhecido pela confiança e credibilidade, o Totem tem como destaque o excelente relacionamento com os alunos. Valores como empatia, amizade e respeito são incentivados diariamente, sendo colocados em prática por meio da ótima relação entre professores, estudantes e colaboradores.
            </p>

            <h4 class="pt-8 lg:pt-12 text-xl md:text-1xl lg:text-2xl text-gray-700 font-bold">
               ESTUDO ORIENTADO
            </h4>

            <p class="pt-8 lg:pt-12 leading-8">
               O Totem possui o mair atendimento tira-dúvidas dos cursos do segmento pré-vestibular. Não existe a necessidade de agendamento prévio, já que nossos professores estão à disposição diariamente. Acreditamos que o acompanhamento personalizado no atendimento ao aluno seja fundamental para sua melhoria contínua.
            </p>

        </article>

        <NuxtImg 
              :src="unidade.image" alt="imagem da unidade"
                width="420"
                height="520"
                class="w-55 shrink-0 object-cover rounded-xl sm:w-65 md:w-70 lg:w-[320px] xl:w-90 h-auto max-h-105"
                loading="lazy" 
                format="webp" 
        />


    </section>

    <section class="min-h-128 w-full responsive-padding">
        <div class="flex items-center">
            <h2 class="text-gray-600 text-xl md:text-2xl font-bold">
                INFRAESTRUTURA QUE INSPIRA
            </h2>

            <div class="bg-orange-600 w-64 h-0.5 ml-8"></div>
        </div>

        <Grid>
            <NuxtImg 
                v-for="imagem in unidade.infraestrutura" 
                :key="imagem" 
                :src="imagem" 
                format="webp" 
                quality="80"
                loading="lazy" 
                class="w-full h-48 md:h-96 object-cover rounded-xl  border-gray-100 border-4 border-solid
                    transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:" />
        </Grid>

    </section>

    <ProfessoresGrid>
        <ProfessorCard
            v-for="professor in unidade.professores"
            :key="professor._id"
            :professor="professor"
        />
    </ProfessoresGrid>

    <Depoimentos
      v-if="unidade"
      :unidade="unidade.city"
      :depoimentos="unidade.depoimentos"
    />

    <HeroVocacional/>

    <GoogleMaps v-if="unidade" :unidade="unidade"/>

    <WhatsappButton :links="whatsappLinks"/>

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
