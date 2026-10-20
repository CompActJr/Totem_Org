<script setup lang="ts">
import AgendeSuaVisita from '~/components/agendamento/AgendeSuaVisita.vue'
import AtividadeCard from '~/components/atividades/AtividadeCard.vue'
import Depoimentos from '~/components/depoimentos/Depoimentos.vue'
import NivelEnsinoCard from '~/components/niveis/NivelEnsinoCard.vue'
import NivelEnsinoGrid from '~/components/niveis/NivelEnsinoGrid.vue'
import ProfessorCard from '~/components/professores/ProfessorCard.vue'
import ProfessoresGrid from '~/components/professores/ProfessoresGrid.vue'
import HeroSlider from '~/components/slider/HeroSlider.vue'
import HeroSliderCTA from '~/components/slider/HeroSliderCTA.vue'
import Grid from '~/components/ui/cards/Grid.vue'
import GoogleMaps from '~/components/ui/GoogleMaps.vue'
import HeroVocacional from '~/components/ui/HeroVocacional.vue'
import Parceiros from '~/components/ui/Parceiros.vue'
import WhatsappButton from '~/components/ui/WhatsappButton.vue'
import { useOrganizations } from '~/composables/api/useOrganizations'
import type { WhatsappLinks } from '~/types/navigation.types'

definePageMeta({ layout: 'colegios' })

const route = useRoute()
const slug = computed(() => String(route.params.slug))

const { unidade } =  useOrganizations(slug, 'colegios') 

if (!unidade) {
  throw createError({ statusCode: 404, statusMessage: 'Unidade não encontrada', fatal: true })
}


const whatsappLinks = computed<WhatsappLinks[]>(() => {
  if (!unidade) return []
  const { _id, slug, whatsapp, '@type': type } = unidade
  return [{ _id, slug, whatsapp, '@type': type }]
});


useSeoMeta({
  title: () =>
    unidade
      ? `Colégio Totem em ${unidade.city} | Educação`
      : 'Colégios Totem',

  description: () =>
    unidade
      ? `Conheça o Colégio Totem em ${unidade.city}, sua estrutura e níveis de ensino.`
      : 'Conheça as unidades dos Colégios Totem.',

  ogTitle: () =>
    `Colégio Totem${unidade ? ` em ${unidade.city}` : ''}`,

  ogDescription: () =>
    unidade
      ? `Conheça a unidade Totem em ${unidade.city}.`
      : 'Conheça nossos colégios.',

  ogType: 'website',
  robots: 'index, follow',
})

</script>

<template>
  <main v-if="unidade != null">

    <HeroSlider :banners="unidade.banners">
        <HeroSliderCTA
            :titulo="unidade.city"  
            :subtitle="'Colégio Totem'"
            :link="'/colegios/unidade/' + unidade.slug + '#agende-visita'" 
        >
            <template #cta-text>
                Agende Sua Visita
            </template>
        </HeroSliderCTA>
    </HeroSlider>

    <section class="min-h-128 w-full flex flex-col md:flex-row gap-4 bg-gray-200 responsive-padding">
        <article class="w-full md:w-7/12 lg:w-8/12">
            <div class="flex items-center">
                <h2 class="text-gray-600 text-xl md:text-2xl font-bold">
                    PORQUE O TOTEM?
                </h2>

                <div class="bg-orange-600 w-32 h-0.5 ml-8"></div>
            </div>

            <h2 class="pt-8 lg:pt-12 text-2xl md:text-4xl mt-4 lg:text-6xl text-gray-700 font-bold">
                É MAIS QUE<br />
                COLÉGIO...
            </h2>

            <p class="pt-8 lg:pt-12 leading-8">
                No <strong>{{ unidade.city }}</strong>, os estudantes encontram um ambiente onde o
                afeto e a atenção são prioridades, proporcionando bem-estar e segurança para
                todos. Oferecemos a educação que desperta a criatividade e entrega um mundo de
                conhecimento nas mãos de nossas crianças e jovens. Clique abaixo e conheça 
                os diferenciais que fazem do Totem a sua melhor escolha.
            </p>

             <NuxtLink
                :to="`/colegios/unidade/${unidade.slug}/diferenciais`"
                class="mt-8 lg:mt-12 inline-flex w-fit rounded-full bg-white shadow-2xl px-6 py-3 font-semibold text-gray-700 transition-all duration-300 hover:scale-115"
            >
                Saiba mais →
            </NuxtLink>
        </article>

        <div class="w-full md:w-5/12 lg:w=4/12">
            <img :src="unidade.image" alt="imagem da unidade" class="w-full md:min-h-[90%] object-cover" />
        </div>

    </section>

    <NivelEnsinoGrid>
        <NivelEnsinoCard 
            v-for="nivel in unidade.levels"
            :nivel="nivel"
            :unidade-slug="unidade.slug"
        />
    </NivelEnsinoGrid>

    <section class="min-h-128 w-full responsive-padding">
        <div class="flex items-center">
            <h2 class="text-gray-600 text-xl md:text-2xl font-bold">
                INFRAESTRUTURA QUE INSPIRA
            </h2>

            <div class="bg-orange-600 w-64 h-0.5 ml-8"></div>
        </div>

        <article class="mt-8 w-full text-justify leading-8 md:leading-10 flex flex-col md:flex-row justify-start gap-8">
            <p class="flex-1">
                A Totem acredita que uma escola de alto nível começa pela qualidade do ambiente que
                oferece. Por isso, cada espaço foi pensado para garantir segurança, conforto e acolhimento,
                criando as condições ideais para que o aprendizado aconteça com mais tranquilidade,
                foco e bem-estar.
                Uma infraestrutura bem planejada não apenas recebe os estudantes — ela protege,
                organiza, acolhe e potencializa.
                Salas funcionais, ambientes agradáveis e uma estrutura que acompanha as necessidades
                da rotina escolar fazem toda a diferença na construção de uma experiência educativa mais
                completa.
            </p>
            <p class="flex-1">
                Aqui, a estrutura é parte do ensino. Ela contribui para formar um ambiente onde
                estudantes se sentem seguros para aprender, conviver e crescer com confiança.
            </p>
        </article>

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

    <AtividadesSection :atividades="unidade.atividades">
        <template #atividades>
            <AtividadeCard v-for="value in unidade.atividades" :atividade="value"/>
        </template>
    </AtividadesSection>

    <ProfessoresGrid>
        <ProfessorCard
            v-for="professor in unidade.professores"
            :key="professor._id"
            :professor="professor"
        />
    </ProfessoresGrid>

    <Parceiros/>

    <Depoimentos
      v-if="unidade"
      :unidade="unidade.city"
      :depoimentos="unidade.depoimentos"
    />

    <HeroVocacional/>

    <GoogleMaps v-if="unidade" :unidade="unidade"/>

    <AgendeSuaVisita :unidades="unidade ? [unidade] : []"/>

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
