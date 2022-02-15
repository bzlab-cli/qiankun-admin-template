/*
 * @Author: jrucker
 * @Description:
 * @Date: 2021/10/25 18:56:51
 * @LastEditors: jrucker
 * @LastEditTime: 2022/02/15 18:18:56
 */

import { registerMicroApps, addGlobalUncaughtErrorHandler } from 'qiankun'
import { config } from './config'

const apps: any = config.map(item => {
  return {
    ...item,
    props: {
      entry: item.entry,
      routerBase: item.activeRule
    }
  }
})

registerMicroApps(apps, {})

addGlobalUncaughtErrorHandler((event: Event | string) => {
  console.error('error', event)
  const { message: msg } = event as any
  if (msg && msg.includes('died in status LOADING_SOURCE_CODE')) {
    console.error('子应用加载失败')
  }
})
