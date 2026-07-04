<template>
    <section class="info">
        <slot></slot>
    </section>
</template>

<script lang="ts">

</script>

<style lang="scss" scoped>
@use '@/assets/index' as *;

.info {
    @include centralizar_flex;
    width: 80%;
    height: 70vh;
    padding: 16px;
    border: solid 2px $primary_3;
    border-radius: 16px;
    gap: 16px;
    background-color: $primary_2;
    box-shadow: $primary_3 0 0 10px;
    color: $primary_3;
    overflow-y: scroll;
    scrollbar-width: 8px;
    scrollbar-color: $primary_8 transparent;

    h2,
    h3,
    h4,
    p {
        width: 100%;
        text-align: center;
    }

    transition: scale 0.3s ease-in,
    box-shadow 0.3s ease-in;

    &:hover {
        box-shadow: $primary_3 0 0 20px;
    }
}
</style>