import React, {useCallback, useRef} from 'react'
import {Controller, useForm} from 'react-hook-form'
import {Button, Input} from 'antd'
import {css} from '@emotion/react'
import {useAppDispatch} from '../store/hooks'
import {addPost, PostType} from '../store/posts'

interface FormValues {
  text: string
  images?: FileList
}

const PostForm = () => {
  const dispatch = useAppDispatch()
  const uploadInput = useRef<HTMLInputElement | null>(null)
  const {register, control, handleSubmit, getValues} =
    useForm<FormValues>({
      defaultValues: {
        text: '',
      },
    })

  const onSubmit = useCallback((values: FormValues) => {
    console.log('onSubmit', values)
    const newPost: PostType = {
      Comments: [],
      Images: [],
      User: {id: 1, nickname: '민석'},
      content: values.text,
      id: 0,
      imagePaths: [],
      postAdded: true,
    }
    dispatch(addPost(newPost))
  }, [dispatch])

  const onClickUpload = useCallback(() => {
    uploadInput.current?.click()
  }, [])

  const {ref, ...imagesField} = register('images')
  const images = getValues('images')

  console.log('file', images)

  return (
    <form onSubmit={handleSubmit(onSubmit)} encType='multipart/form-data'>
      <Controller
        control={control}
        name='text'
        render={({field}) => {
          return <Input.TextArea
            placeholder='어떤 신기한 일이 있었나요?'
            {...field}
          />
        }}
      />
      <div>
        <input type='file'
               ref={(e) => {
                 ref(e)
                 uploadInput.current = e
               }}
               {...imagesField}
               multiple
               hidden />
        <Button onClick={onClickUpload}>이미지 업로드</Button>
        <Button type='primary' css={css({float: 'right'})} htmlType='submit'>짹짹</Button>
      </div>
      <div>
        {images && Array.from(images).map((img, i) => (
          <div key={img.name + i} css={css({display: 'inline-block'})}>
            <img src='imgPath' alt={img.name} css={css({width: '200px'})} />
            <div>
              <Button>제거</Button>
            </div>
          </div>
        ))}
      </div>

    </form>
  )
}

export default PostForm