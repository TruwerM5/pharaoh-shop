<script setup lang="ts">

const year = ref(new Date().getFullYear());


</script>

<template>
    <footer class="footer">
        <div class="footer__inner">
            <a href="https://t.me/pharaohkzn">
                <img class="footer__icon"
                src="/images/telegram-icon.svg" alt="Telegram">
            </a>
        </div>
    </footer>
</template>

<style lang="sass" scoped>
.footer
    padding-block: 15px
    background-color: #000
    color: #fff
    &__inner
        display: flex
        padding-inline: 15px
        justify-content: center
    &__icon
        width: 35px
</style>