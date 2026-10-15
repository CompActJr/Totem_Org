<script lang="ts" setup>
import { computed, reactive, ref, watch } from "vue";
import type { TurmaType } from "~/types/matriculas.types";

const props = defineProps<{
    turma: TurmaType;
}>();

const emit = defineEmits<{
    (e: "voltar"): void;
}>();

const form = reactive({
    nome: "",
    nascimento: "",
    naturalidade: "",
    rg: "",
    cpf: "",
    email: "",
    lingua: "",
    cidade: "",
    estado: "",
    endereco: "",
    bairro: "",
    numero: "",
    complemento: "",
    cep: "",
    telefoneFixo: "",
    telefoneCelular: "",
    observacoes: "",
    infosVerdadeiras: false,
    ciente: false
});

const enviando = ref(false);
const enviado = ref(false);
const erro = ref("");

const formValido = computed(() => {
    return (
        !!form.nome &&
        !!form.nascimento &&
        !!form.naturalidade &&
        !!form.rg &&
        !!form.cpf &&
        !!form.email &&
        !!form.cidade &&
        !!form.estado &&
        !!form.endereco &&
        !!form.bairro &&
        !!form.numero &&
        !!form.cep &&
        !!form.telefoneFixo &&
        !!form.telefoneCelular &&
        form.infosVerdadeiras &&
        form.ciente
    );
});

// Reseta o formulário sempre que a turma mudar (modal reaberto em outra turma)
watch(
    () => props.turma?.id,
    () => {
        Object.assign(form, {
            nome: "",
            nascimento: "",
            naturalidade: "",
            rg: "",
            cpf: "",
            email: "",
            lingua: "",
            cidade: "",
            estado: "",
            endereco: "",
            bairro: "",
            numero: "",
            complemento: "",
            cep: "",
            telefoneFixo: "",
            telefoneCelular: "",
            observacoes: "",
            infosVerdadeiras: false,
            ciente: false
        });
        enviado.value = false;
        erro.value = "";
    }
);

async function enviarFormulario() {
    if (!formValido.value) return;

    enviando.value = true;
    erro.value = "";

    try {
        // TODO: trocar pelo endpoint real de envio da matrícula
        await $fetch("/api/matricula", {
            method: "POST",
            body: {
                turmaId: props.turma.id,
                turma: props.turma.titulo,
                unidade: props.turma.unidade,
                ...form
            }
        });

        enviado.value = true;
    } catch (e) {
        erro.value = "Não foi possível enviar sua matrícula. Tente novamente em instantes.";
    } finally {
        enviando.value = false;
    }
}
</script>

<template>

<div>

    <!-- Voltar -->
    <button
        type="button"
        class="flex items-center gap-2 text-orange-500 font-semibold mb-8 hover:underline"
        @click="emit('voltar')">

        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">

            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7" />

        </svg>

        Voltar para a turma

    </button>

    <!-- Sucesso -->
    <div v-if="enviado" class="text-center py-20">

        <h3 class="text-2xl font-bold text-orange-500">
            Pré-matrícula recebida!
        </h3>

        <p class="mt-4 text-gray-600">
            Em breve entraremos em contato para finalizar sua matrícula em
            <strong>{{ turma.titulo }} - {{ turma.unidade }}</strong>.
        </p>

        <button
            type="button"
            class="mt-8 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition px-8 py-3 font-semibold uppercase tracking-wide"
            @click="emit('voltar')">

            Voltar para a turma

        </button>

    </div>

    <!-- Formulário -->
    <form
        v-else
        @submit.prevent="enviarFormulario"
        class="space-y-10">

        <div>
            <h2 class="text-lg">
                Cidade: <span class="font-bold">{{ turma.unidade }}</span>
            </h2>
            <h2 class="text-lg mt-1">
                Turma: <span class="font-bold">{{ turma.titulo }}</span>
            </h2>
        </div>

        <div class="grid md:grid-cols-2 gap-6">

            <div>
                <label class="block text-sm font-semibold mb-2">Nome completo *</label>
                <input v-model="form.nome" type="text" required
                    class="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-orange-500" />
            </div>

            <div>
                <label class="block text-sm font-semibold mb-2">Data de Nascimento *</label>
                <input v-model="form.nascimento" type="date" required
                    class="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-orange-500" />
            </div>

            <div>
                <label class="block text-sm font-semibold mb-2">Naturalidade *</label>
                <input v-model="form.naturalidade" type="text" required
                    class="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-orange-500" />
            </div>

            <div>
                <label class="block text-sm font-semibold mb-2">RG *</label>
                <input v-model="form.rg" type="text" required
                    class="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-orange-500" />
            </div>

            <div>
                <label class="block text-sm font-semibold mb-2">CPF *</label>
                <input v-model="form.cpf" type="text" required placeholder="000.000.000-00"
                    class="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-orange-500" />
            </div>

            <div>
                <label class="block text-sm font-semibold mb-2">E-mail *</label>
                <input v-model="form.email" type="email" required
                    class="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-orange-500" />
            </div>

            <div>
                <label class="block text-sm font-semibold mb-2">Língua estrangeira</label>
                <select v-model="form.lingua"
                    class="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-orange-500 bg-white">
                    <option value="">Selecione a língua estrangeira</option>
                    <option value="Espanhol">Espanhol</option>
                    <option value="Inglês">Inglês</option>
                </select>
            </div>

        </div>

        <div>

            <h3 class="font-bold text-lg mb-6 text-orange-500">
                Endereço
            </h3>

            <div class="grid md:grid-cols-2 gap-6">

                <div>
                    <label class="block text-sm font-semibold mb-2">Cidade *</label>
                    <input v-model="form.cidade" type="text" required
                        class="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-orange-500" />
                </div>

                <div>
                    <label class="block text-sm font-semibold mb-2">UF/Estado *</label>
                    <input v-model="form.estado" type="text" required maxlength="2"
                        class="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-orange-500" />
                </div>

                <div>
                    <label class="block text-sm font-semibold mb-2">Endereço *</label>
                    <input v-model="form.endereco" type="text" required
                        class="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-orange-500" />
                </div>

                <div>
                    <label class="block text-sm font-semibold mb-2">Bairro *</label>
                    <input v-model="form.bairro" type="text" required
                        class="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-orange-500" />
                </div>

                <div>
                    <label class="block text-sm font-semibold mb-2">Número *</label>
                    <input v-model="form.numero" type="text" required
                        class="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-orange-500" />
                </div>

                <div>
                    <label class="block text-sm font-semibold mb-2">Complemento</label>
                    <input v-model="form.complemento" type="text"
                        class="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-orange-500" />
                </div>

                <div>
                    <label class="block text-sm font-semibold mb-2">CEP *</label>
                    <input v-model="form.cep" type="text" required placeholder="00000-000"
                        class="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-orange-500" />
                </div>

                <div>
                    <label class="block text-sm font-semibold mb-2">Telefone Fixo *</label>
                    <input v-model="form.telefoneFixo" type="tel" required
                        class="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-orange-500" />
                </div>

                <div>
                    <label class="block text-sm font-semibold mb-2">Telefone Celular *</label>
                    <input v-model="form.telefoneCelular" type="tel" required
                        class="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-orange-500" />
                </div>

            </div>

        </div>

        <div>
            <label class="block text-sm font-semibold mb-2">Observações</label>
            <textarea v-model="form.observacoes" rows="5"
                class="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-orange-500"></textarea>
        </div>

        <div class="space-y-4">

            <label class="flex items-start gap-3 text-sm text-gray-700">
                <input v-model="form.infosVerdadeiras" type="checkbox" required class="mt-1" />
                Afirmo que todas estas informações preenchidas acima são verdadeiras.
            </label>

            <label class="flex items-start gap-3 text-sm text-gray-700">
                <input v-model="form.ciente" type="checkbox" required class="mt-1" />
                Estou ciente de que tanto a liberação do material didático no primeiro dia de aula, bem como o ingresso à sala se darão somente após a entrega dos contratos assinados na secretaria do curso.
            </label>

        </div>

        <p v-if="erro" class="text-red-600 text-sm">
            {{ erro }}
        </p>

        <div class="flex justify-end">

            <button
                type="submit"
                :disabled="!formValido || enviando"
                class="bg-orange-500 hover:bg-orange-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition text-white px-10 py-4 font-semibold uppercase tracking-wide">

                {{ enviando ? "Enviando..." : "Matricular" }}

            </button>

        </div>

    </form>

</div>

</template>