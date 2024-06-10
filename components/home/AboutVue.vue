<script setup lang="ts">
</script>

<template>
    <ScrollVue>
        <template #content>
            <div class="about">
                <div class="about__inner">
                    <div class="about__block">
                        <p class="about__text">
                            Добро пожаловать в 
                            <span class="font-[Garamond] uppercase">Pharaoh shop</span>
                            – ваш идеальный модный гид!
                        </p>
                        <p class="about__text">
                            Мы рады приветствовать вас в нашем интернет-магазине, 
                            где стиль и качество встречаются в каждом изделии.
                        </p>
                    </div>
                </div>
            </div>
        </template>
    </ScrollVue>
    

</template>

<style lang="sass" scoped>
.about
    padding: 15px 25px
    max-width: 500px
    margin: 0 auto
    &__text
        font-size: 22px
        font-family: Garamond
        text-align: justify
</style>