<script setup lang="ts">
import data from "~/data/questions.json";
import type { Option } from "~/types/option";

const {
    state,
    nextStep,
    previousStep,
    nextQuestion,
    previousQuestion,
    getCurrentAnswer,
    saveAnswer
} = useVocacional();

const currentAnswer = computed(() => getCurrentAnswer());

const currentQuestion = computed(() => {
    return data.find(q => q.id === state.value.currentQuestion);
});

function selectOption(option: Option) {

    saveAnswer({
        questionId: state.value.currentQuestion,
        options: [option.id]
    });

    if (state.value.currentQuestion < data.length) {
        nextQuestion();
    } else {
        nextStep();
    }
}
</script>

<template>
    <h2 class="text-4xl text-center text-gray-600 font-bold">
        Avaliação
    </h2>

    <ClientOnly>
        <p></p>
    </ClientOnly>
  

    <div class="flex justify-between">
        <UButton color="neutral" variant="outline" @click="previousStep">
            Voltar
        </UButton>

        <UButton @click="nextStep">
            Finalizar
        </UButton>
    </div>
</template>