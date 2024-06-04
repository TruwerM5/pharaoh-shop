<script setup lang="ts">

defineProps({
    isOpened: {
        type: Boolean,
        required: true,
    }
})

</script>



<template>
    <button class="nav-toggle-btn">
        <span v-for="span in 3"
        :class="[`nav-toggle-btn__icon nav-toggle-btn__icon_${span}`, {'moved': isOpened}]"></span>
    </button>
</template>

<style lang="sass" scoped>
.nav-toggle-btn
    position: relative
    width: 25px
    height: 20px
    @media screen and (min-width: 1280px)
        display: none
    &__icon
        position: absolute
        left: 0
        width: 100%
        height: 2px
        background-color: #fff
        border-radius: 1px
        transition: .2s
        &_1
            top: 0
            transform-origin: top left
            &.moved
                transform: rotate(45deg)
        &_2
            top: 50%
            transform: translateY(-50%)
            &.moved
                opacity: 0
                left: -20px
        &_3
            bottom: 0
            transform-origin: bottom left
            &.moved
                transform: rotate(-45deg)                

</style>