
<script setup lang="ts">
import { useNavStore } from '~/stores/nav.store';


const NavStore = useNavStore();

const props = defineProps({
    item: {
        type: Object,
        required: true,
    }
});

const isSubMenuOpened = ref(false);

function toggleSubMenu(id: number) {
    if(process.client && window.innerWidth < 1280) {
        isSubMenuOpened.value = !isSubMenuOpened.value;
    }
    
}

</script>

<template>
    <li @click="toggleSubMenu(item.id)"
    class="nav-item" >
        <span class="nav-item__title">
            {{ item.title }}
            <img :class="['nav-item__icon', {'rotated': isSubMenuOpened}]"
            src="/images/chevron.svg" alt="Open">
        </span>
        <ul :class="['nested-list', {'opened': isSubMenuOpened}]">
            <li v-for="category in item.categories" :key="category.id"
            class="nav-item__nested-item">
                <NuxtLink @click="NavStore.toggleNav"
                :to="{path:`/categories/${category.category}`,
                // query: {category: category.category}
                }">
                    {{ category.title }}
                </NuxtLink>
            </li>
        </ul>
    </li>
</template>

<style lang="sass" scoped>

.nav-item
    position: relative
    font-size: 22px
    color: #fff
    overflow: hidden
    cursor: pointer
    @media screen and (min-width: 1280px)
        position: static
        overflow: visible
        height: 100%
        display: flex
        align-items: center
        font-size: 26px
        &:hover 
            .nested-list
                visibility: visible
                opacity: 1
                transform: rotateX(0)
            .nav-item__icon
                transform: rotate(180deg)
    &__title
        position: relative
        display: block
        width: fit-content
        margin-bottom: 10px
        @media screen and (min-width: 1280px)
            margin-bottom: 0
    &__nested-item
        display: block
        width: 100%
        font-size: 20px
        @media screen and (min-width: 1280px)
            font-size: 24px
    &__icon
        position: absolute
        left: 120%
        top: 50%
        width: 13px
        transform: translateY(-50%)
        transition: transform .2s ease-in-out
        &.rotated
            transform: translateY(-50%) rotate(180deg)
        @media screen and (min-width: 1280px)
            left: 110%
.nested-list
    position: relative
    max-height: 0
    padding-left: 15px
    display: flex
    flex-direction: column
    align-items: flex-start
    gap: 13px
    transition: max-height .3s ease-in-out
    &.opened
        max-height: 190px
    @media screen and (min-width: 1280px)
        visibility: hidden
        position: absolute
        top: 100%
        width: 250px
        padding: 25px 20px
        transform-origin: top center
        transform: rotateX(-90deg)
        gap: 22px
        max-height: none
        background-color: #000
        opacity: 0
        transition: opacity .4s, visibility .4s, transform 1s
</style>