<script setup lang="ts">

import { useProductsStore } from '~/stores/products.store';
import type { Product } from '~/types/product';
const route = useRoute();
const ProductsStore = useProductsStore();
const data = ref<Product[]>([]);
const title = ref<string | string[] | undefined>('qwe');


if(!route.params.category) {
    data.value = ProductsStore.products;
} else {
    data.value = ProductsStore.products.filter(item => {    
        return item.category == route.params.category;
    });
    title.value = ProductsStore.getCategoryTitle(route.params.category);
}



</script>

<template>
    
    <div class="categories page">
        <template v-if="data.length > 0">
            <div class="categories__nav">
                <h1 class="categories__title page-title">{{ title ? title[1] : ''  }}</h1>
            </div>
        </template>
        <ScrollVue>
            <template #content>
                <ProductsList :products="data" />
            </template>
            
        </ScrollVue>
        
    </div>
</template>