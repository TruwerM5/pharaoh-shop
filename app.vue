<script setup lang="ts">

import FooterVue from './components/FooterVue.vue';

</script>

<template>
    <Html>
      <Head>
        <Title>PHARAOH SHOP</Title>
        <Link rel="icon" type="image/png" href="/images/3.png" />
      </Head>
      <Body>
        <HeaderVue />
        <main class="main">
          <NuxtPage />
        </main>
        <FooterVue />
      </Body>
      
    </Html>
</template>
