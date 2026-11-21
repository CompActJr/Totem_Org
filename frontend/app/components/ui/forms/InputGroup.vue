<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import { cn } from '~/utils/cn'

defineOptions({ inheritAttrs: false })

const attrs = useAttrs()

const groupAttrs = computed(() => {
  const { class: _class, ...rest } = attrs
  return rest
})
</script>

<template>
  <div
    v-bind="groupAttrs"
    :class="cn('flex w-full flex-col items-start gap-2 md:flex-row md:items-center md:gap-4', attrs.class)"
  >
    <slot />
  </div>
</template>
