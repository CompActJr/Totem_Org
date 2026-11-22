<script lang="ts" setup>
import Grid from '~/components/ui/cards/Grid.vue'
import Post from '~/components/posts/Post.vue'
import PostEditorSidebar from '~/components/admin/PostEditorSidebar.vue'
import { useBlogPosts } from '~/composables/api/useBlog'
import type { CreatePostSchema } from '~~/shared/posts'


definePageMeta({
  layout: 'admin',
})

const {
  posts,
  pending,
  error,
  selectedPost,
  editorMode,
  mutationPending,
  mutationError,
  openCreate,
  openEdit,
  closeEditor,
  createPost,
  updatePost,
  deletePost,
} = useBlogPosts()

async function savePost(payload: CreatePostSchema) {
  if (editorMode.value === 'create') {
    await createPost(payload)
    return
  }

  if (selectedPost.value) {
    await updatePost(selectedPost.value._id, payload)
  }
}

async function removePost(id: number) {
  await deletePost(id)
}
</script>

<template>
  <section class="w-full">
    <div class="mb-8 flex items-center justify-between gap-4">
      <div>
        <h1 class="text-4xl font-bold text-gray-700">Posts</h1>
        <p class="pt-8 text-gray-500">Gerencie os conteúdos publicados no blog.</p>
      </div>

      <button type="button" class="btn-primary" @click="openCreate">
        Adicionar Post
      </button>
    </div>

    <p v-if="pending" class="py-12 text-center text-gray-500">Carregando posts...</p>
    <p v-else-if="error" class="rounded-lg bg-red-50 px-4 py-3 text-red-700">
      Não foi possível carregar os posts.
    </p>
    <p v-else-if="posts.length === 0" class="py-12 text-center text-gray-500">
      Nenhum post encontrado.
    </p>

    <Grid v-if="posts.length">
      <Post
        v-for="post in posts"
        :key="post._id"
        :post="post"
        admin-mode
        @edit="openEdit"
      />
    </Grid>

    <PostEditorSidebar
      :mode="editorMode"
      :post="selectedPost"
      :pending="mutationPending"
      :error="mutationError"
      @close="closeEditor"
      @save="savePost"
      @delete="removePost"
    />
  </section>
</template>