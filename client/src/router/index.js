import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    meta: {
      darkMode: true,
    },
  },
  {
    path: '/lookbook',
    name: 'lookbook',
    component: () => import('../views/LookbookView.vue'),
    meta: {
      darkMode: true,
    },
  },
  {
    path: '/lookbook/:id',
    name: 'lookbookInfo',
    component: () => import('../views/LookbookView.vue'),
    meta: {
      darkMode: true,
    },
  },
  {
    path: '/press',
    name: 'press', 
    component: () => import('../views/PressView.vue'),
    meta: {
      darkMode: true,
    },
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    meta: {
      darkMode: true,
    },
  },
  {
    path: '/shop',
    name: 'shop',
    component: () => import('../views/ShopView.vue'),
    meta: {
      greyMode: true,
    },
  },
  {
    path: '/shop/:productId',
    name: 'singleProduct',
    component: () => import('../views/SingleProductView.vue'),
    meta: {
      greyMode: true,
    },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue'),
    meta: {
      greyMode: true,
    },
  },
  {
    path: '/account',
    name: 'account',
    component: () => import('../views/AccountView.vue'),
    meta: {
      greyMode: true,
    },
  },
  {
    path: '/account/signup',
    name: 'signup',
    component: () => import('../views/SignUpView.vue'),
    meta: {
      greyMode: true,
    },
  },
  {
    path: '/account/order',
    name: 'order',
    component: () => import('../views/OrderView.vue'),
    meta: {
      greyMode: true,
    },
  },
  {
    path: '/bag',
    name: 'bag',
    component: () => import('../views/BagView.vue'),
    meta: {
      greyMode: true,
    },
  },
  {
    path: '/bag/:orderId',
    name: 'orderCompleted',
    component: () => import('../views/OrderCompletedView.vue'),
    meta: {
      greyMode: true,
    },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
