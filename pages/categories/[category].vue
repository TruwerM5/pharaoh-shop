<script setup lang="ts">

import { useProductsStore } from '~/stores/products.store';
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

<style lang="sass">
.categories
    margin-block: 30px 40px
    &__nav
        display: flex
        justify-content: space-between
        align-items: center
        gap: 20px
        border-bottom: 2px solid #000
        margin: 0 15px 30px 15px
    &__grid-view
        display: flex
        align-items: center
        gap: 10px
    &__grid-view-btn
        opacity: 0.3
        &_active
            opacity: 1
    &__grid-view-icon
        @media screen and (max-width: 1024px)
            width: 20px
    &__filter-btn
        position: relative
        display: flex
        justify-content: center
        align-items: center
        font-size: 20px
    &__filter-quantity
        position: absolute
        top: -10px
        right: -5px
        display: grid
        justify-content: center
        align-content: center
        align-items: center
        width: 15px
        height: 15px
        font-size: 13px
        color: #fff
        background-color: #000
        border-radius: 50%
    &__filter-icon
        width: 16px
        @media screen and (min-width: 768px)
            width: 22px
.filter-accept-btn
    margin-top: auto
</style>