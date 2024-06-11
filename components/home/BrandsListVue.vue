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
    position: relative
    min-width: 200%
    display: grid
    grid-template-columns: repeat(10, 1fr)
    justify-content: space-between
    align-items: center
    gap: 20px
    margin-block: 20px
    padding-inline: 20px
    // transform: translateX(-50%)
    animation: slide 20s infinite alternate linear
    &.reverse
        animation: slidereverse 20s infinite alternate linear
.brand-item
    display: flex
    position: relative
    flex: 1
    max-width: 150px
    &__image
        display: block
    

@keyframes slide
    0%
        transform: translateX(0)
    100%
        transform: translateX(-50%)

@keyframes slidereverse
    0%
        transform: translateX(-50%)
    100%
        transform: translateX(0)
    
</style>