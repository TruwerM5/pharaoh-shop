<script setup lang="ts">


import NavbarListVue from './NavbarListVue.vue';
import { useNavStore } from '~/stores/nav.store';
import { useCartStore } from '~/stores/cart.store';

const NavStore = useNavStore();
const CartStore = useCartStore();
const cartCount = computed(() => CartStore.getCartCount);
const isDesktop = ref(false);
const isClient = ref(false);

onMounted(() => {
    isClient.value = true;
    getDeviceWidth();
    window.addEventListener('resize', (e) => {
        getDeviceWidth();
    });
});

function getDeviceWidth() {
    if(window.innerWidth >= 1280) {
        NavStore.is_opened = true;
    } else {
        NavStore.is_opened = false;
    }
}

</script>
<template>
    <nav class="nav">
        <NavbarButtonVue @click="NavStore.toggleNav" />
        <Transition name="modal">
            <div v-if="NavStore.is_opened"
            :class="['nav__inner', {'opened': NavStore.is_opened}]">
            <div class="nav__top">
                <NuxtLink to="/cart" @click="NavStore.closeNav">
                    <img src="/images/cart-icon.svg" alt="Корзина" class="nav__cart-icon">
                </NuxtLink>
                <button class="nav__close-btn" @click="NavStore.toggleNav">
                    <img src="/images/close-icon-white.svg" alt="Закрыть" class="nav__close-icon">
                </button>
            </div>
            <NavbarListVue /> 
        </div>
        </Transition>
        
    </nav>
</template>

<style lang="sass" scoped>
.nav
    display: flex
    align-items: center
    justify-content: space-between
    z-index: 5
    @media screen and (min-width: 1280px)
        flex: 1
        padding: 0
        height: 100%
    &__inner
        position: fixed
        left: 0
        top: 0
        background-color: transparent
        z-index: -10
        width: 100%
        height: 100%
        @media screen and (min-width: 1280px)
            position: static
        &.opened
            background-color: #000
            z-index: 4
    &__top
        display: flex
        justify-content: flex-end
        align-items: center
        gap: 20px
        padding: 10px
        border-bottom: 1px solid #ebebeb
        @media screen and (min-width: 1280px)
            display: none
    &__close-btn
        display: block
    &__close-icon
        display: block
        width: 30px
        margin-left: auto
    &__cart-icon
        width: 35px
.cart
    &__quantity
        position: absolute
        display: block
        top: -8px
        right: -5px
        width: 20px
        height: 20px
        border-radius: 50%
        font-size: 14px
        text-align: center
        color: #000
        background-color: #fff
        @media screen and (min-width: 1280px)
            top: -12px
            right: 0
            width: 30px
            height: 30px
            font-size: 20px
</style>