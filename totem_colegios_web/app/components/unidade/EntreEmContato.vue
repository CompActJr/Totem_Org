<script lang="ts" setup>
import type { UnidadeType } from '~/types/unidade.type';

/**
 * @author Jonas
 * seção para entrar em contato com o uma integração com google maps
 */

interface Props {
    unidade: UnidadeType
}

const props = defineProps<Props>();

</script>

<template>
    <section id="section_contato" class="scroll-mt-32 min-h-128 bg-gray-200 w-full flex flex-col md:flex-row justify-between  gap-8 responsive-padding">
        <article>
            <div class="flex items-center">
                <h2 class="text-gray-600 text-xl md:text-2xl font-bold">
                    ENTRE EM CONTATO
                </h2>

                <div class="bg-orange-600 w-32 h-0.5 ml-8"></div>
            </div>


            <h2 class="text-2xl mt-16 md:text-4xl text-gray-700 font-bold">
                {{ unidade.city }}
            </h2>

            <p class="mt-8">{{ unidade.address }}</p>
            <p>Telefone: {{ unidade.phone }}</p>
            <p>Whatssap: {{ unidade.whatsapp }}</p>
            <p class="mt-8 text-orange-500">{{ unidade.email }}</p>

            <div class="flex gap-8 mt-8">
                <a :href="unidade.facebook" 
                    target="_blank" 
                    class="transition-all duration-300 hover:scale-110"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path fill="#404040" d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z" />
                    </svg>
                </a>

                 <a :href="unidade.instagram" 
                    target="_blank" 
                    class="transition-all duration-300 hover:scale-110"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path fill="#404040" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3" />
                    </svg>
                 </a>
            </div>

        </article>
        <iframe :src="unidade.maps" class="w-1/1 md:w-2/3 mt-8" height="450" style="border:0;" allowfullscreen="true"
            loading="lazy" referrerpolicy="strict-origin-when-cross-origin">
        </iframe>
    </section>
</template>