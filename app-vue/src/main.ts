/*
 * @Author: jrucker
 * @Description:
 * @Date: 2021/10/25 18:56:51
 * @LastEditors: jrucker
 * @LastEditTime: 2022/02/11 10:54:34
 */

// import { createApp, Directive } from 'vue'
// import App from './app.vue'
// import router from './router'
// import { store } from './store'
// import { loadAllPlugins } from '@/plugins'
// import '@/assets/iconfont/iconfont.css'
// import '@/styles/index.scss'
// import 'normalize.css'
// import * as directives from '@/directives'
// import './permission'
// const app = createApp(App)
// // 加载所有插件
// loadAllPlugins(app)

// // 自定义指令
// Object.keys(directives).forEach(key => {
//   app.directive(key, (directives as { [key: string]: Directive })[key])
// })
// app.use(store).use(router).mount('#app')

import { lifeCycle, render } from './life-cycle'

/**
 * @name 导出微应用生命周期
 */
const { bootstrap, mount, unmount } = lifeCycle()
export { bootstrap, mount, unmount }

// @ts-expect-error
const __qiankun__ = window.__POWERED_BY_QIANKUN__
__qiankun__ || render()
