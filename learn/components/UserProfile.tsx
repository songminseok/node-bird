import React from 'react'
import {Avatar, Button, Card} from 'antd'
import {css} from '@emotion/react'

const cardStyle = css({
  width: 300,
})

const buttonStyle = css({
  marginTop: 20,
})

interface Props {
  setIsLoggedIn: (loggedIn: boolean) => void
}

export default function UserProfile({setIsLoggedIn}: Props) {
  const onLogout = React.useCallback(() => {
    setIsLoggedIn(false)
  }, [setIsLoggedIn])

  return (
    <Card
      css={cardStyle}
      actions={[
        <div key={'twit'}>짹짹</div>,
        <div key={'following'}>팔로윙</div>,
        <div key={'follower'}>팔로워</div>,
      ]}
    >
      <Card.Meta
        avatar={<Avatar>M</Avatar>}
        title='Minseok'
        description='Clone Twitter With ZeroCho'
      />
      <Button css={buttonStyle} onClick={onLogout}>로그아웃</Button>
    </Card>
  )
}