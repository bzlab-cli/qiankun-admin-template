import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { ElMessage } from 'element-plus'
import { registerMicroApps, addGlobalUncaughtErrorHandler } from 'qiankun'
import apps from './apps'

export default function () {
  // setDefaultMountApp('/app-vue')
  registerMicroApps(apps, {
    beforeLoad: (app: any) => {
      NProgress.start()
      console.log('before load', app)
      return Promise.resolve()
    },
    afterMount: (app: any) => {
      NProgress.done()
      console.log('after mount', app)
      return Promise.resolve()
    }
  })

  addGlobalUncaughtErrorHandler((event: Event | string) => {
    console.error('error', event)
    const { message: msg } = event as any
    if (msg && msg.includes('died in status LOADING_SOURCE_CODE')) {
      ElMessage.error('子应用加载失败')
    }
  })
  // start()
}
