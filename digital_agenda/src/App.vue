<template>
  <Navbar />
  <router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from './components/NavBar.vue'

export default defineComponent({
  name: 'App',
  components: {
    Navbar
  }
});
</script>

<style>
#main {
  margin: 0;
  height: 100%;
}
#app {
  font-family: Jost;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
