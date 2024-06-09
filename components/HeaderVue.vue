<script setup lang="ts">

import { useNavStore } from '#imports';
const NavStore = useNavStore();


</script>


<template>
    <header class="header">
        <div class="header__inner header__inner_mobile">
        <Transition name="modal">
            <div v-if="NavStore.is_opened"
            class="header__top">
            <!-- Search icon -->
            <!-- Contact link m.b. -->
                <NuxtLink to="/cart">
                    <img src="/images/cart-icon.svg" alt="Корзина" class="header__cart-icon">
                </NuxtLink>
            </div>
        </Transition>
        
          <div class="header__logo-wrapper">
            <NuxtLink to="/" class="header__logo-link">
                <img src="/images/logo.svg" alt="Logo" class="header__logo-img">
                 Pharaoh shop
            </NuxtLink>
          </div>  
          <NavbarVue />
          
        </div>
        
    </header>
</template>

<style scoped lang="sass">
.header
    // position: fixed
    // width: 100%
    // left: 0
    // top: 0
    padding-block: 8px
    z-index: 10
    background-color: #000
    @media screen and (min-width: 1280px)
        padding-block: 8px 3px
    &__inner
        display: flex
        justify-content: center
        align-items: center
        @media screen and (min-width: 1280px)
            flex-direction: column
        
    &__logo-link
        font-family: Garamond
        font-size: 24px
        text-transform: uppercase
        color: #fff
        @media screen and (min-width: 1280px)
            display: flex
            flex-direction: column
            justify-content: center
            align-items: center
            font-size: 16px
    &__logo-img
        display: none
        @media screen and (min-width: 1280px)
            display: block
            width: 80px
    &__top
        padding-inline: 30px
        width: 100%
        display: flex
        justify-content: flex-end
        border-bottom: 1px solid #555
    &__cart-icon
        width: 40px
        

</style>