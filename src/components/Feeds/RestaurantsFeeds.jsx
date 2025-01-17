import { ArrowRightIcon } from '@chakra-ui/icons'
import { Avatar, Box, Card, CardBody, CardHeader, Flex, Heading, HStack, Image, Link, Skeleton, Stack, StackDivider, Tag, Text, VStack } from '@chakra-ui/react'
import { timeAgo } from '../../utils/timeAgo'
import { Link as RouterLink } from 'react-router-dom'

const RestaurantsFeeds = ({ isLoading, restaurants }) => {
  return (
    <Card w={'100%'} variant={'outline'}>
      <CardHeader pb={0}>
        <Heading size='md'>最新餐廳貼文</Heading>
      </CardHeader>
      <CardBody>
          {
            isLoading
              ? (
              <Stack divider={<StackDivider />}>
                {
                  Array.from({ length: 10 }, (_, i) => (
                    <Flex key={i} w={'100%'} flexDir={{ base: 'column', md: 'row' }} gap={5} py={3}>
                      <Box w={'100%'}>
                        <Skeleton w={'100%'} h={{ base: '200px' }} />
                      </Box>
                      <VStack w={'100%'} align={'flex-start'} alignSelf={'center'} spacing={5}>
                        <Skeleton w={'80%'} h={{ base: '25px' }} />
                        <Skeleton w={'95%'} h={{ base: '15px' }} />
                        <Skeleton w={'95%'} h={{ base: '15px' }} />
                      </VStack>
                    </Flex>
                  ))
                }
              </Stack>
                )
              : (
              <Stack divider={<StackDivider />}>
                {
                  restaurants.map(restaurant => (
                    <Flex flexDir={{ base: 'column', lg: 'row' }} gap={3} key={restaurant.id}>
                      <Box w={'100%'} h={{ base: '200px', lg: 'auto' }} flex={{ base: 'none', lg: 1 }}py={3}>
                        <Image src={restaurant.image} h={'100%'} w={'100%'} objectFit={'cover'} alt={`${restaurant.name} image`} />
                      </Box>
                      <VStack align={'flex-start'} p={3} spacing={5} flex={1}>
                        <HStack>
                          <Link as={RouterLink} to={`/users/${restaurant.CreatedBy.id}`} _hover={{ textDecoration: 'none' }}>
                            <Avatar src={restaurant.CreatedBy.avatar} name={restaurant.CreatedBy.name} alt={`${restaurant.CreatedBy.name} avatar`} />
                          </Link>
                          <Flex direction={{ base: 'row', lg: 'column' }} gap={{ base: 3, lg: 0 }}>
                            <Link as={RouterLink} to={`/users/${restaurant.CreatedBy.id}`} _hover={{ textDecoration: 'none' }}>
                              <Text>
                                {restaurant.CreatedBy.name}
                              </Text>
                            </Link>
                            <Text>
                              — {timeAgo(restaurant.createdAt)}分享
                            </Text>
                          </Flex>
                        </HStack>
                        <Heading fontSize={'2xl'}>
                          {restaurant.name}
                        </Heading>
                        <Tag colorScheme={'teal'} size={'md'} variant='solid' py={2}>{restaurant.Category.name}</Tag>
                        <Text>
                          {restaurant.introduction}
                        </Text>
                        <Link
                          display={'flex'}
                          alignItems={'center'}
                          gap={2}
                          color='blue.500'
                          fontWeight={'bold'}
                          _hover={{ textDecoration: 'none' }}
                          to={`/restaurants/${restaurant.id}`}
                          as={RouterLink}
                        >
                          查看此餐廳詳細資料
                          <ArrowRightIcon boxSize={3} />
                        </Link>
                      </VStack>
                    </Flex>
                  ))
                }
              </Stack>
                )
          }
      </CardBody>
    </Card>

  )
}

export default RestaurantsFeeds
