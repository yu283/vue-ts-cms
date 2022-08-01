import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import localCatch from '@/utils/cache'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    //懒加载
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/main',
    component: () => import('@/views/main/main.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = localCatch.getCatch('token')
    if (!token) {
      return '/login'
    }
  }
})

export default router
