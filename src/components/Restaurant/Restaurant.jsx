import { Box, Card, CardBody, Flex, Heading, HStack, Image, Tag, Text, VStack } from '@chakra-ui/react'
import { FaRegCommentDots, FaRegHeart } from 'react-icons/fa'
import { GoBookmark } from 'react-icons/go'

const Restaurant = () => {
  return (
    <Card borderRadius='lg' cursor={'pointer'}>
      <Box w={'full'} height={'250px'}>
        <Image objectFit={'cover'} w={'full'} h={'full'}
      src='/cover.jpg'
      alt='Green double couch with wooden legs'
      />
      </Box>
      <CardBody p={{ md: 3 }}>
        <VStack align={'flex-start'}>
          <Flex gap={3} w={'full'} >
            <HStack spacing={2}>
              <FaRegHeart size={22} />
              <Text fontSize={20}>5</Text>
            </HStack>
            <HStack spacing={2}>
              <FaRegCommentDots size={22} />
              <Text fontSize={20}>5</Text>
            </HStack>
            <HStack marginLeft={'auto'} >
              <GoBookmark size={24} />
            </HStack>
          </Flex>
          <Heading size='md'>Living room Sofa</Heading>
          <Tag colorScheme={'teal'} size={'md'} variant='solid' py={2}>Sample Tag</Tag>
          <Text>
          This sofa is perfect for modern tropical spaces, baroque inspired
          spaces, earthy toned spaces and for people who love a chic design with a
          sprinkle of vintage design.
        </Text>
      </VStack>
      </CardBody>

    </Card>
  )
}

export default Restaurant
