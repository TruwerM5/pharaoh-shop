<script setup lang="ts">

import type { LocationQueryRaw } from 'vue-router';
import { useProductsStore } from '~/stores/products.store';
import type { Filters } from '~/types/filters';

definePageMeta({
    middleware: ['categories-middleware'],
})

const route = useRoute();
const router = useRouter();
const ProductsStore = useProductsStore();
const title = ref<string | string[] | undefined>('');
const filters = ref<Filters>({
    gender: <'male' | 'female' | 'unisex' | ''>(route.query.gender || ''),
    brand: route.query.brand || '',
    color: route.params.color || null,
    minPrice: route.query.minPrice || null,
    maxPrice: route.query.maxPrice || null,
});
const filtersQuantity = ref(getFiltersQuantity());
const currentGridView = ref<number>(2);

onMounted(() => {
    ProductsStore.isClient = true;
    checkWindowWidth();
    window.addEventListener('resize', () => {
        checkWindowWidth();
    });
});


//Заголовок страницы
title.value = ProductsStore.getCategoryTitle(route.params.category);

function acceptFilters() {
    let query: LocationQueryRaw = { };
    if(filters.value.brand) {
        query.brand = filters.value.brand;
    }
    if(filters.value.gender) {
        query.gender = filters.value.gender;
    }
    if(filters.value.minPrice) {
        query.minPrice = filters.value.minPrice;
    }
    if(filters.value.maxPrice) {
        query.maxPrice = filters.value.maxPrice;
    }

    if(query.minPrice && query.maxPrice) {
        if(query.minPrice > query.maxPrice) {
            query.minPrice = null;
            query.maxPrice = null;
        }
    }
    //Добавляем запрос в строку браузера
    router.push({ query });
    //Применяем фильтры
    ProductsStore.setFilters(route.params.category, filters.value);
    //Закрываем модальное окно
    ProductsStore.closeFilters();
    //Обновляем счетчик применных фильтров
    filtersQuantity.value = getFiltersQuantity();
    
}

function getFiltersQuantity() {
    //Сколько фильтров применено
    let count = 0;
    for(const [key, value] of Object.entries(filters.value)) {
        if(value) count++;
    }
    return count;
}


function disableFilters() {
    filters.value = {
        brand: '',
        gender: '',
        minPrice: null,
        maxPrice: null,
    }
    navigateTo({query: {}});
}

function setGridView(grid: number) {
    currentGridView.value = grid;
}


function checkWindowWidth() {
    if(window.innerWidth >= 768) {
        currentGridView.value = 4;
    } else {
        currentGridView.value = 2;
    }
    return;
}

</script>

<template>
    
    <div v-if="ProductsStore.isClient"
    class="categories">
        <ScrollVue>
            <template #content>
                    <div class="categories__nav page-nav">
                        <!-- Fix header -->
                        <h1 class="categories__title page-title">{{ $t(route.params.category.toString()) }}</h1>
                        <div v-if="currentGridView <= 3"
                        class="categories__grid-view ml-auto">
                            <button @click="setGridView(3)"
                            :class="['categories__grid-view-btn', {'categories__grid-view-btn_active': currentGridView == 3}]">
                                <img src="/images/grid-6.svg" alt="By 6" class="categories__grid-view-icon">
                            </button>
                            <button @click="setGridView(2)"
                            :class="['categories__grid-view-btn', {'categories__grid-view-btn_active': currentGridView == 2}]">
                                <img src="/images/grid-4.svg" alt="By 2" class="categories__grid-view-icon">
                            </button>
                            <button @click="setGridView(1)"
                            :class="['categories__grid-view-btn', {'categories__grid-view-btn_active': currentGridView == 1}]">
                                <img src="/images/grid-1.svg" alt="By 1" class="categories__grid-view-icon">
                            </button>
                        </div>
                        <div v-else
                        class="categories__grid-view ml-auto">
                        <button @click="setGridView(4)"
                            :class="['categories__grid-view-btn', {'categories__grid-view-btn_active': currentGridView == 4}]">
                                <img src="/images/grid-4.svg" alt="By 4" class="categories__grid-view-icon">
                            </button>
                            <button @click="setGridView(6)"
                            :class="['categories__grid-view-btn', {'categories__grid-view-btn_active': currentGridView == 6}]">
                                <img src="/images/grid-6.svg" alt="By 6" class="categories__grid-view-icon">
                            </button>
                        </div>
                        <button 
                        @click="ProductsStore.openFilters"
                        class="categories__filter-btn">
                            <span class="hidden 2xl:block">Фильтры</span>
                            <span v-if="filtersQuantity > 0"
                            class="categories__filter-quantity">
                            {{ filtersQuantity }}
                            </span>
                            <img src="/images/filter.svg" alt="Фильтры" class="categories__filter-icon">
                        </button>
                    </div>
                    <template v-if="ProductsStore.currentProducts.length > 0">
                        <ProductsList :products="ProductsStore.currentProducts" :grid="currentGridView" />
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
            <FiltersVue v-show="ProductsStore.areFiltersOpened" :filters="filters">
                <template #button>
                    <button @click="acceptFilters"
                    class="primary-button filter-accept-btn">Применить</button>
                    <button @click="disableFilters"
                    class="filter-disable-btn secondary-btn">Убрать все фильтры</button>
                </template>
            </FiltersVue>
        </Transition>
        
    </div>
</template>

<style lang="sass" scoped>
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
        display: block
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