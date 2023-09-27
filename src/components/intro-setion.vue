<script setup>
import { ref, onMounted } from 'vue';
const nav = ref('#nav')
let indicator = ref({
  left: 0,
  width: 0,
})
const slides = [
  { name: 'Бензиновые погрузчики', img: 'src/assets/images/gas.png', index: 0, title: 'Бензиновый' },
  { name: 'Дизельные погрузчики', img: 'src/assets/images/dizel.png', index: 1, title: 'Дизельный' },
  { name: 'Электро погрузчики', img: 'src/assets/images/ek.png', index: 2, title: 'Электро' },
  { name: 'Допоборудо- вание', img: 'src/assets/images/dop.png', index: 3, title: 'Допоборудование' },
  { name: 'Электро оштабелеры', img: 'src/assets/images/stb.png', index: 4, title: 'Электроштабелеры' },
]
const activeSlide = ref(0)


onMounted(() => {
  nav.value.addEventListener('mousemove', (event) => {
    indicator.value.width = event.target.offsetWidth
    indicator.value.left = event.target.offsetLeft
  })
})



</script>
<template>

    <section class="intro">

      <h1 class="intro__header">
        Официальный дилер JAC на территории РФ
      </h1>
      <div class="intro__slider-container">
        <div ref="nav" class="nav">
          <div @mousemove="activeSlide = index" v-for="(item, index) in slides" :key="index">{{ item.title }}</div>
        </div>
        <div class="nav__indicator-container">
          <div :style="[{ 'left': + indicator.left + 'px' }, { 'width': + indicator.width + 'px' }]"
            class="nav__indicator">
          </div>
        </div>
        <div v-for="(item, index) in slides" :key="index">
          <div class="slider" v-if="activeSlide === index">
            <h3 class="slider__header">{{ item.name }}</h3>
            <ui-button>Перейти в каталог</ui-button>
            <img src="@/assets/images/diller.png" alt="" class="slider__logo">
            <img :src="item.img" alt="" class="slider__img">
          </div>
        </div>

      </div>
    </section>

</template>
<style scoped lang="scss" >
@import '@/assets/base.scss';

.container {
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--main-background-color);
  width: 100%;
  height: 100%;


}


.intro {
  padding: 80px 250px;
  background-color: $mainBackgroundColor;

  .intro__header {

    text-align: center;
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 40px;
  }

}

.intro__slider-container {
  position: relative;

  .nav {
    margin-bottom: 15px;
    display: flex;
    justify-content: space-around;

    div {
      width: 100%;
      text-align: center;
      cursor: pointer;
      font-weight: 500;
      font-size: 24px;
    }

  }

  .nav__indicator-container {
    width: 100%;
    background-color: #E4E4E4;
    height: 3px;
    position: relative;
    margin-bottom: 40px;

    .nav__indicator {
      position: absolute;
      display: flex;
      background-color: $mainFocusColor;
      width: 100px;
      height: 100%;
      transition: all cubic-bezier(.61, 1.33, .34, 1.05) 0.6s;
    }
  }

  .slider {
    background-color: $secondaryBackgroundColor;
    border-radius: 10px;
    height: 510px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    position: relative;

    .slider__header {
      z-index: 100;
      font-size: 130px;
      font-weight: 300;
      width: min-content;
      max-width: 730px;
     
    }

    .slider__button {
      padding: 0;
      background-color: transparent;
      border-color: transparent;
      cursor: pointer;
      font-size: 20px;
      font-weight: 700;
    }

    img {
      position: absolute;
    }

    .slider__logo {
      right: 0;
      top: 0;
      margin: 30px;
      z-index: 100;
    }

    .slider__img {
      transform: scale(0.9);
      right: 50px;
      bottom: -20px;
    }
  }

}
</style>