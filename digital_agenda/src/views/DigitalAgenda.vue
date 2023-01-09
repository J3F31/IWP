<template>
  <Navbar/>
  <section class="poster">
    <h1>Communication infographic</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque modi asperiores laboriosam
      quos perspiciatis animi cum fugiat mollitia similique magnam explicabo accusantium voluptas recusandae,
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin nisl a arcu fermentum sodales.
      Aliquam eu quam diam. Mauris ut augue vitae est dapibus pulvinar. Aliquam id euismod nisi, at rhoncus turpis. 
      Morbi nec leo eget ligula feugiat pulvinar vel  sit earum, maxime consequatur nobis provident!</p>
    <div class="posterimage"><img class="img11" src="../../public/assets/Add_a_heading.png" alt=""></div>
    

  </section>

  <section class="poster">
    <h1>Communication infographic</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque modi asperiores laboriosam
      quos perspiciatis animi cum fugiat mollitia similique magnam explicabo accusantium voluptas recusandae,
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin nisl a arcu fermentum sodales.
      Aliquam eu quam diam. Mauris ut augue vitae est dapibus pulvinar. Aliquam id euismod nisi, at rhoncus turpis. 
      Morbi nec leo eget ligula feugiat pulvinar vel  sit earum, maxime consequatur nobis provident!</p>
    <div class="posterimage1"><img class="img1" src="../../public/assets/Add_a_heading.png" alt=""></div>
    
  </section>

  <section class="poster">
    <h1>Communication infographic</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque modi asperiores laboriosam
      quos perspiciatis animi cum fugiat mollitia similique magnam explicabo accusantium voluptas recusandae,
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin nisl a arcu fermentum sodales.
      Aliquam eu quam diam. Mauris ut augue vitae est dapibus pulvinar. Aliquam id euismod nisi, at rhoncus turpis. 
      Morbi nec leo eget ligula feugiat pulvinar vel  sit earum, maxime consequatur nobis provident!</p>
    <div class="posterimage2"><img class="img1" src="../../public/assets/Add_a_heading_1.png" alt=""></div>
    
  </section>

  <section class="poster">
    <h1>Communication infographic</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque modi asperiores laboriosam
      quos perspiciatis animi cum fugiat mollitia similique magnam explicabo accusantium voluptas recusandae,
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin nisl a arcu fermentum sodales.
      Aliquam eu quam diam. Mauris ut augue vitae est dapibus pulvinar. Aliquam id euismod nisi, at rhoncus turpis. 
      Morbi nec leo eget ligula feugiat pulvinar vel  sit earum, maxime consequatur nobis provident!</p>
    <div class="posterimage3"><img class="img1" src="../../public/assets/Communication.png" alt=""></div>
    
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
 background-color:#cfcdcd;
  height: 58vh;
  width: 85vw;
  margin: 2.5rem;
  margin-left: 10rem;
  position: relative;
  display: grid;
  grid-template-columns:   2fr 3fr; 
  /* grid-row: auto auto auto auto */
}
.img11{
  grid-column:2 ;
  width: 90%; 
  margin: 3rem;    
}
.img1{
  grid-column:2 ;
  width: 90%; 
  margin: 3rem;    
}

.img2{
  grid-column:2 ;
  width: 90%; 
  margin: 3rem;  
}

.img3{
  grid-column:2 ;
  width: 90%; 
  margin: 3rem;  
}

.poster p{
  font-size: 15px;
  /* margin: 0; */
  height: auto;
  width: 30%;
  font-size: 18px;
  position: absolute;
  top: 40%;
  left: 20%;
  transform: translate(-50%, -50%);
  text-align: left;
}
.poster h1{
  margin: 1.5rem;
  left: 40%;
  color: #246068;
  font-size: 30px;
  
}
</style>