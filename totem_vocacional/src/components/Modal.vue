<template>
    <div class="overlay" v-if="isActive">
        <div class="modal">
            <div width="100%" v-if="estado == TesteEstado.CADASTRO">
                <button class="close_btn" @click="close()">
                   <img :src="exit" alt="sair" width="24px" height="24px"/>
                </button>
            </div>
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
    import exit from '@/images/i_exit.png';
    import { useTestStore } from '@/stores/Teste';
    import { storeToRefs } from 'pinia';
    import { TesteEstado } from '@/types/Estado';

    const testeStore = useTestStore();
    const { estado } = storeToRefs(testeStore);

    defineProps({isActive : Boolean});

    const emit = defineEmits(['close']);

    const close = ()=>{
        emit('close');
    }

</script>

<style lang="scss">

    @use '@/assets/index' as *;

    .overlay{
        background-color: $primary_8;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        z-index: 50;
        @include centralizar_flex();

        .modal{
            width: 50%;
            height: 60vh;
            background-color: $primary_2;
            border-radius: 16px;
            z-index: 60;
            padding: 8px 16px;
            display: flex;
            flex-direction: column;
            gap: 24px;
            overflow-y:auto;

           .close_btn{
                @include criar_botao($primary_2, $primary_6, 1.1rem);
                @include centralizar_flex;
                float: right;
                width: 10%;
                height: 32px;
                padding: 4px;
                transition: scale ease 0.4s;
                &:hover{
                    scale: 1.05;
                }
            }
        }
    }
</style>