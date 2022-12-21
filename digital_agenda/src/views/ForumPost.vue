<template>
  <Navbar/>
  <section class="post">
    <input 
    class="post-title"
    type="text"
    placeholder="Give your post a title"
    v-model="title"
    required
    />
    <br>
    <input 
    class="post-body"
    type="text"
    placeholder="Write your post here"
    v-model="body"
    required
    />
    <br>
    <input 
    class="submit"
    type="submit" 
    value="Post"
    @click="SubmitPost">
  </section>
  <section class="explore">
    <section v-for="post in posts" :key="post.id">
      <h3>{{ post.title }}</h3>
      <h5>{{ post.topic }}</h5>
      <p>{{ post.body }}</p>
    </section>
  </section>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import Navbar from '../components/NavBar.vue'

import { doc, getDocs, query, addDoc, collection, DocumentData } from "firebase/firestore";
import { getFirestore } from 'firebase/firestore'

export default defineComponent({
  name: 'ForumPost',
  components: {
    Navbar
  },
  data() {
    return {
      title: "" as string,
      body: "" as string,
      userId: this.$userId.toString(),
      posts: [] as Array<DocumentData>
    }
  },
  mounted() {
    this.GetPosts()
    
  },
  methods: {
    async GetPosts() {
      const db = getFirestore()
      const q = query(collection(db, "Users"))
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        const Q = query(collection(db, "Users", doc.id, "Posts"))
        getDocs(Q).then((coll) => {
          coll.docs.forEach((doc) => {
            this.posts.push(doc.data())
          })
        })
      })
    },
    async SubmitPost() {
      if (this.title == "" || this.body == "") {
        console.log("More info required")
        return
      }
      const db = getFirestore()
      await addDoc(collection(db, "Users", this.userId, "Posts"), {
        title: this.title,
        topic: "",
        body: this.body
      });

    }
  }
});
</script>