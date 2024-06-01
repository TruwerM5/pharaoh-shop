<script setup lang="ts">

import { useProductsStore } from '~/stores/products.store';
import type { Product } from '~/types/product';
const route = useRoute();
const ProductsStore = useProductsStore();
const data = ref<Product[]>([]);
const title = ref<string | string[] | undefined>('');
const filtered = computed(() => ProductsStore.filteredProducts);

if(filtered.value.length > 0) {
    data.value = filtered.value;
} else {
    data.value = ProductsStore.products.filter(item => {    
        return item.category == route.params.category;
    });
}

watch(filtered, (newFilter) => {
    data.value = newFilter;
})


title.value = ProductsStore.getCategoryTitle(route.params.category);




</script>

<template>
    
    <div class="categories page">
        <ScrollVue>
            <template #content>
                    <div class="categories__nav page-nav">
                        <h1 class="categories__title page-title">{{ title ? title[1] : ''  }}</h1>
                        <button 
                        @click="ProductsStore.openFilters"
                        class="categories__filter-btn">
                            <img src="/images/filter.svg" alt="Фильтры" class="categories__filter-icon">
                        </button>
                    </div>
                    <template v-if="data.length > 0">
                        <ProductsList :products="data" />
                    </template>
                    <template v-else>
                        <AlertVue >
                            <template #message>
                                <span class="alert-message text-[16px] test-rose-500">
                                    Извините, по вашему запросу ничего найдено.
                                </span>
                            </template>
                        </AlertVue>
                    </template>
            </template>
        </ScrollVue>
        <Transition name="modal">
            <FiltersVue v-show="ProductsStore.areFiltersOpened" :category="route.params.category" />
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
        width: 22px


</style>