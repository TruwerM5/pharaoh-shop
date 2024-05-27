<script setup lang="ts">


defineProps<{list: {id: number; image: string}[]; reverse?: boolean;}>();


</script>

<template>
    <ul :class="['brand-list', {'reverse': reverse}]">
        <li v-for="item in list" :key="item.id"
        class="brand-item">
            <img :src="`/images/${item.image}.svg`" :alt="`${item.id}`" class="brand-item__image">
        </li>
    </ul>
    
</template>

<style lang="sass" scoped>

.brand-list
    margin-block: 20px
    padding-inline: 20px
    position: relative
    display: flex
    justify-content: space-between
    align-items: center
    gap: 20px
    width: fit-content
    animation: slide 10s infinite alternate linear
    &.reverse
        animation: slidereverse 10s infinite alternate linear
.brand-item
    display: flex
    position: relative
    min-width: 25%
    
    &__image
        display: block
    

@keyframes slide
    0%
        transform: translateX(0)
    100%
        transform: translateX(calc( -100% - 25px ))

@keyframes slidereverse
    0%
        transform: translateX(-100%)
    100%
        transform: translateX(calc(0% + 25px ))
    
</style>