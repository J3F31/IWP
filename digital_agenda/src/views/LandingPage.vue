<template>
  <LogIn class="login" @username="applyUsername"/>
  <div class="back"></div>
  <section class="info">
    <h1>IGNITION</h1>
    <p>Welcome to the IGNITION platform, where you can increase your level of digital literacy. We provide a accessible way to learn the new digital tools, that will help you as a teacher, important advices to keep in mind and a online forum, where you can ask questions and get feedback from your fellow teachers. You can login immediately with your Hanze account and start your journey in improving your digital literacy!
    </p>
  </section>
  
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import LogIn from '../components/LogIn.vue';


export default defineComponent({
  name: 'LandingPage',
  data() {
    return {
      user: "" as string
    }
  },
  methods: {
    applyUsername(name: string) {
      this.user = name;
    }
  },
  components: {
    LogIn
  }
});
</script>

<style scoped>
.back {
  margin: 0;
  height: 100vh;
  width: 100%;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-image: url("../../public/assets/Background.png");
  background-size: 100% auto;
  z-index: -1;
  opacity: .2;
}
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
.info h1 {
  margin: 0;
  color: var(--darkblue);
}
.info p {
  margin: 0;
}
.login {
  top: 45%;
  left: 75%;
}
</style>