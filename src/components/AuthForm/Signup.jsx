import { Button, FormControl, Heading, Input } from '@chakra-ui/react'

const Signup = () => {
  return (
    <>
      <Heading fontSize={'2xl'} textAlign={'center'}>餐廳論壇</Heading>
      <Heading fontSize={'md'} textAlign={'center'}>註冊帳號</Heading>
      <FormControl>
        <Input type="text" placeholder='Name' />
      </FormControl>
      <FormControl>
        <Input type="email" placeholder='Email' />
      </FormControl>
      <FormControl >
        <Input type="password" placeholder='Password' />
      </FormControl>
      <FormControl>
        <Input type="password" placeholder='confirmPassword' />
      </FormControl>
      <Button colorScheme={'blue'} variant={'solid'} marginTop={3}>
        Sign up
      </Button>
    </>
  )
}

export default Signup
