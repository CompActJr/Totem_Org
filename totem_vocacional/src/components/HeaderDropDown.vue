<template>
  <nav class="navHeader">
    <div class="logo">
      <img :src="logomarca" alt="" />
      <span>TOTEM VOCACIONAL</span>
    </div>

    <div class="menu">

      <div class="menu_item">
        <button class="btn-exit" @click="resetar()">
          <img :src="i_close" alt="botao de resetar teste"/>
          Resetar
        </button>
      </div>

      <div class="menu_item">
        <a class="btn-play" href="https://totementrada.compactjr.com/">
          <img :src="i_exit" alt="botao de acesso aos portais" />
          <span>Portal Totem</span> 
        </a>
      </div>

    </div>

    
  </nav>
</template>

<script setup lang="ts">
import { useTestStore } from '@/stores/Teste';
import { ref } from 'vue';

import logomarca from '@/images/logo.png';
import i_exit from '@/images/i_exit.png';
import i_close from '@/images/i_close.png';

const testeStore = useTestStore();

const menuAberto = ref(true);

const resetar = () => {
  testeStore.resetar();
  testeStore.removerUsuario;
}

// menuAberto is always true now; toggle functionality removed
</script>

<style lang="scss">
@use '@/assets/index' as *;

$logomarca: '/images/logo.png';
$iconMenu: '/images/icon_menu.png';

.navHeader {
  width: 100%;
  height: 10vh;
  background-color: $primary_2;
  border-radius: 0 0 16px 16px;
  position: fixed;
  box-shadow: $primary_4 0 0 10px;
  padding: 0 16px 0 16px;

  transform: translateY(0);
  transition: transform 0.4s ease-in-out;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  &.hidden {
    transform: translateY(-100%);
  }

  @include fixar_elemento(0, 0, 100);

  .logo {
    display: flex;
    align-items: center;
    color: $primary_3;
    font-weight: 700;
    img {
      width: 64px;
    }
  }

}

.menu {
  width: 50%;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 16px;

  .menu_item {
    min-width: 100px;
    cursor: pointer;
    position: relative;

    img {
      width: 24px;
    }
  }
}

.btn-play {
  @include criar_botao($primary_2, $primary_5, 1.1rem);
  @include centralizar_flex;
  width: 100%;
  transition: scale ease 0.4s;

  &:hover {
    scale: 1.05;
  }
}

.btn-exit {
    @include criar_botao($primary_2, $primary_6, 1.1rem);
    @include centralizar_flex;
    transition: scale ease 0.4s;

    &:hover {
        scale: 1.05;
    }
}

 
</style>