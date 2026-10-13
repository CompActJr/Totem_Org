<script lang="ts" setup>
import { computed, ref } from "vue";

import Card from "./CardMatricula.vue";
import Modal from "./ModalMatricula.vue";

import turmasData from "~/data/matriculas.json";
import type { TurmaType } from "~/types/matriculas.types";

const turmas = turmasData as TurmaType[];

// Estado compartilhado com IntroMatricula.vue
const unidadeSelecionadaId = useState<number | null>(
    "unidadeSelecionadaId",
    () => null
);

const turmasFiltradas = computed(() => {
    if (!unidadeSelecionadaId.value) return [];

    return turmas.filter(
        turma => turma.unidadeId === unidadeSelecionadaId.value
    );
});

/* ===========================
   MODAL
=========================== */

const modalAberto = ref(false);

const turmaSelecionada = ref<TurmaType | null>(null);

function abrirModal(turma: TurmaType) {
    turmaSelecionada.value = turma;
    modalAberto.value = true;
}

function fecharModal() {
    modalAberto.value = false;
    turmaSelecionada.value = null;
}
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

                @abrir="abrirModal(turma)"
            />

        </div>

    </div>

    <Modal
        :open="modalAberto"
        :turma="turmaSelecionada"
        @close="fecharModal"
    />

</section>

</template>