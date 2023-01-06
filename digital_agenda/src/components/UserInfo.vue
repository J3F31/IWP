<template>
  <section class="dropdown">
    <h3>{{ user }}</h3>
    <button class="signout" @click="SignOut">Sign Out</button>
    <img class="buttonimg">
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
.dropdown {
  margin: 2rem;
  padding: 1rem;
  width: 30%;
  height: 40%;
  
  position: sticky;
/* 
  it was absolute but i changed it becase everething was on top of it */

  transform: translate(-50%, -50%);
    
  background-color: #333333;
  color: aliceblue;
  opacity: 90%;
  border-radius: 7px;
  z-index: 1000;
}
.signout {
  width: 80px;
  height: 50px;
  background-color: black;
  margin: .8rem;
  color: azure;
  padding: .3rem;
  font-size:small; 
}
.signout:hover{
  background-color: #ea6026;
  color: black;
}
</style>