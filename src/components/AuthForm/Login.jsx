import * as yup from 'yup'
import { Alert, AlertDescription, AlertIcon, AlertTitle, Button, FormControl, FormErrorMessage, Heading, Input, Stack } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import useShowToast from '../../hooks/useShowToast'
import useSignin from '../../hooks/useSignin'

const schema = yup.object({
  email: yup.string().email('信箱格式不對').required('請填入信箱'),
  password: yup.string().required('請填入密碼')
}).required()

const Login = () => {
  const showToast = useShowToast()
  const { signin, isSigning, error: errorMessage } = useSignin()

  const { register, handleSubmit, formState: { errors } } = useForm({
    reValidateMode: 'onChange',
    resolver: yupResolver(schema)
  })

  const onSumbit = async (data) => {
    try {
      await signin(data)
    } catch (error) {
      return showToast('Error', error.message, 'error')
    }
  }

  const onError = (error) => {
    if (!error) return
    showToast('Error', '請填好欄位喔!', 'error')
  }

  return (
    <>
      <form style={{ width: '100%', height: '100%' }}>
        <Stack spacing={4}>
          <Heading fontSize={'2xl'} textAlign={'center'}>餐廳論壇</Heading>
          <Heading fontSize={'md'} textAlign={'center'}>登入帳號</Heading>
          <FormControl id="email" isInvalid={errors.email}>
            <Input
              type="email"
              placeholder='Email'
              name='email'
              {...register('email')}
            />
            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
          </FormControl>
          <FormControl id="password" isInvalid={errors.password}>
            <Input
              type="password"
              placeholder='Password'
              name='password'
              {...register('password')}
            />
             <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
          </FormControl>
          {errorMessage && (
            <Alert status='error'>
              <AlertIcon />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription fontWeight={'bold'}>{errorMessage}</AlertDescription>
            </Alert>
          )}

          <Button
            colorScheme={'blue'}
            variant={'solid'}
            marginTop={3}
            onClick={handleSubmit(onSumbit, onError)}
            isDisabled={errors?.email || errors?.password}
            isLoading={isSigning}
          >
            Sign in
          </Button>
        </Stack>
      </form>
    </>
  )
}

export default Login
