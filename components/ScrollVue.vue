<script setup lang="ts">



const isActive = ref(false);
const container = ref<any>();
const windowHeight = ref(0);
onMounted(() => {

    window.addEventListener('scroll', handleScroll);
    // nextTick(() => {
        handleScroll();
    // })
    windowHeight.value = window.innerHeight;
    console.log(windowHeight.value);
    console.log(window.scrollY);
   
});

function handleScroll() {
    if((container.value && 
       container.value.getBoundingClientRect().top > 0 && 
       container.value.getBoundingClientRect().top < windowHeight.value / 1.3)
      ) {
        isActive.value = true;
        console.log(container.value.getBoundingClientRect().top)
    }
}
</script>

<template>
        <div :class="['scroll-wrapper', isActive ? 'max-h-screen' : 'max-h-0']" ref="container">
            <Transition name="scroll">
                <div v-show="isActive"
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