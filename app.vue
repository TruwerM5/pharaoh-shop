<script setup lang="ts">

import FooterVue from './components/FooterVue.vue';

import { useCartStore } from './stores/cart.store';

const isClient = ref(false);
const CartStore = useCartStore();

if(process.client) {
  CartStore.initCartStorage();
}

onMounted(() => {
  isClient.value = true;
});

</script>

<template>
    <Html>
      <Head>
        <Title>PHARAOH SHOP</Title>
        <Link rel="icon" type="image/png" href="/images/3.png" />
      </Head>
        <Body>
          <!-- <ClientOnly> -->

          
          <HeaderVue />
            <main
            class="main h-full">
                <NuxtPage 
                :transition="{name:'page', mode: 'out-in'}" />
            </main>
        
            
          <FooterVue />
        <!-- </ClientOnly> -->
        </Body>

      
      
    </Html>
</template>


<style lang="sass">
.page-enter-active,
.page-leave-active 
  transition: all .3s

.page-enter-from,
.page-leave-to
  opacity: 0
  filter: blur(1rem)
</style>