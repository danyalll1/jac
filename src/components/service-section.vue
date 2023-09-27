<script setup>






</script>
<template>
    <section class="service">
        <h1 class="service__header">
            Сервис
        </h1>
        <div class="service-container" style="margin-bottom: 120px;">
            <h3 class="service__title">Гарантия на всю технику 3 года или 4 000 моточасов!</h3>
            <div class="service__text" style="z-index: 99;">
                По истечении гарантии сервисные центры продолжают техническую поддержку оборудования.
                <br>
                <br>
                Мы предоставляем скидку клиентам на масла, запчасти, а также ремонтные работы.
                <br>
                <br>
                Более того, проводим бесплатные консультации по телефону и видеосвязи для устранения неполадок.
                <img style="position: absolute; z-index: 100; right: -152px; top:160px; " src="@/assets/images/service1.png" alt="">
                <img style="position: absolute;  z-index: -1;     right: -207px;top: 70px; " src="@/assets/images/eclipse1.svg" alt="">
            </div>
        </div>
        <div class="service-container">
            <div class="service__text" style="z-index: 99; padding-left: 260px; font-weight: 500; font-size: 24px;">
                <div style="display: flex; gap: 50px; margin-bottom: 25px; font-weight: 500; font-size: 24px;">
                    <p style="font-weight: 500; font-size: 24px;">Шины</p>
                    <p style="font-weight: 500; font-size: 24px;">Колёса</p>
                </div>
                <div style="display: flex; gap: 50px; margin-bottom: 25px; font-weight: 500; font-size: 24px;">
                    <p style="font-weight: 500; font-size: 24px;"> Диски</p>
                    <p style="font-weight: 500; font-size: 24px;">Шасси</p>
                </div>
                <div style="margin-bottom: 25px;  font-weight: 500; font-size: 24px;">
                    Запчасти для двигателя
                </div>
                <div style=" font-weight: 500; font-size: 24px;">    
                Аккумуляторные батареи
                </div>
                <img style="position: absolute; z-index: 100; left: -152px; top:65px; " src="@/assets/images/service2.png" alt="">
                <img style="position: absolute;  z-index: -1;     left: -127px;top: -128px; " src="@/assets/images/eclipse2.svg" alt="">
            </div>
            <h3 class="service__title">Большой склад оригинальных запчастей</h3>
        </div>
    </section>
</template>
<style scoped lang="scss" >
@import '@/assets/base.scss';



.container {
    position: absolute;
    top: 0;
    left: 0;
    background-color: var(--main-background-color);
    width: 100%;
    height: 100%;



    .service {
        position: relative;
        background-color: var(--main-background-color);
        padding: 80px 250px;



        .service__header {
            text-align: center;
            font-size: 48px;
            font-weight: 700;
            margin-bottom: 40px;
        }

        .service-container {
            position: relative;
            display: flex;
            justify-content: center;
            margin-bottom: 70px;
            width: 100%;
            gap: 80px;

            .service__title {
                color: var(--Black, #323333);

                /* H2 */
                font-family: TT Norms;
                font-size: 36px;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
                max-width: 250px;
            }

            .service__text {
                position: relative;
                border-radius: 10px;
                background: var(--White, #FFF);
                padding: 50px 60px;
                max-width: 630px;
            }











        }

    }




}
</style>