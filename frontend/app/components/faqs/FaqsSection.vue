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
    <section class="responsive-padding pb-24">
        <div class="flex items-center">
        <h2 class="text-orange-600 font-bold" aria-label="depoimentos">
            FAQS
        </h2>
        <div class="bg-orange-600 w-16 h-0.5 ml-8"></div>
    </div>
    <div>
        <h2 class="pt-8 lg:pt-12 text-3xl font-bold">Ainda tem dúvidas?</h2>
        <p class="pt-8 lg:pt-12 text-gray-600">Reunimos as perguntas mais frequentes de pais, responsáveis e alunos para
            ajudar você a conhecer melhor o Totem pré vestibulares, agrupadas por cada unidade</p>

        <div class="flex items-center gap-8">
            <button class="mt-6 inline-flex items-center rounded-full bg-orange-500 px-6 py-3 font-semibold  transition-all duration-300 hover:bg-orange-600 hover:shadow-lg">
                <span class="text-white font-bold">Ijui</span>
            </button>

            <button class="mt-6 inline-flex items-center rounded-full bg-orange-500 px-6 py-3 font-semibold  transition-all duration-300 hover:bg-orange-600 hover:shadow-lg">
                <span class="text-white font-bold">Santa Maria</span>
            </button>

            <button class="mt-6 inline-flex items-center rounded-full bg-orange-500 px-6 py-3 font-semibold  transition-all duration-300 hover:bg-orange-600 hover:shadow-lg">
                <span class="text-white font-bold">Santa Rosa</span>
            </button>
        </div>
     

    </div>
        <div v-for="faq in faqs" :key="faq._id" class="border-b border-white">
            <button
                class="flex w-full items-center justify-between py-8 px-4 text-left transition-colors hover:bg-white"
                @click="toggle(faq._id)">
                <h3 class="pr-8 text-lg font-semibold text-gray-900"> {{ faq.question }} </h3>
                <span class="text-3xl font-light text-orange-500 transition-transform duration-300"
                    :class="opened === faq._id && 'rotate-45'">
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