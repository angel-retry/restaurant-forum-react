import { Box, Button, Flex, Heading, HStack, Image, Tag, Text, VStack, Wrap } from '@chakra-ui/react'
import { FaHeart, FaRegCommentDots, FaRegHeart } from 'react-icons/fa'
import { RiMapPin2Fill } from 'react-icons/ri'
import useSaveRestaurant from '../../hooks/useSaveRestaurant'
import useLikeRestaurant from '../../hooks/useLikeRestaurant'
import { GoBookmark, GoBookmarkFill } from 'react-icons/go'

const RestaurantInfo = ({ restaurant }) => {
  const { isLoading, postLike, isLiked, likes } = useLikeRestaurant(restaurant)

  const { isLoading: isSaving, postSave, isSaved } = useSaveRestaurant(restaurant)

  return (
    <VStack width={'100%'} >
      <Flex flexDir={{ base: 'column', md: 'row' }} width={'100%'} gap={2} borderBottom={'1px solid'} borderColor={'gray.300'} py={5}>
        <Box h={{ base: '300px', md: '400px' }} w={'100%'} flex={{ base: 'none', md: 1 }}>
          <Image src={restaurant.image} h={'100%'} w={'100%'} objectFit={'cover'} alt={`${restaurant.name} image`} />
        </Box>
        <VStack flex={{ base: 'none', md: 1 }} align={'flex-start'} alignSelf={{ base: 'none', md: 'center' }} spacing={{ base: 2, md: 5 }} p={3}>
          <HStack w={'100%'} justify={'space-between'}>
            <Heading>{restaurant.name}</Heading>
            <Button variant={'ghost'} _hover={{ bg: 'transparant' }} p={0} onClick={postSave} isLoading={isSaving}>
                {
                  isSaved ? <GoBookmarkFill size={40} /> : <GoBookmark size={40} />
                }
            </Button>
          </HStack>
          <Tag colorScheme={'teal'} size={'md'} variant='solid' py={2}>{restaurant.Category.name}</Tag>
          <HStack>
            <HStack spacing={0}>
              <Button variant={'ghost'} _hover={{ bg: 'transparant' }} p={0} onClick={postLike} isLoading={isLoading}>
                {
                  isLiked ? <FaHeart size={22} color='red' /> : <FaRegHeart size={22} />
                }
              </Button>
              <Text fontSize={20}>{likes}</Text>
            </HStack>
            <HStack spacing={2}>
              <FaRegCommentDots size={22} />
              <Text fontSize={20}>{restaurant.Comments.length }</Text>
            </HStack>
          </HStack>
          <HStack w={'100%'} fontWeight={'bold'} align={'flex-start'}>
            <Text minW={'40px'}>電話:</Text>
            <Text >{restaurant.tel }</Text>
          </HStack>
          <HStack w={'100%'} fontWeight={'bold'} display={'flex'} align={'flex-start'}>
            <Text minW={'40px'}>地址:</Text>
            <Wrap>
              <Text>{restaurant.address}</Text>
              <Box color='blue.500'>
                <RiMapPin2Fill size={20} />
              </Box>
            </Wrap>
          </HStack>
        </VStack>
      </Flex>
      <VStack align={'flex-start'} w={'100%'} gap={2} borderBottom={'1px solid'} borderColor={'gray.300'} py={5}>
        <Heading>餐廳介紹</Heading>
        <Text maxW={'800px'}>
          {restaurant.introduction}
        </Text>
      </VStack>
    </VStack>
  )
}

export default RestaurantInfo
