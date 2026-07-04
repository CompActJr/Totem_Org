<script lang="ts" setup>
  import Post from '~/components/blog/Post.vue';
  import Postgrid from '~/components/blog/Postgrid.vue';
  import { posts } from '~/data/posts.mock';

  useSeoMeta({
    title: 'Página para o Blog',
    description: 'esta é a página para o blog',
  })

  const { setMenu } = useAnchorMenu()

  setMenu([
      {
          label: 'Artigos',
          href: '#artigos'
      },
      {
          label: 'Categorias',
          href: '#categorias'
      }
  ])
</script>

<template>
  <Postgrid :posts="posts" v-slot="{ post }">
     <Post :post="post" />
  </Postgrid>

</template>
 

