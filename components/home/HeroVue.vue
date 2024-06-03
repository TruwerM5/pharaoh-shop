<script setup lang="ts">



const banners = ref<{id: number; image: string;}[]>([
    {
    id: 1,
    image: 'reebok-banner.jpg'
    },{
    id: 2,
    image: 'jackets-banner.jpg'
    },{
    id: 3,
    image: 'shirts-banner.jpg'
    },{
    id: 4,
    image: 'stone-island-banner.jpg'
    },{
    id: 5,
    image: 'stone-island-banner2.jpg'
    },{
    id: 6,
    image: 'stone-island-banner3.jpg'
    },{
    id: 7,
    image: 'adidas-banner.jpg'
    },{
    id: 8,
    image: 'new-balance-banner2.jpg'
    },{
    id: 9,
    image: 'tnf-banner.jpg'
    },{
    id: 10,
    image: 'tnf-banner2.jpg'
    },
]);

const currentIndex = ref(0);
const currentBanner = ref(banners.value[0]);

function move() {
    if(currentIndex.value < banners.value.length - 1) {
        currentIndex.value++;
    } else {
        currentIndex.value = 0;
    }

    currentBanner.value = banners.value[currentIndex.value];
}



onMounted(() => {
    setInterval(move, 1200);
});
</script>

<template>
    <div class="hero">
        <div class="hero__inner">
            <Transition  name="fade">
                <img v-if="banners[currentIndex].id"
                :src="`/images/${banners[currentIndex].image}`" 
                :key="currentIndex" 
                :alt="`${banners[currentIndex].id}`"
                class="hero__image">
            </Transition>
            <div class="hero__content">
                <h1 class="hero__title page-title">Pharaoh shop</h1>
            </div>
        </div>
    </div>
</template>

<style lang="sass" scoped>

.hero
    min-height: 90vh
    position: relative
    &__title
        z-index: 2
        font-family: Garamond
        text-transform: uppercase
        margin: 0
        background-color: #000
        color: #fff
    &__inner
        height: 100%
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
.fade-leave-active,
.fade-enter-active
    transition: all .5s

.fade-enter-from,
.fade-leave-to
    opacity: 0

</style>