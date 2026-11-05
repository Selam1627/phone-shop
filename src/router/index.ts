import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/phones', name: 'catalog', component: () => import('@/views/CatalogView.vue') },
    {
      path: '/phones/:id',
      name: 'phone-detail',
      component: () => import('@/views/PhoneDetailView.vue'),
      props: true,
    },
    { path: '/cart', name: 'cart', component: () => import('@/views/CartView.vue') },
    { path: '/checkout', name: 'checkout', component: () => import('@/views/CheckoutView.vue') },
  ],
})

export default router
