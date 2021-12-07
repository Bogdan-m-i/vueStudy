import { createRouter, createWebHistory } from 'vue-router'
import Login from './views/Login'
import Forget from './views/Forget'
import Dashboard from './views/Dashboard'
// import Mail from './views/Mail'
import AppEmailBody from './components/AppEmailBody'

const Mail = () => import(/* webpackChunkName: "mail" */
  /* webpackMode: "lazy-once" */'./views/Mail')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/login', component: Login, alias: '/' },
    { path: '/forget', component: Forget, meta: { cantEnter: true } },
    { path: '/dashboard', component: Dashboard, name: 'home', beforeEnter () { console.log('beforeEnter') } },
    {
      path: '/mail',
      component: Mail,
      name: 'email',
      children: [
        { path: ':id?', component: AppEmailBody, props: true }
      ]
    },
    { path: '/:notFound(.*)', redirect: '/login' }
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

// Авторизацию можно сделать тут
router.beforeEach((to, from, next) => {
  if (to.meta.cantEnter) {
    next(false)
  } else {
    next() // next({name: 'home'})
  }
})

router.afterEach((to, from, next) => {

})

export default router
