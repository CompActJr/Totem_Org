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
      <template #logo>
        <img
          src="/logos/logo-colegios.png"
          alt="Colégio Totem"
          width="180"
          height="64"
          class="h-16 w-45 object-contain object-left"
          draggable="false"
        />
      </template>
      <MenuItem v-for="link in links" :key="link.href" :item="link" />
    </Menu>

    <!-- Fundo -->
    <div
      class="fixed inset-0 -z-20 bg-cover bg-center bg-fixed"
      style="background-image: url('/geral/bkg-grafismo-lobo.jpg')"
    />
    <!-- Overlay -->
    <div class="fixed inset-0 -z-10 bg-white/80" />

    <main>
      <slot />
    </main>

    <Footer :contacts="contacts" >
      <template #header>
          É MAIS QUE COLÉGIOS:
                <br />
          É TOTEM!
      </template>
    </Footer>

  </div>
</template>
