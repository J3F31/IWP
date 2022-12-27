<template>
  <LogIn class="login" @username="applyUsername"/>
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

  background-image: url("../../public/assets/background1.png");
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
  color: #246068;
}
.info p {
  margin: 0;
}
.login {
  top: 45%;
  left: 75%;
}
</style>