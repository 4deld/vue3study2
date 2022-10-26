<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
const cnt =ref(1) // get from DB
const GeneImg=ref("src/assets/Gene"+cnt.value+".png")
const emit = defineEmits<{
    (e:'changecnt',value:number):void
}>()

function handleChangeCnt(){
    cnt.value = (cnt.value+1)%3 //3 - TheNumberOfGenes
}

watch(cnt,()=>{
    GeneImg.value=("src/assets/Gene"+cnt.value+".png")
    emit('changecnt',cnt.value)
})
onMounted(() => {
    emit('changecnt',cnt.value)
})

</script>

<template>
    <div id="root">
        <img id="Gene" @click="handleChangeCnt()" :src=GeneImg alt="">
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