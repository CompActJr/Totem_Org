<script setup lang="ts">
import type { PostType } from '~/types/post'

defineProps<{
    post: PostType
    open: boolean
}>()

const emit = defineEmits<{
    (e: 'close'): void
}>()
</script>

<template>
    <Teleport to="body">
        <Transition name="fade">
            <div v-if="open"
                class="fixed  inset-0 z-50 flex items-center justify-center bg-gray-600/60 backdrop-blur-sm p-4"
                @click.self="emit('close')">
                <div class="relative w-full max-w-5xl h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl">
                    <button class="absolute right-4 top-4 rounded-full bg-white p-2 shadow" @click="emit('close')">
                        <img src="/icons/i--close.svg" alt="close"/>
                    </button>

                    <NuxtImg :src="post.imagemUrl" class="h-128 w-full object-cover" />

                    <div class="p-8">

                        <div class="flex items-center justify-between gap-2 my-2">
                            <div class="flex items-center gap-4">
                                <img src="/icons/tabler--tags.svg" alt="author" />
                                <p class="font-semibold text-gray-600">
                                    {{ post.categoria }}
                                </p>
                            </div>

                            <div class="flex items-center gap-4 text-sm text-gray-500">
                                <img src="/icons/i--calendar.svg" alt="calendar" />
                                {{ post.createdAt }}
                            </div>
                        </div>

                        <h1 class="mt-4 text-4xl font-bold text-gray-700">
                            {{ post.titulo }}
                        </h1>

                        <div class="mt-8 whitespace-pre-line text-lg leading-8 text-gray-600">
                            {{ post.conteudo }}
                        </div>

                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>