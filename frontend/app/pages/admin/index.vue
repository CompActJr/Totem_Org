<script lang="ts" setup>
import IntroSectionHeader from '~/components/global/IntroSectionHeader.vue';
import CTA from '~/components/ui/buttons/CTA.vue';
import Card from '~/components/ui/cards/Card.vue';
import Grid from '~/components/ui/cards/Grid.vue';
import I_Edit from '~/components/ui/icons/I_Edit.vue';
import I_Enter from '~/components/ui/icons/I_Enter.vue';
import I_Next from '~/components/ui/icons/I_Next.vue';
import SectionLayout from '~/components/ui/SectionLayout.vue';

const colegios = [
  { name: "Santa Maria", href: "/admin/colegios/santa-maria"},
  { name: "Cachoeira do Sul", href: "/admin/colegios/cachoeira-do-sul" },
  { name: "Cruz Alta", href: "/admin/colegios/cruz-alta" }
] as const

const vestibulares = [
  { name: "Santa Maria", href: "/admin/vestibulares/santa-maria" },
  { name: "Ijuí", href: "/admin/vestibulares/ijui" },
  { name: "Santa Rosa", href: "/admin/vestibulares/santa-rosa" }
] as const

definePageMeta({
  layout: 'admin'
})


</script>

<template>
  <SectionLayout class="w-full min-h-20 bg-transparent">
    <template #header>
      <IntroSectionHeader>
        Unidades Vestibulares
      </IntroSectionHeader>
    </template>
    <template #content>
      <Grid>
        <Card class="hover:bg-amber-50" v-for="value in vestibulares">
          <template #body>
            <div class="flex items-center justify-between">
              <h2 class="text-gray-600 font-bold">{{ value.name }}</h2>
              <button class="btn-primary transition-all duration-200 hover:scale-110" 
                @click="() => navigateTo(value.href)">
                <I_Edit />
              </button>
            </div>
          </template>
        </Card>
      </Grid>
    </template>
  </SectionLayout>

  <SectionLayout class="w-full min-h-20 max-h-20 bg-transparent">
    <template #header>
      <IntroSectionHeader>
        Unidades Colégios
      </IntroSectionHeader>
    </template>
    <template #content>
      <Grid>
        <Card class="hover:bg-amber-50" v-for="value in colegios">
          <template #body>
            <div class="flex items-center justify-between">
              <h2 class="text-gray-600 font-bold">{{ value.name }}</h2>
              <button class="btn-primary" @click="() => navigateTo(value.href)">
                <I_Edit />
              </button>
            </div>
          </template>
        </Card>
      </Grid>
    </template>
  </SectionLayout>
</template>