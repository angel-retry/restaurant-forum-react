import { Avatar, HStack, Text, VStack } from '@chakra-ui/react'

const Comment = () => {
  return (
    <HStack w={'100%'} align={'flex-start'} borderBottom={'1px solid'} borderColor={'gray.300'} py={5} spacing={5} alignItems={'center'}>
      <Avatar name='user' size={'lg'} />
      <VStack align={'flex-start'}>
        <Text>user 1</Text>
        <Text>fjhosiojiwoehgnh</Text>
        <Text>— 15小時間前評論</Text>
      </VStack>
    </HStack>
  )
}

export default Comment
