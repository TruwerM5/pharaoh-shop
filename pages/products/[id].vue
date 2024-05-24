<script setup lang="ts">
//Product details page

import { useProductsStore } from '~/stores/products.store';
import { useCartStore } from '~/stores/cart.store';



const ProductStore = useProductsStore();
const CartStore = useCartStore();
const route = useRoute();
const errorMsg = ref('');
const currentSizeIndex = ref<number>();

function setSizeIndex(sizeIndex: number) {
    currentSizeIndex.value = sizeIndex;
} 

function fetchProductById(id: string | string[]) {
    return ProductStore.getById(Number(id));
};

const product = ref(fetchProductById(route.params.id));

if(!product.value) {
    errorMsg.value = 'Товар не найден.';
} else {
    useHead({
        title: product.value.name,
    });

    if(product.value.sizes) {
        setSizeIndex(0);
    }
    
}

function addToCart() {
    let size: undefined | string = undefined;

    if(product.value) { //If product exists
        if(product.value.sizes && currentSizeIndex.value != undefined) { //If product has sizes
            size = product.value.sizes[currentSizeIndex.value];
        } else { //If product doesn't have sizes (No size)
            size = undefined;
        }

        CartStore.addToCart(product.value, size,  1);
        console.log("Size: ", size);
        console.log("Added product", product.value);
    }
    
}


</script>

<template>
    <div class="product-details page">
        <div v-if="errorMsg" class="error">
            <AlertVue>
                <template #message>
                    <span class="error__text">{{ errorMsg }}</span>
                </template>
            </AlertVue>
        </div>
        <div v-else-if="product" class="product-details__inner">
            <NuxtLink :to="{path: `/categories/${product.category}`,}"
            class="go-back-btn">
                <img class="go-back-btn__icon"
                src="/images/arrow-icon.svg" alt="Назад">
            </NuxtLink>
            <div class="product-info px-[30px]">
                <div class="carousel">
                    <ProductImageVue :images="product.images" />
                </div>
                <div class="product-info__bottom">
                    <span class="block product-info__name">
                        {{ product.name }}
                    </span>
                    <span class="block product-info__price">
                        {{ product.price }}р.
                    </span>
                    <div class="product-info__colors">
                        <span class="product-info__color">Цвет: </span>
                        <span v-for="color,i in product.colors" :key="i"
                        class="product-info__color">
                            {{ color }}
                        </span>
                    </div>
                </div>
                <div class="sizes">
                    <template v-if="product.sizes">
                        <button v-for="size,i in product.sizes" :key="i"
                        @click="setSizeIndex(i)"
                        :class="['sizes__btn', {'selected': currentSizeIndex == i}]">
                            <span class="sizes__text">
                                {{ size }}
                            </span>
                        </button>
                    </template>
                    <template v-else>
                        Без размера
                    </template>
                    
                </div>
                <AddToCartBtnVue @click="addToCart" class="mt-[20px]"/>
            </div>
            <div class="product-about px-[30px]">
                <span class="product-about__title">О товаре</span>
                <p class="product-about__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Odio ab reprehenderit dolores minus beatae, aperiam 
                    voluptatem dicta in dolor, facilis et excepturi, 
                    distinctio quas debitis soluta at exercitationem 
                    labore quos.</p>
            </div>
        </div>
    </div>
    
</template>

<style lang="sass" scoped>

.product-details
    position: relative
    
.product-info
    display: flex
    flex-direction: column
    gap: 10px
    &__name
        font-size: 20px
    &__price
        font-size: 22px
    &__color
        font-size: 14px
.error
    &__text
        font-size: 20px

.go-back-btn
    position: absolute
    top: 0
    right: 30px
    display: inline-block
    padding: 5px
    border: 1px solid #000


.sizes
    display: flex
    align-items: center
    flex-wrap: wrap
    gap: 5px
    &__title
        font-size: 14px
    &__text
        font-size: 12px
        text-transform: uppercase
    &__btn
        padding: 5px
        width: 30px
        height: 30px
        display: flex
        align-items: center
        justify-content: center
        border: 1px solid #000
        transition: color .2s ease-in-out, background-color .2s ease-in-out
        &.selected
            color: #fff
            background-color: #000

.product-about
    margin-block: 35px
    &__title
        font-size: 26px
    &__text
        font-size: 16px
</style>