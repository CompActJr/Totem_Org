<script lang="ts" setup>
import type { UnidadeType } from '~/types/unidade.type';

/**
 * @author Jonas
 * seção para galeria de infraestrutura do site
 */
interface Props {
    unidade: UnidadeType
}

const props = defineProps<Props>();
</script>

<template>
    <section class="min-h-128 w-full responsive-padding">
        <div class="flex items-center">
            <h2 class="text-gray-600 text-xl md:text-2xl font-bold">
                INFRAESTRUTURA QUE INSPIRA
            </h2>

            <div class="bg-orange-600 w-64 h-0.5 ml-8"></div>
        </div>

        <article class="mt-8 w-full leading-8 md:leading-12 flex flex-col md:flex-row justify-start gap-8">
            <p class="flex-1">
                A Totem acredita que uma escola de alto nível começa pela qualidade do ambiente que
                oferece. Por isso, cada espaço foi pensado para garantir segurança, conforto e acolhimento,
                criando as condições ideais para que o aprendizado aconteça com mais tranquilidade,
                foco e bem-estar.
                Uma infraestrutura bem planejada não apenas recebe os estudantes — ela protege,
                organiza, acolhe e potencializa.
                Salas funcionais, ambientes agradáveis e uma estrutura que acompanha as necessidades
                da rotina escolar fazem toda a diferença na construção de uma experiência educativa mais
                completa.
            </p>
            <p class="flex-1">
                Aqui, a estrutura é parte do ensino. Ela contribui para formar um ambiente onde
                estudantes se sentem seguros para aprender, conviver e crescer com confiança.
            </p>
        </article>


        <div class="grid grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <NuxtImg 
                v-for="imagem in unidade.infraestrutura" 
                :key="imagem" 
                :src="imagem" 
                format="webp" 
                quality="80"
                loading="lazy" 
                class="w-full h-48 md:h-96 object-cover rounded-xl  border-gray-100 border-4 border-solid
                    transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:" />
        </div>

    </section>
</template>