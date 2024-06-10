<script setup lang="ts">

const year = ref(new Date().getFullYear());


</script>

<template>
    <footer class="footer">
        <h3 class="footer__title">
            <NuxtLink to="/">Pharaoh shop</NuxtLink>
        </h3>
        <div class="footer__inner">
            
            <div class="footer__block">
                <h4 class="footer__subtitle">Адрес</h4>
                <p class="footer__text">г.Казань, Галиаскара Камала, 18</p>
                
            </div>
            <div class="footer__block">
                <h4 class="footer__subtitle">График работы</h4>
                <p class="footer__text">Понедельник - суббота 12:00-20:00</p>
                <p class="footer__text">Воскресенье 12:00-19:00</p>
            </div>
            <div class="footer__block">
            <h4 class="footer__subtitle">Контакты</h4>
            <a href="https://t.me/pharaohkzn">
                <img class="footer__icon"
                src="/images/telegram-icon.svg" alt="Telegram">
            </a>
            </div>
        </div>
        <div class="footer__bottom">
            <span class="footer__copy">
                &copy; {{ year }} PHARAOH SHOP
            </span>
        </div> 
    </footer>
</template>

<style lang="sass" scoped>
.footer
    padding-block: 15px
    background-color: #000
    color: #fff
    // @media screen and (min-width: 1280px)
    //     padding-block: 40px
    &__inner
        padding-inline: 15px
        border-bottom: 1px solid #555
        @media screen and (min-width: 1280px)
            display: flex
            justify-content: flex-start
            align-items: flex-start
            gap: 60px
            padding-inline: 60px
    &__title
        font-size: 24px
        font-weight: 500
        font-family: Garamond
        text-transform: uppercase
        padding-inline: 15px
        @media screen and (min-width: 1280px)
            padding-inline: 60px
            margin-bottom: 15px
    &__block
        margin-bottom: 15px
    &__subtitle
        font-size: 18px
        margin-bottom: 7px
        @media screen and (min-width: 1280px)
            font-size: 20px
    &__text
        font-size: 14px
        @media screen and (min-width: 1280px)
            font-size: 16px
    &__icon
        width: 30px
        margin-top: 10px
    &__bottom
        text-align: center
        padding-top: 15px
        font-size: 14px
        color: #aaa
</style>