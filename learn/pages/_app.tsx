import React from 'react'
import 'antd/dist/antd.css'

interface Props {
  Component: any
}

const NodeBird = ({Component}: Props) => {
  return <Component />
}

export default NodeBird