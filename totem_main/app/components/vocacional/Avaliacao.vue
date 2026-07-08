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

const options = ref<number[]>([]);

const currentQuestion = computed(() => {
    return data.find(q => q.id === state.value.currentQuestion + 1);
});

watch(currentQuestion, () => {
    const answer = getCurrentAnswer();
    options.value = answer ? [...answer.options] : [];
}, { immediate: true });


watch(options, (value) => {
    saveAnswer({
        questionId: state.value.currentQuestion,
        options: [...value]
    });
}, { deep: true });

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
            <div v-for="option in currentQuestion.opcoes" :key="option.id" class="flex gap-8 mt-4">
                <input 
                    type="checkbox"
                   
                    :value="option.id"
                    :disabled="options.length >= 2 && !options.includes(option.id)"
                    v-model="options"
                    class="w-6 h-6 accent-orange-500 cursor-pointer" 
                />
                <span class="text-gray-600">{{ option.text }}</span>
            </div>
        </div>

    </ClientOnly>


    <footer class="flex items-center justify-between">
        <button 
            class=" transition-all duration-300 hover:scale-110 bg-orange-400 
                p-2 w-16 rounded-full text-white
                flex items-center justify-between font-bold text-4-lg"
            @click="previousQuestion"
            :disabled="state.currentQuestion + 1 <= 1"
        >
            <img src="/icons/icon-park-solid--next.svg" class="-scale-x-100" />
        </button>

        <button 
            class=" transition-all duration-300 hover:scale-110 bg-gray-400 
                p-2 w-46 rounded-full text-white
                flex items-center justify-center font-bold text-4-lg"
            @click="previousStep"
        >
            Voltar ao cadastro
        </button>

        <button 
            class="transition-all duration-300 hover:scale-110 bg-orange-400 
                p-2 w-16 rounded-full text-white
                flex items-center justify-between font-bold text-4-lg"
            :disabled="options.length !== 2 || state.currentQuestion + 1 >= data.length" 
            @click="nextQuestion"
        >
            <img src="/icons/icon-park-solid--next.svg" />
        </button>

    </footer>
</template>