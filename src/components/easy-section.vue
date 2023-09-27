<script setup>
import { ref, onMounted } from 'vue';
const nav = ref('#nav')
let indicator = ref({
    left: 0,
    width: 0,
})
const slides = [
    { name: 'JACK', img: ['src/assets/images/map.png'], index: 0, title: 'Красный бор', text: 'китайская государственная компания, выпускающая более 1 миллиона единиц техники в год.' },
    { name: 'Производство', img: ['src/assets/images/easy2.png'], index: 1, title: 'Парнас', text: 'Производим более 10 видов техники: легковые и грузовые автомобили, минивэны, электрокары, погрузчики и шасси.' },
]
const activeSlide = ref(0)


onMounted(() => {
    nav.value.addEventListener('mousemove', (event) => {
        console.log(event.target.offsetLeft)
        console.log(event.target.parentNode.offsetLeft)
        indicator.value.width = event.target.offsetWidth
        indicator.value.left = event.target.offsetLeft - event.target.parentNode.offsetLeft
    })
})



</script>
<template>
    <section class="intro">

        <h1 class="intro__header">
            С нами легко связаться
        </h1>
        <div class="intro__slider-container">
            <div style="width: 360px; margin-left: auto; margin-right: auto;">
                <div ref="nav" class="nav">
                    <div @mousemove="activeSlide = index" v-for="(item, index) in slides" :key="index">{{ item.title }}
                    </div>
                </div>
                <div class="nav__indicator-container">
                    <div :style="[{ 'left': + indicator.left + 'px' }, { 'width': + indicator.width + 'px' }]"
                        class="nav__indicator">
                    </div>
                </div>
            </div>


            <div v-for="(item, index) in slides" :key="index">

                <div class="slider" v-if="activeSlide === index">

                    <img class="slider__img" v-for="(el, idx) in item.img" :src="el" alt="" :key="idx">
                    <div class="slider__card">
                        <div class="card__top">
                            <img src="@/assets/images/easy.png" alt="">
                            <div class="card__name">
                                <p>Романов</p>
                                <p>Роман Сергеевич</p>
                            </div>
                        </div>
                        <div class="card__item">
                            <img src="@/assets/images/easy2.svg" alt="">
                            <p>187015, Ленинградская область, Тосненский район, ПГТ Красный Бор, ул. Промышленная, 3</p>
                        </div>
                        <div class="card__item">
                            <img src="@/assets/images/easy3.svg" alt="">
                            <p>+7 (812) 498 06 25 <br> +7 (921) 312 62 77</p>
                        </div>
                        <div class="card__item">
                            <img src="@/assets/images/easy1.svg" alt="">
                            <p>r.romanov@tc-sotrans.ru</p>
                        </div>
                        <button class="card__btn">
                            <img src="@/assets/images/phone.svg" alt="">
                            Заказать звонок
                        </button>
                    </div>


                </div>
            </div>

        </div>
    </section>
</template>
<style scoped lang="scss" >
@import '@/assets/base.scss';


.intro {
    padding: 80px 0 0 0;
    background-color: $mainBackgroundColor;

    .intro__header {

        text-align: center;
        font-size: 48px;
        font-weight: 700;
        margin-bottom: 40px;
    }

}

.intro__slider-container {
    position: relative;

    .nav {
        margin-bottom: 15px;
        display: flex;
        justify-content: space-around;

        div {
            width: 100%;
            text-align: center;
            cursor: pointer;
            font-weight: 500;
            font-size: 24px;
        }

    }

    .nav__indicator-container {
        width: 100%;
        background-color: #E4E4E4;
        height: 3px;
        position: relative;
        margin-bottom: 40px;

        .nav__indicator {
            position: absolute;
            display: flex;
            background-color: $mainFocusColor;
            width: 100px;
            height: 100%;
            transition: all cubic-bezier(.61, 1.33, .34, 1.05) 0.6s;
        }
    }

    .slider {
        position: relative;
        background-color: $secondaryBackgroundColor;
        border-radius: 10px;
        display: flex;
        align-items: center;
        gap: 80px;


        .slider__img {
            width: 100%;
            max-height: 720px;
            object-fit: cover;

        }

        .slider__card {
            position: absolute;
            right: 250px;
            background-color: white;
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            gap: 20px;
            padding: 40px 45px;
            width: 455px;

            .card__top {
                display: flex;
                gap: 50px;
                margin-bottom: 20px;
                img {
                    height: 145px;
                    width: 145px;
                    border-radius: 50%;
                    object-fit: cover;
                }

                .card__name {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;

                    p {
                        font-size: 24px;
                        font-weight: 500;
                    }
                }
            }

            .card__item {
                display: flex;
                gap: 20px;

                p {
                    font-size: 20px;
                    font-weight: 400;

                }


            }

            .card__btn {
                margin-top: 20px ;
                display: flex;
                gap: 8px;
                align-items: center;
                padding: 12px 26px;
                max-height: 50px;
                max-width: 250px;
                border-radius: 10px;
                border: $mainFocusColor 3px solid;
                font-weight: 500;
                color: $mainFocusColor;
                background-color: transparent;
                cursor: pointer;
                transition: ease 0.2s;
            }

            .card__btn:hover {
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

}
</style>