<script setup lang="ts">
//List here products filtered by query

import { useProductsStore } from '~/stores/products.store';
import type { Product } from '~/types/product';
const route = useRoute();
const ProductsStore = useProductsStore();

const data = ref<Product[]>([]);

if(!route.query.category) {
    console.log("No query");
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
    }
});

console.log(data.value);

</script>

<template>
    <div class="product-page page">
        <ProductsList :products="data" />
    </div>
</template>