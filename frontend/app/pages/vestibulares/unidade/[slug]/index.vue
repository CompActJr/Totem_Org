<script setup lang="ts">
import DepoimentosCarousel from '~/components/global/DepoimentosCarousel.vue';
import ProfessorCard from '~/components/global/ProfessorCard.vue';
import HeroSlider from '~/components/global/HeroSlider.vue';
import Grid from '~/components/ui/cards/Grid.vue';
import GoogleMaps from '~/components/global/GoogleMaps.vue';
import HeroVocacional from '~/components/colegios/HeroVocacional.vue';
import SectionLayout from '~/components/ui/SectionLayout.vue';
import WhatsappButton from '~/components/global/WhatsappButton.vue';
import { useOrganizations } from '~/composables/api/useOrganizations';
import type { WhatsappLinks } from '~/types/navigation.types';
import type { Organization } from '~/types/organizations.types';

definePageMeta({ layout: 'vestibulares' })

const route = useRoute()
const slug = computed(() => String(route.params.slug))


const { data: unidadeData, pending, error, refresh} = await useOrganizations(slug.value, 'vestibulares')
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

useSeoMeta({
  title: () =>
    unidade.value
      ? `Vestibulares Totem em ${unidade.value.city} | Educação`
      : 'Vestibulares Totem',

  description: () =>
    unidade.value
      ? `Conheça o Vestibulares Totem em ${unidade.value?.city}, sua estrutura e níveis de ensino.`
      : 'Conheça as unidades dos Vestibulares Totem.',

  ogTitle: () =>
    unidade.value
    ? `Vestibulares Totem em ${unidade.value.city}`
    : '',

  ogDescription: () =>
    unidade.value
      ? `Conheça a unidade Totem em ${unidade.value.city}.`
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

    <SectionLayout>
        <template #header>
           <IntroSectionHeader>
            INFRAESTRUTURA QUE INSPIRA
          </IntroSectionHeader>
        </template>

        <template #content>
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
        </template>
    </SectionLayout>

    <SectionLayout class="bg-[#FFF6C9]">
        <template #header>
            <IntroSectionHeader class="text-gray-600 text-xl md:text-2xl">
                 CONHEÇA NOSSOS PROFISSIONAIS
            </IntroSectionHeader>
        </template>
        <template #content>
            <ProfessorCard v-for="professor in unidade.professores" :key="professor._id" :professor="professor" />
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

    <HeroVocacional/>

    <GoogleMaps v-if="unidade" :unidade="unidade"/>

    <WhatsappButton :links="whatsappLinks"/>

  </main>


  <p v-else-if="pending" class="responsive-padding py-12 text-gray-600">
    Carregando unidade...
  </p>


  <p v-else class="responsive-padding py-12 text-red-600">
    Não foi possível carregar esta unidade.
  </p>
</template>
