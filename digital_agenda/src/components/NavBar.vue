<template>
  <div class="nav">
    
    <router-link to="/" class="home">HOME</router-link>
    <router-link to="/agenda" class="agenda">AGENDA</router-link>
    <router-link to="/forum" class="forum">FORUM</router-link>

    
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavBar'
});
</script>

<style scoped>
.nav {
  background-color: #3AA1AA;
  width: 100vw;
  height: auto;
  top: 0;
  display: grid;
  grid-template-columns: 50px auto 1fr auto auto auto 50px;
  font-size: 20px;
}
a {
  background-color: #FEFAEA;
  border-radius: 7px;
  padding: .6rem 2rem .6rem 2rem;
  margin: .8rem;
  text-decoration: none;
}
.home {
  grid-column-start: 4;
  grid-column-end: 5;
}
.agenda {
  grid-column-start: 5;
  grid-column-end: 6;
}
.forum {
  grid-column-start: 6;
  grid-column-end: 7;
}
</style>