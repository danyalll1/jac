<script setup>
import { ref, } from 'vue';

const items = ref([
  {
    title:'Боковое смещение — сайдшифт',
    img:'/src/assets/images/secondary1.png'
  },
  {
    title:'Кабина с отопителем',
    img:'/src/assets/images/secondary2.png'
  },
  {
    title:'Шины для вилочных погрузчиков — Суперэластик ',
    img:'/src/assets/images/secondary3.png'
  },
  {
    title:'Кран-балка',
    img:'/src/assets/images/secondary4.png'
  }])






</script>
<template>
 
 
    <section class="secondary">
      <h1 class="secondary__header">
        Дополнительное оборудование
      </h1>
      <div class="secondary-container">
        <div v-for="(item,index) in items" :key="index" class="secondary__item">
          <h3 class="item__header">
          {{ item.title }}
          </h3>
          <div class="item__img">
            <img style="z-index: 10;" :src="item.img" alt="">
            <div class="item__hover">
              <p>Подробнее</p>
            </div>
          </div>
        </div>
      </div>
    <ui-button>Перейти в каталог</ui-button>
    </section>
 
</template>
<style scoped lang="scss" >
@import '@/assets/base.scss';





  .secondary {
    background-color: var(--main-background-color);
    padding: 40px 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   

    .secondary__header {
      text-align: center;
      font-size: 48px;
      font-weight: 700;
      margin-bottom: 40px;
    }

    .secondary-container {
      display: flex;
      justify-content: space-between;
      margin-bottom: 70px;
      width: 100%;


      .secondary__item {
        max-width: 320px;


        .item__header {
          font-size: 24px;
          font-style: normal;
          font-weight: 500;
          margin-bottom: 20px;
          height: 84px;
        }


        .item__img {
          position: relative;
          width: 320px;
          height: 320px;
          background-color: white;
          border-radius: 10px;

          img {
            position: absolute;
            max-width: 320px;
            border-radius: 10px;
          }

          .item__hover {
            opacity: 0;
            z-index: 100;
            background-color: rgba(237, 27, 36, 0.80);
            width: 100%;
            height: 100%;
            position: absolute;
            text-align: center;
            vertical-align: middle;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            border-radius: 10px;
            transition: all ease-in-out 0.2s;

            p {
              color: var(--White, #FFF);
              font-size: 36px;
              font-weight: 700;
              cursor: pointer;
          
            }
          }
          .item__hover:hover{
            opacity: 1;
            transition: all ease-in-out 0.2s;
          }
        }

      }



    }

  }




</style>