import { Box, Button, Flex, HStack, Image, Stack, Text } from '@chakra-ui/react'
import { useState } from 'react'
import Login from '../../components/AuthForm/Login'
import Signup from '../../components/AuthForm/Signup'

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true)
  console.log(isLogin)

  return (
    <Stack h={'100vh'} direction={'row'}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          {
            isLogin ? <Login/> : <Signup setIsLogin={setIsLogin} />
          }
          <HStack spacing={0} justify={'end'}>
              <Box>
                {isLogin ? '還沒有帳號?這邊可以' : '有帳號了?這邊可以'}
              </Box>
              <Box
                color={'blue.500'}
                fontWeight={'bold'}
                cursor={'pointer'}
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? '註冊' : '登入'}
              </Box>
            </HStack>
          <Flex alignItems={'center'} justifyContent={'center'} gap={2}>
            <Box flex={2} h={'1px'} bg={'gray.400'}></Box>
            <Text mx={1} color={'gray.400'} >OR</Text>
            <Box flex={2} h={'1px'} bg={'gray.400'}></Box>
          </Flex>

          <Button colorScheme='red'>
            Google {isLogin ? '註冊' : '登入'}
          </Button>
        </Stack>
      </Flex>
      <Flex flex={1} display={{ base: 'none', md: 'flex' }}>
        <Image
          alt={'Login Image'}
          w={'100%'}
          h={'100%'}
          objectFit={'cover'}
          src='cover.jpg'
        />
      </Flex>
    </Stack>
  )
}

export default AuthPage
