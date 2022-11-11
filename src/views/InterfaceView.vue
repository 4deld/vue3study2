<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Genes from '../components/Genes.vue'
import Skills from '../components/Skills.vue'
</script>

<template>
    <div id="interfaceroot">
        <Genes></Genes>
        <Skills></Skills>
    </div>

</template>

<style scoped>
#interfaceroot {
    width: 30vw;
    display: flex;
    flex-direction: row;
}
</style>

