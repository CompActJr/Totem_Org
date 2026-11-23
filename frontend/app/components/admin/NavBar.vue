<script setup lang="ts">
import { useAuthSession } from '~/composables/api/session';
import { useAuth } from '~/composables/api/useAuth';

const { logout, pending } = useAuth()
const router = useRouter();

const session = useAuthSession()
const isLoggedIn = computed(() => session.isLoggedIn.value)

async function handleLogout() {
    const success = await logout()

    if (success) {
        await router.push('/admin/login')
    }
}
</script>

<template>
    <nav v-if="isLoggedIn" class="flex w-full items-center justify-between bg-white rounded-full">
        <div class="ml-8 flex items-center gap-4">
            <img src="/geral/i_user.png" alt="icone de usuario" width="24" />
            <span class="text-gray-600">
                {{ session.user.value?.email }}
            </span>
        </div>

        <button type="button" :disabled="pending" @click="handleLogout"
            class="rounded-full bg-orange-500 shadow-2xl px-6 py-3 font-semibold text-white transition-all duration-200 hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60">
            <span class="font-bold">{{ pending ? 'SAINDO...' : 'SAIR' }}</span>
        </button>
    </nav>
</template>