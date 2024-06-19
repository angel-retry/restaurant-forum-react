import { Button, Heading, Text, Textarea, VStack } from '@chakra-ui/react'
import Comment from './Comment'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

const Comments = ({ restaurant }) => {
  const [commentValue, setCommentValue] = useState(null)
  const { restaurantId } = useParams()

  const handleSubmit = () => {
    console.log({
      restaurantId,
      text: commentValue
    })
  }
  return (
    <VStack width={'100%'} align={'flex-start'}>
      <Heading>所有評論</Heading>
      {
        restaurant.CommentedUsers.length === 0 && (
          <VStack py={5}>
            <Text>目前還沒有人評論! 趕快留言吧!</Text>
          </VStack>
        )
      }
      {
        restaurant.CommentedUsers.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))
      }
      <VStack w={'100%'} maxW={'800px'} align={'flex-start'}>
        <Text fontWeight={'bold'}>留下評論:</Text>
        <Textarea placeholder='你的回覆是發帖的最大動力' value={commentValue || undefined} onChange={(e) => setCommentValue(e.target.value)}></Textarea>
        <Button colorScheme='green' alignSelf={'flex-end'} size={'lg'} onClick={handleSubmit}>送出</Button>
      </VStack>
    </VStack>
  )
}

export default Comments
