import React from 'react'
import {Button, Card, List} from 'antd'
import {css} from '@emotion/react'
import {StopOutlined} from '@ant-design/icons'

const listStyle = css({
  marginBottom: 20
})

const moreStyle = css({
  textAlign: 'center',
  margin: '10px 0'
})

const itemStyle = css({
  marginTop: 20
})

interface Props {
  header: string
  data: {nickname: string}[]
}

function FollowList({header, data}: Props) {
  return (
    <List
      css={listStyle}
      grid={{gutter: 4, xs: 2, md: 3}}
      size={"small"}
      header={<div>{header}</div>}
      loadMore={<div css={moreStyle}><Button>더 보기</Button></div>}
      bordered
      dataSource={data}
      renderItem={(item) => (
        <List.Item css={itemStyle}>
          <Card actions={[<StopOutlined key={'stop'} />]}>
            <Card.Meta description={item.nickname}/>
          </Card>
        </List.Item>
      )}
    />
  )
}

export default FollowList