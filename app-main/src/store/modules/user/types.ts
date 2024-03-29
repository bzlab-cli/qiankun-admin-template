/*
 * @Author: jrucker
 * @Description:
 * @Date: 2021/10/25 16:16:39
 * @LastEditors: jrucker
 * @LastEditTime: 2022/02/14 14:00:07
 */

export enum UserActionTypes {
  ACTION_LOGIN = 'ACTION_LOGIN',
  ACTION_RESET_TOKEN = 'ACTION_RESET_TOKEN',
  ACTION_GET_USER_INFO = 'ACTION_GET_USER_INFO',
  ACTION_GET_MENU = 'ACTION_GET_MENU',
  ACTION_LOGIN_OUT = 'ACTION_LOGIN_OUT',
  ACTION_ORG_LIST = 'ACTION_ORG_LIST'
}

export enum UserMutationTypes {
  SET_TOKEN = 'SET_TOKEN',
  SET_NAME = 'SET_NAME',
  SET_AVATAR = 'SET_AVATAR',
  SET_USER_ID = 'SET_USER_ID',
  SET_ROLE_ID = 'SET_ROLE_ID',
  SET_ROLE_NAME = 'SET_ROLE_NAME',
  LOAD_USER_INFO = 'LOAD_USER_INFO',
  SET_ORGLIST = 'SET_ORGLIST',
  SET_ORGID = 'SET_ORGID',
  SET_PROFESSIONAL_ID = 'SET_PROFESSIONAL_ID',
  SET_REGION_NAME = 'SET_REGION_NAME',
  SET_STATE = 'SET_STATE'
}
