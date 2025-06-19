import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/chai',
      name: 'chai',
      component: () => import('@/views/ChaiView.vue')
    },
    {
      path: '/tisane',
      name: 'tisane',
      component: () => import('@/views/TisaneView.vue')
    },
    {
      path: '/black-tea',
      name: 'black-tea',
      component: () => import('@/views/BlackTeaView.vue')
    },
    {
      path: '/green-tea',
      name: 'green-tea',
      component: () => import('@/views/GreenTeaView.vue')
    },
    {
      path: '/oolong',
      name: 'oolong',
      component: () => import('@/views/OolongView.vue')
    },
    {
      path: '/puerh',
      name: 'puerh',
      component: () => import('@/views/PuerhView.vue')
    },
    {
      path: '/white-tea',
      name: 'white-tea',
      component: () => import('@/views/WhiteTeaView.vue')
    },
    {
      path: '/yerba-mate',
      name: 'yerba-mate',
      component: () => import('@/views/YerbaMateView.vue')
    },
    {
      path: '/bes-tea',
      name: 'bes-tea',
      component: () => import('@/views/BesTeaView.vue')
    }
  ]
})

export default router
