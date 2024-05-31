<script setup lang="ts">

import { useProductsStore } from '#imports';

const ProductsStore = useProductsStore();


//price gender color brand

</script>





<template>
    <!-- <Transition name="outset"> -->
        <div class="filters">    
            <h1>Filters</h1>
            <button 
            @click="ProductsStore.closeFilters"
            class="filters__close-btn">
                <img src="/images/close-icon.svg" alt="Закрыть" class="filters__close-icon">
            </button>
        </div>
    <!-- </Transition> -->
    
</template>

<style lang="sass" scoped>
.filters
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    background-color: #fff
    z-index: 10
</style>