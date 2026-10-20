<script lang="ts" setup>
/**
 * @author Jonas
 * layout admin definir o layout no script da página com definePageMeta ou setLayout
 * */
</script>

<template>
  <div class="flex min-h-screen bg-[#f3f2f1] text-[#262626]">
    <aside class="flex w-[360px] shrink-0 items-start justify-center bg-[#f28a1d] px-8 py-8 shadow-[inset_-1px_0_0_rgba(0,0,0,0.08)]">
      <div class="mt-2 flex items-center gap-4">
        <div class="flex h-14 w-14 items-center justify-center rounded-xl bg-[#2d2b2a] shadow-lg shadow-[#00000020]">
          <svg viewBox="0 0 64 64" class="h-8 w-8 text-white" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M18 24.5V20.5C18 17.5 20.5 15 23.5 15H40.5C43.5 15 46 17.5 46 20.5V24.5" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/>
            <path d="M15 24.5H49V39.5C49 45.3 44.3 50 38.5 50H25.5C19.7 50 15 45.3 15 39.5V24.5Z" fill="currentColor" opacity="0.12"/>
            <path d="M29.5 27.5V38.5M34.5 27.5V38.5M22 38.5H42" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/>
            <path d="M20 24.5H44" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/>
          </svg>
        </div>

        <div class="leading-none text-white">
          <p class="text-[2.05rem] font-black tracking-[-0.06em]">Portal da direção</p>
          <p class="mt-2 text-[0.62rem] font-bold tracking-[0.12em] text-white/90">COLÉGIOS E VESTIBULARES</p>
        </div>
      </div>
    </aside>

    <main class="flex-1 bg-[#efefee]">
      <div class="min-h-screen w-full">
        <slot />
      </div>
    </main>
  </div>
</template>