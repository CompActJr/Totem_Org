<script lang="ts" setup>
import { computed, useAttrs } from 'vue'
import { cn } from '~/utils/cn'

defineOptions({ inheritAttrs: false })

const attrs = useAttrs()

const containerAttrs = computed(() => {
    const { class: _class, ...rest } = attrs
    return rest
})

const props = defineProps<{
    facebook?: string,
    instagram?: string,
    linkedin?: string
}>();

</script>

<template>
    <div v-bind="containerAttrs" class="flex items-center justify-start gap-4">
        <a v-if="props.instagram" :class="cn('inline-flex size-10 items-center justify-center rounded-sm transition-transform duration-200 md:size-12 hover:scale-110', attrs.class)"
            :href="props.instagram" target="_blank" rel="noopener noreferrer">
            <img src="/geral/insta.png" alt="instagram" width="24" />
        </a>

        <a v-if="props.facebook" :class="cn('inline-flex size-10 items-center justify-center rounded-sm transition-transform duration-200 md:size-12 hover:scale-110', attrs.class)"
            :href="props.facebook" target="_blank" rel="noopener noreferrer">
            <img src="/geral/face.png" alt="facebook" width="24" />
        </a>

        <a v-if="props.linkedin" :class="cn('inline-flex size-10 items-center justify-center rounded-sm transition-transform duration-200 md:size-12 hover:scale-110', attrs.class)"
            :href="props.linkedin" target="_blank" rel="noopener noreferrer">
            <img src="/geral/linkedin.png" alt="linkedin" width="24" />
        </a>
    </div>
</template>
