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
    // padding: 5px
    border-radius: 10px
    overflow: hidden
    &__inner
        position: relative
        max-width: 100%
        height: 100%
        display: flex
        flex-direction: column
        justify-content: space-between
    &__link
        position: relative
        display: block
        height: 100%
        flex: 1
    &__image
        display: block
        border-radius: 10px
        object-position: center
        object-fit: cover
        width: 100%
        height: 100%
        min-height: 200px
    &__info
        position: relative
        padding-inline: 10px 
        margin-block: 10px
        display: flex
        flex-direction: column
        gap: 3px
        flex: 1
    &__name
        // display: -webkit-box
        // -webkit-line-clamp: 1
        // -webkit-box-orient: vertical
        font-size: 13px
        // overflow: hidden
        // text-overflow: ellipsis

    &__price
        position: absolute
        bottom: 0
        padding: 3px
        left: 5px
        font-size: 14px
        background-color: #fff
</style>