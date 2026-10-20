<script lang="ts" setup>
import FaqsSection from '~/components/faqs/FaqsSection.vue';
import { faqsVestibulares } from '~/data/faqsON';

definePageMeta({ layout: 'vestibulares' })
</script>

<template>
    <FaqsSection :faqs="faqsVestibulares"/>
</template>
