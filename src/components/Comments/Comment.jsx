import { Avatar, HStack, Text, VStack, Link } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { timeAgo } from '../../utils/timeAgo'

const Comment = ({ comment }) => {
  return (
    <HStack w={'100%'} align={'flex-start'} borderBottom={'1px solid'} borderColor={'gray.300'} py={5} spacing={5} alignItems={'center'}>
      <Link as={RouterLink} _hover={{ textDecoration: 'none' }}>
        <Avatar src={comment.avatar} name='user' size={'lg'} />
      </Link>
      <VStack align={'flex-start'}>
        <Link as={RouterLink} _hover={{ textDecoration: 'none' }}>
          <Text>{comment.username}</Text>
        </Link>
        <Text>{comment.text}</Text>
        <Text>— {timeAgo(comment.createdAt)}評論</Text>
      </VStack>
    </HStack>
  )
}

export default Comment
