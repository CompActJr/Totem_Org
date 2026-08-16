<script lang="ts" setup>
    const config = useRuntimeConfig();
    const mainUrl: string = config.public.mainUrl as string;
    console.log('logger: ' + mainUrl);
</script>

<template>
    <section class="min-h-128 bg-white w-full responsive-padding">

        <div class="mt-4 lg:mt-8 flex items-center gap-16">
            <NuxtImg src="/geral/vocacional.jpg" alt="Estudante do Colégio Totem pensativa"
                class="h-full w-6/12 object-cover rounded-xl lg:w-5/12" loading="lazy" format="webp" />

            <div class="w-full lg:max-w-xl flex flex-col items-start gap-8">

                <div class="flex items-center">
                    <h2 class="text-orange-600 font-bold" aria-label="teste vocacional">
                        VOCACIONAL
                    </h2>
                    <div class="bg-orange-600 w-16 h-0.5 ml-8"></div>
                </div>

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

                <NuxtLink :to="mainUrl" class="rounded-full bg-white shadow-2xl px-6 py-3
                font-semibold text-gray-700 
                transition-all duration-300 hover:scale-115">
                    Saiba mais →
                </NuxtLink>
            </div>
        </div>

    </section>
</template>