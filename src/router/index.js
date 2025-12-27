import { createRouter, createWebHistory } from 'vue-router'
import SteCroixView from '../views/SteCroixView.vue'
import MeteoSearchView from '../views/MeteoSearchView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'stecroix',
      component: SteCroixView
    },
    {
      path: '/meteo',
      name: 'meteo',
      component: MeteoSearchView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    }
  ]
})

export default router