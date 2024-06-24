<script setup lang="ts">

const text = 'Добро пожаловать в PHARAOH SHOP – ваш идеальный модный гид! Мы рады приветствовать вас в нашем интернет-магазине, где стиль и качество встречаются в каждом изделии.'
const container = ref<string[]>([]);
const start = ref(0);
const end = ref(1);
const observerTarget = ref(null);
function animateText() {
    console.log("Animation is started");
    const timerId = setInterval(() => {
        container.value.push(text.slice(start.value, end.value));
        start.value++;
        end.value++;
        
        if(start.value >= text.length) {
            clearInterval(timerId);
        }
        
    }, 100);
}

onMounted(() => {
    
    animateText();
  
});
</script>

<template >
    <div>
        <ScrollVue>
        <template #content>
            <div class="about">
                <div class="about__inner">
                    <p class="about__text about__text_hidden">
                        {{ text }}
                    </p>
                    <div class="about__block">
                        <TransitionGroup name="text">
                            <span v-for="letter,i in container" :key="i"
                            class="about__text">
                                {{ letter }}
                            </span>
                        </TransitionGroup>
                    </div>
                </div>
            </div>
        </template>
    </ScrollVue>
    </div>
    
    

</template>

<style lang="sass" scoped>
.about
    padding: 15px 25px
    display: grid
    background-color: #000
    color:  #fff
    &__inner
        max-width: 600px
        position: relative
        margin: 0 auto
    &__block
        position: absolute
        top: 0
        left: 0
    &__text
        position: relative
        font-size: 24px
        font-family: Garamond
        text-align: left
        &_hidden
            position: static
            color: #000

.text-move,
.text-enter-active,
.text-leave-active
    transition: all .4s
.text-enter-from
    opacity: 0
</style>