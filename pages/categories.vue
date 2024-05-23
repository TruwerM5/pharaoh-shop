<script setup lang="ts">
//List here products filtered by query

import { useProductsStore } from '~/stores/products.store';
import type { Product } from '~/types/product';
const route = useRoute();
const ProductsStore = useProductsStore();
const data = ref<Product[]>([]);
const translatedQuery = ref(ProductsStore.checkQueryString(route.query));

if(!route.query.category) {
    data.value = ProductsStore.products;
} else {
    data.value = ProductsStore.products.filter(item => {
        if(route.query.category) {
            return item.category == route.query.category;
        } else return false;
    });
}

 


onBeforeRouteUpdate((to,from) => {
    //Update products list with new query params
    if(!to.query.category) {
        data.value = ProductsStore.products;
    } else {
        data.value = ProductsStore.products.filter(item => {
            if(to.query.category) {
                return item.category == to.query.category;
            } else return false;
        });
        translatedQuery.value = ProductsStore.checkQueryString(to.query);
    }
});


</script>

<template>
    <div class="categories page">
        <template v-if="data.length > 0">
            <div class="categories__nav">
                <h1 class="categories__title page-title">{{ translatedQuery }}</h1>
            </div>
        </template>
        <ProductsList :products="data" />
    </div>
</template>

<style lang="sass" scoped>

.categories
    &__nav
        margin-bottom: 30px

</style>