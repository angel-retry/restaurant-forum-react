import { Box, Flex, Heading, HStack, Image, Tag, Text, VStack } from '@chakra-ui/react'
import { FaRegBookmark, FaRegCommentDots, FaRegHeart } from 'react-icons/fa'
import { RiMapPin2Fill } from 'react-icons/ri'

const RestaurantInfo = () => {
  return (
    <VStack width={'100%'} >
      <Flex flexDir={{ base: 'column', md: 'row' }} width={'100%'} gap={2} borderBottom={'1px solid'} borderColor={'gray.300'} py={5}>
        <Box h={{ base: '300px', md: '400px' }} w={'100%'} flex={{ base: 'none', md: 1 }}>
          <Image src='/cover.jpg' h={'100%'} w={'100%'} objectFit={'cover'} />
        </Box>
        <VStack flex={{ base: 'none', md: 1 }} align={'flex-start'} alignSelf={{ base: 'none', md: 'center' }} spacing={{ base: 2, md: 5 }} p={3}>
          <HStack w={'100%'} justify={'space-between'}>
            <Heading>Restaurant Name</Heading>
            <FaRegBookmark size={28} />
          </HStack>
          <Tag colorScheme={'teal'} size={'md'} variant='solid' py={2}>Sample Tag</Tag>
          <HStack>
            <HStack spacing={2}>
              <FaRegHeart size={22} />
              <Text fontSize={20}>5</Text>
            </HStack>
            <HStack spacing={2}>
              <FaRegCommentDots size={22} />
              <Text fontSize={20}>5</Text>
            </HStack>
          </HStack>
          <HStack fontWeight={'bold'}>
            <Text>電話:</Text>
            <Text>08-895241665</Text>
          </HStack>
          <HStack fontWeight={'bold'}>
            <Text>地址:</Text>
            <Text>08-895241665</Text>
            <Box color='blue.500'>
              <RiMapPin2Fill size={20} />
            </Box>
          </HStack>
        </VStack>
      </Flex>
      <VStack align={'flex-start'} w={'100%'} gap={2} borderBottom={'1px solid'} borderColor={'gray.300'} py={5}>
        <Heading>餐廳介紹</Heading>
        <Text maxW={'800px'}>
          ppppppp ppppppp
        </Text>
      </VStack>
    </VStack>
  )
}

export default RestaurantInfo
