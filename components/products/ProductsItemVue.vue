<script lang="ts" setup>

import type { Product } from '~/types/product';

const props = defineProps<{product: Product}>();

</script>

<template>
        <li class="product-item">
        <fieldset class="product-item__inner">
            <NuxtLink :to="{path: `/products/${product.id}`}" class="product-item__link">
                <img :src="`/images/${product.images[0]}`" 
                :alt="product.name"
                class="product-item__image">
                <span class="product-item__price">
                    {{ product.price }} &#8381;	
                </span>
            </NuxtLink>
            
            <figcaption class="product-item__info">
                
                <span class="product-item__name">
                    {{ product.name }}
                </span>
            </figcaption>
        </fieldset>
    </li>
    
</template>

<style lang="sass" scoped>
.product-item
    position: relative
    &__inner
        position: relative
        max-width: 100%
        height: 100%
        display: flex
        flex-direction: column
        justify-content: space-between
        overflow: hidden
        @media screen and (min-width: 1024px)
            &:hover 
                .product-item__price
                    bottom: 10px
                .product-item__image
                    opacity: 0.7
    &__link
        position: relative
        display: block
        height: 100%
        // @media screen and (min-width: 1280px)
        //     overflow: hidden
    &__image
        display: block
        object-position: center
        object-fit: cover
        width: 100%
        height: 100%
        @media screen and (min-width: 1280px)
            transition: opacity .3s ease-in-out
    &__info
        position: relative
        padding-inline: 10px 
        margin-block: 10px
        display: flex
        flex-direction: column
        gap: 3px
        flex: 1
    &__name
        font-size: 14px
        @media screen and (min-width: 1024px)
            font-size: 17px
        @media screen and (min-width: 1280px)
            font-size: 20px
    &__price
        position: absolute
        bottom: 0
        padding: 3px
        left: 5px
        font-size: 14px
        background-color: #fff
        @media screen and (min-width: 1024px)
            font-size: 18px
            transition: bottom .3s ease-in-out
</style>