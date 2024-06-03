<script setup lang="ts">
//Cart page
import { useCartStore } from '~/stores/cart.store';
const CartStore = useCartStore();
const isClient = ref(false);

onMounted(() => {
    isClient.value = true;
})
</script>

<template>
        
        <div v-if="isClient"
        class="cart page h-full">
            <h1 class="cart__title page-title">Корзина ({{ CartStore.getCartCount }})</h1>
            <template v-if="CartStore.getCartCount == 0">
                <AlertVue>
                    <template #message>
                        <span class="cart__message text-[25px] text-left">В корзине нет товаров</span>
                    </template>
                </AlertVue>
            </template>
            <div v-else class="cart__inner h-full">
                <ScrollVue class="flex flex-col flex-1">
                    <template #content>
                        <div class="flex flex-col justify-between h-full flex-1">
                            <CartListVue :cart-list="CartStore.cart" />
                            <button @click="CartStore.openCheckout"
                            class="cart__open-checkout-button primary-button">Заказать</button>
                        </div>
                        
                    </template>
                </ScrollVue>
            </div>
            <Transition name="modal">
                <ModalWindowVue v-if="CartStore.isModalOpened" />
            </Transition>
            
            <Transition name="modal" >
                <CheckoutVue v-if="CartStore.isCheckoutOpened" />
            </Transition>
        </div>
</template>

<style lang="sass" scoped>
.cart
    display: flex
    flex-direction: column
    flex: 1
    min-width: 100%
    &__inner
        flex: 1
        display: flex
        flex-direction: column
    &__open-checkout-button
        margin-bottom: 40px
</style>