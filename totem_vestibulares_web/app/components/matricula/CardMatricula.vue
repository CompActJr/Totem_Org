<script lang="ts" setup>
defineProps({
    titulo: {
        type: String,
        required: true
    },

    imagem: {
        type: String,
        required: true
    },

    inicio: {
        type: String,
        required: true
    },

    fim: {
        type: String,
        required: true
    },

    link: {
        type: String,
        default: "#"
    }
});
</script>

<template>

    <article
        class="group relative overflow-hidden shadow-lg cursor-pointer aspect-[4/5]">

        <!-- Imagem -->
        <img
            :src="imagem"
            :alt="titulo"
            class="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-105" />

        <!-- Overlay -->
        <div
            class="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-center px-8">

            <h3 class="text-white text-4xl font-light uppercase">
                {{ titulo }}
            </h3>

            <div class="w-24 h-px bg-white my-8"></div>

            <div class="space-y-6 text-white">

                <div>

                    <p class="font-bold">
                        Início do período letivo
                    </p>

                    <p>
                        {{ inicio }}
                    </p>

                </div>

                <div>

                    <p class="font-bold">
                        Fim do período letivo
                    </p>

                    <p>
                        {{ fim }}
                    </p>

                </div>

            </div>

            <NuxtLink
                :to="link"
                class="mt-10 bg-orange-500 hover:bg-orange-600 transition px-8 py-3 text-white font-semibold uppercase text-sm tracking-wide">

                + Infos sobre a turma

            </NuxtLink>

        </div>

    </article>

</template>