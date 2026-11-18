<script setup lang="ts">
import I_Form from '~/components/ui/icons/I_Form.vue';
import Avaliacao from '~/components/vocacional/Avaliacao.vue';
import Result from '~/components/vocacional/Result.vue';
import StartForm from '~/components/vocacional/StartForm.vue';
import { useVocacional } from '~/composables/useVocacional';

const steps = [
    { title: 'Início', description: 'Preencha seu formulário' },
    { title: 'Avaliação', description: 'Responda às perguntas' },
    { title: 'Resultado', description: 'Visualize seu resultado' },
]

definePageMeta({
    layout: 'default'
})

const { state } = useVocacional();

</script>

<template>
    <section class="flex flex-col md:flex-row items-center gap-4 md:gap-8 p-2 md:p-4 lg:p-8 h-full">
       
        <div class="flex md:flex-1 flex-row md:flex-col justify-between items-center gap-8  max-w-4xl mx-auto min-h-24 md:min-h-32">
            <div v-for="(item, index) in steps" :key="item.title"
                class="flex flex-col gap-4 justify-center items-center">
                <div class="p-2 rounded-full transition-colors" :class="index === state.step ? 'bg-orange-400' : 'bg-white'">
                    <I_Form width="1.5em" heigth="1.5em" />
                </div>
                <span class="text-gray-600 font-bold">{{ item.title }}</span>
                <span class="hidden md:block text-xs md:text-sm text-gray-500">{{ item.description }}</span>
            </div>
        </div>

        <div
            class=" bg-white md:flex-2  h-150 mx-auto mt-8 rounded-lg shadow-xl p-4 md:p-8 lg:p-12 overflow-y-auto">
            <StartForm v-if="state.step === 0" />
            <Avaliacao v-else-if="state.step === 1" />
            <Result v-else />
        </div>

    </section>
</template>
