<script setup lang="ts">
//Wrapper for product items
import type { Product } from '~/types/product';
import { useNavStore } from '#imports';

const props = defineProps<{products: Product[]}>();

</script>

<template>
    <div class="products-list">
        <ul
        class="products-list__inner">
            <ProductsItemVue v-for="item in products" :key="item.id" :product="item" />
        </ul>
    </div>
</template>

<style lang="sass" scoped>
.products-list
    max-width: 1024px
    margin: 0 auto
    &__inner
        display: grid
        grid-template-columns: 1fr 1fr
        gap: 20px
        @media screen and (min-width: 768px)
            grid-template-columns: repeat(4, 1fr)
</style>