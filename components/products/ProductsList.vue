<script setup lang="ts">
//Wrapper for product items
import type { Product } from '~/types/product';
import { useNavStore } from '#imports';


const props = defineProps<{products: Product[]}>();
const NavStore = useNavStore();
const route = useRoute();


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
    &__inner
        display: grid
        grid-template-columns: 1fr 1fr
        gap: 20px
</style>