<template>
  <Navbar/>
  <section>
    <h1>Example</h1>
    <p>This will be a asessmrnt agenda!</p>
  </section>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import Navbar from '../components/NavBar.vue'

export default defineComponent({
  name: 'AsessmentPage',
  components: {
    Navbar
  }
});
</script>