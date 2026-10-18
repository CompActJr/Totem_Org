<script lang="ts" setup>
import { faqsVestibulares } from '~/data/faqsON';

definePageMeta({ layout: 'vestibulares' })
</script>

<template>
    <HeroFaqsTitle/>
    <DataFaqs :faqs="faqsVestibulares"/>
</template>
