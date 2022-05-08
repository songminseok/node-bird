import React from 'react'
import {Avatar, Button, Card} from 'antd'
import {css} from '@emotion/react'
import {useAppDispatch} from '../store/hooks'
import {logout} from '../store/users'

const cardStyle = css({
  width: 300,
})

const buttonStyle = css({
  marginTop: 20,
})

export default function UserProfile() {
  const dispatch = useAppDispatch()
  const onLogout = React.useCallback(() => {
    dispatch(logout())
  }, [dispatch])

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