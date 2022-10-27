<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import InterfaceView from './views/InterfaceView.vue'

</script>

<template>
  <div id="root">
    <div class="toplogo">
      <img class="logo" src="@/assets/logo.png" alt="">
    </div>
    <img class="cogwheel" src="@/assets/cogwheel.png" alt="">
    <div class="components">
      <InterfaceView class="interfaceview" />
     <!-- <RouterLink to="/">Home</RouterLink> -->
      <RouterView class="routerview" />
    </div>
  </div>

</template>

<style scoped>
#root {
  display: flex;
  flex-direction: column;
}

.logo {
  width: 20%;
}
.cogwheel{
  position: fixed;
  right: 0.4%;
  top: 0.4%;
  width: 5%;
}
.toplogo{
  display: flex;
  justify-content: center;
}
.components{
  width: 100vw;
  display: flex;
  flex-direction: row;
}
.interfaceview{
  position: relative;
  width: 50vw;
}
.routerview{
  position: fixed;
  right: 0;
  width: 50vw;
}
</style>
