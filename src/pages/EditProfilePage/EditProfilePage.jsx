import { Avatar, Box, Button, FormControl, FormLabel, Heading, HStack, Input, Stack, Textarea, VStack } from '@chakra-ui/react'

const EditProfilePage = () => {
  return (
    <Stack maxW={'500px'} marginX={'auto'} w={'100%'} px={3} >
      <VStack spacing={{ base: 5, md: 10 }} my={2} >
        <Heading fontSize={{ base: '2xl', md: '3xl' }}>修改個人資料</Heading>
        <HStack spacing={5}>
          <Avatar size={{ base: 'lg', md: 'xl' }} name='user' />
          <Input type='file' display={'none'} />
          <Button size={{ base: 'sm', md: 'md' }}>修改個人大頭貼</Button>
        </HStack>
        <FormControl id="email" display={'flex'} alignItems={'center'}>
          <FormLabel w={{ base: '40%', md: '30%' }} m={0} fontSize={{ base: 'md', md: 'lg' }} >Name</FormLabel>
          <Input type="email" fontSize={{ base: 'md', md: 'lg' }} />
        </FormControl>

        <FormControl id="email" display={'flex'} alignItems={'center'}>
          <FormLabel w={{ base: '40%', md: '30%' }} m={0} fontWeight={'bold'} alignSelf={'flex-start'} fontSize={{ base: 'md', md: 'lg' }} >自我介紹</FormLabel>
          <Textarea type="email" fontSize={{ base: 'md', md: 'lg' }} />
        </FormControl>

        <HStack w={'full'}justifyContent={'flex-end'}>
          <Button w={{ base: '20%', md: '30%' }}>Back</Button>
          <Button w={{ base: '20%', md: '30%' }} colorScheme='blue'>修改</Button>
        </HStack>
      </VStack>
    </Stack>
  )
}

export default EditProfilePage
