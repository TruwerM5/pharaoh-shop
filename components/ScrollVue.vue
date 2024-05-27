<script setup lang="ts">



const isActive = ref(false);
const container = ref<any>();
const delta = ref(0);
const router = useRouter();

onMounted(() => {
    if(container.value && container.value.getBoundingClientRect().top < 100) {
        isActive.value = true;
    }
    // document.addEventListener('scroll', (e:any) => {
        
        
    // });
});

onUnmounted(() => {
    document.removeEventListener('scroll', () => {
        delta.value = 0;
        container.value = null;
    });
});

</script>

<template>
    <Transition name="scroll">
        <div v-show="isActive"
        class="scroll-block" ref="container">
            <slot name="content">
                
            </slot>
        </div>
    </Transition>
</template>

<style lang="sass" scoped>

.scroll-enter-active
    transition: all .8s ease-in-out

.scroll-enter-from
    position: relative
    transform: translateY(30px)
    opacity: 0
</style>