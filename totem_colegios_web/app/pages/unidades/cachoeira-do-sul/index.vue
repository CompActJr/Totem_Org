<script setup lang="ts">
import HeroSlider from '~/components/HeroSlider.vue';
import AgendeSuaVisita from '~/components/home/AgendeSuaVisita.vue';
import unidades from "~/data/unidades.json"
import type { UnidadeType } from '~/types/unidade.type';
/**
 * @authors Jonas, Arthur, A.Pão
 */

const banners = [
    "/geral/BANNER-1-CACHOEIRA.jpg",
    "/geral/FACHADA-CACHOEIRA.jpg"
]

const unidade: UnidadeType | undefined = 
    unidades.find((unidade: UnidadeType) => unidade.city.toLowerCase().trim() === 'cachoeira do sul')

if (!unidade) {
  throw createError({
    statusCode: 404,
    statusMessage: "Unidade não encontrada",
  })
}

</script>

<template>

    <HeroSlider :banners="banners" :titulo="'Cachoeira do Sul'" :subtitle="'Colégios totem'"
        :link="'/unidades/cachoeira-do-sul/#agende-visita'" />

    <AgendeSuaVisita :unidades="[unidade]"/>

</template>
