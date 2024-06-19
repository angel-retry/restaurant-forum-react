import { Box, Card, CardBody, Flex, Heading, HStack, Image, Tag, Text, VStack } from '@chakra-ui/react'
import { FaRegCommentDots, FaRegHeart } from 'react-icons/fa'
import { GoBookmark } from 'react-icons/go'

const Restaurant = ({ restaurant }) => {
  return (
    <Card borderRadius='lg' cursor={'pointer'} variant='outline'>
      <Box w={'full'} height={'250px'}>
        <Image objectFit={'cover'} w={'full'} h={'full'}
      src={restaurant?.image}
      alt='Green double couch with wooden legs'
      />
      </Box>
      <CardBody p={{ base: 2, md: 3 }}>
        <VStack align={'flex-start'}>
          <Flex gap={3} w={'full'} >
            {restaurant.LikedUsers && (
               <HStack spacing={2}>
              <FaRegHeart size={22} />
              <Text fontSize={20}>{restaurant.LikedUsers.length}</Text>
            </HStack>
            )}
            {
              restaurant.Comments && (
                <HStack spacing={2}>
                  <FaRegCommentDots size={22} />
                  <Text fontSize={20}>{restaurant.Comments.length}</Text>
                </HStack>
              )
            }

            <HStack marginLeft={'auto'} >
              <GoBookmark size={24} />
            </HStack>
          </Flex>
          <Heading size='md'>{restaurant.name}</Heading>
          <Tag colorScheme={'teal'} size={'md'} variant='solid' py={2}>{restaurant.Category.name}</Tag>
          <Text>
          {restaurant.introduction}
        </Text>
      </VStack>
      </CardBody>

    </Card>
  )
}

export default Restaurant
