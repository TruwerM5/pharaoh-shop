<script setup lang="ts">
import BrandsListVue from './BrandsListVue.vue';


const brands_1 = ref<{id: number; image: string}[]>([
    {
        id: 1,
        image: 'adidas',
    },{
        id: 2,
        image: 'new-balance',
    },{
        id: 3,
        image: 'lacoste',
    },{
        id: 4,
        image: 'nike',
    },{
        id: 5,
        image: 'reebok',
    },{
        id: 6,
        image: 'stone-island',
    },{
        id: 7,
        image: 'carhartt',
    },{
        id: 8,
        image: 'zara',
    },{
        id: 9,
        image: 'ray-ban',
    },{
        id: 10,
        image: 'armani',
    }
]);

const brands_2 = ref<{id: number; image: string;}[]>([
    {
        id: 1,
        image: 'armani-exchange',
    },{
        id: 2,
        image: 'burberry',
    },{
        id: 3,
        image: 'calvin-klein',
    },{
        id: 4,
        image: 'chanel',
    },{
        id: 5,
        image: 'casio',
    },{
        id: 6,
        image: 'adidas-originals',
    },{
        id: 7,
        image: 'levis',
    },{
        id: 8,
        image: 'thenorthface',
    },{
        id: 9,
        image: 'tommy-hilfiger',
    },{
        id: 10,
        image: 'balenciaga',
    }
])

</script>

<template>
    <ScrollVue>
        <template #content>
            <div class="brands">
                <BrandsListVue :list="brands_1" />
                <BrandsListVue :list="brands_2" :reverse="true" />
            </div>
        </template>
    </ScrollVue>
    
</template>

<style scoped lang="sass">
.brands

    position: relative
    overflow: hidden
</style>