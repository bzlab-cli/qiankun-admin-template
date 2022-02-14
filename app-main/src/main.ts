/*
 * @Author: jrucker
 * @Description:
 * @Date: 2021/10/25 18:56:51
 * @LastEditors: jrucker
 * @LastEditTime: 2022/02/11 23:57:37
 */

import { createApp, Directive } from 'vue'
import App from './app.vue'
import router from './router'
import { store } from './store'
import { loadAllPlugins } from '@/plugins'
import '@/assets/iconfont/iconfont.css'
import '@/styles/index.scss'
import 'normalize.css'
import * as directives from '@/directives'
import './permission'
// import startMicroApp from './micro'

import { registerMicroApps } from 'qiankun'
import microApps from './micro-app'

const app = createApp(App)
// 加载所有插件
loadAllPlugins(app)

// 自定义指令
Object.keys(directives).forEach(key => {
  app.directive(key, (directives as { [key: string]: Directive })[key])
})

app.use(store).use(router).mount('#app')
// startMicroApp()

// 定义loader方法，loading改变时，将变量赋值给App.vue的data中的isLoading
// function loader(loading) {
//   if (app && app.$children) {
//     // instance.$children[0] 是App.vue，此时直接改动App.vue的isLoading
//     app.$children[0].isLoading = loading;
//   }
// }

// 给子应用配置加上loader方法
const apps = microApps.map(item => {
  return {
    ...item
    // loader,
  }
})

registerMicroApps(apps)
