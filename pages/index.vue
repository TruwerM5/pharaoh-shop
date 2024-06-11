<script setup lang="ts">

import HeroVue from '~/components/home/HeroVue.vue';
import AboutVue from '~/components/home/AboutVue.vue';
const isClient = ref(false);

onMounted(() => {
    isClient.value = true;
})

</script>



<template>
    <div class="home-page">
        <HeroVue/>        
        <HomeBrandsVue/>
        <AboutVue v-if="isClient"/>
    </div>
</template>