import { createRouter, createWebHashHistory } from 'vue-router';

import LandingPage from '../views/LandingPage.vue';
import DigitalAgenda from '../views/DigitalAgenda.vue';
import ForumPost from '../views/ForumPost.vue';
import AsessmentPage from '../views/AsessmentPage.vue';
import HomePage from '../views/HomePage.vue';

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage,
    //meta: {
    //  authredirect: true
    //}
  },
  {
    path: '/HomePage',
    name: 'homePage',
    component: HomePage,
    meta: {
     authredirect: true,
     auth: true
    }
  },
  {
    path: '/asessment',
    name: 'asessment',
    component: AsessmentPage,
    meta:{
      requiresAuth:true,
    }
  },
  {
    path: '/agenda',
    name: 'DigitalAgenda',
    component: DigitalAgenda,
    meta: {
      requiresAuth: true,
      auth: true
    }
  },
  
  {
    path: '/forum',
    name: 'ForumPost',
    component: ForumPost,
    meta: {
      requiresAuth: true,
      auth: true
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router