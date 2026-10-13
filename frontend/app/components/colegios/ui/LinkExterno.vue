<script lang="ts" setup>
/**
 * @author Jonas
 * Componente para link externos das páginas
 */
    interface Props{
        externalLink: string
    }

    const props = defineProps<Props>();
</script>

<template>
    <NuxtLink :to="props.externalLink" external target="_blank" class="
                group
                mt-8
                inline-flex
                w-fit
                items-center
                gap-2
                rounded-full
                bg-white
                px-8
                py-3
                font-bold
                text-gray-700
                shadow-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-orange-500
                hover:text-white
                hover:shadow-2xl
                active:scale-95
            ">
        ACESSE

        <span class="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                ">
            →
        </span>
    </NuxtLink>
</template>