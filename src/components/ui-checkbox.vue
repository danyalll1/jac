<script setup>
import {ref} from 'vue'

const check = ref(false)

</script>



<template>
    <label class="checkbox-container" @click="check!=check">
        <input v-model="check" style="display: none;" type="checkbox">

        <div class="indicator">
            <img v-if="check" src="/src/assets/images/check.svg" alt="">
        </div>
        <slot>
        </slot>
    </label>
</template>



<style scoped>
.checkbox-container {
    display: flex;
    align-items: center;
    gap: 16px;
    cursor: pointer;

}

.indicator {
    width: 30px;
    height: 30px;
    border: 3px solid #E4E4E4;
    border-radius: 10px;
}
</style>