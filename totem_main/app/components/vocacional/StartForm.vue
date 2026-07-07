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

    <div class="flex items-center gap-4 mt-8">
        <label for="nome" class="min-w-40 text-gray-600">Nome Completo: </label>
        <input id="nome" placeholder="Enter your email" type="text" :class="inputClass" />
    </div>

    <div class="flex items-center gap-4 mt-8">
        <label for="nome" class="min-w-40 text-gray-600">Email: </label>
        <input id="nome" placeholder="Enter your email" type="email" :class="inputClass"/>
    </div>

    <UCheckbox 
        v-model="state.form.receiveEmail" 
        label="Desejo receber meu resultado por e-mail"
        class="text-gray-600" 
    />

    <div class="flex justify-end">
        <button :disabled="!state.form.name || !state.form.email" @click="nextStep"
            class="bg-orange-400 p-1 min-w-32 rounded-full flex items-centerm gap=16 font-bold text-4-lg b"
        >
             Continuar
            <img src="/icons/icon-park-solid--next.svg"/>
        </button>
    </div>

</template>