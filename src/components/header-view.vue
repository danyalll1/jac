<script setup>
import '@/assets/base.scss'






</script>

<template>
    <header class="header">
        <div class="header__container">
            <img src="@/assets/images/logo.svg" alt="" class="header__logo">
            <div class="header__nav">
                <a href="" class="nav__link">Каталог</a>
                <a href="" class="nav__link">Подбор погрузчика</a>
                <a href="" class="nav__link">Сервис</a>
                <a href="" class="nav__link">Лизинг</a>
                <a href="" class="nav__link">Тендер</a>
                <a href="" class="nav__link">О нас</a>
            </div>
            <button class="header__btn">
                <img src="@/assets/images/phone.svg" alt="">
                Заказать звонок
            </button>
        </div>
    </header>
</template>


<style scoped lang="scss">

@import '@/assets/base.scss';

.header {
    background-color: $secondaryBackgroundColor;
    width: 100%;
    padding: 0 13%;
}

.header__container {
    display: flex;
    justify-content: space-between;
    align-items: center;


    .header__logo {
        padding: 22px 0;
        margin-right: 115px;
    }

    .header__nav {
        padding: 38px;
        display: flex;
        gap: 50px;

        .nav__link {
            text-decoration: none;
            transition: 0.1s ease-in-out;
        }

        .nav__link:hover {
            color: $mainFocusColor;
            transform: scale(1.1);
        }
    }


    .header__btn {
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

    .header__btn:hover {
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