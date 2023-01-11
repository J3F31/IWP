<template>
  <Navbar selected-id="home"/>
  <div class="back"></div>

  <div class="screen">

    <div class="video">
      <section>
        <iframe width="100%" height="auto" src="https://www.youtube.com/embed/p2k3C-iB88w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </section>
    </div>
    <section class="info">
      <h1>IGNITION</h1>
      <p>Welcome to the IGNITION platform, where you can increase your level of digital literacy. 
        We provide a accessible way to learn the new digital tools, that will help you as a teacher, important advices to keep in mind and a online forum, where you can ask questions and get feedback from your fellow teachers. 
        You can login immediately with your Hanze account and start your journey in improving your digital literacy!
      </p>
    </section>
    <section class="info">
      <h1>IGNITION</h1>
      <p>Welcome to the IGNITION platform, where you can increase your level of digital literacy. 
        We provide a accessible way to learn the new digital tools, that will help you as a teacher, important advices to keep in mind and a online forum, where you can ask questions and get feedback from your fellow teachers. 
        You can login immediately with your Hanze account and start your journey in improving your digital literacy!
      </p>
    </section>
    <section class="info">
      <h1>IGNITION</h1>
      <p>Welcome to the IGNITION platform, where you can increase your level of digital literacy. 
        We provide a accessible way to learn the new digital tools, that will help you as a teacher, important advices to keep in mind and a online forum, where you can ask questions and get feedback from your fellow teachers. 
        You can login immediately with your Hanze account and start your journey in improving your digital literacy!
      </p>
    </section>
    <section class="info">
      <h1>IGNITION</h1>
      <p>Welcome to the IGNITION platform, where you can increase your level of digital literacy. 
        We provide a accessible way to learn the new digital tools, that will help you as a teacher, important advices to keep in mind and a online forum, where you can ask questions and get feedback from your fellow teachers. 
        You can login immediately with your Hanze account and start your journey in improving your digital literacy!
      </p>
    </section>
  
    
  </div>
  
  

</template>
  
<script lang='ts'>
// import Embed from 'v-video-embed'
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
  height: 100%;
  width: 70%;
  position: fixed;
  left: 50vw;
  background-image: url("../../public/assets/zpbackground.png");
  background-repeat: no-repeat;
  background-size: 100% auto;
  z-index: -1;
  opacity: .2;

}

.screen{
  flex-direction: column;
  display: flex;
}


.video{
  grid-row-start: 1;
  grid-row-end:2;
  margin: 3rem;
  height: 100%;
  width:  40%;;
  margin: auto;
  padding: 1.6rem;
}


</style>
