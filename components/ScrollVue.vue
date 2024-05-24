<script setup lang="ts">



const isActive = ref(false);
const container = ref<any>();
const delta = ref(0);
const router = useRouter();

onMounted(() => {
    document.addEventListener('scroll', (e:any) => {
        if(container.value) {
            delta.value = container.value.offsetTop - window.scrollY;
        }
        
    });
    if(delta.value < 200) {
        isActive.value = true;
    }
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
    transition: all .4s ease-in-out
    transition-delay: .4s

.scroll-enter-from
    position: relative
    transform: translateY(30px)
    opacity: 0
</style>