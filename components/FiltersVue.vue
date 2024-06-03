<script setup lang="ts">

import { useProductsStore } from '#imports';



defineProps<{filters: {gender: string; brand: string;}}>();

const brandsList = ref(['adidas', 'new-balance', 'puma', 'reebok', 'carthartt', 'nike']);
const ProductsStore = useProductsStore();
//price gender color brand



// onBeforeRouteUpdate((to, from) => {
//     ProductsStore.setFilters(props.category, to.query.brand, to.query.gender)
// })



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
