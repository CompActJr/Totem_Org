<script setup lang="ts">
import { useNavigationUnidade } from "~/composables/useNavigateUnidade";
import type { EducationalLevel } from "~/types/educational.types";
import type { UnidadeType } from "~/types/unidade.type"
import niveisData from "~/data/niveis_ensino.json"
import Menu from "~/components/Menu.vue";
import Footer from "~/components/Footer.vue";

const niveis = niveisData as EducationalLevel[]
const currentUnit = useCurrentUnit()

const filteredLevels = computed<EducationalLevel[]>(() =>
    niveis.filter(level =>
        currentUnit.value.levels.includes(level.name)
    )
)

const navUnidadesLinks = computed(() => {
    if (!currentUnit.value) {
        return []
    }

    return useNavigationUnidade(currentUnit.value.slug, filteredLevels.value).navUnidadesLinks
})

</script>

<template>
    <Menu :links="navUnidadesLinks"/>

    <main class="pt-20 md:pt-26">
        <slot/>
    </main>

    <Footer/>
</template>