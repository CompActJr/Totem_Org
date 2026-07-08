<script lang="ts" setup>
const { state, nextStep } = useVocacional();

const inputClass = `rounded-xl border border-gray-300 bg-white
    px-4 py-2 text-gray-700 shadow-sm transition-all duration-300
    outline-none hover:border-gray-400 focus:border-orange-500
    focus:ring-2 focus:ring-orange-200`
</script>

<template>
    <h2 class="text-4xl text-center text-gray-600 font-bold">
        Vamos começar!
    </h2>

    <div class="flex items-center gap-4 mt-16">
        <label for="nome" class="min-w-40 text-gray-600">Nome Completo: </label>
        <input id="nome" v-model="state.form.name" placeholder="Enter your email" type="text" :class="inputClass" />
    </div>

    <div class="flex items-center gap-4 mt-8">
        <label for="nome" class="min-w-40 text-gray-600">Email: </label>
        <input id="nome" v-model="state.form.email" placeholder="Enter your email" type="email" :class="inputClass" />
    </div>

    <div class="flex items-center gap-4 mt-8">
        <input v-model="state.form.receiveEmail" type="checkbox"
            class="w-6 h-6 rounded-md border-2 bg-white border-orange-500 text-orange-500 focus:ring-2 focus:ring-orange-300" />

        <label class="text-gray-600 cursor-pointer">
            Desejo receber meu resultado por e-mail
        </label>
    </div>


    <div class="flex justify-end">
        <button 
            :disabled="!state.form.name || !state.form.email"
            @click="nextStep"
            class=" transition-all duration-300 hover:scale-110 bg-orange-400 
                p-2 w-32 rounded-full text-white
                flex items-center justify-between font-bold text-4-lg"
        >
            Continuar
            <img src="/icons/icon-park-solid--next.svg" />
        </button>
    </div>

</template>