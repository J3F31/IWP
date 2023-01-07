<template>
  <section class="dropdown">
    <h3>{{ user }}</h3>
    <button class="signout" @click="SignOut">Sign Out</button>
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
    SignOut() {
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
/*.dropdown {
  margin: 0.;
  padding: 2rem;
  width: 20%;
  height: 40%;
  
  position: sticky;

  transform: translate(-50%, -50%);
    
  background-color: #333333;
  color: aliceblue;
  opacity: 90%;
  border-radius: 7px;
  z-index: 1000;
}*/
.signout {
  width: 80px;
  height: 50px;
  background-color: black;
  margin: .8rem;
  color: azure;
}
.signout:hover{
  background-color: #ea6026;
  color: black;
}
</style>