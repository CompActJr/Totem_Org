<script lang="ts" setup>
defineProps({
    titulo: {
        type: String,
        required: true
    },

    imagem: {
        type: String,
        required: true
    },

    inicio: {
        type: String,
        required: true
    },

    fim: {
        type: String,
        required: true
    }
});

const emit = defineEmits<{
    (e: "abrir"): void;
}>();
</script>

<template>

    <article class="turma-card group relative shadow-lg overflow-hidden">

        <!-- Imagem -->
        <div class="turma-img-wrapper relative w-full bg-gray-100">

            <img
                :src="imagem"
                :alt="titulo"
                class="turma-img block w-full h-auto" />

        </div>

        <!-- Infos -->
        <div class="turma-infos flex flex-col items-center text-center">

            <h3 class="turma-infos-titulo uppercase">

                {{ titulo }}

            </h3>

            <div class="turma-infos-divisor"></div>

            <div class="turma-infos-datas">

                <div>

                    <p class="font-bold">
                        Início do período letivo
                    </p>

                    <p>{{ inicio }}</p>

                </div>

                <div>

                    <p class="font-bold">
                        Fim do período letivo
                    </p>

                    <p>{{ fim }}</p>

                </div>

            </div>

            <button
                @click="emit('abrir')"
                class="turma-infos-btn bg-orange-500 hover:bg-orange-600 transition text-white font-semibold uppercase tracking-wide">

                + Infos sobre a turma

            </button>

        </div>

    </article>

</template>

<style scoped>
/* Permite que o texto do overlay escale com base na largura real do card
   (e não na largura da tela) -- resolve o corte de texto em notebooks */
.turma-card {
    container-type: inline-size;
    min-width: 0;
}

/* ===========================
   PADRÃO (mobile / tablet / qualquer tela sem cursor):
   legenda compacta e clara, em bloco normal logo abaixo da imagem
=========================== */
.turma-infos {
    background: #ffffff;
    padding: 0.9rem 1.1rem;
    gap: 0.35rem;
}

.turma-infos-titulo {
    color: #1f2937;
    font-size: 0.95rem;
    font-weight: 600;
    letter-spacing: 0.02em;
}

.turma-infos-divisor {
    display: none;
}

.turma-infos-datas {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    color: #4b5563;
    font-size: 0.8rem;
    line-height: 1.3;
}

.turma-infos-datas p {
    margin: 0;
}

.turma-infos-btn {
    margin-top: 0.6rem;
    padding: 0.4rem 1rem;
    font-size: 0.7rem;
}

/* ===========================
   DESKTOP COM CURSOR: vira overlay com hover
   (hover:hover) + (pointer:fine) = só existe em quem realmente tem mouse
=========================== */
@media (hover: hover) and (pointer: fine) {

    /* O wrapper só existe pra imagem -- o card fica com a altura exata
       da imagem renderizada (sem esticar/cortar nada) */
    .turma-img-wrapper {
        width: 100%;
    }

    /* Tira a legenda do fluxo normal: a altura do card passa a ser
       só a da imagem, e o overlay abaixo fica contido exatamente nela */
    .turma-infos {
        position: absolute;
        inset: 0;
        opacity: 0;
        transition: opacity 0.3s;
        background: rgba(0, 0, 0, 0.8);
        justify-content: center;
        padding: clamp(1rem, 4cqw, 2rem);
        overflow-y: auto;
        gap: 0;
    }

    .turma-card:hover .turma-infos {
        opacity: 1;
    }

    .turma-infos-titulo {
        color: #ffffff;
        font-size: clamp(1.25rem, 5.5cqw, 2.25rem);
        font-weight: 300;
    }

    .turma-infos-divisor {
        display: block;
        width: clamp(3rem, 12cqw, 6rem);
        height: 1px;
        background: #ffffff;
        margin: clamp(1rem, 5cqw, 2rem) 0;
    }

    .turma-infos-datas {
        color: #ffffff;
        gap: clamp(0.75rem, 3cqw, 1.5rem);
        font-size: clamp(0.75rem, 2.8cqw, 1rem);
    }

    .turma-infos-btn {
        margin-top: clamp(1.25rem, 5cqw, 2.5rem);
        padding: clamp(0.5rem, 2cqw, 0.75rem) clamp(1.25rem, 5cqw, 2rem);
        font-size: clamp(0.7rem, 2.2cqw, 0.85rem);
    }
}
</style>