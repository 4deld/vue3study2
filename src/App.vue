<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Interface from './components/Interface.vue'

</script>

<template>
  <div id="root">
    <div class="toplogo">
      <img class="logo" src="@/assets/logo.png" alt="">

    </div>
    <div class="components">
      <Interface />
     <!-- <RouterLink to="/">Home</RouterLink> -->
      <RouterView />
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
.toplogo{
  display: flex;
  justify-content: center;
}
.components{
  width: 100vw;
  display: flex;
  flex-direction: row;
}
</style>
