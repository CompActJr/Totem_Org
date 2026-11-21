<script lang="ts" setup>
import Form from '~/components/ui/forms/Form.vue';
import Input from '~/components/ui/forms/Input.vue';
import InputGroup from '~/components/ui/forms/InputGroup.vue';
import Label from '~/components/ui/forms/Label.vue';
import Links from '~/components/ui/links/Links.vue';
import SectionLayout from '~/components/ui/SectionLayout.vue';
import { useEmail } from '~/composables/api/useEmail';
import type { ContatoPayload } from '~/types/email.types';


 definePageMeta({
  layout: 'vestibulares',
  title: 'Vestibulares Totem - Educação de Qualidade',
  description: 'O Vestibulares Totem oferece educação de qualidade, preparando os alunos para o sucesso acadêmico e pessoal.',
  ogTitle: 'Vestibulares Totem - Educação de Qualidade',
  ogDescription: 'O Vestibulares Totem oferece educação de qualidade, preparando os alunos para o sucesso acadêmico e pessoal.',
  ogImage: '/logos/logo-vestibulares.png',
  ogUrl: 'https://vestibulares.soutotem.com.br/',
  ogType: 'website',
 })

const { enviarContato } = useEmail();

const form = ref<ContatoPayload>({
  nome: "",
  cidade: "",
  whatsapp: "",
  email: "",
  mensagem: "",
  assunto: ""
});

const unidades = ["Santa Maria", "Santa Rosa", "Santa Cruz do Sul"]
const assuntos = ["Pedagógico", "Matrículas", "Financeiro", "Informações sobre Turmas"]

const submitMessage = ref<string>();
const submitError = ref<string>();
const isSubmitting = ref<boolean>(false)

const submitForm = async () => {
  submitMessage.value = "";
  submitError.value = "";
  isSubmitting.value = true;

  try {
    await enviarContato({
      nome: form.value.nome,
      cidade: form.value.cidade,
      whatsapp: form.value.whatsapp,
      email: form.value.email,
      assunto: form.value.assunto,
      mensagem: form.value.mensagem
    });

    submitMessage.value = "Recebemos sua mensagem. Em breve, nossa equipe entrará em contato.";
  } catch {
    submitError.value = "Não foi possível enviar seu agendamento. Tente novamente.";
  } finally {
    isSubmitting.value = false;
  }
}

</script>

<template>

<SectionLayout class="bg-transparent">
    <template #header>
        <IntroSectionHeader>Envie-nos sua mensagem</IntroSectionHeader>
    </template>
    <template #content>

        <section class="flex items-stretch gap-8 p-4">

            <div class="hidden self-stretch p-6 md:flex md:flex-1 md:flex-col md:justify-between">
                <Links 
                    facebook="https://www.facebook.com/TOTEMVESTI/"
                    instagram="https://www.instagram.com/totemvestibulares/"
                    class="bg-orange-500"
                />
                <div>
                    <h3 class="font-bold text-xl text-orange-600">WhatsApp Rede Totem:</h3>
                    <h3 class="font-bold text-xl text-gray-600">(55) 9 9999-9999</h3>
                </div>
                <h3 class="font-bold text-xl text-gray-600">ouvidoria@soutotem.com.br</h3>
            </div>

            <Form class="w-full gap-8 md:w-auto md:flex-2 md:gap-16 shadow-lg p-4 border-t-4 border-amber-600" 
                @submit.prevent="submitForm">
                <InputGroup class="md:w-[calc(50%-2rem)]">
                    <Label for="nome">Nome Completo:</Label>
                    <Input id="nome" v-model="form.nome" placeholder="seu nome" type="text" required />
                </InputGroup>

                <InputGroup class="md:w-[calc(50%-2rem)]">
                    <Label for="email">Email:</Label>
                    <Input id="email" v-model="form.email" placeholder="seu endereço de email" type="email" required />
                </InputGroup>

                <InputGroup class="md:w-[calc(50%-2rem)]">
                    <Label for="whatsapp">Celular:</Label>
                    <Input id="whatsapp" v-model="form.whatsapp" placeholder="seu whatsapp" type="tel" required />
                </InputGroup>

                <Input id="unidade" v-model="form.cidade" as="select" name="unidade" required class="md:w-[calc(50%-2rem)] rounded-full border-0 bg-white/80 p-4">
                    <option value="">Unidade</option>
                    <option v-for="value in unidades" :value="value" :key="value">
                        {{ value }}
                    </option>
                </Input>

                <Input id="assunto" v-model="form.assunto" as="select" name="assunto" required class="md:w-[calc(50%-2rem)] rounded-full border-0 bg-white/80 p-4">
                    <option value="">Assunto:</option>
                    <option v-for="assunto in assuntos" :value="assunto" :key="assunto">
                        {{ assunto }}
                    </option>
                </Input>

                <InputGroup class="w-full">
                    <Label for="mensagem">Mensagem:</Label>
                    <Input id="mensagem" v-model="form.mensagem" 
                        as="textarea" placeholder="deixe sua mensagem" required />
                </InputGroup>

                <InputGroup class="justify-end">
                    <button :disabled="isSubmitting" type="submit"
                        class=" transition-all duration-300 bg-orange-400  hover:bg-amber-600
                        p-2 w-32 rounded-lg text-white flex items-center justify-between font-bold text-4-lg">
                        <span class="font-bold">ENVIAR</span>
                    </button>
                </InputGroup>
            </Form>
        </section>

    </template>
</SectionLayout>

</template>
