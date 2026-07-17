<script lang="ts" setup>
import { computed } from "vue";

import Card from "./CardMatricula.vue";

import turmasData from "~/data/matriculas.json";
import type { TurmaType } from "~/types/matriculas.types";

const turmas = turmasData as TurmaType[];

// Mesma chave usada em IntroMatricula.vue
const unidadeSelecionadaId = useState<number | null>("unidadeSelecionadaId", () => null);

const turmasFiltradas = computed(() => {
    if (!unidadeSelecionadaId.value) return [];

    return turmas.filter(turma => turma.unidadeId === unidadeSelecionadaId.value);
});
</script>

<template>

    <section class="responsive-padding pb-24">

        <div class="max-w-7xl mx-auto">

            <div
                class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">

                <Card
                    v-for="turma in turmasFiltradas"
                    :key="turma.id"
                    :titulo="turma.titulo"
                    :imagem="turma.imagem"
                    :inicio="turma.inicio"
                    :fim="turma.fim"
                    :link="turma.link" />

            </div>

        </div>

    </section>

</template>