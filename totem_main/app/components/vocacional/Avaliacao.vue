<script lang="ts" setup>
    const {state, nextStep, previousStep} = useVocacional();
</script>

<template>
    <h2 class="text-2xl font-bold">
        Avaliação
    </h2>

    <p>
        Aqui ficarão as perguntas do teste vocacional.
    </p>

    <div class="flex justify-between">
        <UButton color="neutral" variant="outline" @click="previousStep">
            Voltar
        </UButton>

        <UButton @click="nextStep">
            Finalizar
        </UButton>
    </div>
</template>