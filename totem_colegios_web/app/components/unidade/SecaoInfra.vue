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
    <section class="min-h-128 w-full bg-gray-200 responsive-padding">
        <div class="flex items-center">
            <h2 class="text-gray-600 text-xl md:text-2xl font-bold">
                INFRAESTRUTURA QUE INSPIRA
            </h2>

            <div class="bg-orange-600 w-32 h-0.5 ml-8"></div>
        </div>

        <p class="mt-8 md:w-1/2 leading-8 md:leading-12">
            A Totem acredita que uma escola de alto nível começa pela qualidade do ambiente que 
            oferece. Por isso, cada espaço foi pensado para garantir segurança, conforto e acolhimento,
            criando as condições ideais para que o aprendizado aconteça com mais tranquilidade, 
            foco e bem-estar.
            Uma infraestrutura bem planejada não apenas recebe os estudantes — ela protege, 
            organiza, acolhe e potencializa.
            Salas funcionais, ambientes agradáveis e uma estrutura que acompanha as necessidades 
            da rotina escolar fazem toda a diferença na construção de uma experiência educativa mais 
            completa.

            Aqui, a estrutura é parte do ensino. Ela contribui para formar um ambiente onde
            estudantes se sentem seguros para aprender, conviver e crescer com confiança.
        </p>

        <div class="grid columns-1 md:columns-2 lg:columns-3">
            
        </div>

    </section>
</template>