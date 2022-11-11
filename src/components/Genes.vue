<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { InterfaceVariable } from '@/stores/interfacevariable';
import { storeToRefs } from "pinia";
const store=InterfaceVariable()
const {GeneCnt,Routeraddress}=storeToRefs(store);
const GeneImg=ref("src/assets/Genes/Gene"+GeneCnt.value+".png")
watch(GeneCnt,()=>{
    GeneImg.value=("src/assets/Genes/Gene"+GeneCnt.value+".png")
    if(Routeraddress.value=='/'){
        console.log(1)
        Routeraddress.value='/'
    }
})

</script>

<template>
    <div id="Genesroot">
        <img id="Gene" @click="store.changeGene()" :src=GeneImg alt="">
    </div>
</template>

<style scoped>
#Genesroot{
    display: flex;
}
#Gene{
    width: 20vw;
    height: 70vh;
    padding: 10%;
    margin-left: 7vw;
}

</style>