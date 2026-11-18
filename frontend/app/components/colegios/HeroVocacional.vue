<script setup lang="ts">
import IntroSectionHeader from '../global/IntroSectionHeader.vue';
import CTA from '../ui/buttons/CTA.vue';
import SectionLayout from '../ui/SectionLayout.vue';

</script>

<template>
    <SectionLayout class="bg-transparent">
        <template #header>
            <IntroSectionHeader>TESTE VOCACIONAL</IntroSectionHeader>
        </template>
        <template #content>
            <div class="mt-4 flex flex-col-reverse md:flex-row lg:mt-8 items-center gap-16">
                <NuxtImg src="/geral/vocacional.jpg" alt="Estudante do Colégio Totem pensativa" width="420" height="520"
                    class="w-55 shrink-0 object-cover rounded-xl sm:w-65 md:w-70 lg:w-[320px] xl:w-90 h-auto max-h-105"
                    loading="lazy" format="webp" />

                <div class="w-full lg:max-w-xl flex flex-col items-start gap-8">
                    <h2 class="font-bold text-2xl">QUAL É O SEU TALENTO?</h2>

                    <p class="text-gray-600">
                        Escolher uma profissão ou área de estudo é uma decisão importante — e o
                        <strong>teste vocacional</strong> pode trazer mais clareza para esse momento. Em
                        apenas 8 minutos, você acessa uma experiência rápida, prática e pensada para ajudar a
                        identificar seus interesses, pontos fortes e possibilidades de futuro.
                    </p>

                    <p class="text-gray-600">
                        Se você quer tomar essa decisão com mais segurança, vale dar esse passo importante.
                        Clique e faça o teste vocacional do Totem.
                    </p>

                    <CTA href="/vocacional">REALIZAR TESTE</CTA>
                </div>
            </div>
        </template>
    </SectionLayout>
</template>