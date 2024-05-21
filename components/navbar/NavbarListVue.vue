<script setup lang="ts">


import type { NavbarList } from '~/types/navbar';

import { useNavStore } from '~/stores/nav.store';

const isSubMenuOpened = ref(false);

const navbar_list = ref<NavbarList[]>([
    // {
    //     id: 1,
    //     title: "Футболки",
    //     param: 'tshirts',
    //     brands: [{
    //         id: 1,
    //         title: 'Adidas',
    //         brand: 'adidas',
    //     },{
    //         id: 2,
    //         title: 'Nike',
    //         brand: 'nike',
    //     },{
    //         id: 3,
    //         title: 'Все футболки'
    //     }],
    // }, {
    //     id: 2,
    //     title: 'Куртки',
    //     param: 'jackets',
    //     brands: [{
    //         id: 1,
    //         title: 'Adidas',
    //         brand: 'adidas',
    //     },{
    //         id: 2,
    //         title: 'Nike',
    //         brand: 'nike',
    //     },{
    //         id: 3,
    //         title: 'Все куртки',
    //     }]
    // }, {
    //     id: 3,
    //     title: 'Обувь',
    //     param: 'shoes',
    //     brands: [
    //         {
    //             id: 1,
    //             title: 'Adidas',
    //             brand: 'adidas',
    //         },{
    //             id: 2,
    //             title: 'Nike',
    //             brand: 'Nike',
    //         },{
    //             id: 3,
    //             title: 'Reebok',
    //             brand: 'reebok',
    //         },{
    //             id: 4,
    //             title: 'New Balance',
    //             brand: 'new-balance',
    //         },{
    //             id: 5,
    //             title: 'Вся обувь',
    //         },
    //     ]
    // }
    {
        id: 1,
        type: 'clothes',
        title: 'Одежда',
        categories: [{
                id: 1,
                category: 'tshirts',
                title: 'Футболки',
            },{
                id: 2,
                category: 'jackets',
                title: 'Куртки',
            },{
                id: 3,
                category: 'jeans',
                title: 'Джинсы',
            },{
                id: 4,
                category: 'hoodie',
                title: 'Худи',
            }]
    },{
        id: 2,
        type: 'shoes',
        title: 'Обувь',
        categories: [{
            id: 1,
            category: 'sneakers',
            title: 'Кроссовки',
        },{
            id: 2,
            category: 'slates',
            title: 'Сланцы',
        }]
    }
]);

</script>

<template>

    <ul class="nav-list">
       <NavbarItemVue v-for="item in navbar_list" :key="item.id" :item="item"/>
    </ul>

</template>

<style lang="sass" scoped>
.nav-list
    position: absolute
    right: -100%
    top: 0
    width: 80%
    height: 100%
    display: flex
    flex-direction: column
    gap: 10px
    padding: 20px 10px
    background-color: #000
    transition: right .3s ease-in-out
    transition-delay: .2s
    &.opened
        right: 0
        transition-delay: 0s
</style>