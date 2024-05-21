<script setup lang="ts">


const {data} = useAsyncData(()=> $fetch('http://localhost:3000'));
console.log(data.value);
</script>

<template>
    <div>
        <h1 class="text-rose-500">About page</h1>
    </div>
</template>