<template>
    <Transition name="bounce" appear>
        <InfoBox v-if="estado === TesteEstado.CADASTRO && !isModalActive">
            <h2>Encontre sua vocação. Comece sua jornada aqui.</h2>
            <img src="/img1.jpg" alt="imagem do teste" class="img_test"/>
             <p class="info_modal">
                Olá! Bem-vindo(a) ao Teste Vocacional do Totem. Sabemos que decidir o futuro é
                um grande passo, e estamos aqui para apoiar você. Este teste rápido, de
                aproximadamente 10 minutos, foi criado para iluminar seus interesses e talentos,
                conectando você com áreas de estudo que têm tudo a ver com o seu perfil.
                Não há respostas certas ou erradas. O mais importante é ser sincero(a). Ao final,
                você receberá um resultado personalizado para guiar sua decisão.
            </p>
            <button class="play_btn" @click="abrirModalCadastro()">
                <span>Começar Agora</span>
                <img :src="i_play" alt="botao de começar">
            </button>
        </InfoBox>
    </Transition>

    <Transition name="fade" appear>
        <Modal :is-active="isModalActive && estado === TesteEstado.CADASTRO" @close="closeModal()">
            <Form @submit_user="handleSubmitUser($event)" />
        </Modal>
    </Transition>

    <Transition name="fade" appear>
        <Modal :is-active="estado === TesteEstado.PERGUNTAS">
            <Question/>
        </Modal>
    </Transition>

    <Transition name="fade" appear>
        <Modal :is-active="estado === TesteEstado.FINALIZADO">
            <p class="info_modal">Resultado Do Seu Teste</p>
            <RadarChart/>
        </Modal>
    </Transition>

</template>

<script setup lang="ts">
import InfoBox from '@/components/InfoBox.vue';
import Modal from '@/components/Modal.vue';
import Form from './components/Form.vue';

import { storeToRefs } from 'pinia';
import { TesteEstado } from '@/types/Estado';
import { useTestStore } from '@/stores/Teste';
import { ref } from 'vue';

import type { FormUser } from '@/types/FormUser';

import i_play from '@/images/i_play.png';
import type { Usuario } from '@/types/Usuario';
import Question from './components/Question.vue';
import Chart from './components/RadarChart.vue';
import RadarChart from './components/RadarChart.vue';

const testeStore = useTestStore();
const { estado } = storeToRefs(testeStore);

const abrirModalCadastro = ()=>{
    isModalActive.value= true;
}

const isModalActive = ref(false);

const closeModal = ()=>{
    isModalActive.value = false;
}

const handleSubmitUser = (data: FormUser) => {
    const usuarioNovo: Usuario = {
        nome: data.nome,
        email: data.email,
        cidade: data.cidade,
        whatsapp: data.celular,
        idade: data.idade
    }

    testeStore.salvarUsuario(usuarioNovo);
    testeStore.iniciar();

    closeOpenModal();
}

const closeOpenModal = ()=>{
    isModalActive.value = false;

    setInterval(()=>{
        isModalActive.value = true;
    }, 1000)
}

</script>

<style lang="scss" scoped>
@use '@/assets/index.scss' as *;

.play_btn{
    @include criar_botao($primary_2, $primary_5, 1.2rem, 16px);
    @include centralizar_flex;
    transition: scale ease 0.4s;
    &:hover{
        scale: 1.05;
    }
}

h2{
    font-size: 1.8rem;
}

.info_modal{
    text-align: center;
    color: $primary_7;
    font-size: 1.3rem;
}

.img_test{
    width: 40%;
}
</style>
