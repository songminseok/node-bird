import React from 'react'
import 'antd/dist/antd.css'
import {AppProps} from "next/app";
import Head from "next/head";
import {wrapper} from '../store/store'

const NodeBird = ({Component, pageProps}: AppProps) => {
  return (
    <>
      <Head>
        <title>NodeBird</title>
        <meta charSet='utf-8'/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default wrapper.withRedux(NodeBird)