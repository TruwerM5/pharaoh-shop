<script setup lang="ts">

import { useImagesStore } from '~/stores/images.store';

const ImagesStore = useImagesStore();
const container = ref<any>(null);
const item = ref<any>(null);
const buttons = ref<any>(null);

defineProps<{images: string[];}>();

onMounted(() => {
    // При монтировании галерея остается недоступной из-за v-if
    watch(item, (newValue) => {
        //Поэтому отслеживаем изменения одного из элементов после монтирования
        buttons.value.forEach((button: any) => {
            //Добавляем к каждой кнопке обработчик
            button.addEventListener('click', (e: any) => {
                //Скроллим при нажатии на кнопку 
                container.value.scrollTo(newValue[0].clientWidth * button.dataset.index, 0);
            });
        })
    });
});

</script>

<template>
    <div v-if="ImagesStore.isGalleryOpened"
    class="images-details">
        <div class="images-details__inner snap-x snap-mandatory" ref="container">
            <ul class="images-details__list">
                <li v-for="image,i in images" :key="i"
                class="images-details__item snap-center block min-h-full"
                ref="item"
                :data-index="i">
                    <img :src="`/images/${image}`" :alt="`${image}`" class="images-details__image">
                </li>
            </ul>
        </div>
        <div class="images-details__buttons">
            <button v-for="icon,i in images" :key="i"
            @click="ImagesStore.setCurrentIndex(i)"
            :class="['images-details__btn']"
            ref="buttons"
            :data-index="i">
                <img :src="`/images/${icon}`" :alt="`${i}`" class="images-details__btn-icon">
            </button>
        </div>
        <button @click="ImagesStore.closeGallery"
        class="images-details__close-btn">
            <img src="/images/close-icon.svg" alt="Закрыть" class="images-details__icon">
        </button>
    </div>
</template>

<style lang="sass" scoped>
.images-details
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    padding: 50px 40px
    display: flex
    flex-direction: column
    justify-content: center
    z-index: 10
    background-color: #fff
    // overflowx-x: scroll
    // overflow-y: hidden
    &__inner
        position: relative
        overflow-x: scroll
        overflow-y: hidden
        scroll-behavior: smooth
        &::-webkit-scrollbar
            display: none
    &__list
        margin-bottom: 15px
        display: flex
        gap: 15px
        transition: transform .2s ease-in-out
    &__item
        min-width: 100%
    &__buttons
        display: flex
        justify-content: center
        gap: 8px
    &__btn
        position: relative
        border-radius: 5px
        width: 40px
        height: 40px
        &.active
            &::after
                content: ''
                display: block
                position: absolute
                bottom: -7px
                width: 100%
                height: 3px
                background-color: #000 
                border-radius: 2px
    &__btn-icon
        width: 40px
        height: 40px
        object-fit: cover
        object-position: center center
    &__close-btn
        position: absolute
        right: 20px
        top: 20px
    &__image
        height: 100%
        object-fit: cover
</style>