<template>
  <div class="nav">
    <div class="logo"></div>
    <router-link to="/agenda" id="agenda" class="agenda">Digital Agenda</router-link>
    <router-link to="/forum" id="forum" class="forum">Community</router-link>
    <router-link to="/assessment" id="assessment" class="assessment">Practice</router-link>
    <router-link to="/home" id="home" class="home">Home</router-link>
    <button class="profile" @click="showUser=!showUser"></button>
    <UserInfo class="user" v-if="showUser"/>
  </div>
  

</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import UserInfo from './UserInfo.vue'

export default defineComponent({
  name: 'NavBar',
  props: {
    selectedId: String
  },
  components: {
    UserInfo
  },
  data() {
    return {
      showUser: false as boolean
    }
  },
  mounted() {
    if (this.selectedId == null) return
    let string = this.selectedId
    const link = document.getElementById(string)
    link!.style.backgroundColor = '#40a8de'
  }
});
</script>

<style scoped>
.nav {
  background-color: var(--darkblue);
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
  background-color: var(--orange);
  border-radius: 7px;
  padding: .6rem 2rem .6rem 2rem;
  margin: .8rem;
  text-decoration: none;
  color: var(--gray);
}
a:hover {
  background-color: var(--lightblue);
}
.agenda {
  grid-column-start: 4;
  grid-column-end: 5;
  grid-row: 1;
}
.forum {
  grid-column-start: 6;
  grid-column-end: 7;
  grid-row: 1;
}
.assessment{
  grid-column-start: 5;
  grid-column-end: 6;
  grid-row: 1;
}
.profile {
  grid-column-start: 7;
  grid-column-end: 8;
  grid-row: 1;
  width: 50px;
  height: 50px;
  background-color: var(--darkblue);
  background-image:url("../../public/assets/Icon_Profile.png");
  background-size: cover;
  margin: .8rem;
  padding: 0.6rem;
  border-radius: 7px;
  border: none;
}
.profile:hover{
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
  color: var(--gray);
}
.logo{
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row: 1;
  width: 170px;
  background-image: url("../../public/assets/Logo_Hanze.png");
  background-repeat: no-repeat;
  background-size: contain;
  margin: .8rem;
  padding: 0.6rem;
  border-radius: 7px;
}
</style>