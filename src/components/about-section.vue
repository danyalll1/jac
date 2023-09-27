<script setup>
import { ref, onMounted } from 'vue';
const nav = ref('#nav')
let indicator = ref({
  left: 0,
  width: 0,
})
const slides = [
  { name: 'JACK', img: ['src/assets/images/Vector.png'], index: 0, title: 'JAC', text:'китайская государственная компания, выпускающая более 1 миллиона единиц техники в год.' },
  { name: 'Производство', img: ['src/assets/images/image1.png','src/assets/images/image2.png','src/assets/images/image4.png'], index: 1, title: 'Производство', text:'Производим более 10 видов техники: легковые и грузовые автомобили, минивэны, электрокары, погрузчики и шасси.'  },
  { name: 'ТОП-10', img: ['src/assets/images/top.png'], index: 2, title: 'ТОП-10',text:'Входит в ТОП-10 по количеству выпущенной техники на рынке Китая и ТОП-3 на рынке РФ.' },
  { name: 'Продукция', img: ['src/assets/images/dop.png'], index: 3, title: 'Продукция' },
]
const activeSlide = ref(0)


onMounted(() => {
  nav.value.addEventListener('mousemove', (event) => {
    indicator.value.width = event.target.offsetWidth
    indicator.value.left = event.target.offsetLeft-event.target.parentNode.offsetLeft
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
            <div style="width: 100%; display: flex; justify-content: center;">
              <img class="slider__img" v-for="(el,idx) in item.img" :src="el" alt="" :key="idx">
            </div>
            
            <p style="max-width: 500px; text-align: center;" >{{ item.text}}</p>
          </div>
        </div>

      </div>
    </section>

</template>
<style scoped lang="scss" >
@import '@/assets/base.scss';


.intro {
  padding: 80px 450px;
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
    justify-content: center;
    align-items: center;
    gap: 80px;
    position: relative;

 



   

    .slider__img {
      max-height: 200px;
    
    }
  }

}
</style>