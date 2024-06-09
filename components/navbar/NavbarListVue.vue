<script setup lang="ts">


import type { NavbarList } from '~/types/navbar';

import { useNavStore } from '~/stores/nav.store';

const isSubMenuOpened = ref(false);
const NavStore = useNavStore();
// const navbar_list = ref<any>([
//     // {
//     //     id: 1,
//     //     title: "Футболки",
//     //     param: 'tshirts',
//     //     brands: [{
//     //         id: 1,
//     //         title: 'Adidas',
//     //         brand: 'adidas',
//     //     },{
//     //         id: 2,
//     //         title: 'Nike',
//     //         brand: 'nike',
//     //     },{
//     //         id: 3,
//     //         title: 'Все футболки'
//     //     }],
//     // }, {
//     //     id: 2,
//     //     title: 'Куртки',
//     //     param: 'jackets',
//     //     brands: [{
//     //         id: 1,
//     //         title: 'Adidas',
//     //         brand: 'adidas',
//     //     },{
//     //         id: 2,
//     //         title: 'Nike',
//     //         brand: 'nike',
//     //     },{
//     //         id: 3,
//     //         title: 'Все куртки',
//     //     }]
//     // }, {
//     //     id: 3,
//     //     title: 'Обувь',
//     //     param: 'shoes',
//     //     brands: [
//     //         {
//     //             id: 1,
//     //             title: 'Adidas',
//     //             brand: 'adidas',
//     //         },{
//     //             id: 2,
//     //             title: 'Nike',
//     //             brand: 'Nike',
//     //         },{
//     //             id: 3,
//     //             title: 'Reebok',
//     //             brand: 'reebok',
//     //         },{
//     //             id: 4,
//     //             title: 'New Balance',
//     //             brand: 'new-balance',
//     //         },{
//     //             id: 5,
//     //             title: 'Вся обувь',
//     //         },
//     //     ]
//     // }
//     {
//         id: 1,
//         type: 'clothes',
//         title: 'Одежда',
//         categories: [{
//                 id: 1,
//                 category: 'tshirts',
//                 title: 'Футболки',
//             },{
//                 id: 2,
//                 category: 'jackets',
//                 title: 'Куртки',
//             },{
//                 id: 3,
//                 category: 'jeans',
//                 title: 'Джинсы',
//             },{
//                 id: 4,
//                 category: 'hoodie',
//                 title: 'Худи',
//             }]
//     },{
//         id: 2,
//         type: 'shoes',
//         title: 'Обувь',
//         categories: [{
//             id: 1,
//             category: 'sneakers',
//             title: 'Кроссовки',
//         },{
//             id: 2,
//             category: 'slates',
//             title: 'Сланцы',
//         }]
//     }
// ]);
const navbar_list = ref<any>([
        {
            id: 1,
            title: 'Футболки',
            path: 'tshirts',
        }, {
            id: 2,
            title: 'Джинсы',
            path: 'jeans',
        }, {
            id: 3,
            title: 'Обувь',
            path: 'shoes',
        }, {
            id: 4,
            title: 'Худи',
            path: 'hoodie',
        }, {
            id: 5,
            title: 'Куртки',
            path: 'jackets',
        }, {
            id: 6,
            title: 'Аксессуары',
            path: 'accessories',
        }])
</script>

<template>
    
    <ul class="nav-list">
       <!-- <NavbarItemVue v-for="item in navbar_list" :key="item.id" :item="item"/> -->
        <li v-for="item in navbar_list" :key="item.id"
        class="nav-item">
            <NuxtLink @click="NavStore.closeNav"
            :to="{path: `/categories/${item.path}`}" class="nav-link">
                {{ item.title }}
            </NuxtLink>
        </li>
    </ul>

</template>

<style lang="sass" scoped>
.nav-list
    // position: absolute
    // left: 0
    // top: 0
    width: 100%
    height: 100%
    display: flex
    flex-direction: column
    gap: 15px
    padding: 20px 10px
    background-color: #000
    @media screen and (min-width: 1280px)
        position: relative
        left: 0
        flex-direction: row
        justify-content: flex-start
        align-items: center
        gap: 40px
        margin-left: 50px
        padding: 0
    
.nav-link
    position: relative
    display: block
    font-family: Roboto
    color: #fff
    font-size: 26px
    font-weight: 500
    text-transform: capitalize
    border-bottom: 3px solid #000
    transition: border-color .3s
    &:hover
        border-color: rgba(255, 255, 255, 0.5)
    @media screen and (min-width: 1280px)
        font-size: 18px 
    @media screen and (max-width: 1279px)
        border-bottom: 1px solid #fff
        &::after
            content: ''
            background-image: url('/images/chevron.svg')
            background-repeat: no-repeat
            background-size: contain
            display: block
            position: absolute
            right: 0
            top: 50%
            transform: translateY(-50%)
            width: 10px
            height: 15px    
.router-link-active
    @media screen and (min-width: 1280px)
        border-bottom: 3px solid #fff
        &:hover
            border-bottom: 3px solid #fff
</style>