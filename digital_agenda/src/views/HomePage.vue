<template>
  <Navbar/>
  <div class="back"></div>
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
.info p{
  font-size: 20px;
  margin: 0;
  height: auto;
  width: 40%;
  margin-left: 13rem;
}
body{
  background-image: url('../../public/assets/background1.png');
}
.info h1{
  color: rgb(61, 53, 53);
  margin-left: 13rem;
  margin-top: 8rem;
}
.back{
  margin: 0;
  height: 100vh;
  width: 100%;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-image: url("../../public/assets/background1.png");
  background-repeat: no-repeat;
  background-size: 100% auto;
  z-index: -1;
  opacity: .2;
}

</style>
