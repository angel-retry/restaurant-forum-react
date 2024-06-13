import { Box, Card, Heading, HStack, Image, Tag, Text, VStack } from '@chakra-ui/react'
import { FaRegCommentDots, FaRegHeart } from 'react-icons/fa'
import { GoBookmark } from 'react-icons/go'

const ProfilePost = () => {
  return (
    <Card >
      <Box h={{ sm: '250px', md: '350px' }}>
        <Image src='/cover.jpg' w={'100%'} h={'100%'} objectFit={'cover'} />
      </Box>
      <VStack align={'flex-start'} p={3}>
        <HStack w={'100%'} justify={'space-between'}>
          <HStack>
            <HStack>
              <FaRegHeart size={25} />
              <Text>3</Text>
            </HStack>
              <HStack>
              <FaRegCommentDots size={25}/>
              <Text>3</Text>
            </HStack>
          </HStack>
          <GoBookmark size={25} />
        </HStack>
        <Heading fontSize={'2xl'}>Restaurant name</Heading>
        <Tag colorScheme={'teal'} size={'md'} variant='solid' py={2}>Sample Tag</Tag>
      </VStack>
    </Card>
  )
}

export default ProfilePost
