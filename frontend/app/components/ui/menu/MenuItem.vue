<script setup lang="ts">
import { useMenuState } from '~/composables/useMenuState';
import type { NavLink } from '~/types/navigation.types'

const props = defineProps<{ item: NavLink }>()
const { openSubmenu, toggleSubmenu, closeAll } = useMenuState()

const hasChildren = computed(() => !!props.item.children?.length)
const isOpen = computed(() => openSubmenu.value === props.item.label)

const styles = {
  link: 'block px-4 py-3 font-semibold hover:bg-orange-700',
  dropdown: 'bg-orange-700 md:absolute md:top-full md:min-w-52 md:shadow-lg',
  sublink: 'block px-6 py-2 text-sm hover:bg-orange-800 md:px-4',
}

</script>

<template>
  <div class="relative">
    <button
      v-if="hasChildren"
      :class="[styles.link, 'flex w-full items-center justify-between gap-2']"
      :aria-expanded="isOpen"
      @click="toggleSubmenu(item.label)"
    >
      {{ item.label }}
      <span :class="['transition-transform', isOpen && 'rotate-180']">▾</span>
    </button>

    <NuxtLink v-else :to="item.href" :class="styles.link" @click="closeAll">
      {{ item.label }}
    </NuxtLink>

    <ul v-if="hasChildren && isOpen" :class="styles.dropdown">
      <li v-for="child in item.children" :key="child.href">
        <NuxtLink :to="child.href" :class="styles.sublink" @click="closeAll">
          {{ child.label }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>