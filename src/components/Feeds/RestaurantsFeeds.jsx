import { ArrowRightIcon } from '@chakra-ui/icons'
import { Avatar, Box, Card, CardBody, CardHeader, Flex, Heading, HStack, Image, Link, Stack, StackDivider, Tag, Text, VStack } from '@chakra-ui/react'
import { timeAgo } from '../../utils/timeAgo'

const RestaurantsFeeds = ({ isLoading, restaurants }) => {
  return (
    <>
      {
        !isLoading && (
          <Card w={'100%'} variant={'outline'}>
            <CardHeader pb={0}>
              <Heading size='md'>最新餐廳貼文</Heading>
            </CardHeader>

            <CardBody>
              <Stack divider={<StackDivider />} spacing='10'>
              {
                restaurants.map(restaurant => (
                  <Flex flexDir={{ base: 'column', lg: 'row' }} gap={3} key={restaurant.id}>
                    <Box w={'100%'} h={{ base: '200px', lg: 'auto' }} flex={{ base: 'none', lg: 1 }}>
                      <Image src={restaurant.image} h={'100%'} w={'100%'} objectFit={'cover'} alt={`${restaurant.name} image`} />
                    </Box>
                    <VStack align={'flex-start'} p={3} spacing={5} flex={1}>
                      <HStack>
                        <Avatar src={restaurant.CreatedBy.avatar} name={restaurant.CreatedBy.name} alt={`${restaurant.CreatedBy.name} avatar`} />
                        <Flex direction={{ base: 'row', lg: 'column' }} gap={{ base: 3, lg: 0 }}>
                          <Text>
                            {restaurant.CreatedBy.name}
                          </Text>
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
                      >
                        查看此餐廳詳細資料
                        <ArrowRightIcon boxSize={3} />
                      </Link>
                    </VStack>
                  </Flex>
                ))
              }
              </Stack>
            </CardBody>
          </Card>
        )
      }
    </>

  )
}

export default RestaurantsFeeds
