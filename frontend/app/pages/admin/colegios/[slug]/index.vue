<script lang="ts" setup>
import { useOrganizations } from '~/composables/api/useOrganizations'
import type { Organization } from '~/types/organizations.types'


definePageMeta({
  layout: 'admin'
})

const route = useRoute()
const slug = computed(() => String(route.params.slug))

const { data: unidadeData, pending, error } = await useOrganizations(slug, 'colegios')
const unidade = computed<Organization | undefined>(() => unidadeData.value)

if (!unidade.value) {
    throw createError({ statusCode: 404, statusMessage: 'Unidade não encontrada', fatal: true })
}


</script>

<template>
    <main v-if="unidade">
           {{ unidade.city }}
    </main>
</template>