<script lang="ts" setup>

</script>

<template>
    <section class="h-128 w-full responsive-padding">
        <div class="flex items-center">
            <h2 class="text-orange-600 font-bold" aria-label="depoimentos">
               FAQS
            </h2>
            <div class="bg-orange-600 w-16 h-0.5 ml-8"></div>
        </div>
        <div>
            <h2 class="mt-6 text-3xl font-bold">Ainda tem dúvidas?</h2>
            <p class="mt-6 text-gray-600">Reunimos as perguntas mais frequentes de pais, responsáveis e alunos para ajudar você a conhecer melhor o Colégio Totem.</p>
            
            <NuxtLink
                to="/faqs"
                class="mt-6 inline-flex items-center rounded-full bg-orange-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-orange-600 hover:shadow-lg"
            >
                Saiba mais →
            </NuxtLink>

        </div>
    </section>
</template>