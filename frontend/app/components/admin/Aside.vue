<script lang="ts" setup>
import { useAuthSession } from '../../composables/api/session';
import AsideItem from './AsideItem.vue';

  const session = useAuthSession()
  const user = session.isLoggedIn.value

</script>

<template>
    <aside class="flex flex-col gap-8 w-90 shrink-0 items-start justify-start bg-[#f28a1d] px-8 py-8">
      
      <div class="mt-2 flex items-center gap-4">
        <div class="leading-none text-white">
          <p class="text-[2.05rem] font-black tracking-[-0.06em]">Portal da direção</p>
          <p class="pt-8 lg:pt-12 text-[0.62rem] font-bold tracking-[0.12em] text-white/90">COLÉGIOS E VESTIBULARES</p>
        </div>
      </div>

      <div v-if="user" class="flex flex-col gap-4 border-t-4 border-white w-full py-8">
          <AsideItem href="/admin">HOME</AsideItem>
          <AsideItem href="/admin/blog">BLOG</AsideItem>
          <AsideItem href="/admin/totemtv">TOTEM TV</AsideItem>
      </div>
 
    </aside>
</template>