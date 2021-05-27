import { createRouter, createWebHashHistory } from 'vue-router'
// import { getToken } from "@/Utils/auth";

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    redirect:'/main',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    children:[
      {
        path: '/main',
        name: 'Main',
        component: () => import('../views/Main.vue')
      },
      {
        path: '/people',
        name: 'People',
        component: () => import('../views/People.vue')
      },
      {
        path: '/house',
        name: 'House',
        component: () => import('../views/House.vue')
      },
      {
        path: '/lifeline',
        name: 'Lifeline',
        component: () => import('../views/Lifeline.vue')
      },
      {
        path: '/Secdisaster',
        name: 'House',
        component: () => import('../views/Secdisaster.vue')
      },
      {
        path: '/earthquake',
        name: 'Earthquake',
        component: () => import('../views/Earthquake.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
