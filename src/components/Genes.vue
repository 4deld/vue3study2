<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import Skills from './Skills.vue'
const cnt =ref(0) // get from DB
const GeneImg=ref("src/assets/Gene"+cnt.value+".png")

const emit = defineEmits(['changecnt'])
function handleChangeCnt(){
    cnt.value = (cnt.value+1)%3 //3 - TheNumberOfGenes
}
watch(cnt,()=>{
    GeneImg.value=("src/assets/Gene"+cnt.value+".png")
    emit('changecnt')
})
</script>

<template>
    <div id="root">
        <img id="Gene" @click="handleChangeCnt()" :src=GeneImg alt="">
        <Skills @changecnt="(idx)=>`console.log(idx)`"/>
    </div>
</template>

<style scoped>
#root{
    display: flex;
}
#Gene{
    width: 20vw;
    height: 70vh;
}

</style>