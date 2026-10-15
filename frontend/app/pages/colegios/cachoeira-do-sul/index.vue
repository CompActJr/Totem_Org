<script setup lang="ts">
import Parceiros from '~/components/unidades/Parceiros.vue';
import type { Organization } from '~/types/organizations.types';

const unidade: Organization;

const banners = [
    "/geral/BANNER-1-CACHOEIRA.jpg",
    "/geral/FACHADA-CACHOEIRA.jpg"
]

</script>

<template>

    <HeroSlider :banners="banners" :titulo="'Cachoeira do Sul'" :subtitle="'Colégio Totem'"
        :link="'/unidades/cachoeira-do-sul/#agende-visita'" />
    
    <HeroUnidadeTitle 
        :unidade="unidade.slug" 
        :imagem="'/geral/POR-QUE-O-TOTEM.jpg'" 
        :nome="'Colégio Cachoeira do Sul'"
    />

    <SecaoNiveisEnsino :unidade="unidade"/>

    <SecaoInfra :unidade="unidade"/>

    <SecaoAtividades :atividades="unidade.atividades"/>

    <Parceiros/>

    <SecaoProfessores :unidadeId="1"/>

    <HeroVocacional/>

    <EntreEmContato :unidade="unidade"/>

    <AgendeSuaVisita :unidades="[unidade]"/>

    <WhatsappButton :unidades="[unidade]"/>

</template>