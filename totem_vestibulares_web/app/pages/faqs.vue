<script lang="ts" setup>
    import DataFaqs from '~/components/faqs/DataFaqs.vue';
    import HeroFaqsTitle from '~/components/faqs/HeroFaqsTitle.vue';
    import dataFaqs from "~/data/faqs.json";

</script>

<template>
    <HeroFaqsTitle/>
    <DataFaqs :faqs="dataFaqs"/>
</template>