<script setup lang="ts">



</script>


<template>
    <header class="header">
        <div class="header__inner">
          <div class="header__logo-wrapper">
            <NuxtLink to="/" class="header__logo-link">
                <img src="/images/3.png" alt="Logo" class="header__logo-img">
            </NuxtLink>
          </div>  
          <NavbarVue />
          
        </div>
        
    </header>
</template>

<style scoped lang="sass">
.header
    position: fixed
    width: 100%
    left: 0
    top: 0
    z-index: 10
    background-color: #000
    @media screen and (min-width: 1280px)
        position: relative
        height: 100px
    &__inner
        display: flex
        align-items: center
        justify-content: space-between
        @media screen and (min-width: 1280px)
            height: 100%
            justify-content: flex-start
            align-items: stretch
    &__logo-img
        max-width: 75px
        filter: invert(1)
        @media screen and (min-width: 1280px)
            max-width: 100px
    
        

</style>