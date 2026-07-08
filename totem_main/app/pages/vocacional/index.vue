<script setup lang="ts">
import Avaliacao from '~/components/vocacional/Avaliacao.vue';
import Result from '~/components/vocacional/Result.vue';
import StartForm from '~/components/vocacional/StartForm.vue';

const items = [
    {
        title: 'Início',
        index: 0,
        description: 'Preencha seu formulário',
        image: '/icons/lucide--clipboard-edit.svg'
    },
    {
        title: 'Avaliação',
        index: 1,
        description: 'Responda às perguntas',
        image: '/icons/lucide--form.svg'
    },
    {
        title: 'Resultado',
        index: 2,
        description: 'Visualize seu resultado',
        image: '/icons/lucide--chart-line.svg'
    }
]

const { state, nextStep, previousStep } = useVocacional();

</script>

<template>
    <section class="flex flex-col gap-8 p-8 h-screen">
        <UStepper disabled color="neutral" v-model="state.step" :items="items" class="mx-auto min-h-40">
            
            <template #indicator="{ item }" :class="active ? 'bg-white' : 'bg-white'">
                <img :src="item.image" class="size-5" :alt="item.title">
            </template>

            <template #content="{ item }">
                <div class="bg-white mx-auto w-full min-w-4xl min-h-96 p-12 shadow-xl mt-16 rounded-lg">

                    <!-- STEP 1 -->
                    <div v-if="item.index === 0">
                        <StartForm/>
                    </div>

                    <!-- STEP 2 -->
                    <div v-else-if="item.index === 1">
                        <Avaliacao/>
                    </div>

                    <!-- STEP 3 -->
                    <div v-else>
                        <Result/>
                    </div>

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
