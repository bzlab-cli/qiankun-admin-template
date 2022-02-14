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

// const __qiankun__ = window.__POWERED_BY_QIANKUN__;
let instance = null as any

/**
 * @name 导出生命周期函数
 */
const lifeCycle = () => {
  return {
    async bootstrap(props) {
      console.log('bootstrap:', props)
    },
    async mount(props) {
      // appStore(props);
      console.log('mount:', props)
      render(props)
    },
    async unmount() {
      console.log('unmount:')
      instance.$destroy?.()
      instance = null
      // router = null;
    },
    async update(props) {
      console.log('update props', props)
    }
  }
}

const render = (props?) => {
  console.log('render', props)
  // Vue.config.productionTip = false;
  // router = createRouter({
  //   history: createWebHistory(__qiankun__ ? routerBase : "/"),
  //   routes: __qiankun__ ? routeMatch(routes, routerBase) : selfRoutes
  // });
  const app = createApp(App)
  // 加载所有插件
  loadAllPlugins(app)

  // 自定义指令
  Object.keys(directives).forEach(key => {
    app.directive(key, (directives as { [key: string]: Directive })[key])
  })
  instance = app.use(store).use(router).mount('#app')
}

export { lifeCycle, render }
