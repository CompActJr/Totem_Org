<script lang="ts" setup>
    import data_unidades from "~/data/unidades.json";
    import CardUnit from "./CardUnit.vue";
</script>

<template>
    <section class="min-h-128 bg-white responsive-padding">
        <div class="flex items-center">
            <h2 class="text-orange-600 font-bold" aria-label="nossas unidades">
                NOSSAS UNIDADES
            </h2>
            <div class="bg-orange-600 w-16 h-0.5 ml-8"></div>
        </div>

        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-4 lg:mt-8">
            <CardUnit v-for="unidade in data_unidades" :unidade="unidade"/>
        </div>
    </section>
</template>