<script setup lang="ts">

import { useProductsStore } from '#imports';
const router = useRouter();
const ProductsStore = useProductsStore();
const brandsList = ref(['adidas', 'new-balance', 'puma', 'reebok', 'carthartt', 'nike']);

//price gender color brand
const props = defineProps<{category: string | string[];}>();
const filters = ref({
    gender: <'male' | 'female' | 'unisex' | ''>(''),
    brand: '',
    
});


onBeforeRouteUpdate((to, from) => {
    ProductsStore.setFilters(props.category, to.query.brand, to.query.gender)
})

watch(filters.value, (newFilter) => {
   //Отслеживаем изменения внутри filters и сразу применяем 
    let query: {brand?: string; gender?: string;} = {
        
    };
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
</script>





<template>
    <div class="filters modal">    
        <div class="filters__inner">
            <div class="filters__block">
                <span class="filters__label">
                    Пол: 
                </span>
                <select v-model="filters.gender"
                    name="gender" id="gender" class="filters__select">
                    <option value="">Не выбрано</option>
                    <option value="unisex">Унисекс</option>
                    <option value="male">Мужской</option>
                    <option value="female">Женский</option>
                </select>
            </div>
            <div class="filters__block">
                <span class="filters__label">
                    Бренд: 
                </span>
                <select v-model="filters.brand"
                    name="gender" id="gender" class="filters__select">
                    <option value="" selected>Не выбрано</option>
                    <option v-for="brand,i in brandsList" :key="i"
                    :value="brand" class="capitalize">{{ brand }}</option>
                </select>
            </div>
        </div>
        <button 
        @click="ProductsStore.closeFilters"
        class="filters__close-btn modal__close-btn">
            <img src="/images/close-icon.svg" alt="Закрыть" class="filters__close-icon">
        </button>
    </div>
    
</template>
