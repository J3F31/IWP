<template>
  <Navbar selected-id="home"/>
  <div class="back"></div>
  <section class="info">
    <h1>IGNITION</h1>
    <p>Welcome to the IGNITION platform, where you can increase your level of digital literacy. 
      We provide a accessible way to learn the new digital tools, that will help you as a teacher, important advices to keep in mind and a online forum, where you can ask questions and get feedback from your fellow teachers. 
      You can login immediately with your Hanze account and start your journey in improving your digital literacy!
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
.info h1{
  color: var(--darkblue);
  margin-left: 13rem;
  margin-top: 8rem;
}
.back{
  margin: 0;
  height: 100vh;
  width: 100%;
  position: fixed;

  background-image: url("../../public/assets/Background.png");
  background-repeat: no-repeat;
  background-size: 100% auto;
  z-index: -1;
  opacity: .2;
}

</style>
