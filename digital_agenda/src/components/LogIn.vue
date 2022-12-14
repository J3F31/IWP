<template>   
  <section class="login">
    <input 
    class="email"
    type="email"
    placeholder="Email Address"
    v-model="email"
    required
    />
    <input 
    class="password"
    type="password"
    placeholder="Password"
    v-model="password"
    required
    />
    <br>
    <input 
    class="submit"
    type="submit" 
    value="LOG IN"
    @click="loginUser">
  </section>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import router from '../router';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default defineComponent({
  name: 'LogIn',
  data() {
    return {
      email: "" as string,
      password: "" as string,
      logged: false as boolean,
    }
  },
  methods: {
    loginUser() {
      signInWithEmailAndPassword(getAuth(), this.email, this.password).then(() => {
        this.$emit('username', this.email)
        router.push('/agenda');
      })
    }
  }
});
</script>

<style scoped>
.login {
  margin: 0;
  padding: 2rem;
  width: 20%;
  height: 40%;

  position: absolute;
  transform: translate(-50%, -50%);

  background-color: rgba(203, 238, 241, .47);
  border-radius: 7px;

  display: grid;
  grid-template-rows: 50px 10px 50px 1fr 50px;
  gap: 10px 100px;
}
.email {
  grid-row-start: 1;
  grid-row-end: 2;
}
.password {
  grid-row-start: 3;
  grid-row-end: 4;
}
.submit {
  grid-row-start: 5;
  grid-row-end: 6;
}
</style>