import React from 'react'
import AppLayout from '../components/AppLayout'
import Head from 'next/head'
import {useAppSelector} from '../store/hooks'
import {selectIsLoggedIn} from '../store/users'
import {selectMainPosts} from '../store/posts'
import PostForm from '../components/PostForm'
import PostCard from '../components/PostCard'

const Home = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn)
  const mainPosts = useAppSelector(selectMainPosts)

  return (
    <>
      <Head>
        <title>홈 | NodeBird</title>
      </Head>
      <AppLayout>
        {isLoggedIn && <PostForm />}
        {mainPosts.map(post => <PostCard key={post.id} post={post} />)}
      </AppLayout>
    </>
  )
}

export default Home