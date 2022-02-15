/*
 * @Author: jrucker
 * @Description:
 * @Date: 2021/10/25 18:56:51
 * @LastEditors: jrucker
 * @LastEditTime: 2022/02/15 17:35:17
 */

import { createApp, Directive } from 'vue'
import App from '../app.vue'
import router from '@/router'
import { store } from '@/store'
import { loadAllPlugins } from '@/plugins'
import '@/assets/iconfont/iconfont.css'
import '@/styles/index.scss'
import 'normalize.css'
import * as directives from '@/directives'
import '../permission'
import { microStore } from './store'

// @ts-ignore
const __qiankun__ = window.__POWERED_BY_QIANKUN__
let instance = null as any

if (__qiankun__) {
  // @ts-ignore
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
}

export const render = (props = {} as any) => {
  instance = createApp(App)
  // 加载所有插件
  loadAllPlugins(instance)

  Object.keys(directives).forEach(key => {
    instance.directive(key, (directives as { [key: string]: Directive })[key])
  })
  instance
    .use(store)
    .use(router)
    .mount(props.container ? props.container.querySelector('#app') : '#app')
}

if (!__qiankun__) {
  render()
}

export const lifeCycle = () => {
  return {
    async bootstrap(props) {
      // @ts-ignore
      console.log('[vue] vue app bootstraped', props)
    },
    async mount(props) {
      microStore(props)
      render(props)
    },
    async unmount() {
      instance.unmount()
      instance = null
    }
  }
}
