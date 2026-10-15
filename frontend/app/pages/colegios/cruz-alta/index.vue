<script setup lang="ts">
import Parceiros from '~/components/unidades/Parceiros.vue';
import type { Organization } from '~/types/organizations.types';

const unidade: Organization;

const banners = [
    "/geral/BANNER-1-CACHOEIRA.jpg",
    "/geral/FACHADA-CRUZ-ALTA.jpg"
]

</script>

<template>

    <HeroSlider :banners="banners" :titulo="'Cruz Alta'" :subtitle="'Colégio Totem'"
        :link="'/unidades/cruz-alta/#agende-visita'" />

    <HeroUnidadeTitle
        :unidade="unidade.slug" 
        :imagem="'/geral/POR-QUE-O-TOTEM.jpg'" 
        :nome="'Colégio Cruz Alta'"
    />

    <SecaoNiveisEnsino :unidade="unidade"/>

    <SecaoInfra :unidade="unidade"/>

    <SecaoAtividades :atividades="unidade.atividades"/>

    <Parceiros/>

    <SecaoProfessores/>

    <HeroVocacional/>

    <EntreEmContato :unidade="unidade"/>

    <AgendeSuaVisita :unidades="[unidade]"/>

    <WhatsappButton :unidades="[unidade]"/>

</template>
