<script setup lang="ts">

import { useCartStore } from '#imports';
const CartStore = useCartStore();


</script>



<template>
    <div class="checkout modal">
        <button class="checkout__close-btn modal__close-btn" @click="CartStore.closeCheckout">
            <img src="/images/close-icon.svg" alt="Отмена">
        </button>
        <div class="checkout__inner">
            <form @submit.prevent class="checkout__form form">
                <div class="checkout__block">
                    <input type="text" name="email" id="email" class="input checkout__input" placeholder="example@mail.ru">
                    <span class="checkout__label">Email*</span>
                </div>
                <div class="checkout__block">
                    <input type="text" name="username" id="username" class="input checkout__input">
                    <span class="checkout__label">Имя*</span>
                </div>
                <div class="checkout__block">
                    <input type="text" name="phone_number" id="phone_number" class="input checkout__input" placeholder="+7(999)-999-99-99">
                    <span class="checkout__label">Номер телефона*</span>
                </div>
                <div class="checkout__block">
                    <input type="text" name="city" id="address" class="input checkout__input">
                    <span class="checkout__label">Город*</span>
                </div>
                <div class="checkout__block">
                    
                    <input type="text" name="street" id="street" class="input checkout__input">
                    <span class="checkout__label">Улица*</span>
                </div>
                <div class="checkout__block">
                    <input type="text" name="house" id="house" class="input checkout__input">
                    <span class="checkout__label">№ дома*</span>
                </div>
                <div class="checkout__block">
                    <input type="text" name="flat" id="flat" class="input checkout__input">
                    <span class="checkout__label">№ квартиры</span>
                </div>
                <div class="checkout__block">
                    <input type="text" name="comment" id="comment" class="input checkout__input">
                    <span class="checkout__label">Комментарий</span>
                </div>
                
            </form>
            <p class="checkout__text">* - обязательное поле</p>
            <button class="primary-button">Заказать</button>
        </div>
    </div>
</template>

<style lang="sass" scoped>
.checkout
    &__form
        display: flex
        flex-direction: column
        gap: 30px
    &__block
        position: relative
    &__label
        position: absolute
        left: 10px
        bottom: 50%
        transform: translateY(50%)
        font-size: 16px
        transition:  all .3s ease-in-out
    &__input
        height: 40px
        min-width: 200px
        padding-inline: 10px
        border: 1px solid #000
        font-size: 16px
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px
        &::placeholder
            opacity: 0
        &:focus
            &::placeholder
                opacity: 1
    &__text
        margin-block: 10px 20px
        color: #6e6b65       
            


.input:focus + span
    bottom: 100%
    left: 0
    transform: translateY(0)
    font-size: 12px
</style>