<script setup lang="ts">
import { CalendarDate } from '@internationalized/date'

const items = ref(['Backlog', 'Todo', 'In Progress', 'Done'])
const value_tags = ref(['Backlog', 'Todo'])
const date = new Date();

</script>


<template>
    <div class="mx-auto max-w-7xl p-4 flex items-center gap-16">
        <div class="flex items-center gap-4">
            <label for="tags" class="text-gray-600">Tags: </label>
            <USelectMenu id="tags" v-model="value_tags" multiple :items="items" class="w-48" color="neutral" />
        </div>

        <div class="flex items-center gap-4">
            <label for="tags" class="text-gray-600">Início: </label>
            <input type="date" class="
                rounded-xl
                border
                border-gray-300
                bg-white
                px-4 py-2
                text-gray-700
                shadow-sm
                transition-all duration-300
                outline-none
                hover:border-gray-400
                focus:border-orange-500
                focus:ring-2
                focus:ring-orange-200"
            />
        </div>

        <div class="flex items-center gap-4">
            <label for="tags" class="text-gray-600">Fim: </label>
            <input type="date" class="
                rounded-xl
                border
                border-gray-300
                bg-white
                px-4 py-2
                text-gray-700
                shadow-sm
                transition-all duration-300
                outline-none
                hover:border-gray-400
                focus:border-orange-500
                focus:ring-2
                focus:ring-orange-200"
            />
        </div>
    </div>
</template>