<script setup lang="ts">
//Wrapper for products in cart
import type { CartProduct } from '~/types/product';
import { useCartStore } from '#imports';


const props = defineProps<{cartList: CartProduct[]}>();

const CartStore = useCartStore();


</script>


<template>
    <div class="cart-list">
        <!-- Cart elements -->
        <ul class="cart-list__content">
            <TransitionGroup name="hide">
                <CartItemVue v-for="item in cartList" :key="item.id" :cartproduct="item" class="cart-list__item" />
            </TransitionGroup>
        </ul>
        <!-- Total cart sum -->
        <span class="cart-list__total-sum flex justify-between items-center mt-[10px] font-semibold">
           Итого: <span class="ml-auto lg:ml-[10px]">{{ CartStore.getTotalSum }}р.</span>
        </span>
        <span class="cart-list__text block lg:text-right">Цена указана без учета доставки</span>
    </div>
</template>

<style scoped lang="sass">
.cart-list
    position: relative
    &__content
        display: flex
        flex-direction: column
        gap: 10px
    &__item
        transition: all .5s ease-in-out
    &__total-sum
        font-size: 24px
        @media screen and (min-width: 1280px)
            justify-content: flex-end
    &__text
        font-size: 12px
        color: #6e6b65
.hide-move,
.hide-leave-active,
.hide-enter-active
    position: absolute
    transition: all 1s ease-in-out

.hide-leave-to
    opacity: 0
    transform: translateX(50%)

.hide-leave-active
    position: relative
    width: 100%
    top: 50%
    bottom: 50%

.hide-enter, .hide-leave-to
    opacity: 0

.hide-leave-to
    transform: translateX(100%)
</style>