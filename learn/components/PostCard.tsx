import React from 'react'
import {PostType} from '../store/posts'

interface Props {
  post: PostType
}

const PostCard = ({post}: Props) => {
  return (
    <div>PostCard</div>
  )
}

export default PostCard