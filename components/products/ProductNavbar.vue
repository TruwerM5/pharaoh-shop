<script setup lang="ts">
import { useProductsStore } from '#imports';
const ProductsStore = useProductsStore();
const route = useRoute();
const filtersQuantity = ref(getFiltersQuantity());
const pageParam = ref(Object.values(route.params)[0]);
function getFiltersQuantity() {
    //Сколько фильтров применено
    let count = 0;
    for(const [key, value] of Object.entries(ProductsStore.filters)) {
        if(value) count++;
    }
    return count;
}

onMounted(() => {
    ProductsStore.checkWindowWidth();
    window.addEventListener('resize', ProductsStore.checkWindowWidth);
});

</script>

<template>
    <div class="products-navbar">
        <h1 class="products-navbar__title page-title">{{ $t(pageParam.toString()) }}</h1>
        <div v-if="ProductsStore.currentGridView <= 3"
        class="products-navbar__grid-view ml-auto">
            <button @click="ProductsStore.setGridView(3)"
            :class="['products-navbar__grid-view-btn', {'products-navbar__grid-view-btn_active': ProductsStore.currentGridView == 3}]">
                <img src="/images/grid-6.svg" alt="By 6" class="products-navbar__grid-view-icon">
            </button>
            <button @click="ProductsStore.setGridView(2)"
            :class="['products-navbar__grid-view-btn', {'products-navbar__grid-view-btn_active': ProductsStore.currentGridView == 2}]">
                <img src="/images/grid-4.svg" alt="By 2" class="products-navbar__grid-view-icon">
            </button>
            <button @click="ProductsStore.setGridView(1)"
            :class="['products-navbar__grid-view-btn', {'products-navbar__grid-view-btn_active': ProductsStore.currentGridView == 1}]">
                <img src="/images/grid-1.svg" alt="By 1" class="products-navbar__grid-view-icon">
            </button>
        </div>
        <div v-else
        class="products-navbar__grid-view ml-auto">
        <button @click="ProductsStore.setGridView(4)"
            :class="['products-navbar__grid-view-btn', {'products-navbar__grid-view-btn_active': ProductsStore.currentGridView == 4}]">
                <img src="/images/grid-4.svg" alt="By 4" class="products-navbar__grid-view-icon">
            </button>
            <button @click="ProductsStore.setGridView(6)"
            :class="['products-navbar__grid-view-btn', {'products-navbar__grid-view-btn_active': ProductsStore.currentGridView == 6}]">
                <img src="/images/grid-6.svg" alt="By 6" class="products-navbar__grid-view-icon">
            </button>
        </div>
        <button 
        @click="ProductsStore.openFilters"
        class="products-navbar__filter-btn">
            <span class="hidden 2xl:block">Фильтры</span>
            <span v-if="filtersQuantity > 0"
            class="products-navbar__filter-quantity">
            {{ filtersQuantity }}
            </span>
            <img src="/images/filter.svg" alt="Фильтры" class="products-navbar__filter-icon">
        </button>
    </div>
</template>

<style lang="sass" scoped>
.products-navbar
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