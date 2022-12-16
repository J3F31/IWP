import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyBq9uIfb3Br-V6eZ8V4ftDU7vsGZRdXVVo",
  authDomain: "digital-agenda-73c60.firebaseapp.com",
  projectId: "digital-agenda-73c60",
  storageBucket: "digital-agenda-73c60.appspot.com",
  messagingSenderId: "315937260721",
  appId: "1:315937260721:web:90b0ba8bbc3145612b4e90"
};

initializeApp(firebaseConfig);

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = getAuth().onAuthStateChanged((user) => {
      unsubscribe()
      resolve(user)
    }, reject)
  })
}

router.beforeEach(async(to, from, next) => {
  const auth = await getCurrentUser()
  //console.log("auth " + auth)
  if (to.matched.some(record => record.meta.auth)) {
    if (!auth) {
      return next({ name: "login", params: { nextUrl: to.fullPath } })
    }   
  }
  else if (auth && to.matched.some(record => record.meta.authredirect)) {
    // login page while logged in 
    return next("/agenda")
  }
  return next()
})

createApp(App).use(router).mount('#app')
