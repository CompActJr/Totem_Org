<script lang="ts" setup>
import CTA from '~/components/ui/buttons/CTA.vue'
import Form from '~/components/ui/forms/Form.vue'
import Input from '~/components/ui/forms/Input.vue'
import InputGroup from '~/components/ui/forms/InputGroup.vue'
import Label from '~/components/ui/forms/Label.vue'
import { useAuth } from '~/composables/api/useAuth'
import type { AuthRequest } from '~~/shared/auth'

definePageMeta({
  layout: 'admin'
})

const form = ref<AuthRequest>({
  email: '',
  password: ''
})

const { login, pending, error, success } = useAuth()

const REDIRECT_TO = '/admin'
const SECONDS = 3
const countdown = ref(SECONDS)
let timer: ReturnType<typeof setInterval> | undefined

const submitForm = async () => {
  const ok = await login(form.value)
  if (!ok) return

  countdown.value = SECONDS
  timer = setInterval(() => {
    countdown.value--
    if (countdown.value <= 0) {
      clearInterval(timer)
      navigateTo(REDIRECT_TO)
    }
  }, 1000)
}

onBeforeUnmount(() => clearInterval(timer))
</script>

<template>

  <Form class="max-w-2/3 justify-center gap-8 md:w-auto shadow-lg p-4 border-t-4 border-amber-600"
    @submit.prevent="submitForm" aria-label="formulário de login">

    <div class="w-1/2 h-1/2">
      <NuxtImg src="/logos/logo.png" alt="Totem ON" fit="cover" class="w-full h-full object-contain" />
    </div>

    <div class="w-full">
      <h2 class="text-orange-500 font-bold text-2xl text-center">PORTAL DA DIREÇÃO</h2>
      <p class="text-[0.78rem] text-center font-semibold uppercase tracking-[0.16em] text-[#444]">
        ÁREA ADMINISTRATIVA
      </p>
    </div>

    <InputGroup class="w-2/3">
      <Label for="email">Email: </Label>
      <Input id="email" v-model="form.email" placeholder="seu email" type="email" required autocomplete="email" />
    </InputGroup>

    <InputGroup class="w-2/3">
      <Label for="pass">Senha:</Label>
      <Input id="pass" v-model="form.password" placeholder="sua senha" type="password" required autocomplete="current-password" />
    </InputGroup>

    <p v-if="error" class="w-full text-center text-sm font-semibold text-red-600">
      Email ou senha inválidos.
    </p>

    <p v-if="success" class="w-full text-center text-sm font-semibold text-blue-400">
      Credenciais válidas, Redirecionando ...
    </p>


    <InputGroup class="w-full justify-around">
      <CTA href="/">Voltar ao Totem</CTA>
      <button :disabled="pending"
        type="submit"
        class="rounded-full bg-orange-500 shadow-2xl px-6 py-3 font-semibold text-white transition-all duration-200 hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60">
        <span class="font-bold">{{ pending ? 'ACESSANDO...' : 'ACESSAR' }}</span>
      </button>
    </InputGroup>

  </Form>

</template>
