<script setup lang="ts">

import { useProductsStore } from '#imports';

import type { Filters } from '~/types/filters';

defineProps<{filters: Filters}>();

const brandsList = ref<string[]>([
    'adidas', 
    'new-balance', 
    'puma', 
    'reebok', 
    'carhartt', 
    'nike', 
    'the-north-face', 
    'stone-island'
]);
const gendersList = ref<{gender: string; title: string}[]>([
    {
        gender: 'male',
        title: 'Мужской'
    },{
        gender: 'female',
        title: 'Женский'
    },{
        gender: 'unisex',
        title: 'Унисекс'
    },
])
const ProductsStore = useProductsStore();


//price gender color brand

</script>
<template>
    <div class="filters modal">    
        <div class="filters__inner">
            <div class="filters__block">
                <span class="filters__label">
                    Пол: 
                </span>
                <select v-model="filters.gender" placeholder="Не выбрано"
                    name="gender" id="gender" class="filters__select">
                    <option value="" selected placeholder="Не выбрано">Не выбрано</option>
                    <option v-for="gender,i in gendersList" :key="i"
                    :value="gender.gender">{{ gender.title }}</option>
                    <!-- <option value="female">Женский</option>
                    <option value="unisex">Унисекс</option> -->
                </select>
            </div>
            <div class="filters__block">
                <span class="filters__label">
                    Бренд: 
                </span>
                <select v-model="filters.brand" placeholder="Не выбрано"
                    name="brand" id="brand" class="filters__select">
                    <option value="" selected placeholder="Не выбрано">Не выбрано</option>
                    <option v-for="brand,i in brandsList" :key="i"
                    :value="brand" class="capitalize">{{ brand.split('-').join(' ') }}</option>
                </select>
            </div>
            <div class="filters__block">
                <span class="filters__label block mb-[10px]">
                   Цена 
                </span>
                <input 
                v-model="filters.minPrice" 
                type="number" 
                class="filters__input" 
                placeholder="От"
                id="min_price"
                name="min_price"
                inputmode="numeric"
                pattern="[0-9]*">
                <input 
                v-model="filters.maxPrice" 
                type="number" 
                class="filters__input" 
                placeholder="До"
                id="max_price"
                name="max_price"
                inputmode="numeric"
                pattern="[0-9]*">
            </div>
            <slot name="button">

            </slot>
        </div>
        <button 
        @click="ProductsStore.closeFilters"
        class="filters__close-btn modal__close-btn">
            <img src="/images/close-icon.svg" alt="Закрыть" class="filters__close-icon modal__close-icon">
        </button>
    </div>
    
</template>

<style lang="sass" scoped>
.filters
    padding-inline: 20px
    &__inner
        display: flex
        flex-direction: column
        width: 100%
        height: 100%
        max-width: 500px
        justify-content: flex-start
        align-content: center
        gap: 20px
    &__block
        margin-bottom: 40px
    &__label, &__input, &__select
        font-size: 22px
    &__input
        display: inline-block
        width: 100px
        margin-right: 20px
        padding: 5px
        border-bottom: 1px solid #000
        transition: all .2s
        &:focus
            outline: none
            border-bottom: 5px solid #000
    &__select
        background-color: #fff
        text-transform: capitalize

option
    text-transform: capitalize
</style>