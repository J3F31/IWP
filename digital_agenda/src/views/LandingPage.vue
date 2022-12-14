<template>
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
  <section class="login">
    <h1>LOGIN</h1>
    <input type="text">
    <input type="text">
    <p>Don't have an account?</p>
    <p>Create an account</p>
  </section>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LandingPage'
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

  background-image: url("../../public/assets/placeholder_background.jpg");
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
  top: 70%;
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
  margin: 0;
  padding: 2rem;
  width: 20%;
  height: 40%;

  position: absolute;
  top: 45%;
  left: 75%;
  transform: translate(-50%, -50%);

  background-color: rgba(203, 238, 241, .47);
  border-radius: 7px;

  display: grid;
  grid-template-rows: auto auto auto 50px 50px;
  gap: 10px;
}
.login h1,
.login h3 {
  color: #C67F04;
}
.login h1,
.login h3,
.login input,
.login p {
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>