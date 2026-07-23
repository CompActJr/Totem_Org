<script setup lang="ts">
import HeroSlider from '~/components/HeroSlider.vue';
import AgendeSuaVisita from '~/components/home/AgendeSuaVisita.vue';
import EntreEmContato from '~/components/unidade/EntreEmContato.vue';
import SecaoProfessores from '~/components/unidade/SecaoProfessores.vue';
import WhatsappButton from '~/components/WhatsappButton.vue';
import type { UnidadeType } from '~/types/unidade.type';

/**
 * @authors Jonas, Arthur, A.Pão
 */
const repository = useUnidadeRepository();

definePageMeta({
  layout: "unidade"
})

const banners = [
    "/geral/BANNER.jpg",
    "/geral/FACHADA-SANTA-MARIA.jpg"
]

const unidade: UnidadeType | undefined = repository.getBySlug("santa-maria")

if (!unidade) {
  throw createError({
    statusCode: 404,
    statusMessage: "Unidade não encontrada",
  })
}

const currentUnit = useCurrentUnit()
currentUnit.value = unidade

//todo filtrar daqueles pelo nivel de ensino
const professores = repository.getProfessores(unidade.id)

</script>

<template>
    <HeroSlider :banners="banners" 
        :titulo="'Fundamental I'" 
        :subtitle="'Santa Maria'"
        :link="'/unidades/santa-maria/fundamental-i/#agende-visita'" />

    <SecaoProfessores :professores="professores"/>

    <EntreEmContato :unidade="unidade"/>

    <AgendeSuaVisita :unidades="[unidade]"/>

    <WhatsappButton :unidades="[unidade]"/>
</template>