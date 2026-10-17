<script lang="ts" setup>
import { faqsVestibulares } from '~/data/faqsON';
   
</script>

<template>
    <HeroFaqsTitle/>
    <DataFaqs :faqs="faqsVestibulares"/>
</template>