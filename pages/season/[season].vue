<script setup lang="ts">

import { useProductsStore } from '#imports';
import ProductNavbar from '~/components/products/ProductNavbar.vue';

const ProductsStore = useProductsStore();
const route = useRoute();
const router = useRouter();

onMounted(() => {
    if(route.query) {
        ProductsStore.initFilters(route.query);
    }
    if(ProductsStore.filters) {
        router.push({query: ProductsStore.filters});
    }

    ProductsStore.isClient = true;
});


</script>


<template>
    <div v-if="ProductsStore.isClient"
    class="categories">
        <ScrollVue>
            <template #content>
                <ProductNavbar />
                <ProductsList :grid="ProductsStore.currentGridView" />
            </template>
        </ScrollVue>
        <Transition name="modal">
            <FiltersVue v-show="ProductsStore.areFiltersOpened" :filters="ProductsStore.filters">
                <!-- <template #button> -->
                    <!-- <button @click="acceptFilters"
                    class="primary-button filter-accept-btn">Применить</button>
                    <button @click="disableFilters"
                    class="filter-disable-btn secondary-btn">Убрать все фильтры</button> -->
                <!-- </template> -->
            </FiltersVue>
        </Transition>
        </div>
</template>
