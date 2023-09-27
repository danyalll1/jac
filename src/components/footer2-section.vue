<script setup>
import '@/assets/base.scss'






</script>

<template>
    <footer class="footer">
        <div class="footer__container">
           <p class="text">©2022 Все права защищены. All rights reserved SOTRANS</p>
           <a class="text" href="">Политика конфиденциальности</a>
        </div>
    </footer>
</template>


<style scoped lang="scss">

@import '@/assets/base.scss';

.footer {
    background-color: #323333;
    width: 100%;
    padding: 20px 250px;
}

.footer__container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .text{
        color: #E4E4E4;
        font-weight: 400;
        font-size: 20px;
    }
    a{
      text-decoration: underline;
    }


}
</style>