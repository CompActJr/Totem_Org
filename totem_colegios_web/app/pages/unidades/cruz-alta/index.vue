<script setup lang="ts">
/**
 * @authors Jonas, Arthur, A.Pão
 */


import HeroSlider from '~/components/HeroSlider.vue';
import AgendeSuaVisita from '~/components/home/AgendeSuaVisita.vue';
import SecaoNiveisEnsino from '~/components/unidade/SecaoNiveisEnsino.vue';
import HeroUnidadeTitle from '~/components/unidade/HeroUnidadeTitle.vue';

import type { UnidadeType } from '~/types/unidade.type';
import SecaoInfra from '~/components/unidade/SecaoInfra.vue';
import EntreEmContato from '~/components/unidade/EntreEmContato.vue';
import SecaoAtividades from '~/components/unidade/SecaoAtividades.vue';
import type { AtividadeType } from '~/types/atividades.types';
import SecaoProfessores from '~/components/unidade/SecaoProfessores.vue';
import SecaoParceiros from '~/components/unidade/SecaoParceiros.vue';
import HeroVocacional from '~/components/home/HeroVocacional.vue';

const banners = [
    "/geral/BANNER-1-CACHOEIRA.jpg",
    "/geral/FACHADA-CRUZ-ALTA.jpg"
]

const repository = useUnidadeRepository();

const unidade: UnidadeType | undefined = repository.getBySlug("cruz-alta")

if (!unidade) {
  throw createError({
    statusCode: 404,
    statusMessage: "Unidade não encontrada",
  })
}

const currentUnit = useCurrentUnit()
currentUnit.value = unidade

const atividades: AtividadeType[] = repository.getAtividades(unidade.id)


</script>

<template>

    <HeroSlider :banners="banners" :titulo="'Cruz Alta'" :subtitle="'Colégios totem'"
        :link="'/unidades/cruz-alta/#agende-visita'" />

    <HeroUnidadeTitle
        :unidade="unidade.slug" 
        :imagem="'/geral/POR-QUE-O-TOTEM.jpg'" 
        :nome="'Colégio Cruz Alta'"
    />

    <SecaoNiveisEnsino :unidade="unidade"/>

    <SecaoInfra :unidade="unidade"/>

    <SecaoAtividades :atividades="atividades"/>

    <SecaoParceiros/>

    <SecaoProfessores :unidadeId="3"/>

    <HeroVocacional/>

    <EntreEmContato :unidade="unidade"/>

    <AgendeSuaVisita :unidades="[unidade]"/>

    <WhatsappButton :unidades="[unidade]"/>

</template>
