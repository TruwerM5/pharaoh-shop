<script setup lang="ts">
const isActive = ref(false);
const container = ref<any>();
onMounted(() => {
    window.addEventListener('scroll', handleScroll);    
    handleScroll();
});

function handleScroll() {
    if((container.value && container.value.getBoundingClientRect().top < window.innerHeight / 1.5)) {
        isActive.value = true;
    } 
}

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
        <div :class="['scroll-wrapper', isActive ? 'max-h-[3000px]' : 'auto']" ref="container"
        :style="{minHeight: isActive ? 'auto' : '300px'}">
            <Transition name="scroll">
                <div v-if="isActive"
                class="scroll-block h-full">
                    <slot name="content">
                        
                    </slot>
                </div>
            </Transition>
        </div>
        
    
</template>

<style lang="sass" scoped>
.scroll-wrapper
    position: relative
    transition: all .3s
.scroll-enter-active
    transition: all .8s ease-in-out

.scroll-enter-from
    position: relative
    transform: translateY(30px)
    opacity: 0
</style>