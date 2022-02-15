/*
 * @Author: jrucker
 * @Description:
 * @Date: 2021/10/25 18:56:51
 * @LastEditors: jrucker
 * @LastEditTime: 2022/02/14 18:14:25
 */

import { ActionTree, ActionContext } from 'vuex'
import { RootState } from '@/store'
import { MicroState } from './state'
import { Mutations } from './mutations'
import { AppMutationTypes, AppActionTypes } from './types'

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(key: K, payload: Parameters<Mutations[K]>[1]): ReturnType<Mutations[K]>
} & Omit<ActionContext<MicroState, RootState>, 'commit'>

export interface Actions {
  [AppActionTypes.ACTION_GLOBAL_STATE]({ commit }: AugmentedActionContext, payload: any): void
}

export const actions: ActionTree<MicroState, RootState> & Actions = {
  [AppActionTypes.ACTION_GLOBAL_STATE]({ commit }, payload: any) {
    commit(AppMutationTypes.SET_STATE, payload)
  }
}
