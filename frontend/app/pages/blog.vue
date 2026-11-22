<script lang="ts" setup>
import Grid from '~/components/ui/cards/Grid.vue'
import Form from '~/components/ui/forms/Form.vue'
import Input from '~/components/ui/forms/Input.vue'
import InputGroup from '~/components/ui/forms/InputGroup.vue'
import Label from '~/components/ui/forms/Label.vue'
import { useBlogPosts } from '~/composables/api/useBlog'
import { ref, watch } from 'vue'
import Post from '~/components/posts/Post.vue'
import SectionLayout from '~/components/ui/SectionLayout.vue'
import IntroSectionHeader from '~/components/global/IntroSectionHeader.vue'


definePageMeta({
  layout: 'default'
})

useSeoMeta({
  title: 'Blog do Totem | Notícias, eventos e novidades',
  description: 'Acompanhe notícias, eventos e novidades das unidades do Totem em um só lugar.',
  ogTitle: 'Blog do Totem | Notícias, eventos e novidades',
  ogDescription: 'Acompanhe notícias, eventos e novidades das unidades do Totem em um só lugar.',
})

const { posts, pending, error, refresh, filters } = useBlogPosts()
const destaqueFilter = ref<'todos' | 'true' | 'false'>('todos')
const ativoFilter = ref<'todos' | 'true' | 'false'>('todos')

const unitOptions = [
  { value: 'ijui', label: 'Ijuí' },
  { value: 'cachoeira-do-sul', label: 'Cachoeira do Sul' },
  { value: 'cruz-alta', label: 'Cruz Alta' },
  { value: 'santa-maria', label: 'Santa Maria' },
  { value: 'santa-rosa', label: 'Santa Rosa' },
] as const

watch(destaqueFilter, (value) => {
  filters.value.destaque = value === 'todos' ? undefined : value === 'true'
})

watch(ativoFilter, (value) => {
  filters.value.ativo = value === 'todos' ? undefined : value === 'true'
})

const sidebarOpen = ref(false)
</script>

<template>
  <main class="relative flex">

      <!-- Botão de abrir/fechar (só mobile) -->
    <button
      type="button"
      class="fixed left-0 top-24 z-40 rounded-r-lg bg-white p-2 shadow-md md:hidden"
      :aria-expanded="sidebarOpen"
      aria-controls="blog-sidebar"
      aria-label="Filtros do blog"
      @click="sidebarOpen = !sidebarOpen"
    >
      <svg
        class="h-5 w-5 text-gray-600 transition-transform duration-300"
        :class="sidebarOpen ? 'rotate-180' : ''"
        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
      >
        <path d="M9 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </button>

    <!-- Overlay (só mobile) -->
    <div
      class="fixed inset-0 z-30 bg-black/40 transition-opacity duration-300 md:hidden"
      :class="sidebarOpen ? 'opacity-100' : 'pointer-events-none opacity-0'"
      @click="sidebarOpen = false"
    />

    <aside 
      id="blog-sidebar" 
      class="fixed inset-y-0 left-0 z-40 w-84 transform bg-white px-4 py-8 shadow-lg transition-transform duration-300 ease-in-out md:static md:z-auto md:w-1/5 md:shrink-0 md:translate-x-0 md:shadow-none"
      :class="sidebarOpen ? 'translate-x-0' : '-translate-x-full'"
    >
      <Form class="w-full md:w-4/5 mx-auto" aria-label="Filtros do blog">
        <InputGroup class="w-full">
          <Label for="categoria" class="min-w-20">Categoria:</Label>
          <Input id="categoria" v-model="filters.categoria" placeholder="Ex.: Eventos" />
        </InputGroup>

        <InputGroup class="w-full">
          <Label for="destaque" class="min-w-20">Destaque:</Label>
          <Input id="destaque" v-model="destaqueFilter" as="select">
            <option value="todos">Todos</option>
            <option value="true">Destaques</option>
            <option value="false">Não destaques</option>
          </Input>
        </InputGroup>

        <InputGroup class="w-full">
          <Label for="ativo" class="min-w-20">Status:</Label>
          <Input id="ativo" v-model="ativoFilter" as="select">
            <option value="todos">Todos</option>
            <option value="true">Ativos</option>
            <option value="false">Inativos</option>
          </Input>
        </InputGroup>

        <fieldset class="flex w-full flex-wrap items-center gap-4 py-4">
          <legend class="mb-2 w-full text-gray-600">Unidades:</legend>
          <label v-for="unit in unitOptions" :key="unit.value" class="flex items-center gap-2 w-full text-gray-600">
            <input v-model="filters.unidades" type="checkbox" :value="unit.value" class="h-5 w-5" />
            {{ unit.label }}
          </label>
        </fieldset>

        <InputGroup class="w-full">
          <button type="button" class="btn-primary" :disabled="pending" @click="() => refresh()">
            {{ pending ? 'Atualizando...' : 'Recarregar' }}
          </button>
        </InputGroup>

      </Form>
    </aside>

    <SectionLayout class="bg-transparent w-4/5">
      <template #header>
        <IntroSectionHeader>
          TOTEM BLOG
        </IntroSectionHeader>

      </template>
      <template #content>
        <p v-if="pending" class="py-12 text-center text-gray-500">Carregando posts...</p>

        <p v-else-if="error" class="mx-auto my-12 max-w-7xl rounded-lg bg-red-50 px-4 py-3 text-red-700">
          Não foi possível carregar os posts da API.
        </p>

        <p v-if="!pending && !error && posts.length === 0" class="py-12 text-center text-gray-500">
          Nenhum post encontrado.
        </p>

        <Grid v-else>
          <Post v-for="post in posts" :key="post._id" :post="post" />
        </Grid>
      </template>
    </SectionLayout>
  </main>
</template>
