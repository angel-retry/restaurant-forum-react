import * as yup from 'yup'
import { Alert, AlertDescription, AlertIcon, AlertTitle, Button, FormControl, FormErrorMessage, Heading, Input, Stack } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import useShowToast from '../../hooks/useShowToast'
import useSignup from '../../hooks/useSignup'

const schema = yup.object({
  email: yup.string().email('信箱格式不對').required('請填入信箱'),
  name: yup.string().required('請填入名字'),
  password: yup.string()
    .min(8, '密碼至少要8個字元')
    .max(16, '密碼最多要16個字元')
    .matches(/(?=.*[a-z])/, '密碼需要小寫英文字母')
    .matches(/(?=.*[A-Z])/, '密碼需要大寫英文字母')
    .matches(/(?=.*[0-9])/, '密碼需要數字')
    .required('請輸入密碼'),
  confirmPassword: yup.string().oneOf([yup.ref('password')], '密碼輸入不相同').required('請輸入確認密碼')
}).required()

const Signup = ({ setIsLogin }) => {
  const showToast = useShowToast()

  const { isSignuping, error: errorMessage, signup } = useSignup(setIsLogin)

  const { register, handleSubmit, formState: { errors } } = useForm({
    reValidateMode: 'onChange',
    resolver: yupResolver(schema)
  })

  const onSumbit = async (data) => {
    try {
      await signup(data)
    } catch (error) {
      return showToast('Error', error.message, 'error')
    }
  }

  const onError = (error) => {
    if (!error) return
    showToast('Error', '請填好欄位喔!', 'error')
  }
  return (
    <form style={{ width: '100%', height: '100%' }}>
      <Stack spacing={4}>
        <Heading fontSize={'2xl'} textAlign={'center'}>餐廳論壇</Heading>
        <Heading fontSize={'md'} textAlign={'center'}>註冊帳號</Heading>
        <FormControl isInvalid={errors.name}>
          <Input type="text" placeholder='Name' name='name' {...register('name')} />
          <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.email}>
          <Input type="email" placeholder='Email' name='email' {...register('email')} />
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.password}>
          <Input type="password" placeholder='Password' name='password' {...register('password')} />
          <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.confirmPassword}>
          <Input type="password" placeholder='confirmPassword' name='confirmPassword' {...register('confirmPassword')}/>
          <FormErrorMessage>{errors.confirmPassword?.message}</FormErrorMessage>
        </FormControl>

        {errorMessage && (
            <Alert status='error'>
              <AlertIcon />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription fontWeight={'bold'}>{errorMessage}</AlertDescription>
            </Alert>
        )}

        <Button colorScheme={'blue'} variant={'solid'} marginTop={3} onClick={handleSubmit(onSumbit, onError)} isDisabled={errors?.email || errors?.password || errors?.name || errors?.confirmPassword} isLoading={isSignuping}>
          Sign up
        </Button>
      </Stack>
    </form>
  )
}

export default Signup
