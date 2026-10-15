<script lang="ts" setup>
import { computed } from "vue";

type Unidade = {
    id: number;
    nome: string;
};

const unidades: Unidade[] = [
    { id: 2, nome: "Santa Maria" },
    { id: 1, nome: "Santa Rosa" },
    { id: 3, nome: "Ijuí" }
];

// Estado compartilhado com GridMatricula.vue (mesma chave "unidadeSelecionadaId")
const unidadeSelecionadaId = useState<number | null>("unidadeSelecionadaId", () => null);

const unidadeSelecionadaNome = computed(() => {
    return unidades.find(u => u.id === unidadeSelecionadaId.value)?.nome ?? "";
});
</script>

<template>
    <section class="w-full responsive-padding py-16">

        <div class="max-w-6xl mx-auto">

            <!-- Título -->
            <div class="flex items-center">
                <h2 class="text-orange-600 font-bold uppercase tracking-wider">
                    Escolha sua turma
                </h2>

                <div class="bg-orange-600 w-16 h-0.5 ml-8"></div>
            </div>

            <h2 class="text-4xl lg:text-5xl font-bold mt-6">
                Encontre a turma ideal
                <br>
                para você.
            </h2>

            <p class="mt-8 text-lg leading-relaxed max-w-3xl text-gray-700">
                Escolha a unidade desejada para visualizar todas as turmas
                disponíveis. Cada modalidade possui informações sobre período
                letivo e detalhes completos do curso.
            </p>

            <!-- Select -->
            <div class="mt-12 flex justify-center">

                <div class="relative w-full max-w-xl">

                    <select
                        v-model="unidadeSelecionadaId"
                        class="w-full appearance-none bg-gray-200 px-6 py-5 text-xl focus:outline-none cursor-pointer">

                        <option
                            :value="null"
                            disabled>

                            Unidade em que deseja estudar

                        </option>

                        <option
                            v-for="unidade in unidades"
                            :key="unidade.id"
                            :value="unidade.id">

                            {{ unidade.nome }}

                        </option>

                    </select>

                    <!-- Ícone -->
                    <div
                        class="absolute right-0 top-0 h-full w-16 bg-yellow-400 flex items-center justify-center pointer-events-none">

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-6 h-6 text-gray-700"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">

                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="3"
                                d="M19 9l-7 7-7-7" />

                        </svg>

                    </div>

                </div>

            </div>

            <!-- Unidade -->
            <p
                v-if="unidadeSelecionadaId"
                class="mt-10 text-center uppercase tracking-widest text-orange-500">

                Unidade selecionada:

                <span class="font-bold">
                    {{ unidadeSelecionadaNome }}
                </span>

            </p>

        </div>

    </section>
</template>