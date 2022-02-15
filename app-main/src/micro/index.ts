import { registerMicroApps, addGlobalUncaughtErrorHandler } from 'qiankun'
import config from './config'

const apps = config.map(item => {
  return {
    ...item,
    props: {
      routerBase: item.activeRule
    }
  }
})

registerMicroApps(apps, {
  // beforeLoad: () => {
  // },
  // afterMount: () => {
  // }
})

addGlobalUncaughtErrorHandler((event: Event | string) => {
  console.error('error', event)
  const { message: msg } = event as any
  if (msg && msg.includes('died in status LOADING_SOURCE_CODE')) {
    console.error('子应用加载失败')
  }
})
