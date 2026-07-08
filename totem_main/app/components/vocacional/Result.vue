<script lang="ts" setup>
    const {state, nextStep, previousStep} = useVocacional();
</script>


<template>
    <h2 class="text-2xl font-bold">
        Resultado
    </h2>

    <p>
        Seu resultado aparecerá aqui.
    </p>

    <div class="space-y-2">
        <p><strong>Nome:</strong> {{ state.form.name }}</p>
        <p><strong>E-mail:</strong> {{ state.form.email }}</p>
        <p>
            <strong>Receber por e-mail:</strong>
            {{ state.form.receiveEmail ? 'Sim' : 'Não' }}
        </p>
    </div>

    <UButton color="neutral" variant="outline" @click="previousStep">
        Voltar
    </UButton>
</template>