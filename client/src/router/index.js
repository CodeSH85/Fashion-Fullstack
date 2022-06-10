import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/lookbook',
    name: 'lookbook',
    component: () => import('../views/LookbookView.vue')
  },
  {
    path: '/press',
    name: 'press', 
    component: () => import('../views/PressView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/shop',
    name: 'shop',
    component: () => import('../views/ShopView.vue')
  },
  {
    path: '/shop/:productId',
    name: 'singleProduct',
    component: () => import('../views/SingleProductView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/account',
    name: 'account',
    component: () => import('../views/AccountView.vue')
  },
  {
    path: '/account/signup',
    name: 'signup',
    component: () => import('../views/SignUpView.vue')
  },
  {
    path: '/account/order',
    name: 'order',
    component: () => import('../views/OrderView.vue')
  },
  {
    path: '/bag',
    name: 'bag',
    component: () => import('../views/BagView.vue')
  },
  {
    path: '/bag/completed',
    name: 'orderCompleted',
    component: () => import('../views/OrderCompletedView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
