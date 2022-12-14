<template>
  <Navbar selected-id="forum"/>
  <div class="main">
  </div>
    <section v-if="!creatingPost && !postDisplay" class="search">
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
      <button @click="creatingPost=!creatingPost">Create a post</button>
    </section>
    <section v-if="creatingPost" class="post-submit">
      <input 
      class="post-title"
      id="title"
      type="text"
      placeholder="Give your post a title"
      v-model="postTitle"
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
      <textarea 
      class="post-body"
      id="post-body"
      type="text"
      placeholder="Write your post here"
      v-model="postBody"
      required
      ></textarea>
      <br>
      <input 
      class="submit"
      type="submit" 
      value="Post"
      @click="SubmitPost">
      <button @click="creatingPost=!creatingPost">Cancel</button>
    </section>
    <section v-if="!creatingPost" class="explore">
      <div v-if="!postDisplay">
        <div class="center">
          <div class="page-navigation">
            <button v-if="pageNumber > 1" @click="TogglePage(-1)">page back</button>
            <p>{{ pageNumber }}/{{ Math.ceil(posts.length / 5) > 0 ? Math.ceil((posts.length + 1) / 5) : 1 }}</p>
            <button v-if="pageNumber <= posts.length / 5" @click="TogglePage(1)">page forward</button>
          </div> 
          <section v-for="(post, index) in postPage" :key="post.id" class="post-explore" :id="'post' + index" @click="TogglePostView(index)">
            <h3>{{ post.title }}</h3>
            <h4>{{ post.user }}</h4>
            <h5>{{ post.topic }}</h5>
            <p>{{ post.timestamp }}</p>
            <p class="post-content" :id="'content' + index">{{ post.body }}</p>
          </section>
        </div>
      </div>

      <section id="post-display">
      </section>
      <section class="comment-section" v-if="postDisplay">
        <textarea 
        id="comment-body"
        class="post-body"
        type="text"
        placeholder="Write your comment here"
        required
        ></textarea>
        <br>
        <input
        class="submit"
        type="submit" 
        value="Comment"
        @click="SubmitComment">
        <button class="postbutton" @click="TogglePostView(undefined)" v-if="postDisplay">Back</button>
      </section>
      <div class="post-explore" v-if="postDisplay">
        <h3>Comments</h3>
        <section id="comment-display" v-for="comment in commentPage" :key="comment.id" >
          <h4>{{ comment.user }}</h4>
          <p>{{ comment.comment }}</p>
        </section>
      </div>
    </section>
  
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import Navbar from '../components/NavBar.vue'

import { getDocs, query, addDoc, collection, DocumentData, where } from "firebase/firestore";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from '@firebase/auth';

export default defineComponent({
  name: 'ForumPost',
  components: {
    Navbar
  },
  data() {
    return {
      postTitle: "" as string,
      postBody: "" as string,
      userId: this.$userId.toString(),
      userName: "" as string | null | undefined,
      posts: [] as Array<DocumentData>,
      postPage: [] as Array<DocumentData>,
      commentPage: [] as Array<DocumentData>,
      postDisplay: false as boolean,
      pageNumber: 1 as number,
      creatingPost: false as boolean,
      selectedPostRefPath: undefined as string | undefined
    }
  },
  mounted() {
    this.GetPosts()
    this.userName = getAuth().currentUser?.email?.split("@")[0]
  },
  methods: {
    GetTime(): string {
      const date = new Date()
      const year = date.getFullYear()
      const month = date.getMonth() + 1
      const day = date.getDate()
      const hour = date.getHours()
      const minute = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes()
      return `${day}-${month}-${year} ${hour}:${minute}`
    },
    TogglePage(pageIncrement: number) {
      this.postPage = []
      this.pageNumber += pageIncrement
      const startDoc = (this.pageNumber - 1) * 5
      let docCount = 0
      let docStop = 0
      this.posts.forEach((doc) => {
        docCount++
        if (docCount < startDoc) return
        if (docStop > 5) return
        this.postPage.push(doc)
      })
    },
    TogglePostView(index: number | undefined) {
      this.commentPage = []
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
      this.getCurrentPostId(post.children[0].textContent, post.children[1].textContent, post.children[2].textContent)
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
    async GetUserPosts(): Promise<void> {
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
    async GetTopicPosts(): Promise<void> {
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
      if (this.postTitle == "" || this.postBody == "") return
      const timestamp = this.GetTime()
      const selectTopic = document.getElementById('topic-select') as HTMLSelectElement
      const topic = selectTopic?.value
      const db = getFirestore()
      await addDoc(collection(db, "Users", this.userId, "Posts"), {
        title: this.postTitle,
        user: this.userName,
        topic: topic,
        timestamp: timestamp,
        body: this.postBody
      });
      selectTopic.value = ''
      const title = document.getElementById('title') as HTMLInputElement
      title.value = ''
      const body = document.getElementById('post-body') as HTMLInputElement
      body.value = ''
      this.GetPosts()
      this.creatingPost = !this.creatingPost
    },
    async SubmitComment(): Promise<void> {
      const comment = document.getElementById('comment-body') as HTMLInputElement
      if (comment.value == "") return
      const db = getFirestore()
      const ref = collection(db, `${this.selectedPostRefPath}/Comments`)
      await addDoc(ref, {
        comment: comment.value,
        user: this.userName
      })
      comment.value = ''
      this.getCurrentPostComments()
    },
    async getCurrentPostId(title: string | null, user: string | null, topic: string | null): Promise<void> {
      const db = getFirestore()
      const snapshot = await getDocs(collection(db, "Users"))
      snapshot.forEach(async (doc) => {
        const q = query(collection(db, "Users", doc.id, "Posts"),where("title", "==", title),where("user", "==", user),where("topic", "==", topic))
        const matches = await getDocs(q)
        if (matches.docs.length != 0) {
          this.selectedPostRefPath = matches.docs[0].ref.path
          this.getCurrentPostComments()
        }
      })
    },
    async getCurrentPostComments(): Promise<void> {
      this.commentPage.length == 0? null : this.commentPage = []
      const db = getFirestore()
      const q = query(collection(db, `${this.selectedPostRefPath}/Comments`))
      const comments = await getDocs(q)
      comments.docs.forEach((doc) => {
        this.commentPage.push(doc.data())
      })
    }
  }
});
</script>

<style scoped>
.main {
  height: 100vh;
  width: 100%;
  position: fixed;
  background-image: url("../../public/assets/BACKGROUND_LINES_BLUE.png");
  background-repeat: repeat;
  background-size: 100% auto;
  z-index: -1;
}
.search {
  position: fixed;
  display: flex;
  justify-content: center;
  width: 100%;
}
.page-navigation {
  display: flex;
  flex-direction: row;
}
input {
  font-size: 17px;
  margin: .3rem;
  left: 10%;
}
select {
  margin: .3rem;
  padding: .8rem;
  font-size: 16px;
}
.post-submit {
  font-size: 16px;
  margin: 1.5rem;
  padding: .8rem;
}
#topic-select{
  font-size: 16px;
}
.post-explore {
  width: 60%;
  margin-top: .5rem;
  cursor: pointer;
  background-color: var(--gray);
  font-size: 16px;
  padding: .8rem;
  margin: 1.5rem;
  border-radius: 0 14px 0 14px;
  border: 1px solid var(--darkblue);
}
.post-explore h3 {
  color: var(--darkblue);
}
.post-content {
  display: none;
}
.post-title {
  width: 40%;
}
.post-body {
  width: 40%;
  height: 100px;
  padding: 10px;
  font-family: inherit; 
}
button,
.submit {
  border: none;
  border-radius: 7px;
  background-color: var(--orange);
  color: aliceblue;
  margin: 0.3rem;
  padding: .8rem;
  font-size: large;
}

button:hover,
.submit:hover {
  background-color: var(--lightblue);
  color: azure;
  cursor: pointer;
}
#comment-display {
  margin-top: 2.4rem;
}
.comment-section {
  margin: 1.5rem;
  padding: .8rem;
}
.center {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
}
</style>