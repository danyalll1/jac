<script setup>
import { ref, } from 'vue';






</script>
<template>
  <div class="container">
    <headerView></headerView>
    <intro-setion></intro-setion>
    <secondary-scetion></secondary-scetion>
    <calculator-view></calculator-view>
    <new-item-section></new-item-section>
    <questions-section>
      <p class="questions__text">Есть вопросы?</p>
      <img class="questions__img" src="@/assets/images/questions.png" alt="">
    </questions-section>
    <service-section></service-section>
    <leezing-section></leezing-section>
    <questions-section>
      <div class="questions__text2">Есть вопросы?
      <div style="font-family: TT Norms;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 130%;
width: 300px;">
        Оставьте заявку на бесплатную консультацию специалиста
      </div>
      </div>
    </questions-section>
    <tender-section></tender-section>
    <about-section></about-section>
    <easy-section></easy-section>
    <footer-section></footer-section>
    <footer2-section></footer2-section>
  </div>
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


  @import '@/assets/base.scss';








}



.questions__img {
  max-width: 450px;
  position: absolute;
  top: -89px;
  left: 166px;
  z-index: 100;
}

.questions__text {
  color: var(--Black, #323333);
  font-family: TT Norms;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  /* 46.8px */
  margin-right: 250px;
}

.questions__text2 {
  color: var(--Black, #323333);
  font-family: TT Norms;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  width: 500px;
  /* 46.8px */

}
</style>