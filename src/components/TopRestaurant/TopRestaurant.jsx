import { ArrowRightIcon } from '@chakra-ui/icons'
import { Heading, HStack, Image, Box, Card, CardBody, Tag, Text, VStack, Link, Button } from '@chakra-ui/react'
import { FaHeart, FaRegCommentDots, FaRegHeart } from 'react-icons/fa'
import { GoBookmark, GoBookmarkFill } from 'react-icons/go'
import useLikeRestaurant from '../../hooks/useLikeRestaurant'
import useSaveRestaurant from '../../hooks/useSaveRestaurant'
import { Link as RouterLink } from 'react-router-dom'

const TopRestaurant = ({ restaurant, index }) => {
  const { isLoading, postLike, isLiked, likes } = useLikeRestaurant(restaurant)

  const { isLoading: isSaving, postSave, isSaved, saves } = useSaveRestaurant(restaurant)

  return (
    <VStack spacing={10}>
      <Card variant={'outline'} display={'flex'} direction={{ base: 'column', md: 'row' }} boxShadow='md'>
        <Box w={'100%'} h={{ base: 200, md: 400 }} flex={{ base: 'none', md: 1 }}>
          <Image src={restaurant.image} h={'100%'} w={'100%'} objectFit={'cover'} alt={`${restaurant.name} image`} />
        </Box>
        <CardBody flex={1} alignSelf={'center'}>
          <VStack align={'flex-start'} spacing={3} >
            <HStack justify="space-between" w={'full'}>
              <Text fontWeight={'bold'} color={'gray.500'}>No {index + 1}</Text>
              <Button variant={'ghost'} _hover={{ bg: 'transparant' }} p={0} onClick={postSave} isLoading={isSaving}>
                {
                  isSaved ? <GoBookmarkFill size={24} /> : <GoBookmark size={24} />
                }
              </Button>
            </HStack>

            <Heading>{restaurant.name}</Heading>

            <Tag colorScheme={'teal'} size={'md'} variant='solid' py={2}>{restaurant.Category.name}</Tag>

            <Tag colorScheme={'gray'} size={'md'} variant='solid' py={2}>收藏數:  {saves}</Tag>

            <HStack >
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
                <Text fontSize={20}>{restaurant.Comments.length}</Text>
              </HStack>
            </HStack>

            <Text>{restaurant.introduction}</Text>

            <Link
              display={'flex'}
              alignItems={'center'}
              gap={2}
              color='blue.500'
              fontWeight={'bold'}
              _hover={{ textDecoration: 'none' }}
              as={RouterLink}
              to={`/restaurants/${restaurant.id}`}
            >
              查看此餐廳詳細資料
              <ArrowRightIcon boxSize={3} />
            </Link>
          </VStack>
        </CardBody>
      </Card>
    </VStack>
  )
}

export default TopRestaurant
