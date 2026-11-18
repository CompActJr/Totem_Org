<script lang="ts" setup>
import { useVocacional } from '~/composables/useVocacional';
import I_Next from '~/components/ui/icons/I_Next.vue';
const { state, nextStep } = useVocacional();

const inputClass = `rounded-xl border border-gray-300 bg-white
    px-4 py-2 text-gray-700 shadow-sm transition-all duration-300
    outline-none hover:border-gray-400 focus:border-orange-500
    focus:ring-2 focus:ring-orange-200`
</script>

<template>
    <section class="flex flex-row justify-center between items-center gap-8 h-full">

        <div class="flex flex-1 items-start flex-col">
            <h2 class="text-2xl md:text-4xl text-center text-gray-600 font-bold">
                Vamos começar!
            </h2>

            <div class="flex flex-col md:flex-row items-start md:items-center gap-4 mt-8 md:mt-16">
                <label for="nome" class="min-w-40 text-gray-600">Nome Completo: </label>
                <input id="nome" v-model="state.form.name" placeholder="Enter your email" type="text" :class="inputClass" />
            </div>

            <div class="flex flex-col md:flex-row items-start md:items-center gap-4 mt-8 md:mt-16">
                <label for="nome" class="min-w-40 text-gray-600">Email: </label>
                <input id="nome" v-model="state.form.email" placeholder="Enter your email" type="email"
                    :class="inputClass" />
            </div>

            <button :disabled="!state.form.name || !state.form.email" 
                @click="nextStep" 
                class=" transition-all duration-300 bg-orange-400  hover:bg-amber-600
                p-2 w-full rounded-full text-white mt-8 md:mt-16
                flex items-center justify-between font-bold text-4-lg">
                <span class="font-bold">CONTINUAR</span>
                <I_Next />
            </button>
        </div>


        <div class="hidden md:block flex-1  h-full p-2">
            <NuxtImg
                src="/geral/aguia_bg.png"
                class="h-full w-full object-cover aguia-zoom"
                loading="lazy"
            />
        </div>

    </section>
</template>

<style>
.aguia-zoom {
    animation: aguia-zoom 2s ease-in-out alternate-reverse infinite;
}

@keyframes aguia-zoom {
    from {
        transform: scale(1);
    }
    to {
        transform: scale(1.10);
    }
}
</style>
