<script lang="ts" setup>

import type { Product } from '~/types/product';

const props = defineProps<{product: Product}>();

</script>

<template>
    <li class="product-item">
        <fieldset class="product-item__inner">
            <NuxtLink :to="{path: `/products/${product.id}`}">
                <img :src="`/images/${product.images[0]}`" 
                :alt="product.name"
                class="product-item__image">
            </NuxtLink>
            
            <figcaption class="product-item__info">
                <span class="product-item__price">
                    {{ product.price }} &#8381;	
                </span>
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
    padding: 5px
    display: flex
    justify-content: center
    border: 1px solid #383636
    border-radius: 10px
    overflow: hidden
    &__inner
        position: relative
        max-width: 100%
    &__image
        display: block
        border-radius: 10px
        object-position: center
        object-fit: cover
        max-width: 100%
    &__info
        padding-inline: 10px 
        margin-block: 10px
        display: flex
        flex-direction: column
        gap: 3px
    &__name
        display: -webkit-box
        -webkit-line-clamp: 1
        -webkit-box-orient: vertical
        font-size: 20px
        overflow: hidden
        text-overflow: ellipsis

    &__price
        font-size: 17px
</style>