<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import InterfaceView from './views/InterfaceView.vue'
import { ref, onMounted, watch } from 'vue'
import { InterfaceVariable } from '@/stores/interfacevariable';
import { storeToRefs } from "pinia";
const store = InterfaceVariable()
const { Routeraddress } = storeToRefs(store);
const phase = ref(0)

function routersetting() {
  if (Routeraddress.value == '/') {
    Routeraddress.value = '/setting'
  }
  else {
    Routeraddress.value = '/'
  }
}
function callback(cnt: number) {
  phase.value = cnt
}
</script>

<template>
  <div>
    <div id="mainroot" v-if="phase == 0">
      <div class="toplogo">
        <img class="logo" src="@/assets/logo.png" alt="">
      </div>
      <RouterLink :to=Routeraddress @click="routersetting()">
        <img class="cogwheel" src="@/assets/cogwheel.png" alt="">
      </RouterLink>
      <div class="components">
        <InterfaceView class="interfaceview" />
        <RouterView @changephase="(idx: number) => callback(idx)" class="routerview" />
      </div>
    </div>
    <div id="normalroot" v-else-if="phase == 1">
      <div>
        test
      </div>
    </div>
    <div id="rankroot" v-else-if="phase == 2">
      <div>
        test2
      </div>
    </div>
  </div>


</template>

<style scoped>
#mainroot {
  display: flex;
  flex-direction: column;
}

#normalroot {
  display: flex;
  flex-direction: column;
}

#rankroot {}

.logo {
  width: 20%;
}

.cogwheel {
  position: fixed;
  right: 0.4%;
  top: 0.4%;
  width: 5%;
}

.toplogo {
  display: flex;
  justify-content: center;
}

.components {
  width: 100vw;
  display: flex;
  flex-direction: row;
}

.interfaceview {
  position: relative;
  width: 50vw;
}

.routerview {
  position: fixed;
  right: 0;
  width: 50vw;
}
</style>
