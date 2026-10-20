<script lang="ts" setup>
import { useOrganizations } from '~/composables/api/useOrganizations';

definePageMeta({ layout: 'colegios' })

const route = useRoute()

const slug = computed(() => String(route.params.slug))

const {
    data,
    pending,
    error,
    refresh,
} = await useOrganizations(slug.value, 'colegios')

const whatsappLinks = computed(() => {
    if (!data.value) return []
    const { _id, slug, whatsapp } = data.value
    return [{ _id, slug, whatsapp }]
})


</script>

<template>
    <section v-if="data" class="min-h-128 bg-gray-200 py-8 lg:py-20 px-8 md:px-32 lg:px-64">
        <div class="flex items-center gap-8">
            <h2 class="text-3xl font-bold uppercase tracking-wide text-gray-700">
                Motivos para matricular
            </h2>

            <div class="h-1 w-28 rounded bg-orange-600"></div>
        </div>

        <article class="mt-8">
            <ul class="space-y-4">
                <li v-for="value in data.diferenciais" :key="value.length"
                    class="flex items-start gap-3 rounded-md p-2 transition-colors hover:bg-white">
                    <span class="mt-2 h-2 w-2 rounded-full bg-orange-600 shrink-0"></span>

                    <p class="text-gray-700 leading-7">
                        {{ value }}
                    </p>
                </li>
            </ul>
        </article>
        <WhatsappButton :links="whatsappLinks" />
    </section>

    <p v-else-if="pending" class="responsive-padding py-12 text-gray-600">
        Carregando unidade...
    </p>

    <p v-else class="responsive-padding py-12 text-red-600">
        Não foi possível carregar esta unidade.
    </p>
</template>
