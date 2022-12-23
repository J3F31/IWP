<template>
  <Navbar/>
  <section class="search">
    <button @click="GetPosts">All posts</button>
    <button @click="GetUserPosts">My posts</button>
    <select name="topics" id="topic-search">
      <option value="">no topic</option>
      <option value="professional engagement">professional engagement</option>
      <option value="digital resources">digital resources</option>
      <option value="teaching and learning">teaching and learning</option>
      <option value="assessment">assessment</option>
      <option value="empowering learners">empowering learners</option>
      <option value="facilitating learners' digital competence">facilitating learners' digital competence</option>
    </select>
    <button @click="GetTopicPosts">Search by topic</button>
  </section>
  <section class="post-submit">
    <input 
    class="post-title"
    id="title"
    type="text"
    placeholder="Give your post a title"
    v-model="title"
    required
    />
    <br>
    <select name="topics" id="topic-select">
      <option value="">(select post topic)</option>
      <option value="professional engagement">professional engagement</option>
      <option value="digital resources">digital resources</option>
      <option value="teaching and learning">teaching and learning</option>
      <option value="assessment">assessment</option>
      <option value="empowering learners">empowering learners</option>
      <option value="facilitating learners' digital competence">facilitating learners' digital competence</option>
    </select>
    <br>
    <input 
    class="post-body"
    id="body"
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
    <div v-if="!postDisplay">
      <section v-for="(post, index) in postPage" :key="post.id" class="post-explore" :id="'post' + index" @click="TogglePostView(index)">
        <h3>{{ post.title }}</h3>
        <h5>{{ post.topic }}</h5>
        <p class="post-content" :id="'content' + index">{{ post.body }}</p>
      </section>
      <div class="page-navigation">
        <button v-if="pageNumber > 1" @click="TogglePage(-1)">page back</button>
        <p>{{ pageNumber }}/{{ Math.ceil(posts.length / 5) > 0 ? Math.ceil(posts.length / 5) : 1 }}</p>
        <button v-if="pageNumber <= posts.length / 5" @click="TogglePage(1)">page forward</button>
      </div> 
    </div>
    <section id="post-display">
    </section>
    <button @click="TogglePostView(undefined)" v-if="postDisplay">back</button>
  </section>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import Navbar from '../components/NavBar.vue'

import { getDocs, query, addDoc, collection, DocumentData, where } from "firebase/firestore";
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
      posts: [] as Array<DocumentData>,
      postPage: [] as Array<DocumentData>,
      postDisplay: false as boolean,
      pageNumber: 1 as number
    }
  },
  mounted() {
    this.GetPosts()
    
  },
  methods: {
    TogglePage(pageIncrement: number) {
      this.postPage = []
      this.pageNumber += pageIncrement
      const startDoc = (this.pageNumber - 1) * 5
      let docCount = 0
      let docStop = 0
      this.posts.forEach((doc) => {
        docCount++
        if (docCount < startDoc) return
        docStop++
        if (docStop > 5) return
        this.postPage.push(doc)
      })
    },
    TogglePostView(index: number | undefined) {
      this.postDisplay = !this.postDisplay
      const display = document.getElementById('post-display')
      display?.childNodes.forEach((child) => {
        child.remove()
      })    
      if (index == undefined) return
      const content = document.getElementById('content' + index)
      content?.classList.toggle("post-content")
      const post = document.getElementById('post' + index) as HTMLElement
      const clone = post.cloneNode(true)
      display?.append(clone)
    },
    async GetPosts(): Promise<void> {
      this.pageNumber = 1
      this.postPage = []
      this.posts = []
      const db = getFirestore()
      const q = query(collection(db, "Users"))
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        const Q = query(collection(db, "Users", doc.id, "Posts"))
        getDocs(Q).then((coll) => {
          coll.docs.forEach((doc) => {
            this.posts.push(doc.data())
            if (this.postPage.length > 4) return
            this.postPage.push(doc.data())
          })
        })
      })
    },
    async GetUserPosts() {
      this.pageNumber = 1
      this.postPage = []
      this.posts = []
      const db = getFirestore()
      const q = query(collection(db, "Users", this.userId, "Posts"))
      const snapshot = await getDocs(q)
      snapshot.forEach((doc) => {
        this.posts.push(doc.data())
        if (this.postPage.length > 4) return
        this.postPage.push(doc.data())
      })
    },
    async GetTopicPosts() {
      this.pageNumber = 1
      this.postPage = []
      this.posts = []
      const select = document.getElementById('topic-search') as HTMLSelectElement
      const value = select?.value
      const db = getFirestore()
      const q = query(collection(db, "Users"))
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        const Q = query(collection(db, "Users", doc.id, "Posts"), where("topic", "==", value))
        getDocs(Q).then((coll) => {
          coll.docs.forEach((doc) => {
            this.posts.push(doc.data())
            if (this.postPage.length > 4) return
            this.postPage.push(doc.data())
          })
        })
      })
    },
    async SubmitPost(): Promise<void> {
      if (this.title == "" || this.body == "") return
      const select = document.getElementById('topic-select') as HTMLSelectElement
      const value = select?.value
      const db = getFirestore()
      await addDoc(collection(db, "Users", this.userId, "Posts"), {
        title: this.title,
        topic: value,
        body: this.body
      });
      select.value = ''
      const title = document.getElementById('title') as HTMLInputElement
      title.value = ''
      const body = document.getElementById('body') as HTMLInputElement
      body.value = ''

    }
  }
});
</script>

<style scoped>
.page-navigation {
  display: flex;
  flex-direction: row;
}
.post-explore {
  border: 1px solid #333;
  border-radius: 7px;
  margin-top: .5rem;
  cursor: pointer;
}
.post-content {
  display: none;
}
</style>