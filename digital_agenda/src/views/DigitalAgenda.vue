<template>
  <Navbar/>
  <section class="poster">
    <h1>Communication infographic</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque modi asperiores laboriosam
      quos perspiciatis animi cum fugiat mollitia similique magnam explicabo accusantium voluptas recusandae,
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin nisl a arcu fermentum sodales.
      Aliquam eu quam diam. Mauris ut augue vitae est dapibus pulvinar. Aliquam id euismod nisi, at rhoncus turpis. 
      Morbi nec leo eget ligula feugiat pulvinar vel  sit earum, maxime consequatur nobis provident!</p>
    <div class="posterimage"></div>
  </section>

  <section class="poster">
    <h1>Communication infographic</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque modi asperiores laboriosam
      quos perspiciatis animi cum fugiat mollitia similique magnam explicabo accusantium voluptas recusandae,
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin nisl a arcu fermentum sodales.
      Aliquam eu quam diam. Mauris ut augue vitae est dapibus pulvinar. Aliquam id euismod nisi, at rhoncus turpis. 
      Morbi nec leo eget ligula feugiat pulvinar vel  sit earum, maxime consequatur nobis provident!</p>
    <div class="posterimage"></div>
  </section>

  <section class="poster">
    <h1>Communication infographic</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque modi asperiores laboriosam
      quos perspiciatis animi cum fugiat mollitia similique magnam explicabo accusantium voluptas recusandae,
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin nisl a arcu fermentum sodales.
      Aliquam eu quam diam. Mauris ut augue vitae est dapibus pulvinar. Aliquam id euismod nisi, at rhoncus turpis. 
      Morbi nec leo eget ligula feugiat pulvinar vel  sit earum, maxime consequatur nobis provident!</p>
    <div class="posterimage"></div>
  </section>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import Navbar from '../components/NavBar.vue'

export default defineComponent({
  name: 'DigitalAgenda',
  components: {
    Navbar
  }
});
</script>

<style scoped>
.poster{
 background-color:#8b8888;
  height: 70vh;
  width: 85vw;
  margin: 2.5rem;
  margin-left: 8rem;
  position: relative;
  display: grid;
  grid-template-columns:   1fr 1fr; 
  grid-row: auto auto auto auto
}
.posterimage{
  grid-column-start:2 ;
  background-image: url("../../public/assets/poster1.png");
  
}
.poster p{
  font-size: 15px;
  /* margin: 0; */
  height: auto;
  width: 30%;
  font-size: 18px;
  position: absolute;
  top: 40%;
  left: 17%;
  transform: translate(-50%, -50%);
}
.poster h1{
  margin: 1.5rem;
  left: 30%;
  color: #246068;
  font-size: 30px;
  
}
</style>