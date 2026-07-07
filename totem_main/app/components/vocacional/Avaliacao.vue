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
    return data.find(q => q.id === state.value.currentQuestion + 1);
});

console.log(currentQuestion);

function selectOption(option: Option) {

    saveAnswer({
        questionId: state.value.currentQuestion,
        options: option
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

    <ClientOnly v-if="currentQuestion">
        <p class="text-center text-gray-600">
            Pergunta {{ state.currentQuestion + 1 }} de {{ data.length }}
        </p>
        <article class="text-left text-gray-600 text-lg">
            {{ currentQuestion.titulo }}
        </article>

        <div class="mt-8">
            <div v-for="option in currentQuestion.opcoes" :key="option.id">
                <input type="checkbox" />
                <span>{{ option.text }}</span>
            </div>
        </div>

    </ClientOnly>


    <footer class="flex items-center justify-between">
        <button class=" transition-all duration-300 hover:scale-110 bg-orange-400 
                p-2 w-16 rounded-full text-white
                flex items-center justify-between font-bold text-4-lg"
            @click="previousQuestion"
            :disabled="state.currentQuestion + 1 <= 1"
        >
            <<
        </button>

        <button class=" transition-all duration-300 hover:scale-110 bg-orange-400 
                p-2 w-46 rounded-full text-white
                flex items-center justify-between font-bold text-4-lg"
            @click="previousStep"
        >
            Voltar ao cadastro
        </button>

        <button 
            class="transition-all duration-300 hover:scale-110 bg-orange-400 
                p-2 w-16 rounded-full text-white
                flex items-center justify-between font-bold text-4-lg"
            :disabled="state.currentQuestion +1 >= data.length"
            @click="nextQuestion"
        >
            >>
        </button>

    </footer>
</template>