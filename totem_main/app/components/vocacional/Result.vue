<script lang="ts" setup>
const { state, nextStep, previousStep } = useVocacional();
</script>


<template>

    <ClientOnly>
        <section>

        </section>
        
        <footer>
            
            <button @click="previousStep">
                Voltar
            </button>

            <button>
                Tela Cheia
            </button>

            <button>
                Baixar
            </button>

        </footer>
    </ClientOnly>

</template>