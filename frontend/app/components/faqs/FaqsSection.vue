<script setup lang="ts">
import { ref } from "vue"
import type { FaqType } from "~/types/organizations.types";


defineProps<{
  faqs: FaqType[]
}>()

const opened = ref<number | null>(0)

const toggle = (id: number) => {
  opened.value = opened.value === id ? null : id
}
</script>

<template>

    <section class="min-h-64 w-full responsive-padding">
        <div class="flex items-center">
            <h2 class="text-orange-600 font-bold" aria-label="nossas unidades">
                PERGUNTAS FREQUENTES
            </h2>
            <div class="bg-orange-600 w-16 h-0.5 ml-8"></div>
        </div>
        <h2 class="text-4xl mt-4 lg:mt-8 font-bold">
            FAQS VESTIBULARES
        </h2>
        <p class="mt-4 lg:mt-8 text-xl">
            Encontre respostas para as principais dúvidas
            sobre cursos, matrículas, estrutura e
            funcionamento do Totem Vestibulares.
        </p>
    </section>

    <section class="responsive-padding pb-24">
        <div v-for="faq in faqs" :key="faq._id" class="border-b border-white">
            <button 
                class="flex w-full items-center justify-between py-8 px-4 text-left transition-colors hover:bg-white"
                @click="toggle(faq._id)"
            >
                <h3 class="pr-8 text-lg font-semibold text-gray-900"> {{ faq.question }} </h3>
                <span class="text-3xl font-light text-orange-500 transition-transform duration-300" :class="opened === faq._id && 'rotate-45'">
                    +
                </span>

            </button>

            <Transition name="faq">
                <div v-if="opened === faq._id" class="overflow-hidden pb-8">
                    <div class="border-l-4 border-orange-500 pl-6">
                        <p class="whitespace-pre-line leading-8 mt-4 text-gray-600">
                            {{ faq.answer }}
                        </p>
                    </div>
                </div>
            </Transition>
        </div>
    </section>
    
</template>

<style scoped>
    .faq-enter-active,
    .faq-leave-active {
        transition: all .25s ease;
    }

    .faq-enter-from,
    .faq-leave-to {
        opacity: 0;
        transform: translateY(-8px);
    }
</style>