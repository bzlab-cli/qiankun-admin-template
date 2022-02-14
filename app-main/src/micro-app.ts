import store from './micro-state'

const microApps = [
  {
    name: 'sub-vue3',
    // entry: process.env.VUE_APP_SUB_VUE3,
    entry: '//localhost:7780/app/sub-vue3',
    activeRule: '/app/sub-vue3'
  }
]

const apps = microApps.map(item => {
  return {
    ...item,
    container: '#subapp', // 子应用挂载的div
    props: {
      routerBase: item.activeRule, // 下发基础路由
      getGlobalState: (store as any).getGlobalState // 下发getGlobalState方法
    }
  }
})

export default apps
