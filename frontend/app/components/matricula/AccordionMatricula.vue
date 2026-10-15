<script lang="ts" setup>
import { ref } from "vue";

defineProps<{
    titulo: string;
    itens: string[];
}>();

const aberto = ref(false);
</script>

<template>

<div class="border border-gray-200 rounded-lg overflow-hidden">

    <button
        class="w-full flex justify-between items-center px-6 py-5 bg-gray-50 hover:bg-gray-100 transition"
        @click="aberto = !aberto">

        <span class="font-semibold text-lg">
            {{ titulo }}
        </span>

        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 transition duration-300"
            :class="{ 'rotate-180': aberto }"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">

            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7" />

        </svg>

    </button>

    <Transition
        enter-active-class="transition-all duration-300"
        leave-active-class="transition-all duration-300"
        enter-from-class="opacity-0 max-h-0"
        enter-to-class="opacity-100 max-h-[500px]"
        leave-from-class="opacity-100 max-h-[500px]"
        leave-to-class="opacity-0 max-h-0">

        <div
            v-if="aberto"
            class="overflow-hidden">

            <ul class="p-6 space-y-3 list-disc pl-10">

                <li
                    v-for="item in itens"
                    :key="item">

                    {{ item }}

                </li>

            </ul>

        </div>

    </Transition>

</div>

</template>