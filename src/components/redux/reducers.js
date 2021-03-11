import { combineReducers } from 'redux'
import * as types from './types'

const token = localStorage.getItem('token');
const mainStateReducer = {
  dashboardLoading:false,
  userData:null,
  darkMode:false,
  theme:null,
  login:false,
  loading:false
}

// DATA REDUCER
const update_state_reducer = (state = mainStateReducer, { type, payload }) => {
  switch (type) {
    case types.DARK_MODE:
      return {
        ...state,
       darkMode:!state.darkMode,
      }
      case types.THEME:
      return {
        ...state,
       theme:payload,
      }
      case types.LOGIN:
      return {
        ...state,
       login:payload,
      }
      case types.SET_LOADER:
      return {
        ...state,
       loading:payload,
      }
     
    default:
      return state
  }
}

// COMBINED REDUCERS
const reducers = {
  states: update_state_reducer
}

export default combineReducers(reducers)
