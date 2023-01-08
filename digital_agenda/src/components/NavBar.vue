<template>
  <div class="nav">
    <div class="logo"></div>
    <router-link to="/agenda" class="agenda">AGENDA</router-link>
    <router-link to="/forum" class="forum">FORUM</router-link>
    <router-link to="/asessment" class="asessment">ASESSMENT</router-link>
    <router-link to="/homePage" class="home">HOME</router-link>
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
  background-color: #333333;
  width: 100%;
  height: auto;
  top: 0;
  position: sticky;
  z-index: 1;
  display: grid;
  grid-template-columns: auto 1fr auto auto auto auto 100px;
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
  grid-column-start: 4;
  grid-column-end: 5;
  grid-row: 1;
}
.forum {
  grid-column-start: 5;
  grid-column-end: 6;
  grid-row: 1;
}
.asessment{
  grid-column-start: 6;
  grid-column-end: 7;
  grid-row: 1;
}
.profile {
  grid-column-start: 7;
  grid-column-end: 8;
  grid-row: 1;
  width: 50px;
  height: 50px;
  background-color: #333;
  background-image:url("../../public/assets/profile-icon-png-908.png");
  background-size: cover;
  margin: 1vw;
  border-radius: 7px;
  border: none;
}
.profile:hover{
  background-color: #ea6026;
  cursor: pointer;
}
.home{
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row: 1;
}
.user {
  grid-column-start: 1;
  grid-column-end: 8;
  grid-row: 2;
  margin-left: .8rem;
  color: azure;
}
.logo{
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row: 1;
  width: 170px;
  background-image: url("../../public/assets/hanzeLogo.png");
  background-repeat: no-repeat;
  background-size: contain;
  color: #333333;
  margin: .8rem;
}


</style>