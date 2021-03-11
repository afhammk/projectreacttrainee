import * as types from './types'

// INCREMENT COUNTER BY 1
export const darkMode = (value) => ({ type: types.DARK_MODE })
export const setTheme = (value) => ({ type: types.THEME,payload:value })
export const login = (value) => ({ type: types.LOGIN,payload:value })
export const setLoader = (value) => ({ type: types.SET_LOADER,payload:value })