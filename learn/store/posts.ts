import { createSlice } from '@reduxjs/toolkit'
import {HYDRATE} from 'next-redux-wrapper'

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: []
  },
  reducers: {},
  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.log('HYDRATE', state, action.payload)
      return {
        ...state,
        ...action.payload.posts
      }
    }
  }
})

// export const {} = postSlice.actions
export default postsSlice.reducer