<script setup lang="ts">
import { useMenuState } from '~/composables/useMenuState'
import type { NavLink } from '~/types/navigation.types'

const props = defineProps<{ item: NavLink }>()
const { openSubmenu, toggleSubmenu, closeAll } = useMenuState()

const hasChildren = computed(() => !!props.item.children?.length)
const isOpen = computed(() => openSubmenu.value === props.item.label)
</script>

<template>
  <div class="relative">
    <!-- Item com submenu -->
    <button
      v-if="hasChildren"
      class="
        flex w-full items-center justify-between gap-2
        px-6 py-3 tracking-wide hover:bg-orange-400
        md:w-auto md:rounded-none md:bg-transparent md:px-0 md:py-1
        md:underline-offset-8 md:hover:bg-transparent md:hover:underline
      "
      :class="isOpen ? 'md:underline' : ''"
      :aria-expanded="isOpen"
      @click="toggleSubmenu(item.label)"
    >
      <span class="text-lg uppercase ">{{ item.label }}</span>
    </button>

    <!-- Item simples -->
    <NuxtLink
      v-else
      :to="item.href"
      exact-active-class="md:underline"
      class="
        flex w-full px-6 py-3 text-xs uppercase tracking-wide
        md:w-auto md:px-0 md:py-1
        md:hover:underline
      "
      @click="closeAll"
    >
      <span class="text-lg uppercase">{{ item.label }}</span>
    </NuxtLink>

    <!-- Submenu -->
    <ul
      v-if="hasChildren && isOpen"
      class="bg-orange-400 p-2 rounded-xl md:absolute md:left-0 md:top-full md:mt-3 md:min-w-52 shadow-lg"
    >
      <li v-for="child in item.children" :key="child.href">
        <NuxtLink
          :to="child.href"
          class="block px-6 py-2 text-sm  md:px-4"
          @click="closeAll"
        >
          <span class="text-sm  uppercase ">{{ child.label }}</span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>