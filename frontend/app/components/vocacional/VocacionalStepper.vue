<script setup lang="ts">
import I_Form from '../ui/icons/I_Form.vue';

defineProps<{
    step: number
}>()

const steps = [
    { title: 'Início', description: 'Preencha seu formulário' },
    { title: 'Avaliação', description: 'Responda às perguntas' },
    { title: 'Resultado', description: 'Visualize seu resultado' },
]
</script>

<template>
    <div class="flex flex-row justify-between items-center gap-6 sm:gap-8 max-w-4xl mx-auto min-h-24 md:min-h-32">
        <div v-for="(item, index) in steps" :key="item.title" class="flex flex-col gap-4 justify-center items-center">
            <div
                class="p-4 rounded-full transition-colors"
                :class="index === step ? 'bg-orange-400' : 'bg-white'"
            >
                <I_Form />
            </div>
            <span class="text-gray-600 font-bold">{{ item.title }}</span>
            <span class="hidden md:block text-xs md:text-sm text-gray-500">{{ item.description }}</span>
        </div>
    </div>
</template>
