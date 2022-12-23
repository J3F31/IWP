<template>
  <div class="nav">
    <router-link to="/agenda" class="agenda">AGENDA</router-link>
    <router-link to="/forum" class="forum">FORUM</router-link>
    <router-link to="/asessment" class="asessment">ASESSMENT</router-link>
    <button class="profile" @click="showUser=!showUser"></button>
    <UserInfo class="user" v-if="showUser"/>
    <div class="logo">LoGO</div>
    
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
  background-color: #333333;
  opacity: 70%;
  width: 100vw;
  height: auto;
  top: 0;
  display: grid;
  grid-template-columns:7fr auto 1fr auto auto auto;
  font-size: 25px;
}
a {
  background-color: #333333;
  border-radius: 7px;
  padding: .6rem 2rem .6rem 2rem;
  margin: .8rem;
  text-decoration: none;
  color: azure;
}
a:hover {
  background-color: #ea6026;
  color: #333333;
}
.agenda {
  grid-column-start: 3;
  grid-column-end: 4;
}
.forum {
  grid-column-start: 4;
  grid-column-end: 5;
}
.asessment{
  grid-column-start: 5;
  grid-column-end: 6;
}
.profile {
  grid-column-start: 6;
  grid-column-end: 7;
  width: 70px;
  height: 70px;
  /* background-color: #333; */
  background-image:url("../../public/assets/profile-icon-png-908.png");
  margin: .8rem;
}
.user {
  top: 30%;
  left: 87%;
}
.logo{
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row: 1;
  width: 140px;
  background-image: url("../../public/assets/hanzeLogo.png");
  color: #333333;
  margin: .8rem;
}
</style>