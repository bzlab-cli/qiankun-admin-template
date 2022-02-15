/*
 * @Author: jrucker
 * @Description:
 * @Date: 2021/10/25 18:56:51
 * @LastEditors: jrucker
 * @LastEditTime: 2022/02/15 18:18:48
 */

export interface IConfig {
  name: string
  entry: string | undefined
  container: string
  activeRule: string
}

export const config: IConfig[] = [
  {
    name: 'sub-vue',
    entry: process.env.VUE_APP_SUB_VUE,
    container: '#subapp',
    activeRule: '/app/sub-vue'
  },
  {
    name: 'sub-vue3',
    entry: process.env.VUE_APP_SUB_VUE3,
    container: '#subapp',
    activeRule: '/app/sub-vue3'
  }
]
