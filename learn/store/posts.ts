import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {HYDRATE} from 'next-redux-wrapper'
import {AppState} from './store'

export interface UserType {
  id: number
  nickname: string
}

export interface CommentType {
  User: UserType
  content: string
}

export interface PostType {
  id: number
  User: UserType
  content: string
  Images: {src: string}[]
  Comments: CommentType[]
  imagePaths: string[]
  postAdded: boolean
}

const dummyPost: PostType = {
  id: 2,
  content: '더미데이터입니다.',
  User: {
    id: 1,
    nickname: '민석',
  },
  Images: [],
  Comments: [],
  imagePaths: [],
  postAdded: true,
}

export interface PostState {
  mainPosts: PostType[]
}

const initialState: PostState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: '민석',
    },
    content: '첫 번째 게시글 시험 #해시 #익스프레스 #연습 #공부',
    Images: [
      {src: 'https://images.unsplash.com/photo-1652121481454-bc3005d2b293'},
      {src: 'https://images.unsplash.com/photo-1652110153475-c84ff06ebaa4'},
      {src: 'https://images.unsplash.com/photo-1652120271748-6f2d0736f735'},
    ],
    Comments: [
      {
        User: {
          id: 2,
          nickname: 'nero',
        },
        content: '멋있는 장소네요.',
      },
      {
        User: {
          id: 3,
          nickname: 'neo',
        },
        content: '빨간약이 맛있어요!!',
      },
    ],
    imagePaths: [],
    postAdded: true,
  }],
}

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<PostType>) => {
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
      }
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.log('HYDRATE', state, action.payload)
      return {
        ...state,
        ...action.payload.posts,
      }
    },
  },
})

export const {addPost} = postsSlice.actions

export const selectMainPosts = (state: AppState) => state.posts.mainPosts

export default postsSlice.reducer