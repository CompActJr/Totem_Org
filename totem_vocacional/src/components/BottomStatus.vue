<template>
    <footer class="footer">
        <div :class="{ active: estado === TesteEstado.CADASTRO }">
            Cadastro
        </div>
        <div :class="{ active: estado === TesteEstado.PERGUNTAS }">
            Perguntas
        </div>
        <div :class="{ active: estado === TesteEstado.FINALIZADO }">
            Finalizado
        </div>

        <section class="perfil" v-if="usuario && estado!= TesteEstado.CADASTRO">
            <img :src="iperfil" alt="" />
            <span>{{ usuario?.nome }}</span>
        </section>

    </footer>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { TesteEstado } from '@/types/Estado';
import { useTestStore } from '@/stores/Teste';
import iperfil from '@/images/i_perfil.png';
const testeStore = useTestStore();
const { estado, usuario} = storeToRefs(testeStore);

</script>

<style lang="scss">
@use '@/assets/index' as *;

.footer {
    width: 100%;
    position: fixed;
    bottom: 0px;
    z-index: 100;
    background-color: $primary_2;
    box-shadow: $primary_7 0 0 10px;
    padding: 8px;
    @include centralizar_flex;
    gap: 16px;
    height: 10vh;


    div {
        @include criar_botao($primary_4, $primary_1, 1.2rem, 16px);
        width: 10%;
        opacity: 0.5;

        transition:
            background-color 0.3s ease,
            color 0.3s ease,
            opacity 0.3s ease,
            transform 0.2s ease;

        &.active {
            background-color: $primary_5;
            color: $primary_2;
            opacity: 1;
            transform: scale(1.05);
        }
    }
}

.perfil{
    padding: 8px;
    @include centralizar_flex;
    min-width: 100px;
    gap: 16px;
    font-size: 1.2rem;

    img{
        width: 32px;
    }
}
</style>