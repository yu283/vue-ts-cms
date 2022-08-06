import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import localCatch from '@/utils/cache'
import { firstMenu } from '@/utils/mapMenus'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/navigation'
  },
  {
    path: '/navigation',
    name: 'navigation',
    component: () => import('@/views/navigation/Navigation.vue')
  },
  {
    path: '/login',
    name: 'login',
    //懒加载
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main/main.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/not-found/NotFound.vue')
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

  if (to.path === '/main') {
    return firstMenu.url
  }
})

export default router
