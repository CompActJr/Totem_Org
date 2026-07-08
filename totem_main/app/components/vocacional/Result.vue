<script lang="ts" setup>
import { AnalysisEnum } from '~/types/analysis.js';
import ResultChart from './ResultChart.vue';
import data from '~/data/questions.json';

const { state, previousStep } = useVocacional();

const result = computed<Record<AnalysisEnum, number>>(() => {

    const result: Record<AnalysisEnum, number> = {
        [AnalysisEnum.I]: 0,
        [AnalysisEnum.C]: 0,
        [AnalysisEnum.E]: 0,
        [AnalysisEnum.A]: 0,
        [AnalysisEnum.R]: 0,
        [AnalysisEnum.S]: 0
    };

    data.forEach((d) => {
        let answer = state.value.answers.find(a => a.questionId === d.id);
        let options = d.opcoes;

        options.forEach(o => {
            if (answer != null && answer != undefined && answer.options.includes(o.id)) {
                result[o.analysisEnum as AnalysisEnum]++;
            }
        })
    });

    return result;
})

</script>


<template>

    <ClientOnly>
        <nav class="flex items-center justify-around mb-8">

            <button class=" transition-all duration-300 hover:scale-110 bg-orange-400 
                p-2 w-16 rounded-full text-white
                flex items-center justify-center font-bold text-4-lg" @click="previousStep">
                <img src="/icons/icon-park-solid--next.svg" class="-scale-x-100" />
            </button>

            <button class=" transition-all duration-300 hover:scale-110 bg-orange-400 
                p-2 w-16 rounded-full text-white
                flex items-center justify-center font-bold text-4-lg">
                <img src="/icons/system-uicons--fullscreen.svg" />
            </button>

            <button class=" transition-all duration-300 hover:scale-110 bg-orange-400 
                p-2 w-16 rounded-full text-white
                flex items-center justify-center font-bold text-4-lg">
                <img src="/icons/teenyicons--pdf-solid.svg" />
            </button>

        </nav>
        <main>
            <ResultChart :result="result" />
        </main>
    </ClientOnly>

</template>