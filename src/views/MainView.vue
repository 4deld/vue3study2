<script setup lang="ts">
import { ref, onMounted } from 'vue'

const emit = defineEmits<{
    (e:'changephase',value:number):void
}>()

function NormalGame(){
  emit('changephase',1)
}
function RankGame(){
  emit('changephase',2)
}
</script>

<template>
  <div id="mainviewroot">
    <div @click="NormalGame()" class="btn">Normal</div>
    <div @click="RankGame()" class="btn">Rank</div>
  </div>
</template>

<style scoped>
#mainviewroot{
  width: 50vw;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:space-around;
}
.btn{
  font-size: 5em;
  border:0.05em solid black;
  cursor: pointer;
}
</style>
