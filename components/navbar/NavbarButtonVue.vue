<script setup lang="ts">

</script>



<template>
    <button class="nav-toggle-btn">
        <span v-for="span in 3"
        :class="[`nav-toggle-btn__icon nav-toggle-btn__icon_${span}`]"></span>
    </button>
</template>

<style lang="sass" scoped>
.nav-toggle-btn
    position: absolute
    right: 25px
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
        &_2
            top: 50%
            transform: translateY(-50%)
        &_3
            bottom: 0
            transform-origin: bottom left
</style>