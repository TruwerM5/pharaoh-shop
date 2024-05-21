<script lang="ts" setup>

</script>

<template>
    <div class="alert">
        <slot name="message"></slot>
    </div>
</template>

<style lang="sass" scoped>
.alert
    display: flex
    justify-content: center
    align-items: center
    

</style>