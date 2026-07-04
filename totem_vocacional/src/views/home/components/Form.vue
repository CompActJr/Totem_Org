<template>
    <h2>Formulario de Cadastro</h2>
  <form @submit.prevent="handleSubmit()">

    <div class="form-input">
      <label>Nome *</label>
      <input
        id="nome"
        type="text"
        v-model="form.nome"
        @input="onlyAlpha"
        @focus="mostrarAjuda = true"
        @blur="mostrarAjuda = false"
        required
      />

      <small v-if="mostrarAjuda" class="hint">
        Não é Permitido Dígitos no nome ex: 1 2 3...
      </small>
    </div>

    <div class="form-input">
      <label>Idade *</label>
      <input 
      type="number" 
      min="1"
      max="100"
      step="1"
      @input="onlyDigits"
      v-model="form.idade" 
      required />
    </div>

    <div class="form-input">
      <label>Cidade *</label>
      <input type="text" v-model="form.cidade" required />
    </div>

    <div class="form-input">
      <label>WhatsApp (com DDD) *</label>
      <input
        type="tel"
        v-model="form.celular"
        inputmode="numeric"
        autocomplete="tel"
        placeholder="(11) 91234-5678"
        @input="mascaraCelular"
        required
      />
    </div>

    <div class="form-input">
      <label>Email</label>
      <input type="email" v-model="form.email"/>
    </div>

    <div>
      <label>
        <input type="checkbox"/>
        Aceito receber o resultado por email
      </label>
    </div>

    <button type="submit" class="play_btn">Pronto</button>
  </form>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    import type { FormUser } from '@/types/FormUser';

    const emit = defineEmits<{
         (e: 'submit_user', payload: typeof form.value): void
    }>()

    const handleSubmit = (): void => {
        emit('submit_user', {... form.value})
    }

    const form = ref<FormUser>({
        nome: '',
        email: '',
        celular: '',
        cidade: '',
        idade: 0
    })

    const mostrarAjuda = ref(false);

    const onlyAlpha = (event: Event) => {
      const input = event.target as HTMLInputElement;
      let value = input.value.replace(/[0-9]/g, '');
      form.value.nome = value;
    };

    const onlyDigits = (event: Event) => {
      const input = event.target as HTMLInputElement;
      input.value = input.value.replace(/^\D/gu, '');
      form.value.idade = Number(input.value);
    };

    const mascaraCelular = (event: Event) => {
      let value = (event.target as HTMLInputElement).value;

      value = value.replace(/\D/g, '');

      value = value
        .replace(/^(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{5})(\d)/, '$1-$2')
        .slice(0, 15);

      form.value.celular = value;
    };


</script>

<style lang="scss" scoped>
@use '@/assets/index.scss' as *;

h2{
    color: $primary_7;
    text-align: center;
}

form{
    width: 100%;
    @include centralizar_flex();
    gap: 16px;
    min-height: 50vh;
    color: $primary_7;

    .play_btn{
        @include criar_botao($primary_2, $primary_5, 1.2rem, 4px);
        @include centralizar_flex;
        transition: scale ease 0.4s;
        &:hover{
            scale: 1.05;
        }
    }
}

.form-input{
    @include form_input($primary_5);
    position: relative;

    input{
        background-color: aliceblue;
        width: 300px;
        padding: 8px 16px;
    }

    .hint {
      position: absolute;
      top:32px;
      right: 0px;
      font-size: 0.8rem;
      border-radius: 4px;
      min-width: 100px;
      background-color: $primary_8;
      color: $primary_2;
      padding: 4px;
      animation: fadeIn 0.2s ease;
    }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

</style>