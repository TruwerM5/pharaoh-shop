<script setup lang="ts">



const isActive = ref(false);
const container = ref<any>();
const windowHeight = ref(0);
onMounted(() => {
    window.addEventListener('scroll', handleScroll);    
    handleScroll();
    windowHeight.value = window.innerHeight;
});

function handleScroll() {
    if((container.value && 
       container.value.getBoundingClientRect().top < windowHeight.value / 3)
      ) {
        isActive.value = true;
    } 
}

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
        <div :class="['scroll-wrapper', isActive ? 'max-h-[3000px]' : 'max-h-[50px]']" ref="container">
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