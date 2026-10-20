<script lang="ts" setup>
/**
 * @author Jonas
 * layout admin definir o layout no script da página com definePageMeta ou setLayout
 * */
</script>

<template>
  <div class="flex min-h-screen text-[#262626]">
    
    <aside class="flex w-90 shrink-0 items-start justify-center bg-[#f28a1d] px-8 py-8 shadow-[inset_-1px_0_0_rgba(0,0,0,0.08)]">
      <div class="mt-2 flex items-center gap-4">
        <div class="flex bg-[#ffffff50] p-2  items-center justify-center rounded-xl shadow-lg shadow-[#00000020]">
          <NuxtImg
            src="/logos/logo.png"
            alt="Totem ON"
            width="150"
            height="150"
            fit="cover"
            class="h-auto w-full object-contain"
          />
        </div>

        <div class="leading-none text-white">
          <p class="text-[2.05rem] font-black tracking-[-0.06em]">Portal da direção</p>
          <p class="pt-8 lg:pt-12 text-[0.62rem] font-bold tracking-[0.12em] text-white/90">COLÉGIOS E VESTIBULARES</p>
        </div>

      </div>
    </aside>

    <main class="flex-1">
      <div class="min-h-screen w-full">
        <slot />
      </div>
    </main>

  </div>
</template>