import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'



import BScroll from '@better-scroll/core'
import Pullup from '@better-scroll/pull-up'
BScroll.use(Pullup)


import 'normalize.css'
import '@/assets/css/base.css'
import '@/assets/icon/iconfont.css'

// import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const app = createApp(App)
app.use(ElementPlus).use(router).mount('#app')
// for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
//   app.component(key, component)
// }
