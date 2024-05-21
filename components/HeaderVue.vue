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
    &__inner
        display: flex
        align-items: center
        justify-content: space-between
    &__logo-img
        max-width: 75px
        filter: invert(1)

</style>