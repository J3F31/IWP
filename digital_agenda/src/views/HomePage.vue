<template>
    <Navbar/>
    <section>
      <h1>Example</h1>
      <p>This will be a digital agenda!</p>
    </section>
  </template>
  
  <script lang='ts'>
  import { defineComponent } from 'vue';
  import Navbar from '../components/NavBar.vue'
  
  export default defineComponent({
    name: 'homePage',
    components: {
      Navbar
    }
  });
  </script>