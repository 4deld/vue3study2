<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Genes from '../components/Genes.vue'
import Skills from '../components/Skills.vue'
const Interfacecnt = ref<number>(0)

function callback(cnt: number) {
    Interfacecnt.value = cnt
}
</script>

<template>
    <div id="interfaceroot">
        <Genes @changecnt="(Genescnt) => callback(Genescnt)"></Genes>
        <Skills :Skillscnt="Interfacecnt"></Skills>
    </div>

</template>

<style scoped>
#interfaceroot {
    width: 30vw;
    display: flex;
    flex-direction: row;
}
</style>

