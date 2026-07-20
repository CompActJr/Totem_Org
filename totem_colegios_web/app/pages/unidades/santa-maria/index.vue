<script setup lang="ts">
import HeroSlider from '~/components/HeroSlider.vue';
import AgendeSuaVisita from '~/components/home/AgendeSuaVisita.vue';
import HeroVocacional from '~/components/home/HeroVocacional.vue';
import EntreEmContato from '~/components/unidade/EntreEmContato.vue';
import HeroUnidadeTitle from '~/components/unidade/HeroUnidadeTitle.vue';
import SecaoAtividades from '~/components/unidade/SecaoAtividades.vue';
import SecaoInfra from '~/components/unidade/SecaoInfra.vue';
import SecaoNiveisEnsino from '~/components/unidade/SecaoNiveisEnsino.vue';
import type { AtividadeType } from '~/types/atividades.types';

import type { UnidadeType } from '~/types/unidade.type';
/**
 * @authors Jonas, Arthur, A.Pão
 */

const banners = [
    "/geral/BANNER-1-CACHOEIRA.jpg",
    "/geral/FACHADA-SANTA-MARIA.jpg"
]

const repository = useUnidadeRepository();

const unidade: UnidadeType | undefined = repository.getBySlug("santa-maria")

if (!unidade) {
  throw createError({
    statusCode: 404,
    statusMessage: "Unidade não encontrada",
  })
}

const atividades: AtividadeType[] = repository.getAtividades(unidade.id)

//const professores = repository.getProfessores(unidade.id)

</script>

<template>

    <HeroSlider :banners="banners" :titulo="'Santa Maria'" :subtitle="'Colégios totem'"
        :link="'/unidades/santa-maria/#agende-visita'" />
    
    <HeroUnidadeTitle
        :unidade="unidade.slug" 
        :imagem="'/geral/POR-QUE-O-TOTEM.jpg'" 
        :nome="'Colégio Santa Maria'"
    />

    <SecaoNiveisEnsino :unidade="unidade"/>

    <SecaoInfra :unidade="unidade"/>

    <SecaoAtividades :atividades="atividades"/>

    <HeroVocacional/>

    <EntreEmContato :unidade="unidade"/>

    <AgendeSuaVisita :unidades="[unidade]"/>

</template>
