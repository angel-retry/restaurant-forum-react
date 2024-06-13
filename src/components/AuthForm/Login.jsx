import { Button, FormControl, Heading, Input } from '@chakra-ui/react'

const Login = () => {
  return (
    <>
      <Heading fontSize={'2xl'} textAlign={'center'}>餐廳論壇</Heading>
      <Heading fontSize={'md'} textAlign={'center'}>登入帳號</Heading>
      <FormControl id="email">
        <Input type="email" placeholder='Email' />
      </FormControl>
      <FormControl id="password">
        <Input type="password" placeholder='Password' />
      </FormControl>
      <Button colorScheme={'blue'} variant={'solid'} marginTop={3}>
        Sign in
      </Button>
    </>
  )
}

export default Login
