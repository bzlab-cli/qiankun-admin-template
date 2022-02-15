/*
 * @Author: jrucker
 * @Description:
 * @Date: 2021/10/25 18:56:51
 * @LastEditors: jrucker
 * @LastEditTime: 2022/02/14 18:30:55
 */

import { MutationTree } from 'vuex'
import { MicroState } from './state'
import { AppMutationTypes } from './types'

export type Mutations<S = MicroState> = {
  [AppMutationTypes.SET_GLOBAL_STATE](state: S, payload: any): void
  [AppMutationTypes.SET_STATE](state: S, payload: any): void
}

export const mutations: MutationTree<MicroState> & Mutations = {
  [AppMutationTypes.SET_GLOBAL_STATE](state: MicroState, payload: any) {
    state.setGlobalState(payload)
  },
  [AppMutationTypes.SET_STATE](state: MicroState, payload: any) {
    Object.keys(payload).forEach(key => {
      state[key] = payload[key]
    })
  }
}
