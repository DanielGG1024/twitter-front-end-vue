import Vue from 'vue'
import VueRouter from 'vue-router'
// import { component } from 'vue/types/umd'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Main.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/regist',
    name: 'Regist',
    component: () => import('../views/Regist.vue')
  },
  {
    path: '/reply',
    name: 'Reply',
    component: () => import('../views/Reply.vue')
  },
  {
    path: '/setting',
    name: 'Setting',
    component: () => import('../views/Setting.vue')
  },
  {
    path: '/adminlogin',
    name: 'AdminLogin',
    component: () => import('../views/AdminLogin.vue')
  },
  {
    path: '/adminMain',
    name: 'AdminMain',
    component: () => import('../views/AdminMain.vue')
  },
  {
    path: '/adminUser',
    name: 'AdminUser',
    component: () => import('../views/AdminUser.vue')
  }
]

const router = new VueRouter({
  linkExactActiveClass: 'active',
  routes
})

export default router
