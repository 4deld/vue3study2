<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { InterfaceVariable } from '@/stores/interfacevariable';
import { storeToRefs } from "pinia";
const store=InterfaceVariable()
const {GeneCnt, CurrentVideo}=storeToRefs(store);

</script>

<template>
    <div id="skillvideoroot">
        <div>{{GeneCnt}}{{CurrentVideo}}</div>
        <video src=""></video>
    </div>

</template>

<style scoped>
#skillvideoroot {
    width: 30vw;
    display: flex;
    flex-direction: row;
}
</style>

