<script setup lang="ts">
//Cart page
import { useCartStore } from '~/stores/cart.store';
const CartStore = useCartStore();

</script>

<template>
    <div class="cart page">
        <h1 class="cart__title page-title">Корзина</h1>
        <template v-if="CartStore.getCartCount == 0">
            <AlertVue>
                <template #message>
                    <span class="cart__message text-[25px] text-left">В корзине нет товаров</span>
                </template>
            </AlertVue>
        </template>
        <div class="cart__inner">
            <CartListVue :cart-list="CartStore.cart" />
        </div>
        <ModalWindowVue />
    </div>
</template>

<style lang="sass" scoped> 

</style>