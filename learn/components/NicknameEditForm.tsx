import React, {useCallback} from 'react'
import {css} from '@emotion/react'
import {Controller, useForm } from 'react-hook-form'
import { Input } from 'antd'

const formStyle = css({
  marginBottom: 20,
  border: '1px solid #d9d9d9',
  padding: 10
})

interface FormValues {
  nickname: string
}

function NicknameEditForm() {
  const {control, handleSubmit} = useForm<FormValues>()

  const onSubmit = useCallback((values: FormValues) => {
    console.log('onSubmit values = ', values)
  }, [])
  return (
    <form css={formStyle} onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name={'nickname'}
        render={({field}) => {
          return <Input.Search addonBefore={"닉네임"} enterButton={"수정"} {...field} />
        }}
      />
    </form>
  )
}

export default NicknameEditForm