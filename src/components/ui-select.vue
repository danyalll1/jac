<script setup>
import { defineProps, ref} from 'vue';

const props = defineProps({
    styles: {
        type: String,
        default: ''
    },
    'modelValue': {
        type: Number,
        default: 0
    },
    'type': {
        type: String,
        default: 'text'
    },
    'options': {
        type: Array,
        default: [{ name: 'option1', value: 1 }, { name: 'option2', value: 2 }]
    },
    'activeOption': {
        type: Object,
        default: {
            name: 'Option',
            id: '1',
        }
    }

})


const emit = defineEmits([
    'update:modelValue',
    'changeActiveOption'
])




let show = ref(false)

const selectOption = (e) => {
    emit('changeActiveOption', e)
    show.value = !show.value
}

</script>



<template>
    <div style="position: relative;">
        <div :style="styles" class="select-container" @click="show = !show">
            <div>
            
                <div class="container__select ">{{ activeOption.name }}</div>
            </div>

            <img :class="{ _active: show === true }" class="arrow" src="@/assets/images/arrow_back_ios_new.svg" alt="">


        </div>
        <Transition name="fade">

            <span :style="styles" v-if="show" class="container__options">
                <div :class="{_active: index === activeOption.id }" @click="selectOption(option)" v-if="show" v-for=" (option,index) in options  " :key="option.value">
                    {{ option.name }}
                    {{ option.id }}
                </div>
            </span>

        </Transition>

    </div>
</template>

<style scoped>
.select-container {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    outline-color: transparent;
    border: 3px solid #E4E4E4;
    border-radius: 10px;
    padding: 12px 14px;
    position: relative;
    width: 100%;
    height: 50px;
    overflow: hidden;
    z-index: 101;
    transition: 0.2s;
    background-color: transparent;
    margin: 0;
}

.container__select:focus-within {
    transition: ease-in 0.15s;
    outline: 1px solid var(--primary-color-focus);
    color: var(--primary-color-focus)
}

.container__select {
    background-color: transparent;
    cursor: pointer;
    outline: none;
    width: 100%;
    font-family: Gilroy;
    font-size: 20px;
    font-weight: 400;
    
   
    

}


.container__options {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-width: max-content;
    position: absolute;
    gap: 10px;
    z-index: 1000;
    cursor: pointer;
    padding: 8px 12px;
    font-family: Gilroy;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    border: 1px solid #C5C6CA;
    border-radius: 8px;
    top: 100%;
    border-top: none;
    background-color: white;
    box-shadow: 0 5px 10px 1px rgba(0, 0, 0, 0.1);
   

}

.container__options div{
    transition: all ease 0.2s;
    padding: 0 2px;
}

.container__options div._active{
    transition: all ease 0.2s;
    background-color: var( --secondary-color-focus);
    border-radius: 6px;
   
}


.container__options div:hover {
    transition: all ease 0.2s;
    background-color: var( --secondary-color-focus);
    border-radius: 6px;
    padding:0 0 0 6px;
}





.container__label {
    margin-bottom: 3px;
    display: block;
    font-family: Gilroy;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;

}

.arrow {
    margin-left: 10px ;
    transition: 0.2s ease-in-out;
    max-width: 15px;
}

._active.arrow {

    transform: rotate(180deg);

}


.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>