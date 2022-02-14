/*
 * @Author: jrucker
 * @Description:
 * @Date: 2021/10/25 18:56:51
 * @LastEditors: jrucker
 * @LastEditTime: 2022/01/27 18:42:08
 */

import { MutationTree } from 'vuex'
import { UserState } from './state'
import { UserMutationTypes } from './types'
import { checkImgExists } from '@/utils'

export type Mutations<S = UserState> = {
  [UserMutationTypes.SET_TOKEN](state: S, token: string): void
  [UserMutationTypes.SET_NAME](state: S, name: string): void
  [UserMutationTypes.SET_AVATAR](state: S, avatar: string): void
  [UserMutationTypes.SET_USER_ID](state: S, userId: string): void
  [UserMutationTypes.SET_ROLE_ID](state: S, roleId: string): void
  [UserMutationTypes.SET_ROLE_NAME](state: S, roleName: string): void
  [UserMutationTypes.LOAD_USER_INFO](state: S, payload: boolean): void
}

export const mutations: MutationTree<UserState> & Mutations = {
  [UserMutationTypes.SET_TOKEN](state: UserState, token: string) {
    state.token = token
  },
  [UserMutationTypes.SET_NAME](state: UserState, name: string) {
    state.name = name
  },
  async [UserMutationTypes.SET_AVATAR](state: UserState, avatar: string) {
    const exist = await checkImgExists(avatar)
    if (exist) {
      state.avatar = avatar
    }
  },
  [UserMutationTypes.SET_USER_ID](state: UserState, userId: string) {
    state.userId = userId
  },
  [UserMutationTypes.SET_ROLE_ID](state: UserState, roleId: string) {
    state.roleId = roleId
  },
  [UserMutationTypes.SET_ROLE_NAME](state: UserState, roleName: string) {
    state.roleName = roleName
  },
  [UserMutationTypes.LOAD_USER_INFO](state: UserState, payload: boolean) {
    state.loadUserInfo = payload
  }
}
