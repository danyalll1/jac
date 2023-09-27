<script setup>
import { ref, } from 'vue';


const leezing = ref({
  select1: { name: 'Электро', id: 1 },
  select2: { name: 5000, id: 1 }
})

const minValue =ref(100)
const maxValue =ref(1000)


</script>
<template>
  <section class="leezing">
    <h1 class="leezing__header">
      Выбор нужных характеристик
    </h1>
    <div class="leezing-container">
      <form class="leezing-form">
        <div class="leezing-form__item">
          <div class="item__title">
            <p>Стоимость техники</p>
          </div>
          <div style="position: relative;">
            <ui-minmax2 @update:minValue="(e)=> minValue=e" @update:maxValue="(e)=> maxValue=e" :min="0" :max="5000" :minValue="minValue" :maxValue="maxValue"></ui-minmax2>
          </div>
        
        </div>
        <div class="leezing-form__item">
          <div class="item__title">
            <p>Предпочтительный банк</p>
          </div>
          <div style="display: flex; gap:20px; align-items: center; height: 50px;">
            <ui-select></ui-select>
          </div>
        </div>
        <div class="leezing-form__item">
          <div class="item__title">
            <p>Первый взнос</p>
          </div>
          <ui-minmax :max="30" :text="' %'"></ui-minmax>
        </div>
        <div class="leezing-form__item">
          <div class="item__title">
            <p>Срок</p>
          
          </div>
          <ui-minmax :max="24" :text="' Мес'"></ui-minmax>
        </div>
        <div class="leezing-form__item">
          
          <input class="inputs" type="text" placeholder="Введите имя">
        </div>
        <div class="leezing-form__item">
         
          <input class="inputs" type="text" placeholder="E-mail">

        </div>
        <div class="leezing-form__item">
         
         <input class="inputs" type="text" placeholder="+7">

       </div>
       <div class="leezing-form__item">
         
       

       </div>
        <div class="leezing-form__item">
          <button class="header__btn">
            Отправить
          </button>
        </div>
        <div class="leezing-form__item">
          <p class="item__confidetial">
            Продолжая, вы принимаете нашу
          </p>

          <a class="item__link" href=""> Политику конфиденциальности</a>


        </div>
        
      </form>
      <img src="@/assets/images/leezing.png" alt="">
    </div>
  </section>
</template>
<style scoped lang="scss" >
@import '@/assets/base.scss';

.header__btn {

  align-items: center;
  padding: 12px 26px;
  max-height: 50px;
  border-radius: 10px;
  border: $mainFocusColor 3px solid;
  font-weight: 700;
  font-size: 20px;
  color: white;
  background-color: $mainFocusColor;
  cursor: pointer;
  transition: ease 0.2s;
  width: 100%
}

.container {
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--main-background-color);
  width: 100%;
  height: 100%;



  .leezing {
    position: relative;
    background-color: var(--main-background-color);
    padding: 40px 250px;



    .leezing__header {
      text-align: center;
      font-size: 48px;
      font-weight: 700;
      margin-bottom: 40px;
    }

    .leezing-container {
      position: relative;
      display: flex;
      justify-content: space-between;
      margin-bottom: 70px;
      width: 100%;

      .leezing-image {
        position: relative;

        img {
          position: absolute;
          left: -250px;
        }
      }

      .leezing-form {
        background-color: white;
        padding: 50px 70px;
        border-radius: 10px;
        display: grid;
        gap: 50px;
        grid-template-columns: 300px 300px;


        .leezing-form__item {


          .item__title {
            position: relative;
            height: 56px;


            p {
              font-size: 24px;
              font-style: normal;
              font-weight: 500;

              position: absolute;
              bottom: 0;
              margin-bottom: 20px;
            }

          }

          .inputs {
            width: 100%;
            border-radius: 10px;
            border: solid 3px #C5C6CA;
            height: 50px;
            padding: 12px 16px;
          }

          .item__link {
            color: var(--txt-gray, #C4C4C4);

            font-size: 14px;

            font-weight: 400;

            text-decoration-line: underline;

          }

          .item__confidetial {
            color: var(--txt-gray, #C4C4C4);
            font-size: 14px;
            font-style: normal;
            font-weight: 400;

          }

        }


      }










    }

  }




}
</style>