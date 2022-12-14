import { createRouter, createWebHistory } from 'vue-router';

import LandingPage from '../views/LandingPage.vue';
import DigitalAgenda from '../views/DigitalAgenda.vue';
import ForumPost from '../views/ForumPost.vue';

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/agenda',
    name: 'DigitalAgenda',
    component: DigitalAgenda
  },
  {
    path: '/forum',
    name: 'ForumPost',
    component: ForumPost
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router