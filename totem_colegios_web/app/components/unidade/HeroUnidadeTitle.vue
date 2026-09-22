<script setup lang="ts">
interface Props {
    unidade: string
    nome: string
    imagem: string
}

const props = defineProps<Props>()
</script>

<template>
    <section class="min-h-128 w-full flex flex-col md:flex-row gap-4 bg-gray-200 responsive-padding">
        <article class="w-full md:w-7/12 lg:w-8/12">
            <div class="flex items-center">
                <h2 class="text-gray-600 text-xl md:text-2xl font-bold">
                    PORQUE O TOTEM
                </h2>

                <div class="bg-orange-600 w-32 h-0.5 ml-8"></div>
            </div>

            <h2 class="text-2xl md:text-4xl mt-4 lg:text-6xl mt-8 text-gray-700 font-bold">
                É MAIS QUE<br />
                COLÉGIO...
            </h2>

            <p class="mt-4 md:mt-8 mb-8 leading-8 md:leading-12">
                No <strong>{{ nome }}</strong>, ,os estudantes encontram um ambiente onde o
                afeto e a atenção são prioridades, proporcionando bem-estar e segurança para
                todos. Oferecemos a educação que desperta a criatividade e entrega um mundo de
                conhecimento nas mãos de nossas crianças e jovens. Clique abaixo e conheça 
                os diferenciais que fazem do Totem a sua melhor escolha.
            </p>

            <NuxtLink
                :to="`/unidades/${unidade}/diferenciais`"
                class="rounded-full bg-white shadow-2xl px-6 py-3 font-semibold text-gray-700 transition-all duration-300 hover:scale-115"
            >
                Saiba mais →
            </NuxtLink>
        </article>

        <div class="w-full md:w-5/12 lg:w=4/12">
            <img :src="imagem" :alt="nome" class="w-full md:min-h-[90%] object-cover" />
        </div>
    </section>
</template>