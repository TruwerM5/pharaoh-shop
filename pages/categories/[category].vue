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


onMounted(() => {
    ProductsStore.isClient = true;
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

</script>

<template>
    
    <div v-if="ProductsStore.isClient"
    class="categories page">
        <ScrollVue>
            <template #content>
                    <div class="categories__nav page-nav">
                        <!-- Fix header -->
                        <h1 class="categories__title page-title">{{ $t(route.params.category.toString()) }}</h1>
                        <button 
                        @click="ProductsStore.openFilters"
                        class="categories__filter-btn">
                            <span v-if="filtersQuantity > 0"
                            class="categories__filter-quantity">
                                {{ filtersQuantity }}
                            </span>
                            <img src="/images/filter.svg" alt="Фильтры" class="categories__filter-icon">
                        </button>
                    </div>
                    <template v-if="ProductsStore.currentProducts.length > 0">
                        <ProductsList :products="ProductsStore.currentProducts" />
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
    &__nav
        display: flex
        justify-content: space-between
        align-items: center
        max-width: 1280px
        border-bottom: 2px solid #000
        margin: 0 auto 30px auto
    &__filter-btn
        position: relative
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
        width: 22px
        @media screen and (min-width: 768px)
            width: 28px
        @media screen and (min-width: 1280px)
            width: 35px
.filter-accept-btn
    margin-top: auto
</style>