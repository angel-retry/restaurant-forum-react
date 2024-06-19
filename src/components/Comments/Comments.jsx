import { Heading, Text, Textarea, VStack } from '@chakra-ui/react'
import Comment from './Comment'

const Comments = ({ restaurant }) => {
  return (
    <VStack width={'100%'} align={'flex-start'}>
      <Heading>所有評論</Heading>
      {
        restaurant.CommentedUsers.map(comment => (
          <Comment key={comment.Comment.id} comment={comment} />
        ))
      }
      <Text fontWeight={'bold'}>留下評論:</Text>
      <Textarea maxW={'800px'} placeholder='你的回覆是發帖的最大動力'></Textarea>
    </VStack>
  )
}

export default Comments
