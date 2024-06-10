<script setup lang="ts">
//Wrapper for product items
import type { Product } from '~/types/product';
import { useNavStore } from '#imports';

const props = defineProps<{products: Product[], grid: number;}>();
const container = ref<Product[]>([]);
const currentIndex = ref<number>(0);

function addNextItem() {
    container.value.push(props.products[currentIndex.value]);
    currentIndex.value++;
}   

const timeId = setInterval(() => {
    if(currentIndex.value < props.products.length) {
        addNextItem();
    } else {
        clearInterval(timeId);
    }
}, 300);

</script>

<template>
    <div class="products-list">
        <ul
        class="products-list__inner" :style="{gridTemplateColumns: `repeat(${grid}, 1fr)`}">
        <TransitionGroup name="products">
            <ProductsItemVue v-for="item in container" :key="item.id" :product="item" />
        </TransitionGroup>
            
        </ul>
    </div>
</template>

<style lang="sass" scoped>
.products-list
    &__inner
        display: grid
        grid-template-columns: 1fr 1fr
        gap: 10px
        @media screen and (min-width: 768px)
            grid-template-columns: repeat(4, 1fr)
            margin-inline: 24px


.products-enter-active,
.products-leave-active
    transition: all .6s

.products-enter-from
    opacity: 0
    transform: translateY(30px)
</style>