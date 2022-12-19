import { createRouter, createWebHistory } from 'vue-router';

import LandingPage from '../views/LandingPage.vue';
import DigitalAgenda from '../views/DigitalAgenda.vue';
import ForumPost from '../views/ForumPost.vue';
import Asessment from '../views/Asessment.vue';

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage,
    //meta: {
    //  authredirect: true
    //}
  },{
    path: '/asessment',
    name: 'asessment',
    component: Asessment,
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
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router