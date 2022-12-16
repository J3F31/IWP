<template>
  <section class="dropdown">
    <h3>{{ user }}</h3>
    <button class="signout" @click="signOut()"></button>
  </section>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import router from '../router';
import { getAuth, signOut } from 'firebase/auth';

export default defineComponent({
  name: 'UserInfo',
  data() {
    return {
      user: "" as string | null | undefined
    }
  },
  mounted() {
    this.user = getAuth().currentUser?.email;
  },
  methods: {
    signOut() {
      const auth = getAuth();
      signOut(auth).then(() => {
        router.push('/')
      })
      //.catch((error) => {
      //  error.log(error)
      //});
    }
  }
});
</script>

<style scoped>
.dropdown {
  margin: 0;
  padding: 2rem;
  width: 20%;
  height: 40%;

  position: absolute;
  transform: translate(-50%, -50%);

  background-color: rgba(203, 238, 241, .47);
  border-radius: 7px;
}
.signout {
  width: 50px;
  height: 50px;
  background-color: black;
  margin: .8rem;
}
</style>