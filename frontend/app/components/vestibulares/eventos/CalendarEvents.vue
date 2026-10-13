<script lang="ts" setup>
import eventos from "~/data/eventos.json";
</script>

<template>
    <section class="min-h-128 w-full responsive-padding">
        <div class="relative mt-16">

            <div v-for="evento in eventos" :key="evento.id" class="relative flex gap-8 pb-16">
             
                <div class="flex flex-col items-center">

                    <div class="h-5 w-5 rounded-full bg-orange-500" />

                    <div class="mt-2 h-full w-1 bg-orange-300" />

                </div>

                <div class="flex-1">

                    <span class="text-sm font-bold uppercase tracking-wider text-orange-500">
                        {{ evento.periodo }}
                    </span>

                    <div class="mt-3 rounded-2xl bg-white p-8 shadow-lg">
                        <h3 class="text-2xl font-bold">
                            {{ evento.titulo }}
                        </h3>

                        <p class="mt-4 text-gray-600">
                            {{ evento.descricao }}
                        </p>
                    </div>

                </div>

            </div>

        </div>
    </section>
</template>