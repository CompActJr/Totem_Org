<script setup lang="ts">
import HeroSlider from '~/components/HeroSlider.vue';
import AgendeSuaVisita from '~/components/home/AgendeSuaVisita.vue';
import SecaoNiveisEnsino from '~/components/unidade/SecaoNiveisEnsino.vue';
import HeroUnidadeTitle from '~/components/unidade/HeroUnidadeTitle.vue';
import unidades from "~/data/unidades.json"
import type { UnidadeType } from '~/types/unidade.type';
import SecaoInfra from '~/components/unidade/SecaoInfra.vue';
/**
 * @authors Jonas, Arthur, A.Pão
 */

const banners = [
    "/geral/BANNER-1-CACHOEIRA.jpg",
    "/geral/FACHADA-CRUZ-ALTA.jpg"
]

const unidade: UnidadeType | undefined = 
    unidades.find((unidade: UnidadeType) => unidade.city.toLowerCase().trim() === 'cruz alta')

if (!unidade) {
  throw createError({
    statusCode: 404,
    statusMessage: "Unidade não encontrada",
  })
}

</script>

<template>

    <HeroSlider :banners="banners" :titulo="'Cachoeira do Sul'" :subtitle="'Colégios totem'"
        :link="'/unidades/cruz-alta/#agende-visita'" />

    <HeroUnidadeTitle
        :unidade="unidade.slug" 
        :imagem="'/geral/POR-QUE-O-TOTEM.jpg'" 
        :nome="'Colégio Cruz Alta'"
    />

    <SecaoNiveisEnsino :unidade="unidade"/>

    <SecaoInfra :unidade="unidade"/>

    <AgendeSuaVisita :unidades="[unidade]"/>

</template>
