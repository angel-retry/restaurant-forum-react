import { Box, Button, Flex, FormControl, Heading, HStack, Image, Input, Stack, Text } from '@chakra-ui/react'

const AuthPage = () => {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
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
          <HStack spacing={0} justify={'end'}>
              <Box>還沒有帳號?這邊可以</Box>
              <Box color={'blue.500'} fontWeight={'bold'} cursor={'pointer'}>註冊</Box>
            </HStack>
          <Flex alignItems={'center'} justifyContent={'center'} gap={2}>
            <Box flex={2} h={'1px'} bg={'gray.400'}></Box>
            <Text mx={1} color={'gray.400'} >OR</Text>
            <Box flex={2} h={'1px'} bg={'gray.400'}></Box>
          </Flex>

          <Button colorScheme='red'>
            Google 登入
          </Button>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src='cover.jpg'
        />
      </Flex>
    </Stack>
  )
}

export default AuthPage
