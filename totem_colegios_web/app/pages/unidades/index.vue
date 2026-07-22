<script lang="ts" setup>
/**
 * @author Jonas
 * página de fallback para forçar a escolher uma unidade
 */
import HeroUnidades from '~/components/home/HeroUnidades.vue';
import unidades from "~/data/unidades.json";
</script>

<template>
    <HeroUnidades :unidades="unidades"/>
</template>
