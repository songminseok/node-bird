import {Button, Input} from 'antd'
import React from 'react'
import {Controller, useForm} from 'react-hook-form'
import Link from 'next/link'
import {css} from '@emotion/react'
import {useAppDispatch} from '../store/hooks'
import {login} from '../store/users'

const inputWrapperStyle = css({
  padding: 10,
})

const buttonWrapperStyle = css({
  marginTop: 10,
})

interface FormValues {
  id: string
  password: string
}


export default function LoginForm() {
  const dispatch = useAppDispatch()
  const {handleSubmit, control} = useForm<FormValues>()

  const onSubmit = React.useCallback((values: FormValues) => {
    console.log('[OnSubmit] values', values)
    dispatch(login({name: 'minseok'}))
  }, [dispatch])

  return (
    <form css={inputWrapperStyle} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor='id'>아이디</label>
        <br />
        <Controller
          name={'id'}
          control={control}
          rules={{required: true}}
          render={({field}) => {
            return <Input {...field} />
          }}
        />
      </div>
      <div>
        <label htmlFor='password'>패스워드</label>
        <br />
        <Controller
          name={'password'}
          control={control}
          rules={{required: true}}
          render={({field}) => {
            return <Input type={'password'} {...field} />
          }}
        />
      </div>
      <div css={buttonWrapperStyle}>
        <Button type={'primary'} htmlType={'submit'} loading={false}>로그인</Button>
        <Link href={'/signup'}><Button>회원가입</Button></Link>
      </div>
    </form>
  )
}