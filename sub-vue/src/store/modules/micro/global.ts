/*
 * @Author: jrucker
 * @Description:
 * @Date: 2022/02/14 18:30:43
 * @LastEditors: jrucker
 * @LastEditTime: 2022/02/15 11:37:53
 */

import { store } from '@/store'

export const microStore = props => {
  props.onGlobalStateChange((value, prev) => {
    console.log(`[${props.name},onGlobalStateChange]:`, value, prev)
    store.commit('micro/SET_STATE', value)
  }, true)

  store.commit('micro/SET_STATE', {
    name: props.name,
    setGlobalState: props.setGlobalState
  })
}
