<script setup lang="ts">
import Footer from '~/components/ui/footer/Footer.vue';
import Menu from '~/components/ui/menu/Menu.vue';
import MenuItem from '~/components/ui/menu/MenuItem.vue';
import { useNavigation } from '~/composables/useNavigation';
import { unidadesColegios } from '~/data/static';

const { links } = useNavigation()

const contacts = unidadesColegios.map(({ city, address, phone, whatsapp, email }) => ({
  city,
  address,
  phone,
  whatsapp,
  email,
}))

</script>

<template>
  <div class="relative min-h-screen">
    
    <Menu>
      <MenuItem v-for="link in links" :key="link.href" :item="link" />
    </Menu>

    <!-- Fundo -->
    <div
      class="fixed inset-0 -z-20 bg-cover bg-center bg-fixed"
      style="background-image: url('/images/bkg-grafismo-lobo.jpg')"
    />
    <!-- Overlay -->
    <div class="fixed inset-0 -z-10 bg-white/80" />

    <main>
      <slot />
    </main>

    <Footer :contacts="contacts" />

  </div>
</template>
