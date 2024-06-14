import { Avatar, Button, HStack, Text, VStack } from '@chakra-ui/react'

const RestaurantHeader = () => {
  const createdBy = 1
  const authId = 2
  return (
    <HStack spacing={5} borderBottom={'1px solid'} borderColor={'gray.300'} width={'100%'} pb={5}>
      <Avatar src='/cover.jpg' size={'lg'} />
      <VStack align='flex-start'>
        <HStack spacing={5}>
          <Text>User1</Text>
          { createdBy === authId ? (<Button colorScheme='green'>編輯餐廳</Button>) : (<Button colorScheme='blue'> follow</Button>)}
        </HStack>
        <Text color={'gray.500'}>分享於2021/06/01 14:30</Text>
      </VStack>
    </HStack>
  )
}

export default RestaurantHeader
