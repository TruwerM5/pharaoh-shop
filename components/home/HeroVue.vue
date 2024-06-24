<script setup lang="ts">



// const banners = ref<{id: number; image: string;}[]>([

//     {
//     id: 1,
//     image: 'reebok-banner.jpg'
//     },{
//     id: 2,
//     image: 'jackets-banner.jpg'
//     },{
//     id: 3,
//     image: 'shirts-banner.jpg'
//     },{
//     id: 4,
//     image: 'stone-island-banner.jpg'
//     },{
//     id: 5,
//     image: 'stone-island-banner2.jpg'
//     },{
//     id: 6,
//     image: 'stone-island-banner3.jpg'
//     },{
//     id: 7,
//     image: 'adidas-banner.jpg'
//     },{
//     id: 8,
//     image: 'new-balance-banner2.jpg'
//     },{
//     id: 9,
//     image: 'tnf-banner3.jpg'
//     },{
//     id: 10,
//     image: 'tnf-banner2.jpg'
//     },
// ]);

// const currentIndex = ref(0);
// const currentBanner = ref(banners.value[0]);

// function move() {
//     if(currentIndex.value < banners.value.length - 1) {
//         currentIndex.value++;
//     } else {
//         currentIndex.value = 0;
//     }

//     currentBanner.value = banners.value[currentIndex.value];
// }



// onMounted(() => {
//     setInterval(move, 6000);
// });

const banners = ref<string[]>([
    'banner-2',
    'banner-1',
    'banner-3'
]);
const isMounted = ref(false);

onMounted(() => {
    setTimeout(() => {
        isMounted.value = true;
    }, 2000);
});

</script>

<template>
    <div class="hero">
        <div class="hero__inner">
            <div v-for="banner in banners" :key="banner" 
            class="banner">
                <img :src="`/images/${banner}.jpg`" alt="Banner" class="banner__img">
            </div>
        </div>
        <div class="hero__outset">
            <NuxtLink :to="{path: '/season/summer'}" class="hero__button">
                Летняя коллекция
                <img src="/images/arrow-icon-white.svg" alt="Перейти">
            </NuxtLink>
            <!-- <div class="hero__title-wrapper">
                <h1 :class="['hero__title', {'active': isMounted}]">Pharaoh shop</h1>
            </div> -->
        </div>
    </div>
</template>

<style lang="sass" scoped>

.hero
    position: relative
    &__title
        position: absolute
        height: 100%
        width: 100%
        transform: translateY(-100%)
        opacity: 0
        font-family: Garamond
        text-transform: uppercase
        text-align: center
        color: #fff
        font-size: 36px
        font-weight: 600
        transition: transform .5s ease-in-out, opacity .5s ease-in-out
        &.active
          transform: translateY(0)  
          opacity: 1
    &__title-wrapper
        position: relative
        width: 100%
        height: 70px
        overflow: hidden
    &__inner
        height: 100%
        display: grid
        grid-template-columns: 0 1fr 0
        @media screen and (min-width: 450px)
            grid-template-columns: 1fr 1fr 1fr
    &__content
        position: absolute
        width: 100%
        text-align: center
        bottom: 0
        z-index: 2
    &__image
        position: absolute
        width: 100%
        height: 100%
        object-fit: cover
        object-position: center
    &__outset
        position: absolute
        width: 100%
        height: 100%
        top: 0
        left: 0
        padding: 30px
        display: flex
        align-items: flex-end
        justify-content: center
        background-color: rgba(0, 0, 0, 0.45)
        z-index: 1
        @media screen and (min-width: 1024px)
            padding: 70px
    &__button
        display: flex
        gap: 10px
        padding: 5px 10px
        font-size: 20px
        font-weight: 500
        color: #fff
        border: 1px solid #fff
        position: absolute
        @media screen and (min-width: 1024px)
            gap: 15px
            padding: 10px 20px
            font-size: 26px
            border-width: 2px
.fade-leave-active,
.fade-enter-active
    transition: all .2s

.fade-enter-from,
.fade-leave-to
    opacity: 0

</style>