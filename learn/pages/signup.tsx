import AppLayout from '../components/AppLayout'
import Head from 'next/head'
import React, {useCallback} from 'react'
import {Controller, Resolver, ResolverResult, useForm} from 'react-hook-form'
import {Button, Checkbox, Input} from 'antd'
import {css} from '@emotion/react'
import styled from '@emotion/styled'

const formStyle = css({
  padding: 10,
})

const ErrorMessage = styled.div({
  color: 'red'
})

interface FormValues {
  id: string,
  password: string,
  passwordCheck: string,
  agreeTerm: boolean
}

// customResolver 구현해 보기
const resolver: Resolver<FormValues> = async (values) => {
  const result: ResolverResult<FormValues> = {values: {}, errors: {}}
  const {id, password, passwordCheck, agreeTerm} = values

  if (!id) {
    result.errors = {
      id: {
        type: 'required',
        message: '아이디를 입력해 주세요.',
      },
    }
  } else {
    result.values = {id}
  }

  if (!password) {
    result.errors = {
      ...result.errors,
      password: {
        type: 'required',
        message: '패스워드를 입력해 주세요.',
      },
    }
  } else {
    result.values = {
      ...result.values,
      password,
    }
  }

  if (password && password !== passwordCheck) {
    result.errors = {
      ...result.errors,
      passwordCheck: {
        type: 'validate',
        message: '패스워드가 일치하지 않습니다.',
      },
    }
  } else {
    result.values = {
      ...result.values,
      password,
      passwordCheck,
    }
  }

  if (!agreeTerm) {
    result.errors = {
      ...result.errors,
      agreeTerm: {
        type: 'required',
        message: '약관에 동의해야 합니다.',
      },
    }
  } else {
    result.values = {
      ...result.values,
      agreeTerm,
    }
  }

  return result
}

const Signup = () => {

  const {control, handleSubmit, formState: {errors}} = useForm<FormValues>({resolver})

  const onSubmit = useCallback((values: FormValues) => {
    console.log('onSubmit values', values)
  }, [])

  return (
    <>
      <Head>
        <title>회원가입 | NodeBird</title>
      </Head>
      <AppLayout>
        <form css={formStyle} onSubmit={handleSubmit(onSubmit)}>
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
            {errors.id && <ErrorMessage>{errors.id.message}</ErrorMessage>}
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
            {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
          </div>
          <div>
            <label htmlFor='id'>패스워드 확인</label>
            <br />
            <Controller
              name={'passwordCheck'}
              control={control}
              rules={{required: true}}
              render={({field}) => {
                return <Input type={'password'} {...field} />
              }}
            />
            {errors.passwordCheck && <ErrorMessage>{errors.passwordCheck.message}</ErrorMessage>}
          </div>
          <div>
            <Controller
              name={'agreeTerm'}
              control={control}
              render={({field}) => {
                return (
                  <Checkbox
                    checked={field.value}
                    onChange={(e) => field.onChange(e.target.checked)}
                  >
                    약관에 동의합니다.
                  </Checkbox>)
              }}
            />
            {errors.agreeTerm && <ErrorMessage>{errors.agreeTerm.message}</ErrorMessage>}
          </div>
          <div>
            <Button type={'primary'} htmlType={'submit'}>회원 가입하기</Button>
          </div>
        </form>
      </AppLayout>
    </>
  )
}

export default Signup