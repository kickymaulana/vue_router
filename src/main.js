import { createWebHistory, createRouter } from 'vue-router'
import Beranda from './Beranda.vue'
import Tentang from './Tentang.vue'

const routes = [
  {
    path: '/', component: Beranda
  },
  {
    path: '/tentang', component: Tentang
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

import { createApp } from 'vue'
import App from './App.vue'


createApp(App).use(router).mount('#app')
