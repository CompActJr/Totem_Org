<script lang="ts" setup>

</script>

<template>
    <section
        class="relative h-[320px] lg:h-[420px] w-full flex items-center justify-center overflow-hidden">

        <!-- Imagem de fundo -->
        <img
            src="https://picsum.photos/1600/600"
            alt="Escolha sua turma"
            class="absolute inset-0 w-full h-full object-cover" />

        <!-- Overlay escuro -->
        <div class="absolute inset-0 bg-black/45"></div>

        <!-- Conteúdo -->
        <div class="relative z-10 text-center text-white px-6">

            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wide">
                Escolha sua turma
            </h1>

            <div class="w-28 h-1 bg-orange-500 mx-auto mt-6 rounded-full"></div>

        </div>

    </section>
</template>