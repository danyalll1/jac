<script setup>
import { ref, } from 'vue';


const items = ref([{img:'/src/assets/images/Bank.svg', text:'Проведено более 100 тендеров. Имеем многолетний опыт'}, {img:'/src/assets/images/Briefcase.svg', text:'Полностью подготавливаем техническое задание для клиента'}, {img:'/src/assets/images/Envelope.svg', text:'Можем выслать коммерческое предложение от партнеров'}])



</script>
<template>

    <section class="tender">
      <h1 class="tender__header">
        Тендерный отдел
      </h1>
      <div class="tender-container">
        <div v-for="(item,index) in items" :key="index" class="tender__item">
          <img :src="item.img" alt="">
            <p class="tender__text">{{ item.text}}</p>
        </div>
      </div>
    <ui-button>Перейти в каталог</ui-button>
    </section>

</template>
<style scoped lang="scss" >
@import '@/assets/base.scss';





  @import '@/assets/base.scss';





.tender {
  background-color: var(--main-background-color);
  padding: 120px 250px 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 

  .tender__header {
    text-align: center;
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 80px;
  }

  .tender-container {
    display: flex;
    justify-content: space-between;
    margin-bottom: 70px;
    width: 100%;

  }
    .tender__item {
      max-width: 450px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
        img {
          
          max-width: 450px;
          border-radius: 10px;
        }
        .tender__text{
            text-align: center;
        }
       
        
     
      }

    }



  



 



</style>