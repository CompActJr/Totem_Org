<script setup lang="ts">
/**
 * @author Jonas
 */
const props = defineProps<{
    step: number
}>()

const items = [
    {
        title: 'Início',
        description: 'Preencha seu formulário',
        image: '/icons/lucide--clipboard-edit.svg'
    },
    {
        title: 'Avaliação',
        description: 'Responda às perguntas',
        image: '/icons/lucide--form.svg'
    },
    {
        title: 'Resultado',
        description: 'Visualize seu resultado',
        image: '/icons/lucide--chart-line.svg'
    }
]
</script>

<template>
    <div class="
    flex
    flex-row
    justify-between
    items-center
    gap-6
    sm:gap-8
    max-w-4xl
    mx-auto
    min-h-24
    md:min-h-32
  ">
        <div
            v-for="(item, index) in items"
            :key="index"
        >
            <div class="flex flex-col gap-4 justify-center items-center">
                <div :class="index <= step ? 'p-4 bg-orange-400 rounded-full' : 'p-4 bg-white rounded-full'">
                    <img :src="item.image" class="size-5" :alt="item.title">
                </div>
                <span class="text-gray-600 text-bold">{{ item.title }}</span>
                <span
                    class="
                        hidden
                        md:block
                        text-xs
                        md:text-sm
                        text-gray-500
                    "
                >
                    {{ item.description }}
                </span>
            </div>
        </div>
    </div>
</template>