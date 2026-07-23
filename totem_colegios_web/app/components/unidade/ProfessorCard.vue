<script lang="ts" setup>
/**
 * @author Jonas
 * componente de card para os professores
*/

import type { ProfessorType } from '~/types/professores.types';

interface Props {
    professor: ProfessorType
}

const props = defineProps<Props>()

const aberto = ref(false);

function toggle() {
    aberto.value = !aberto.value;
}

</script>

<template>
    <article
        class="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl w-96">

        <div class="relative h-128">

            <NuxtImg
                :src="professor.imagemUrl || '/geral/perfil.png'"
                :alt="professor.nome"
                class="h-full w-full object-cover"
                loading="lazy" />

            <div class="absolute inset-0 flex items-end">

                <div
                    class="relative w-full bg-orange-500 p-5 overflow-hidden transition-all duration-500 ease-in-out"
                    :class="aberto ? 'min-h-[80%]' : 'min-h-46'">

                    <Transition name="fade" mode="out-in">

                        <div v-if="!aberto" key="titulo">

                            <h2 class="text-2xl font-bold text-white text-center">
                                {{ professor.nome }}
                            </h2>

                            <h4 class="mt-4 text-white font-bold text-center">
                                {{ professor.areaEnsino }}
                            </h4>

                        </div>

                        <div
                            v-else
                            key="descricao"
                            class="text-white leading-relaxed text-sm pr-2 overflow-y-auto max-h-72">

                            {{ professor.texto }}

                        </div>

                    </Transition>

                    <button
                        @click="toggle"
                        class="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-yellow-300 px-6 py-3 font-semibold text-gray-700 transition hover:scale-105">

                        {{ aberto ? "Voltar" : "Leia mais →" }}

                    </button>

                </div>

            </div>

        </div>

    </article>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity .25s ease, transform .25s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateY(12px);
}
</style>