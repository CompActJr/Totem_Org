<template>
  <div class="min-h-screen flex flex-col">

    <Menu/>

    <main class="min-h-screen flex items-center justify-center bg-gray-100 flex-1">
      <slot />
    </main>

    <Footer/>

  </div>
</template>