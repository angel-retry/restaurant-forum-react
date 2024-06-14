import { Heading, Text, Textarea, VStack } from '@chakra-ui/react'
import Comment from './Comment'

const Comments = () => {
  return (
    <VStack width={'100%'} align={'flex-start'}>
      <Heading>所有評論</Heading>
      {
        Array.from({ length: 5 }, (_, i) => (
          <Comment key={i} />
        ))
      }
      <Text fontWeight={'bold'}>留下評論:</Text>
      <Textarea maxW={'800px'} placeholder='你的回覆是發帖的最大動力'></Textarea>
    </VStack>
  )
}

export default Comments
