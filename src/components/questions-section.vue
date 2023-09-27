<script setup>


</script>

<template>
    <section class="questions">
        <div class="questions__container">
            <slot></slot>
            <input class="inputs" type="text" placeholder="Введите имя">
            <input class="inputs" type="text" placeholder="+7">
            <button class="header__btn">
                <img src="@/assets/images/phone.svg" alt="">
                Заказать звонок
            </button>
        </div>
    </section>
</template>

<style scoped lang="scss">
@import '@/assets/base.scss';



.questions {
    padding: 50px 250px;


    .questions__container {
        display: flex;
        justify-content: space-between;
        position: relative;
        align-items: center;

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

        .questions__img {
            max-width: 450px;
            position: absolute;
            top:-89px;
            left: 166px;
        }

        .inputs {
            width: 100%;
            border-radius: 10px;
            border: solid 3px #C5C6CA;
            height: 50px;
            padding: 12px 16px;


            max-width: 300px;
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




}
</style>

