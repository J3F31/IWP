<template>
  <div class="nav">
    <router-link to="/agenda" class="agenda">AGENDA</router-link>
    <router-link to="/forum" class="forum">FORUM</router-link>
    <button class="profile" @click="showUser=!showUser"></button>
    <UserInfo class="user" v-if="showUser"/>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import UserInfo from './UserInfo.vue'

export default defineComponent({
  name: 'NavBar',
  components: {
    UserInfo
  },
  data() {
    return {
      showUser: false as boolean
    }
  }
});
</script>

<style scoped>
.nav {
  background-color: #3AA1AA;
  width: 100vw;
  height: auto;
  top: 0;
  display: grid;
  grid-template-columns: 50px auto 1fr auto auto auto;
  font-size: 20px;
}
a {
  background-color: #FEFAEA;
  border-radius: 7px;
  padding: .6rem 2rem .6rem 2rem;
  margin: .8rem;
  text-decoration: none;
}
.agenda {
  grid-column-start: 4;
  grid-column-end: 5;
}
.forum {
  grid-column-start: 5;
  grid-column-end: 6;
}
.profile {
  grid-column-start: 6;
  grid-column-end: 7;
  width: 50px;
  height: 50px;
  background-color: #333;
  margin: .8rem;
}
.user {
  top: 30%;
  left: 87%;
}
</style>