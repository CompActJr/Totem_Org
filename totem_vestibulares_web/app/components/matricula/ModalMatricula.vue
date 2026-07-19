<script lang="ts" setup>
import { watch } from "vue";
import type { TurmaType } from "~/types/matriculas.types";
import AccordionMatricula from "./AccordionMatricula.vue";

const props = defineProps<{
    open: boolean;
    turma: TurmaType | null;
}>();

const emit = defineEmits<{
    (e: "close"): void;
}>();

watch(
    () => props.open,
    (value) => {
        document.body.style.overflow = value ? "hidden" : "";
    }
);
</script>

<template>

<Transition
    enter-active-class="transition duration-300"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-300"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0">

<div
    v-if="open && turma"
    class="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-6"
    @click.self="emit('close')">

    <div
        class="bg-white w-full max-w-6xl h-[90vh] rounded-lg overflow-hidden shadow-2xl flex flex-col">

        <!-- HEADER -->

        <div class="relative h-72">

            <img
                :src="turma.imagem"
                :alt="turma.titulo"
                class="w-full h-full object-cover">

            <div
                class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
            </div>

            <button
                class="absolute top-5 right-5 bg-white rounded-full w-11 h-11 shadow hover:bg-gray-100 text-xl"
                @click="emit('close')">

                ✕

            </button>

            <div
                class="absolute bottom-8 left-8">

                <h2
                    class="text-white text-5xl font-light uppercase">

                    {{ turma.titulo }}

                </h2>

            </div>

        </div>

        <!-- CONTEÚDO -->

        <div class="flex-1 overflow-y-auto p-10">

            <p class="text-lg text-gray-700 leading-8">

                {{ turma.descricao }}

            </p>

            <div
                class="grid lg:grid-cols-3 gap-6 mt-10">

                <!-- PERÍODO -->

                <div
                    class="bg-gray-100 rounded-lg p-6">

                    <h3
                        class="text-orange-500 font-bold mb-5">

                        Período Letivo

                    </h3>

                    <p class="font-semibold">
                        Início
                    </p>

                    <p>
                        {{ turma.inicio }}
                    </p>

                    <div class="h-5"></div>

                    <p class="font-semibold">
                        Término
                    </p>

                    <p>
                        {{ turma.fim }}
                    </p>

                </div>

                <!-- HORÁRIO -->

                <div
                    class="bg-gray-100 rounded-lg p-6">

                    <h3
                        class="text-orange-500 font-bold mb-5">

                        Horários

                    </h3>

                    {{ turma.horario }}

                </div>

                <!-- DESCONTOS -->

                <div
                    class="bg-gray-100 rounded-lg p-6">

                    <h3
                        class="text-orange-500 font-bold mb-5">

                        Descontos

                    </h3>

                    {{ turma.desconto }}

                </div>

            </div>

            <div class="mt-10 space-y-5">

                <AccordionMatricula
                    titulo="Características da turma"
                    :itens="turma.caracteristicas"
                />

                <AccordionMatricula
                    titulo="Material Didático"
                    :itens="turma.material"
                />

                <AccordionMatricula
                    titulo="Kit Totem"
                    :itens="turma.kit"
                />

                <AccordionMatricula
                    titulo="Documentos necessários"
                    :itens="turma.documentos"
                />

            </div>

        </div>

        <!-- FOOTER -->

        <div
            class="border-t p-6 flex justify-end">

            <button
                class="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded font-semibold">

                MATRICULE-SE AGORA MESMO

            </button>

        </div>

    </div>

</div>

</Transition>

</template>