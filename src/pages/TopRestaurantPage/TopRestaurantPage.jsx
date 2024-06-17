import { ArrowRightIcon } from '@chakra-ui/icons'
import { Heading, Stack, HStack, Image, Box, Card, CardBody, Tag, Text, VStack, Link } from '@chakra-ui/react'
import { FaRegCommentDots, FaRegHeart } from 'react-icons/fa'
import { GoBookmark } from 'react-icons/go'
import useGetTopRestaurants from '../../hooks/useGetTopRestaurants'

const TopRestaurantPage = () => {
  const { isLoading, topRestaurants } = useGetTopRestaurants()

  return (
    <Stack mx={'auto'} px={3} maxWidth={'1440px'} w={'full'} spacing={8}>
      <Heading>Top 10 餐廳</Heading>
      {
        !isLoading && (
          <>
            {
              topRestaurants.map((restaurant, i) => (
                <VStack spacing={10} key={restaurant.id}>
                  <Card variant={'outline'} display={'flex'} direction={{ base: 'column', md: 'row' }} boxShadow='md'>
                    <Box w={'100%'} h={{ base: 200, md: 400 }} flex={{ base: 'none', md: 1 }}>
                      <Image src={restaurant.image} h={'100%'} w={'100%'} objectFit={'cover'} alt={`${restaurant.name} image`} />
                    </Box>
                    <CardBody flex={1} alignSelf={'center'}>
                      <VStack align={'flex-start'} spacing={3} >
                        <HStack justify="space-between" w={'full'}>
                          <Text fontWeight={'bold'} color={'gray.500'}>No {i + 1}</Text>
                          <GoBookmark size={28} />
                        </HStack>

                        <Heading>{restaurant.name}</Heading>

                        <Tag colorScheme={'teal'} size={'md'} variant='solid' py={2}>{restaurant.Category.name}</Tag>

                        <Tag colorScheme={'gray'} size={'md'} variant='solid' py={2}>收藏數:  {restaurant.SavedUsers.length}</Tag>

                        <HStack >
                          <HStack spacing={2}>
                            <FaRegHeart size={22} />
                            <Text fontSize={20}>{restaurant.LikedUsers.length}</Text>
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
                        >
                          查看此餐廳詳細資料
                          <ArrowRightIcon boxSize={3} />
                        </Link>
                      </VStack>
                    </CardBody>
                  </Card>
                </VStack>
              ))
            }
          </>
        )
      }

    </Stack>
  )
}

export default TopRestaurantPage
