<script lang="ts" setup>
import { useAuth } from '~/composables/api/useAuth'
import { useRouter } from 'vue-router';

definePageMeta({
  layout: 'admin'
})

const { logout, pending } = useAuth()
const router = useRouter();

async function handleLogout() {
  const success = await logout()

  if (success) {
    await router.push('/admin/login')
  }
}
</script>

<template>
  <nav class="flex w-full items-center justify-end">
    <button
      type="button"
      :disabled="pending"
      @click="handleLogout"
      class="rounded-full bg-orange-500 shadow-2xl px-6 py-3 font-semibold text-white transition-all duration-200 hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60">
      <span class="font-bold">{{ pending ? 'SAINDO...' : 'SAIR' }}</span>
    </button>
  </nav>
</template>