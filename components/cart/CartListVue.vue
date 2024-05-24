<script setup lang="ts">
//Wrapper for products in cart
import type { CartProduct } from '~/types/product';
import { useCartStore } from '#imports';


const props = defineProps<{cartList: CartProduct[]}>();

const CartStore = useCartStore();


</script>


<template>
    <div class="cart-list">
        <ul class="cart-list__content">
            <TransitionGroup name="hide">
                <CartItemVue v-for="item in cartList" :key="item.id" :cartproduct="item" class="cart-list__item" />
            </TransitionGroup>
        </ul>
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

    
// .hide-move,
// .hide-leave-active
//     transition: all .5s ease

// .hide-leave-to
//     opacity: 0
//     transform: translateX(100%)

// .hide-leave-active
//     position: fixed
//     left: 0
//     top: auto
//     bottom: auto
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