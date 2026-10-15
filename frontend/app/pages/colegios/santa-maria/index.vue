<script setup lang="ts">
import Parceiros from '~/components/unidades/Parceiros.vue';
import type { Organization } from '~/types/organizations.types';

const unidade: Organization;

const banners = [
    "/geral/BANNER-1-CACHOEIRA.jpg",
    "/geral/FACHADA-SANTA-MARIA.jpg"
]
</script>

<template>

    <HeroSlider :banners="banners" :titulo="'Santa Maria'" :subtitle="'Colégio Totem'"
        :link="'/unidades/santa-maria/#agende-visita'" />
    
    <HeroUnidadeTitle
        :unidade="unidade.slug" 
        :imagem="'/geral/POR-QUE-O-TOTEM.jpg'" 
        :nome="'Colégio Santa Maria'"
    />

    <SecaoNiveisEnsino :unidade="unidade"/>

    <SecaoInfra :unidade="unidade"/>

    <SecaoAtividades :atividades="unidade.atividades"/>

    <Parceiros/>

    <SecaoProfessores :unidadeId="2"/>

    <HeroVocacional/>

    <EntreEmContato :unidade="unidade"/>

    <AgendeSuaVisita :unidades="[unidade]"/>

    <WhatsappButton :unidades="[unidade]"/>

</template>
