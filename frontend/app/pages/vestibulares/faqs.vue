<script lang="ts" setup>
import DataFaqs from '~/components/vestibulares/faqs/DataFaqs.vue';
import HeroFaqsTitle from '~/components/vestibulares/faqs/HeroFaqsTitle.vue';
import { faqsVestibulares } from '~/data/faqsON';
   
</script>

<template>
    <HeroFaqsTitle/>
    <DataFaqs :faqs="faqsVestibulares"/>
</template>