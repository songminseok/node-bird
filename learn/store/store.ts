import {combineReducers, configureStore, ThunkAction} from '@reduxjs/toolkit'
import {Action, AnyAction} from 'redux'
import {createWrapper, HYDRATE} from 'next-redux-wrapper'
import usersReducer from './users'
import postsReducer from './posts'

const reducers = combineReducers({
  users: usersReducer,
  posts: postsReducer,
})

const rootReducer = (
  state: ReturnType<typeof reducers> | undefined,
  action: AnyAction
): ReturnType<typeof reducers> => {
  if (action.type === HYDRATE) {
    console.log('HYDRATE rootReducer', state, action.payload)
    return {
      ...state,
      ...action.payload,
    }
  } else {
    return reducers(state, action)
  }
}

const makeStore = () => configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development',
})

// reduxt toolkit 의 가이드
// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch

// next-redux-wrapper 에서 참조하는 값
export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch']
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

export const wrapper = createWrapper<AppStore>(makeStore, {debug: process.env.NODE_ENV === 'development'})
