<script setup>

 





</script>

<template>
    <div class="container-button" style="display: flex; align-items: center;">
        <button class="slider__button"><slot></slot></button>
        <img src="@/assets/images/right.svg" alt="">
    </div>
 
    
</template>

<style scoped>


.container-button{
    display: flex;
    gap: 10px;
    transition: ease-in-out 0.1s;
}

.container-button:hover{
    display: flex;
    gap: 20px;
    transition: ease-in-out 0.1s;
}


.slider__button {
      padding: 0;
      background-color: transparent;
      border-color: transparent;
      cursor: pointer;
      font-size: 20px;
      font-weight: 700;
    }
  
</style>