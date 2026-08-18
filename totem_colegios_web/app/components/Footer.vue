<script lang="ts" setup>
    const year = computed(() => new Date().getFullYear())
    import unidades  from '~/data/unidades.json';
</script>


<template>
    <footer class="bg-[#332E29] py-8 lg:py-16 px-8 md:px-8 lg:px-16 min-h-60">

        <div class="hidden lg:flex md:flex gap-8 justify-between mt-16 ">
            <div 
                class="min-h-24 text-gray-200 text-start " 
                v-for="unit in unidades"
                :key="unit.city"
            >
                <h5 class="font-bold text-white text-lg mb-8">
                    {{ unit.city }}
                </h5>
                
                <p class="mb-4">
                    {{ unit.address }}
                </p>

                <p class="mb-4">
                    Telefone: {{ unit.phone }}</p>
                <p class="mb-4">
                    WhatsApp: {{ unit.whatsapp }}
                </p>

                <a :href="`mailto:${unit.email}`" class="text-orange-400">
                    {{ unit.email }}
                </a>
            </div>
        </div>

        <div class="w-full h-0.5 mt-8 bg-gray-50"></div>

        <div class="flex flex-col gap-4 items-start mt-8">
        
            <p class="text-gray-200 text-sm">
                &copy; Copyright {{ year }} Colégio Totem. Todos os direitos reservados.
            </p>

            <p class="text-gray-200 text-sm">
                O TOTEM está de acordo com a Lei Geral de Proteção de Dados Sul 13.709/18. Para dúvidas
                sobre questões relativas a dados pessoais, nosso canal de comunicação é
                <a href="mailto:privacidade@totem.com.br" class="underline">privacidade@totem.com.br</a>.
            </p>
      </div>

    </footer>
</template>