<script setup lang="ts">    
//Product in cart
import type { CartProduct } from '~/types/product';
import { useCartStore } from '~/stores/cart.store';



const props = defineProps<{cartproduct: CartProduct}>();

const CartStore = useCartStore();

function decrement() {
    if(props.cartproduct.quantity < 2) { // if true open modal to remove product from cart
        onRemoveClick();
        return;
    }
    props.cartproduct.quantity--; //else decrement quantity
}

function increment() {
    if(props.cartproduct.quantity > 9) {
        return;
    }
    props.cartproduct.quantity++;
}

function onRemoveClick() {
    CartStore.setProductOnRemove(props.cartproduct.id, props.cartproduct.size);
    CartStore.openModal();
    console.log(" On delete from cart item ", CartStore.productOnRemove);
}


</script>

<template>
    
    <li class="product">
        <div class="product__content">
            <NuxtLink :to="{path: `/products/${cartproduct.id}`}" class="product__link">
                <img :src="`/images/${cartproduct.images[0]}`" 
                :alt="cartproduct.name" class="product__image">
            </NuxtLink>
            <div class="product__info">
                <span class="product__name block">{{ cartproduct.name }}</span>
                <span class="product__size block">Размер: 
                    <span class="uppercase">
                    {{ cartproduct.size }}
                    </span> 
                </span>
                <span class="product__color block">Цвет:
                    <span v-for="color in cartproduct.colors">{{color}}</span>
                </span>
                <div class="product__quantity-block">
                    <button @click="decrement"
                    class="product__btn product__btn_decrement">
                        <img src="/images/minus-icon.svg" alt="Удалить">
                    </button>
                    <span class="product__quantity">{{ cartproduct.quantity }}</span>
                    <button @click="increment"
                    class="product__btn product__btn_increment">
                        <img src="/images/plus-icon.svg" alt="Добавить">
                    </button>
                </div>
            </div>
            <button class="product__remove-btn">
                <img 
                src="/images/close-icon.svg" 
                alt="Удалить из корзины" 
                class="product__remove-icon"
                @click="onRemoveClick">
            </button>
        </div>
    </li>
    
    
</template>

<style lang="sass" scoped>
.product
    position: relative
    padding-block: 5px
    border-bottom: 1px solid #000
    &__content
        display: grid
        grid-template-columns: 100px 1fr
        gap: 10px
    &__image
        height: 100px
        width: 100%
        object-fit: contain
    &__info
        display: flex
        flex-direction: column
        gap: 2px
        justify-content: flex-start
        align-items: flex-start
    &__name
        font-size: 14px
    &__size,&__color
        font-size: 12px
    &__quantity-block
        display: flex
        align-items: center
        gap: 20px
        margin-top: auto
    &__quantity
        font-size: 20px
    &__remove-btn
        position: absolute
        top: 5px
        right: 5px
        padding: 3px
    &__remove-icon
        width: 12px
    &__btn
        width: 22px
        height: 22px
        display: flex
        justify-content: center
        align-items: center
        border: 1px solid #000
        &_increment
            background-color: #000

.hide-product-enter-active,
.hide-product-leave-active
    position: relative

.hide-product-leave-to
    left: 200px
    opacity: 0
</style>