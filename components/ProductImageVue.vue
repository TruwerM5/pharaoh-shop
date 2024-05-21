<script setup lang="ts">

const props = defineProps<{images: string[];}>();

const currentIndex = ref(0);

function moveCarousel(step: number) {
    if(props.images.length < 2) {
        return;
    }

    if(step > 0) {
        if(currentIndex.value < props.images.length - 1) {
            currentIndex.value++;
        } else {
            currentIndex.value = 0;
        }
        
    } else if(step < 0) {
        if(currentIndex.value > 0) {
            currentIndex.value--;
        } else {
            currentIndex.value = props.images.length - 1;
        }
        
    }
    console.log(currentIndex.value);
}


</script>

<template>
    <div class="images-wrapper">
        <div class="product-images">
            <div class="product-images__content"
                :style="{transform: `translateX(${-currentIndex * 100}%)`}">
                <div v-for="image,i in images" :key="i"
                class="product-images__item">
                    <img class="product-images__image"
                    :src="`/images/${image}`" :alt="`Product${i+1}`">
                </div>
            </div>    
        </div>
        <div v-if="images.length > 1"
        class="product-images__buttons">
            <button @click="moveCarousel(-1)"
            class="product-images__btn product-images__btn_prev">
                <img src="/images/chevron-prev.svg" alt="Назад" class="product-images__icon">
            </button>
            <button @click="moveCarousel(1)"
            class="product-images__btn product-images__btn_next">
                <img src="/images/chevron-next.svg" alt="Вперед" class="product-images__icon">
            </button>
        </div>
    </div>
</template>

<style lang="sass" scoped>
.images-wrapper
    position: relative
    padding-inline: 20px
.product-images
    position: relative
    overflow: hidden
    &__content
        position: relative
        display: flex
        justify-content: flex-start
        align-items: stretch
        transition: transform .2s ease-in-out
    &__item
        min-width: 100%
    &__image
        height: 100%
        object-fit: cover
    &__btn
        position: absolute
        top: 50%
        transform: translateY(-50%)
        &_prev
            left: -10px
        &_next
            right: -10px
    &__icon
        width: 25px
</style>