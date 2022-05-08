import { createSlice } from '@reduxjs/toolkit'
import {HYDRATE} from 'next-redux-wrapper'
import {AppState} from './store'

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    isLoggedIn: false,
    user: {}
  },
  reducers: {
    login(state, action) {
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload
      }
    },
    logout(state) {
      return {
        ...state,
        isLoggedIn: false,
        user: {}
      }
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.log('HYDRATE', state, action.payload)
      return {
        ...state,
        ...action.payload.users
      }
    }
  }
})

// Other code such as selectors can use the imported `RootState` type
export const selectIsLoggedIn = (state: AppState) => state.users.isLoggedIn
export const selectUser = (state: AppState) => state.users.user

export const { login, logout } = usersSlice.actions
export default usersSlice.reducer