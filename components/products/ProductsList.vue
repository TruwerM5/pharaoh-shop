<script setup lang="ts">
//Wrapper for product items
import type { Product } from '~/types/product';
import { useNavStore } from '#imports';
import { useProductsStore} from '#imports';

const route = useRoute();

const ProductsStore = useProductsStore();
const props = defineProps<{ grid: number;}>();


if(route.params.category) {
    ProductsStore.filterParam = route.params.category;
} else if(route.params.season) {
    ProductsStore.filterParam = route.params.season;
}

onMounted(() => {
    ProductsStore.setFilters();
});


onBeforeRouteUpdate(() => {
    console.log('Updated');
    ProductsStore.setFilters();
})

</script>

<template>
    <div class="products-list">
        <template v-if="ProductsStore.currentProducts.length > 0">
            <ul
            class="products-list__inner" :style="{gridTemplateColumns: `repeat(${grid}, 1fr)`}">
            <!-- <TransitionGroup name="products"> -->
                <ProductsItemVue v-for="item in ProductsStore.currentProducts" :key="item.id" :product="item" />
            <!-- </TransitionGroup> -->
        </ul>
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