<script setup lang="ts">
import AgendeSuaVisita from '~/components/colegios/AgendeSuaVisita.vue'
import AtividadeCard from '~/components/vestibulares/AtividadeCard.vue'
import IntroBody from '~/components/global/IntroBody.vue'
import NivelEnsinoCard from '~/components/colegios/NivelEnsinoCard.vue'
import NivelEnsinoGrid from '~/components/colegios/NivelEnsinoGrid.vue'
import ProfessorCard from '~/components/global/ProfessorCard.vue'
import HeroSlider from '~/components/global/HeroSlider.vue'
import HeroSliderCTA from '~/components/global/HeroSliderCTA.vue'
import Grid from '~/components/ui/cards/Grid.vue'
import GoogleMaps from '~/components/global/GoogleMaps.vue'
import HeroVocacional from '~/components/colegios/HeroVocacional.vue'
import Parceiros from '~/components/colegios/Parceiros.vue'
import WhatsappButton from '~/components/global/WhatsappButton.vue'
import { useOrganizations } from '~/composables/api/useOrganizations'
import type { Organization } from '~/types/organizations.types'
import type { WhatsappLinks } from '~/types/navigation.types'
import SectionLayout from '~/components/ui/SectionLayout.vue'
import IntroSectionHeader from '~/components/global/IntroSectionHeader.vue'


definePageMeta({ layout: 'colegios' })

const route = useRoute()
const slug = computed(() => String(route.params.slug))

const { data: unidadeData, pending, error } = await useOrganizations(slug, 'colegios')
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
            ? `Colégio Totem em ${unidade.value.city} | Educação`
            : 'Colégios Totem',

    description: () =>
        unidade.value
            ? `Conheça o Colégio Totem em ${unidade.value.city}, sua estrutura e níveis de ensino.`
            : 'Conheça as unidades dos Colégios Totem.',

    ogTitle: () =>
        `Colégio Totem${unidade.value ? ` em ${unidade.value.city}` : ''}`,

    ogDescription: () =>
        unidade.value
            ? `Conheça a unidade Totem em ${unidade.value.city}.`
            : 'Conheça nossos colégios.',

    ogType: 'website',
    robots: 'index, follow',
})

</script>

<template>
    <main v-if="unidade != null">

        <HeroSlider :banners="unidade.banners">
            <HeroSliderCTA :titulo="unidade.city" :subtitle="'Colégio Totem'"
                :link="'/colegios/unidade/' + unidade.slug + '#agende-visita'">
                <template #cta-text>
                    Agende Sua Visita
                </template>
            </HeroSliderCTA>
        </HeroSlider>

        <SectionLayout class="bg-gray-200">
            <template #header>
                <IntroSectionHeader>
                    PORQUE O TOTEM
                </IntroSectionHeader>
            </template>
            <template #content>
                <IntroBody :image-src="unidade.image" :image-alt="`Imagem da unidade ${unidade.city}`"
                    :cta-link="`/colegios/unidade/${unidade.slug}/diferenciais`" cta-text="Saiba mais">
                    <template #title>
                        É MAIS QUE<br />
                        COLÉGIO...
                    </template>

                    <template #content>
                        <p class="leading-8">
                            No <strong>{{ unidade.city }}</strong>, os estudantes encontram um ambiente onde o
                            afeto e a atenção são prioridades, proporcionando bem-estar e segurança para
                            todos. Oferecemos a educação que desperta a criatividade e entrega um mundo de
                            conhecimento nas mãos de nossas crianças e jovens. Clique abaixo e conheça
                            os diferenciais que fazem do Totem a sua melhor escolha.
                        </p>
                    </template>
                </IntroBody>
            </template>
        </SectionLayout>

        <NivelEnsinoGrid>
            <NivelEnsinoCard v-for="nivel in unidade.levels" :nivel="nivel" :unidade-slug="unidade.slug" />
        </NivelEnsinoGrid>

        <SectionLayout class="bg-gray-200">
            <template #header>
                <IntroSectionHeader>
                    INFRAESTRUTURA QUE INSPIRA
                </IntroSectionHeader>
            </template>

            <template #content>
                <article
                    class="mt-8 w-full text-justify leading-8 md:leading-10 flex flex-col md:flex-row justify-start gap-8">
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
                    <NuxtImg v-for="imagem in unidade.infraestrutura" :key="imagem" :src="imagem" format="webp"
                        quality="80" loading="lazy" class="w-full h-48 md:h-96 object-cover rounded-xl  border-gray-100 border-4 border-solid
                    transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:" />
                </Grid>
            </template>
        </SectionLayout>

        <AtividadesSection :atividades="unidade.atividades">
            <template #atividades>
                <AtividadeCard v-for="value in unidade.atividades" :atividade="value" />
            </template>
        </AtividadesSection>

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

        <Parceiros />

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

        <SectionLayout class=" bg-gray-200 ">
            <template #header>
                <IntroSectionHeader class="text-gray-700 uppercase">
                    Motivos para matricular
                </IntroSectionHeader>
            </template>

            <template #content>
                <article class="mt-8" id="diferenciais">
                    <ul class="space-y-4">
                        <li v-for="value in unidade.diferenciais" :key="value.length"
                            class="flex items-start gap-3 rounded-md p-2 transition-colors hover:bg-white">
                            <span class="mt-2 h-2 w-2 rounded-full bg-orange-600 shrink-0"></span>

                            <p class="text-gray-700 leading-7">
                                {{ value }}
                            </p>
                        </li>
                    </ul>
                </article>
            </template>
        </SectionLayout>

        <WhatsappButton :links="whatsappLinks" />

        <HeroVocacional />

        <GoogleMaps v-if="unidade" :unidade="unidade" />

        <AgendeSuaVisita :unidades="unidade ? [unidade] : []" />

        <WhatsappButton :links="whatsappLinks" />

    </main>


    <p v-else-if="pending" class="responsive-padding py-12 text-gray-600">
        Carregando unidade...
    </p>

    <p v-else class="responsive-padding py-12 text-red-600">
        Não foi possível carregar esta unidade.
    </p>
</template>
