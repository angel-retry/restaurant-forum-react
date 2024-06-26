import { Box, Card, CardBody, Flex, Heading, HStack, Image, Tag, Text, VStack, Link, Button } from '@chakra-ui/react'
import { FaHeart, FaRegCommentDots, FaRegHeart } from 'react-icons/fa'
import { GoBookmark, GoBookmarkFill } from 'react-icons/go'
import { Link as RouterLink } from 'react-router-dom'
import useLikeRestaurant from '../../hooks/useLikeRestaurant'
import useSaveRestaurant from '../../hooks/useSaveRestaurant'

const Restaurant = ({ restaurant }) => {
  const { isLoading, postLike, isLiked, likes } = useLikeRestaurant(restaurant)

  const { isLoading: isSaving, postSave, isSaved } = useSaveRestaurant(restaurant)

  return (
    <Card borderRadius='lg' variant='outline' h={'480px'}>
      <Link as={RouterLink} to={`/restaurants/${restaurant.id}`}>
        <Box w={'full'} height={'250px'}>
          <Image objectFit={'cover'} w={'full'} h={'full'}
          src={restaurant?.image}
          alt='Green double couch with wooden legs'
          />
        </Box>
      </Link>
      <CardBody p={{ base: 2, md: 3 }}>
        <VStack align={'flex-start'}>
          <Flex gap={3} w={'full'} >
            {restaurant.LikedUsers && (
              <HStack spacing={0}>
                <Button variant={'ghost'} _hover={{ bg: 'transparant' }} p={0} onClick={postLike} isLoading={isLoading}>
                {
                  isLiked ? <FaHeart size={22} color='red' /> : <FaRegHeart size={22} />
                }
              </Button>
              <Text fontSize={20}>{likes}</Text>
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
              <Button variant={'ghost'} _hover={{ bg: 'transparant' }} p={0} onClick={postSave} isLoading={isSaving}>
                {
                  isSaved ? <GoBookmarkFill size={24} /> : <GoBookmark size={24} />
                }
              </Button>
            </HStack>
          </Flex>
          <Link as={RouterLink} to={`/restaurants/${restaurant.id}`} _hover={{ textDecoration: 'none' }}>
            <Heading size='md'>{restaurant.name}</Heading>
          </Link>
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
