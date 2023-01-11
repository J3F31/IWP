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
    @click="LoginUser">
    <h3 class="fail-popup" v-if="wrongCredentials">Incorrect user or password</h3>
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
      wrongCredentials: false as boolean,
    }
  },
  methods: {
    LoginUser() {
      signInWithEmailAndPassword(getAuth(), this.email, this.password).then(() => {
        this.$emit('username', this.email)
        router.push('/home');
      }).catch(() => {
        this.wrongCredentials = true;
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

  background-color: var(--darkblue);
  opacity: 70%;
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
  border: none;
  border-radius: 7px;
}
.submit:hover{
  background-color: var(--orange);
  color: var(--gray);
  cursor: pointer;
}
</style>