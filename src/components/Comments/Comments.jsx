import { Button, Heading, Text, Textarea, VStack } from '@chakra-ui/react'
import Comment from './Comment'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import usePostComment from '../../hooks/usePostComment'
import useShowToast from '../../hooks/useShowToast'

const Comments = ({ restaurant }) => {
  const [commentValue, setCommentValue] = useState('')
  const { restaurantId } = useParams()
  const { isLoading, postComment } = usePostComment(restaurantId)
  const showToast = useShowToast()

  const handleSubmit = async () => {
    if (!commentValue) {
      showToast('Error', '請輸入評論內容', 'success')
      return
    }
    const text = {
      text: commentValue
    }
    try {
      await postComment(text)
      setCommentValue('')
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <VStack width={'100%'} align={'flex-start'}>
      <Heading>所有評論</Heading>
      {
        restaurant.Comments.length === 0 && (
          <VStack py={5}>
            <Text>目前還沒有人評論! 趕快留言吧!</Text>
          </VStack>
        )
      }
      {
        restaurant.Comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))
      }
      <VStack w={'100%'} maxW={'800px'} align={'flex-start'}>
        <Text fontWeight={'bold'}>留下評論:</Text>
        <Textarea
          placeholder='你的回覆是發帖的最大動力'
          value={commentValue}
          onChange={(e) => setCommentValue(e.target.value)}
        />
        <Button colorScheme='green' alignSelf={'flex-end'} size={'lg'} onClick={handleSubmit} isLoading={isLoading}>送出</Button>
      </VStack>
    </VStack>
  )
}

export default Comments
