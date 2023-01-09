<template>
  <section class="dropdown">
    <h3>{{ userName }}</h3>
    <section v-for="(score, key) in userScore" :key="key">
      <h5>{{ key }}: {{ score }}0%</h5>
    </section>
    <button class="signout" @click="SignOut">Sign Out</button>
  </section>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import router from '../router';
import { getAuth, signOut } from 'firebase/auth';
import { getDoc, getFirestore, doc, DocumentData, orderBy } from '@firebase/firestore';

export default defineComponent({
  name: 'UserInfo',
  data() {
    return {
      userName: "" as string | null | undefined,
      userId: this.$userId.toString(),
      userScore: undefined as DocumentData | undefined
    }
  },
  mounted() {
    this.userName = getAuth().currentUser?.email?.split("@")[0]
    this.GetUserScore()
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
    },
    async GetUserScore() {
      const db = getFirestore()
      const docRef = doc(db, "Users", this.userId)
      const snapshot = await getDoc(docRef)
      this.userScore = snapshot.data()
    }
  }
});
</script>

<style scoped>
.dropdown {
  display: flex;
  width: auto;
  justify-content: space-around;
  flex-direction: row;
  gap: 3rem;
  margin: 1.2rem;
}
.dropdown * {
  margin: 0;
  padding: .5rem;
}
.signout {
  width: 80px;
  height: 50px;
  background-color: var(--orange);
  color: var(--gray);
  padding: .3rem;
  font-size: small; 
  border-radius: 7px;
  border: none;
}
.signout:hover{
  background-color: var(--lightblue);
  color: var(--gray);
  cursor: pointer;
}
</style>