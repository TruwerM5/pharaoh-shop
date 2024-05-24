<script setup lang="ts">
//Cart page
import { useCartStore } from '~/stores/cart.store';
const CartStore = useCartStore();

</script>

<template>
    
        <div class="cart page">
            <h1 class="cart__title page-title">Корзина ({{ CartStore.getCartCount }})</h1>
            <template v-if="CartStore.getCartCount == 0">
                <AlertVue>
                    <template #message>
                        <span class="cart__message text-[25px] text-left">В корзине нет товаров</span>
                    </template>
                </AlertVue>
            </template>
            <div v-else class="cart__inner">
                <ScrollVue>
                    <template #content>
                        <CartListVue :cart-list="CartStore.cart" />
                    </template>
                    
                </ScrollVue>
            </div>
            <ModalWindowVue />
        </div>
</template>

<style lang="sass" scoped> 

</style>