<template>
  <Navbar/>
  <section v-if="!creatingPost" class="search">
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
      <div class="page-navigation">
        <button v-if="pageNumber > 1" @click="TogglePage(-1)">page back</button>
        <p>{{ pageNumber }}/{{ Math.ceil(posts.length / 5) > 0 ? Math.ceil((posts.length + 1) / 5) : 1 }}</p>
        <button v-if="pageNumber <= posts.length / 5" @click="TogglePage(1)">page forward</button>
      </div> 
      <section v-for="(post, index) in postPage" :key="post.id" class="post-explore" :id="'post' + index" @click="TogglePostView(index)">
        <h3>{{ post.title }}</h3>
        <h4>{{ post.user }}</h4>
        <h5>{{ post.topic }}</h5>
        <p class="post-content" :id="'content' + index">{{ post.body }}</p>
      </section>
    </div>

    <section id="post-display">
    </section>
    <section v-if="postDisplay">
      <textarea 
      id="comment-body"
      class="post-body"
      type="text"
      placeholder="Write your comment here"
      required
      ></textarea>
      <input
      class="submit"
      type="submit" 
      value="Comment"
      @click="SubmitComment">
    </section>
    <button class="postbutton" @click="TogglePostView(undefined)" v-if="postDisplay">Back</button>
    <div class="commentsSection post-explore"  v-if="postDisplay">
      <h3>Comments</h3>
      <section id="comment-display" v-for="comment in commentPage" :key="comment.id" >
        <h3>{{ comment.user }}</h3>
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
      this.getCurrentPostId(post.children[0].textContent, content?.textContent, post.children[1].textContent)
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
      if (this.postTitle == "" || this.postBody == "") return
      const select = document.getElementById('topic-select') as HTMLSelectElement
      const value = select?.value
      const db = getFirestore()
      await addDoc(collection(db, "Users", this.userId, "Posts"), {
        title: this.postTitle,
        user: this.userName,
        topic: value,
        body: this.postBody
      });
      select.value = ''
      const title = document.getElementById('title') as HTMLInputElement
      title.value = ''
      const body = document.getElementById('post-body') as HTMLInputElement
      body.value = ''
      this.creatingPost = !this.creatingPost
      this.GetPosts()
    },
    async SubmitComment() {
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
    async getCurrentPostId(title: string | null, body: string | null | undefined, topic: string | null) {
      const db = getFirestore()
      const snapshot = await getDocs(collection(db, "Users"))
      snapshot.forEach(async (doc) => {
        const q = query(collection(db, "Users", doc.id, "Posts"),where("title", "==", title),where("body", "==", body),where("topic", "==", topic))
        const matches = await getDocs(q)
        if (matches.docs.length != 0) {
          this.selectedPostRefPath = matches.docs[0].ref.path
          this.getCurrentPostComments()
        }
      })
    },
    async getCurrentPostComments() {
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

.page-navigation {
  display: flex;
  flex-direction: row;
}
input{
  font-size: 17px;
  margin: 0.3rem;
  left: 10%;
}
.post-submit {
  font-size: 15px;
}
#topic-select{
  font-size: 15px;
}
.post-explore {
  border: 1px solid #333;
  border-radius: 7px;
  margin-top: .5rem;
  cursor: pointer;
  background-color: #adaba9;
  font-size: 15px;
  margin :1.5rem;
  height: 9vh;
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
  background-color: #333333;
  color: aliceblue;
  margin: 0.2rem;
  
  font-size: large;
}

button:hover,
.submit:hover {
  background-color: #ea6026;
  color: azure;
  cursor: pointer;
}
.expolore h3{

 width: 60vw;

}

</style>