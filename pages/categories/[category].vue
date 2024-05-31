<script setup lang="ts">

import { useProductsStore } from '~/stores/products.store';
import type { Product } from '~/types/product';
const route = useRoute();
const ProductsStore = useProductsStore();
const data = ref<Product[]>([]);
const title = ref<string | string[] | undefined>('');


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
        <ScrollVue>
            <template #content>
                <template v-if="data.length > 0">
                    <div class="categories__nav page-nav">
                        <h1 class="categories__title page-title">{{ title ? title[1] : ''  }}</h1>
                        <button 
                        @click="ProductsStore.openFilters"
                        class="categories__filter-btn">
                            <img src="/images/filter.svg" alt="Фильтры" class="categories__filter-icon">
                        </button>
                    </div>
                    <ProductsList :products="data" />
                </template>
            </template>
        </ScrollVue>
        <Transition >
            <FiltersVue v-if="ProductsStore.areFiltersOpened" />
        </Transition>
        
    </div>
</template>

<style lang="sass" scoped>
.categories
    &__nav
        display: flex
        justify-content: space-between
        align-items: center
    &__filter-icon
        width: 35px


.v-leave-active,
.v-enter-active
    transition: all .2s

.v-enter-from,
.v-leave-to
    transform: translateY(30px)
    opacity: 0
</style>