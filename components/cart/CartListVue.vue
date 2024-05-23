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
                <CartItemVue v-for="item in cartList" :key="item.id" :cartproduct="item" />
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

    
.hide-move,
.hide-leave-active
    transition: all .5s ease

.hide-leave-to
    opacity: 0
    transform: translateX(100%)

.hide-leave-active
    position: fixed
    left: 0
    top: auto
    bottom: auto
</style>