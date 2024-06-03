<script setup lang="ts">
//Cart modal window

import { useCartStore } from '~/stores/cart.store';

const CartStore = useCartStore();

function cancel() {
    CartStore.closeModal();
}

function remove() {
    CartStore.removeFromCart();
}

</script>

<template>
        <div
        class="modal">
        <div class="modal__inner">
            <span class="modal__message">
                Удалить товар из корзины?
            </span>
            <div class="modal__buttons">
                <button @click="cancel"
                class="modal__btn modal__btn_cancel">
                     Нет
                </button>
                <button @click="remove"
                class="modal__btn modal__btn_accept">
                     Да
                </button>
            </div>
            <button @click="cancel"
            class="modal__close-btn">
                <img src="/images/close-icon.svg" alt="Закрыть">
            </button>
        </div>
        </div>
</template>

<style lang="sass" scoped>

.modal-wrapper
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    display: grid
    place-items: center
    background-color: rgba(0, 0, 0, 0.5)
    z-index: 10
    

.modal
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    display: grid
    place-items: center
    background-color: rgba(0, 0, 0, 0.5)
    z-index: 10
    overflow: hidden
    &__inner
        position: relative
        padding: 40px 30px
        background-color: #fff
    &__message
        display: block
        font-size: 18px
        margin-bottom: 10px
    &__close-btn
        position: absolute
        right: 5px
        top: 5px
        padding: 3px
        border: 1px solid #000
    &__buttons
        display: flex
        justify-content: space-around
    &__btn
        display: block
        height: 40px
        width: 100px
        font-size: 16px
        border: 1px solid #000
        &_cancel
            background-color: #000
            color: #fff
</style>