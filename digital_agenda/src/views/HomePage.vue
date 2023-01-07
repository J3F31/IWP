<template>
    <Navbar/>
    <section class="info">
    <h1>IGNITION</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque modi asperiores laboriosam
      quos perspiciatis animi cum fugiat mollitia similique magnam explicabo accusantium voluptas recusandae,
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin nisl a arcu fermentum sodales.
      Aliquam eu quam diam. Mauris ut augue vitae est dapibus pulvinar. Aliquam id euismod nisi, at rhoncus turpis. 
      Morbi nec leo eget ligula feugiat pulvinar vel  sit earum, maxime consequatur nobis provident!
    </p>
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
<style scoped>
.info {
    font-size: 20px;
    margin: 0;
    height: auto;
    width: 40%;
  
    position: absolute;
    top: 40%;
    left: 30%;
    transform: translate(-50%, -50%);
    
  }
  body{
    background-image: url('../../public/assets/background1.png');
  }

</style>
