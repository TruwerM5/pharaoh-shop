<script setup lang="ts">
import type { Product } from '~/types/product';
const props = defineProps<{products: Product[]}>();

</script>

<template>
    <div class="carousel">
        <h3 class="carousel__title">Каталог</h3>
        <div class="carousel__inner">
            <ul class="carousel__list">
                <li class="carousel__item">
                    <NuxtLink>

                    </NuxtLink>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="sass" scoped>
</style>