/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link"
import React from "react"
import {Menu} from 'antd'

const items = [
  {label: <Link href="/"><a>홈</a></Link>, key: '1'},
  {label: <Link href="/profile"><a>프로필</a></Link>, key: '2'},
  {label: <Link href="/signup"><a>회원가입</a></Link>, key: '3'},
]

interface Props {
  children: React.ReactNode
}

const AppLayout = ({children}: Props) => {
  return (
    <div>
      <Menu items={items} mode="horizontal"/>
      {children}
    </div>
  )
}

export default AppLayout