<template>
  <div class="main">
    <Navbar selected-id="agenda"/>
    <div class="poster">
      <section>
        <h1>Professional Engagement</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque modi asperiores laboriosam
          quos perspiciatis animi cum fugiat mollitia similique magnam explicabo accusantium voluptas recusandae,
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin nisl a arcu fermentum sodales.
          Aliquam eu quam diam. Mauris ut augue vitae est dapibus pulvinar. Aliquam id euismod nisi, at rhoncus turpis. 
          Morbi nec leo eget ligula feugiat pulvinar vel  sit earum, maxime consequatur nobis provident!
        </p>
      </section>
      <img class="infographic" src="../../public/assets/Infographic_Communication.png" alt="Infographic Communication" loading="lazy">
    </div>

    <div class="poster">
      <section>
        <h1>Digital Resources</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque modi asperiores laboriosam
          quos perspiciatis animi cum fugiat mollitia similique magnam explicabo accusantium voluptas recusandae,
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin nisl a arcu fermentum sodales.
          Aliquam eu quam diam. Mauris ut augue vitae est dapibus pulvinar. Aliquam id euismod nisi, at rhoncus turpis. 
          Morbi nec leo eget ligula feugiat pulvinar vel  sit earum, maxime consequatur nobis provident!
        </p>
      </section>
      <img class="infographic" src="../../public/assets/Infographic_Tools.png" alt="Infographic Tools" loading="lazy">
    </div>

    <div class="poster">
      <section>
        <h1>Digital Security</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque modi asperiores laboriosam
          quos perspiciatis animi cum fugiat mollitia similique magnam explicabo accusantium voluptas recusandae,
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin nisl a arcu fermentum sodales.
          Aliquam eu quam diam. Mauris ut augue vitae est dapibus pulvinar. Aliquam id euismod nisi, at rhoncus turpis. 
          Morbi nec leo eget ligula feugiat pulvinar vel  sit earum, maxime consequatur nobis provident!
        </p>
      </section>
      <img class="infographic" src="../../public/assets/Infographic_Security.png" alt="Infographic Security" loading="lazy">
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import Navbar from '../components/NavBar.vue'

export default defineComponent({
  name: 'DigitalAgenda',
  components: {
    Navbar
  },
});
</script>

<style scoped>
.main {
  background-color: var(--gray);
  overflow: hidden;
}
.poster{
  height: auto;
  width: 85vw;
  margin: 2.5rem;
  margin-left: 10rem;
  position: relative;
  display: flex;
  justify-content: space-between;
}
.poster p{
  font-size: 15px;
  height: auto;
  width: 80%;
  font-size: 18px;
  text-align: left;
  margin: auto;
  padding: 2rem;
}
.poster h1{
  height: auto;
  width: 80%;
  text-align: left;
  margin: auto;
  padding: 2rem 2rem 0 2rem;
  color: #246068;
  font-size: 30px;
}
.infographic {
  height: 80%;
  width: 50%;
  object-fit: contain;
  margin: auto;
}
</style>