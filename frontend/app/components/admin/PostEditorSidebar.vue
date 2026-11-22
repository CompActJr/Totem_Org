<script setup lang="ts">
import type { BlogEditorMode, BlogUnitSlug, CreatePostSchema, Post } from '~~/shared/posts';



const props = defineProps<{
    mode: BlogEditorMode
    post: Post | null
    pending: boolean
    error: string | null
}>()

const emit = defineEmits<{
    close: []
    save: [payload: CreatePostSchema]
    delete: [id: number]
}>()

const unitOptions: Array<{ value: BlogUnitSlug; label: string }> = [
    { value: 'ijui', label: 'Ijuí' },
    { value: 'cachoeira-do-sul', label: 'Cachoeira do Sul' },
    { value: 'cruz-alta', label: 'Cruz Alta' },
    { value: 'santa-maria', label: 'Santa Maria' },
    { value: 'santa-rosa', label: 'Santa Rosa' },
]

const emptyPost = (): CreatePostSchema => ({
    titulo: '',
    resumo: '',
    conteudo: '',
    ativo: true,
    destaque: false,
    autor: '',
    categoria: '',
    unidades: [],
})

const form = ref<CreatePostSchema>(emptyPost())

watch(
    () => [props.mode, props.post] as const,
    ([mode, post]) => {
        if (mode === 'edit' && post) {
            form.value = {
                titulo: post.titulo,
                resumo: post.resumo,
                conteudo: post.conteudo,
                imagemUrl: post.imagemUrl,
                ativo: post.ativo,
                destaque: post.destaque,
                autor: post.autor,
                categoria: post.categoria,
                unidades: [...post.unidades] as BlogUnitSlug[],
            }
            return
        }

        if (mode === 'create') form.value = emptyPost()
    },
    { immediate: true },
)

function submit() {
    emit('save', { ...form.value, unidades: [...form.value.unidades] })
}

function removePost() {
    if (!props.post) return
    if (window.confirm(`Excluir o post "${props.post.titulo}"?`)) {
        emit('delete', props.post._id)
    }
}
</script>

<template>
    <Teleport to="body">
        <Transition name="fade">
            <aside v-if="mode !== 'closed'"
                class="fixed inset-y-0 right-0 z-50 w-full max-w-xl overflow-y-auto bg-white shadow-2xl">
                <div
                    class="sticky top-0 z-10 flex items-center justify-between border-b border-gray-200 bg-white px-6 py-5">
                    <h2 class="text-2xl font-bold text-gray-700">
                        {{ mode === 'create' ? 'Cadastrar post' : 'Editar post' }}
                    </h2>
                    <button type="button" class="button-primary" @click="emit('close')">
                        Fechar
                    </button>
                </div>

                <form class="flex min-h-[calc(100%-76px)] flex-col gap-5 px-6 py-6" @submit.prevent="submit">
                    <div class="grid gap-4 md:grid-cols-2">
                        <label class="flex flex-col gap-2 text-sm font-semibold text-gray-600">
                            Título
                            <input v-model="form.titulo" class="input" maxlength="200" required />
                        </label>

                        <label class="flex flex-col gap-2 text-sm font-semibold text-gray-600">
                            Categoria
                            <input v-model="form.categoria" class="input" maxlength="100" required />
                        </label>
                    </div>

                    <label class="flex flex-col gap-2 text-sm font-semibold text-gray-600">
                        Resumo
                        <textarea v-model="form.resumo" class="input min-h-24 resize-y" maxlength="500" required />
                    </label>

                    <label class="flex flex-col gap-2 text-sm font-semibold text-gray-600">
                        Conteúdo
                        <textarea v-model="form.conteudo" class="input min-h-48 resize-y" maxlength="50000" required />
                    </label>

                    <div class="grid gap-4 md:grid-cols-2">
                        <label class="flex flex-col gap-2 text-sm font-semibold text-gray-600">
                            Autor
                            <input v-model="form.autor" class="input" maxlength="150" required />
                        </label>
                    </div>

                    <fieldset class="flex flex-col gap-3">
                        <legend class="mb-2 text-sm font-semibold text-gray-600">Unidades</legend>
                        <label v-for="unit in unitOptions" :key="unit.value"
                            class="flex items-center gap-3 text-gray-600">
                            <input v-model="form.unidades" type="checkbox" :value="unit.value" class="h-5 w-5" />
                            {{ unit.label }}
                        </label>
                    </fieldset>

                    <div class="flex flex-wrap gap-6">
                        <label class="flex items-center gap-3 font-semibold text-gray-600">
                            <input v-model="form.ativo" type="checkbox" class="h-5 w-5" />
                            Ativo
                        </label>

                        <label class="flex items-center gap-3 font-semibold text-gray-600">
                            <input v-model="form.destaque" type="checkbox" class="h-5 w-5" />
                            Destaque
                        </label>
                    </div>

                    <p v-if="error" class="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
                        {{ error }}
                    </p>

                    <div class="mt-auto flex items-center justify-between gap-4 border-t border-gray-200 pt-6">
                        <button v-if="mode === 'edit'" type="button"
                            class="rounded-lg bg-red-600 px-5 py-3 font-semibold text-white disabled:opacity-50"
                            :disabled="pending" @click="removePost">
                            Excluir
                        </button>

                        <button type="submit" class="btn-primary flex items-center gap-4"
                            :disabled="pending || form.unidades.length === 0">
                            {{ pending ? 'Salvando...' : 'Salvar post' }}
                        </button>
                    </div>
                </form>
            </aside>
        </Transition>
    </Teleport>
</template>
