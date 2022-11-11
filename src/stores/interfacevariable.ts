import { defineStore } from "pinia";
import { ref,computed, watch } from 'vue';

export const InterfaceVariable = defineStore('interfacevariable', () => {
  const TheNumberOfGenes=3
  const GeneCnt=ref(1) //get from DB
  const CurrentVideo=ref(0)
  const Routeraddress = ref("/")
  function changeGene() {
    GeneCnt.value = (GeneCnt.value+1)%TheNumberOfGenes //3 - TheNumberOfGenes
  }
  
  function Router(){
    //if(Routeraddress.value=='/')
  }
  return { GeneCnt ,changeGene,CurrentVideo,Routeraddress ,Router}
})

// ref() → state
// computed() → getters
// function() → actions