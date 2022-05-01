import React from 'react'
import AppLayout from "../components/AppLayout"
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>홈 | NodeBird</title>
      </Head>
      <AppLayout>
        <div>Home</div>
      </AppLayout>
    </>
  )
}

export default Home