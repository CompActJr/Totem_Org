<script setup lang="ts">
/**
 * Totem Vocacional
 * @author Jonas
 */

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
const active = ref(0)

onMounted(() => {
    active.value = 1;
})

</script>


<template>
    <section class="flex flex-col gap-8 p-8 h-screen">
        <UStepper disabled color="neutral" ref="stepper" v-model="active" :items="items" class="mx-auto min-h-40">
            <template #indicator="{ item }" :class="active ? 'bg-white' : 'bg-gray'">
                    <img :src="item.image" class="size-5" :alt="item.title">
            </template>

            <template #content="{ item }">
                <div class="bg-white mx-auto min-w-7xl p-4 flex items-center gap-16">
                    This is the {{ item?.title }} step.
                </div>
            </template>

            <template #title="{ item }">
                <span class="text-gray-600 text-bold">{{ item.title }}</span>
            </template>

            <template #description="{ item }">
                <span class="text-gray-600 text-bold">{{ item.description }}</span>
            </template>

        </UStepper>
    </section>
</template>
