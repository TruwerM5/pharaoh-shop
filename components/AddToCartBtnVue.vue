<script setup lang="ts">
import type { RefSymbol } from '@vue/reactivity';


const isClicked = ref(false);
function moveButton() {
    if(isClicked.value) {
        return;
    }
    isClicked.value = true;
    setTimeout(() => {
        isClicked.value = false;
    }, 800)
};

</script>



<template>
    <button @click="moveButton"
    :class="['add-to-cart-btn primary-button', {'clicked': isClicked}]">
    <span class="add-to-cart-btn__wrapper">
        <span :class="['add-to-cart-btn__inner', {'clicked': isClicked}]">
            <span 
            :class="['add-to-cart-btn__block']">
                <img class="add-to-cart-btn__icon"
                src="/images/cart-icon.svg" alt="Добавить в корзину">
                <span class="add-to-cart-btn__text">В корзину</span>
            </span>
            
        </span>
        <span 
        :class="['add-to-cart-btn__check', {'clicked': isClicked}]">
                <img :src="'/images/check-icon.svg'" alt="Checked" class="add-to-cart-btn__check-icon">
        </span>
    </span>
        
    </button>
</template>

<style lang="sass" scoped>
.add-to-cart-btn
    gap: 7px
    border: none
    transition: background-color .5s ease-in-out
    &.clicked
        background-color: #03fc56
        &::after
            border-color: #03fc56
    &__wrapper
        position: relative
        display: block
        overflow: hidden
    &__inner
        position: relative
        display: flex
        justify-content: center
        align-items: center
        transition: transform .5s ease-in-out
        &.clicked
            transform: translateY(-60px)
    &__icon
        width: 35px
    &__text
        font-size: 16px
        color: #fff
    &__block
        position: relative
        display: flex
        align-items: center
        gap: 5px
        height: fit-content
    &__check
        position: absolute
        bottom: 50%
        transform: translateY(-60px)
        left: 50%
        transition: transform .5s ease-in-out
        &.clicked
            transform: translateY(50%)
    &__check-icon
        width: 20px

</style>