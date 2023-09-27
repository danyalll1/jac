<script setup>
import { ref, } from 'vue';


const items = ref([{img:'/src/assets/images/newItem1.png'}, {img:'/src/assets/images/newItem2.png'}, {img:'/src/assets/images/newItem3.png'}])



</script>
<template>

    <section class="new__items">
      <h1 class="new__items__header">
        Новое поступление
      </h1>
      <div class="new__items-container">
        <div v-for="(item,index) in items" :key="index" class="new__items__item">
          <img :src="item.img" alt="">
       
        </div>
      </div>
    <ui-button>Перейти в каталог</ui-button>
    </section>

</template>
<style scoped lang="scss" >
@import '@/assets/base.scss';





  @import '@/assets/base.scss';





.new__items {
  background-color: var(--main-background-color);
  padding: 40px 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 

  .new__items__header {
    text-align: center;
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 40px;
  }

  .new__items-container {
    display: flex;
    gap: 32px;
    justify-content: center;
    margin-bottom: 70px;
    width: 100%;

  }
    .new__items__item {
      max-width: 450px;
        img {
          
          max-width: 450px;
          border-radius: 10px;
        }

       
        
        .item__hover:hover{
          opacity: 1;
          transition: all ease-in-out 0.2s;
        }
      }

    }



  



 



</style>