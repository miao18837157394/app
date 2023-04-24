import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/windows'
  },
  {
    path:'/windows',
    name: 'windows',
    component: () => import('../views/windows/oWin.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

router.addRoute({
  path: '/linux',
  name: 'linux',
  component: () => import('../views/linux/oLin.vue')
})

router.addRoute({
  path: '/ios',
  name: 'ios',
  component: () => import('../views/ios/oIos.vue')
})
router.addRoute({
  path: '/macos',
  name: 'macos',
  component: () => import('../views/macos/oMacos.vue')
})
router.addRoute({
  path: '/android',
  name: 'android',
  component: () => import('../views/android/oAndr.vue')
})

export default router