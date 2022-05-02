/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link"
import React from "react"
import {Col, Input, Menu, Row} from 'antd'
import UserProfile from "./UserProfile";
import LoginForm from "./LoginForm";

const items = [
  {label: <Link href="/"><a>홈</a></Link>, key: '1'},
  {label: <Link href="/profile"><a>프로필</a></Link>, key: '2'},
  {label: <Input.Search enterButton style={{verticalAlign: "middle"}}/>, key: '3'},
  {label: <Link href="/signup"><a>회원가입</a></Link>, key: '4'}
]

interface Props {
  children: React.ReactNode
}

const AppLayout = ({children}: Props) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false)

  return (
    <div>
      <Menu items={items} mode="horizontal"/>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLoggedIn ? <UserProfile setIsLoggedIn={setIsLoggedIn}/> : <LoginForm setIsLoggedIn={setIsLoggedIn}/>}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a href="https://www.inflearn.com/course/노드버드-리액트-리뉴얼" target="_blank" rel="noopener noreferrer">노드버드-리액트 따라하기</a>
        </Col>
      </Row>
    </div>
  )
}

export default AppLayout