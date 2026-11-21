<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import { cn } from '~/utils/cn'

defineOptions({ inheritAttrs: false })

const attrs = useAttrs()

const formAttrs = computed(() => {
  const { class: _class, ...rest } = attrs
  return rest
})
</script>

<template>
  <form
    v-bind="formAttrs"
    :class="cn('flex w-full flex-wrap items-start gap-4 md:gap-8', attrs.class)"
  >
    <slot />
  </form>
</template>
