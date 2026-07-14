<script setup lang="ts">
import Avaliacao from '~/components/vocacional/Avaliacao.vue';
import Result from '~/components/vocacional/Result.vue';
import StartForm from '~/components/vocacional/StartForm.vue';
import VocacionalStepper from '~/components/vocacional/VocacionalStepper.vue';

definePageMeta({
    layout: 'public'
})

const { state } = useVocacional();

</script>

<template>
    <section class="relative p-4 lg:p-8 min-h-100 md:min-h-100v lg:min-h-250">
        <VocacionalStepper :step="state.step" />

        <div class="
            bg-white
            w-full
            max-w-5xl

            h-150
            lg:h-150
            md:h-150

            mx-auto
            mt-8

            rounded-lg
            shadow-xl

            p-4
            md:p-8
            lg:p-12

            overflow-y-auto
        ">

            <StartForm v-if="state.step === 0" />

            <Avaliacao v-else-if="state.step === 1" />

            <Result v-else />
        </div>
    </section>
</template>
