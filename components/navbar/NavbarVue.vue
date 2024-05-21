<script setup lang="ts">


import NavbarListVue from './NavbarListVue.vue';
import { useNavStore } from '~/stores/nav.store';
import { useCartStore } from '~/stores/cart.store';

const NavStore = useNavStore();
const CartStore = useCartStore();

</script>
<template>
    <nav class="nav">
        <NuxtLink to="/cart"
        class="nav__cart-btn cart-btn">
            <img class="nav__cart-icon"
            src="/images/cart-icon.svg" alt="Корзина">
            <span v-if="CartStore.getCartCount > 0"
            class="cart__quantity">
                {{ CartStore.getCartCount }}
            </span>
        </NuxtLink>
        <NavbarButtonVue @click="NavStore.toggleNav"
        :is-opened="NavStore.is_opened" />
        <div @click.self="NavStore.toggleNav"
        :class="['nav__inner', {'opened': NavStore.is_opened}]">
            <NavbarListVue :class="{'opened': NavStore.is_opened}" :is-opened="NavStore.is_opened" /> 
        </div>
    </nav>
</template>

<style lang="sass" scoped>
.nav
    position: relative
    padding: 10px
    display: flex
    align-items: center
    justify-content: space-between
    z-index: 5
    &__inner
        position: fixed
        top: 75px
        left: 100%
        background-color: transparent
        z-index: -10
        width: 100%
        height: 100%
        transition: background-color .3s ease-in-out
        &.opened
            left: 0
            background-color: rgba(0, 0, 0, 0.3)
            z-index: 4
            transition-delay: .2s
    &__cart-btn
        width: 45px
        position: relative
        display: grid
        place-items: center
        margin-right: 30px
    &__cart-icon
        width: 45px
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

</style>