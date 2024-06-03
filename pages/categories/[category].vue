<script setup lang="ts">

import { useProductsStore } from '~/stores/products.store';

definePageMeta({
    middleware: ['categories-middleware'],
})

// const route = useRoute();
const router = useRouter();
const ProductsStore = useProductsStore();
const title = ref<string | string[] | undefined>('');
const filtered = computed(() => ProductsStore.filteredProducts);
const filters = ref({
    gender: <'male' | 'female' | 'unisex' | ''>(''),
    brand: '',
    
});



onMounted(() => {
    ProductsStore.isClient = true;
})


watch(filtered, (newFilter) => {
    //Отслеживаем изменения массива filtered
    ProductsStore.setCurrentProducts(newFilter);
})

watch(filters.value, (newFilter) => {
   //Отслеживаем изменения внутри filters и сразу применяем 
    let query: {brand?: string; gender?: string;} = { };
    // ProductsStore.setFilters(newFilter, props.category);
    if(newFilter.brand) {
        query.brand = newFilter.brand;
    }
    if(newFilter.gender) {
        query.gender = newFilter.gender;
    }
    //Добавляем запрос в строку браузера
    router.push({ query });
});

//Заголовок страницы
// title.value = ProductsStore.getCategoryTitle(route.params.category);
onBeforeRouteUpdate(() => {
  
    ProductsStore.isClient = false;    
  
    
})
</script>

<template>
    
    <div v-if="ProductsStore.isClient"
    class="categories page">
        <!-- <ScrollVue>
            <template #content> -->
                    <div class="categories__nav page-nav">
                        <h1 class="categories__title page-title">{{ title ? title[1] : ''  }}</h1>
                        <button 
                        @click="ProductsStore.openFilters"
                        class="categories__filter-btn">
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
            <!-- </template>
        </ScrollVue> -->
        <Transition name="modal">
            <FiltersVue v-show="ProductsStore.areFiltersOpened" :filters="filters" />
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