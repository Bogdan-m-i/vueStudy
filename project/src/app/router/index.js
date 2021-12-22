import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      layout: 'main',
      auth: true,
    }
  },
  {
    path: '/help',
    name: 'Help',
    component: () => import('../views/Help.vue'),
    meta: {
      layout: 'main',
      auth: true,
    }
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('../views/Auth'),
    meta: {
      layout: 'auth',
      auth: false,
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
})

router.beforeEach((to, from, next) => {

  const requireAuth = to.meta.auth

  if (requireAuth && store.getters['auth/isAuth']) return next()

  if (requireAuth && !store.getters['auth/isAuth']) return next('/auth?message=auth')

  next()

})

export default router