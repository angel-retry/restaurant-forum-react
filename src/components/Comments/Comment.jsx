import { Avatar, HStack, Text, VStack } from '@chakra-ui/react'
import { timeAgo } from '../../utils/timeAgo'

const Comment = ({ comment }) => {
  return (
    <HStack w={'100%'} align={'flex-start'} borderBottom={'1px solid'} borderColor={'gray.300'} py={5} spacing={5} alignItems={'center'}>
      <Avatar src={comment.avatar} name='user' size={'lg'} />
      <VStack align={'flex-start'}>
        <Text>{comment.username}</Text>
        <Text>{comment.text}</Text>
        <Text>— {timeAgo(comment.createdAt)}評論</Text>
      </VStack>
    </HStack>
  )
}

export default Comment
