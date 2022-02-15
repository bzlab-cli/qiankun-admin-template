/*
 * @Author: jrucker
 * @Description:
 * @Date: 2021/10/25 18:56:51
 * @LastEditors: jrucker
 * @LastEditTime: 2022/02/14 16:56:08
 */

import { createStore } from 'vuex'
import { store as app, AppStore } from '@/store/modules/app'
import { store as settings, SettingStore } from '@/store/modules/settings'
import { store as permission, PermissionStore } from '@/store/modules/permission'
import { store as user, UserStore } from '@/store/modules/user'
import { store as tagViews, TagsStore } from '@/store/modules/tags'
import { store as micro, MicroStore } from '@/store/modules/micro'

import { AppState } from '@/store/modules/app/state'
import { SettingsState } from '@/store/modules/settings/state'
import { PermissionState } from '@/store/modules/permission/state'
import { UserState } from '@/store/modules/user/state'
import { TagsViewState } from '@/store/modules/tags/state'
import { MicroState } from '@/store/modules/micro/state'
export interface RootState {
  app: AppState
  settings: SettingsState
  permission: PermissionState
  user: UserState
  tagViews: TagsViewState
  micro: MicroState
}

export type Store = AppStore<Pick<RootState, 'app'>> &
  SettingStore<Pick<RootState, 'settings'>> &
  PermissionStore<Pick<RootState, 'permission'>> &
  UserStore<Pick<RootState, 'user'>> &
  TagsStore<Pick<RootState, 'tagViews'>> &
  MicroStore<Pick<RootState, 'micro'>>

export const store = createStore({
  modules: {
    app,
    settings,
    permission,
    user,
    tagViews,
    micro
  }
})

export function useStore(): Store {
  return store as Store
}
