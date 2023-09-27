<script setup>
import '@/assets/base.scss'






</script>

<template>
    <footer class="footer">
        <div class="footer__container">
            <div class="footer__nav">
                <img src="@/assets/images/footer1.png" alt="" class="footer__logo">
                <a href="" class="nav__link">Каталог</a>
                <a href="" class="nav__link">Подбор погрузчика</a>
                <a href="" class="nav__link">Сервис</a>
                <a href="" class="nav__link">Лизинг</a>
                <a href="" class="nav__link">Тендер</a>
                <a href="" class="nav__link">О нас</a>
            </div>
           <img src="@/assets/images/footer1.svg" alt="">
        </div>
    </footer>
</template>


<style scoped lang="scss">

@import '@/assets/base.scss';

.footer {
    background-color: $secondaryBackgroundColor;
    width: 100%;
    padding: 60px 250px;
}

.footer__container {
    display: flex;
    justify-content: space-between;
    align-items: center;


    .footer__logo {
        padding: 22px 0;
        max-width: 260px;
    }

    .footer__nav {
        display: flex;
        gap: 50px;
        align-items: center;

        .nav__link {
            text-decoration: none;
            transition: 0.1s ease-in-out;
        }

        .nav__link:hover {
            color: $mainFocusColor;
            transform: scale(1.1);
        }
    }


    .footer__btn {
        display: flex;
        gap: 8px;
        align-items: center;
        padding: 12px 26px;
        max-height: 50px;
        border-radius: 10px;
        border: $mainFocusColor 3px solid;
        font-weight: 500;
        color: $mainFocusColor;
        background-color: transparent;
        cursor: pointer;
        transition: ease 0.2s;
    }

    .footer__btn:hover {
        transition: ease 0.2s;
        background-color: $mainFocusColor;
        color: $secondaryBackgroundColor;

        img {
            fill: $secondaryBackgroundColor;
            color: $secondaryBackgroundColor;


        }
    }


}
</style>