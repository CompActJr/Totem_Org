<template>
  <div class="min-h-screen flex flex-col">

    <Menu/>

    <main class="bg-gray-100 flex-1">
      <slot />
    </main>

    <Footer/>

  </div>
</template>