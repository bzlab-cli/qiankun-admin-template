/*
 * @Author: jrucker
 * @Description:
 * @Date: 2022/02/14 18:30:43
 * @LastEditors: jrucker
 * @LastEditTime: 2022/02/15 09:38:38
 */

import { store } from '@/store'
import { initGlobalState } from 'qiankun'

export const microStore = () => {
  const { onGlobalStateChange, setGlobalState } = initGlobalState()

  onGlobalStateChange((value, prev) => {
    console.log('[app-main,onGlobalStateChange]:', value, prev)
    store.commit('micro/SET_STATE', value)
  })

  store.commit('micro/SET_STATE', {
    name: 'app-main',
    setGlobalState: setGlobalState
  })
}
