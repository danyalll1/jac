<script setup>
import { ref, } from 'vue';


const calculator = ref({
  select1: { name: 'Электро', id: 1 },
  select2: { name: 5000, id: 1 }
})



</script>
<template>
  <section class="calculator">
    <h1 class="calculator__header">
      Выбор нужных характеристик
    </h1>
    <div class="calculator-container">
      <div class="calculator-image">
        <img src="/src/assets/images/calculator.png" alt="">
      </div>
      <form class="calculator-form">
        <div class="calculator-form__item">
          <div class="item__title">
            <p>Тип погрузчика</p>
          </div>
          <uiSelect @changeActiveOption="(e) => calculator.select1 = e" :activeOption="calculator.select1"
            :options="[{ name: 'Электро', value: 1 }, { name: 'Бензиновые', value: 2 }]"></uiSelect>
        </div>
        <div class="calculator-form__item">
          <div class="item__title">
            <p>Возможность заезда в контейнер/вагон/фуру</p>
          </div>
          <div style="display: flex; gap:20px; align-items: center; height: 50px;">
            <ui-checkbox>Да</ui-checkbox>
            <ui-checkbox>Нет</ui-checkbox>
          </div>
        </div>
        <div class="calculator-form__item">
          <div class="item__title">
            <p>Высота подъема груза (мм)</p>
          </div>
          <uiSelect @changeActiveOption="(e) => calculator.select2 = e" :activeOption="calculator.select2"
            :options="[{ name: '4500', value: 4500 }, { name: '5500', value: 5500 }]"></uiSelect>
        </div>
        <div class="calculator-form__item">
          <div class="item__title">
            <p>Боковое смещение каретки</p>
          </div>
          <div style="display: flex; gap:20px; align-items: center; height: 50px;">
            <ui-checkbox>Да</ui-checkbox>
            <ui-checkbox>Нет</ui-checkbox>
          </div>
        </div>
        <div class="calculator-form__item">
          <input class="inputs" type="text" placeholder="Введите имя">

        </div>
        <div class="calculator-form__item">
          <input class="inputs" type="text" placeholder="+7">


        </div>
        <div class="calculator-form__item">
          <button class="header__btn">
            Отправить
          </button>
        </div>
        <div class="calculator-form__item">
          <p class="item__confidetial">
            Продолжая, вы принимаете нашу
          </p>

          <a class="item__link" href=""> Политику конфиденциальности</a>


        </div>
      </form>
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



  .calculator {
    position: relative;
    background-color: var(--main-background-color);
    padding: 40px 250px;



    .calculator__header {
      text-align: center;
      font-size: 48px;
      font-weight: 700;
      margin-bottom: 40px;
    }

    .calculator-container {
      position: relative;
      display: flex;
      justify-content: space-between;
      margin-bottom: 70px;
      width: 100%;

      .calculator-image {
        position: relative;

        img {
          position: absolute;
          left: -250px;
        }
      }

      .calculator-form {
        background-color: white;
        padding: 50px 70px;
        border-radius: 10px;
        display: grid;
        gap: 50px;
        grid-template-columns: 300px 300px;


        .calculator-form__item {


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