<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import { cn } from '~/utils/cn'

defineOptions({ inheritAttrs: false })

const attrs = useAttrs()

const labelAttrs = computed(() => {
  const { class: _class, ...rest } = attrs
  return rest
})
</script>

<template>
  <label
    v-bind="labelAttrs"
    :class="cn('min-w-40 text-gray-600', attrs.class)"
  >
    <slot />
  </label>
</template>
