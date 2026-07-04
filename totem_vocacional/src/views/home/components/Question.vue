<template>
    <Transition name="fade" mode="out-in" appear>
        <div class="question" v-if="openQuestion" :class="{ hidden: !openQuestion }">
            <span class="id_question">{{ question?.id }}</span>
            <h4>{{ question?.titulo }}</h4>

            <form class="form_question" @submit.prevent="submitFormFinal()">
                <label v-for="option in question?.opcoes" :key="option.id" class="option">
                    <input type="checkbox" :checked="isCheckd(option.analysisEnum)"
                        :disabled="isDisabled(option.analysisEnum)" @change="toggleOption(option.analysisEnum)" />
                    <span>
                        {{ option.text }}
                    </span>
                </label>
                <div>
                    <button type="button" class="exit_btn" @click="handleRetry()" v-if="currentId !== 1">
                        Voltar
                    </button>

                    <button type="button" class="play_btn" @click="handleSubmitForm()"
                        v-if="currentId !== questions.length">
                        Seguir
                    </button>

                    <button type="submit" class="play_btn" v-if="currentId === questions.length">
                        Finalizar
                    </button>
                </div>
            </form>

        </div>
    </Transition>
</template>

<script setup lang="ts">
import { useTestStore } from '@/stores/Teste';
import type { AnalysisEnum } from '@/types/Analysis';
import { storeToRefs } from 'pinia';
import { computed, ref } from 'vue';

const testStore = useTestStore();

const { questions, currentId, responses } = storeToRefs(testStore)

const question = computed(() => { return questions.value[currentId.value - 1] });

const response = computed(() => { return responses.value[currentId.value - 1]?.responses || [] });

const openQuestion = ref(true);

const closeOpenQuestion = () => {
    openQuestion.value = false;

    setInterval(() => {
        openQuestion.value = true;
    }, 300)
}

const isCheckd = (value: AnalysisEnum): boolean => {
    return response.value.includes(value);
}

const isDisabled = (value: AnalysisEnum): boolean => {
    return (response.value.length >= 2 && !response.value.includes(value))
}

const toggleOption = (value: AnalysisEnum) => {
    testStore.toggleResposta(currentId.value, value)
}

const handleSubmitForm = () => {
    if (response.value.length !== 2) {
        alert("necessário marcar 2 campos para resposta");
        return;
    }
    else {
        testStore.avancar();
    }
    closeOpenQuestion();
}

const handleRetry = () => {
    testStore.voltar();
    closeOpenQuestion();
}

const submitFormFinal = () => {
    testStore.finalizar();
}

</script>

<style lang="scss" scoped>
@use '@/assets/index.scss' as *;

.question {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    position: relative;
    gap: 16px;
    color: $primary_7;

    .id_question {
        width: 32px;
        height: 32px;
        @include criar_botao($primary_2, $primary_5, 1rem, 50%);
        position: absolute;
        top: 8px;
        right: 8px;
        z-index: 60;
        cursor: default;
    }

    h4 {
        text-align: center;
        margin-top: 48px;
    }

    .form_question {
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
        width: 100%;
        gap: 8px;
        border: solid 2px $primary_5;
        border-radius: 8px;
        padding: 8px;

        .option {
            input {
                transform: scale(1.2);
            }

            span {
                margin-left: 1rem;
            }
        }

        div {
            display: flex;
            justify-content: space-between;
            width: 100%;
            margin-top: 1rem;
        }
    }
}

.play_btn {
    @include criar_botao($primary_2, $primary_5, 1.2rem, 4px);
    @include centralizar_flex;
    transition: scale ease 0.4s;

    &:hover {
        scale: 1.05;
    }

    width: 200px;
}

.exit_btn {
    @include criar_botao($primary_2, $primary_6, 1.1rem);
    @include centralizar_flex;
    transition: scale ease 0.4s;

    &:hover {
        scale: 1.05;
    }

    width: 200px;
}
</style>