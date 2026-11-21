<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import { cn } from '~/utils/cn'

type FormControl = 'input' | 'select' | 'textarea'

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<{
  modelValue?: string | number
  as?: FormControl
}>(), {
  modelValue: '',
  as: 'input',
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const attrs = useAttrs()

const inputAttrs = computed(() => {
  const { class: _class, ...rest } = attrs
  return rest
})

const updateValue = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}
</script>

<template>
  <component
    :is="props.as"
    v-bind="inputAttrs"
    :value="props.modelValue"
    :class="cn(
      'w-full rounded-xl border border-gray-300 bg-white px-4 py-2 text-gray-700 shadow-sm outline-none transition-all duration-300 hover:border-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-200',
      attrs.class,
    )"
    @input="updateValue"
    @change="updateValue"
  >
    <slot />
  </component>
</template>
