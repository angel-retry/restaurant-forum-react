import RestaurantsFeeds from '../../components/Feeds/RestaurantsFeeds'
import CommentsFeeds from '../../components/Feeds/CommentsFeeds'
import { Flex, Heading, HStack, Stack } from '@chakra-ui/react'
import useGetFeedsRestaurants from '../../hooks/useGetFeedsRestaurants'

const FeedsPage = () => {
  const { isLoading, feedsRestaurants } = useGetFeedsRestaurants()
  return (
    <Stack px={3} spacing={5}>
      <Heading>最新動態</Heading>
      <Flex w={'100%'} flexDir={{ base: 'column', md: 'row' }} gap={5} alignItems={'flex-start'}>
        <HStack flex={1} >
          <RestaurantsFeeds isLoading={isLoading} restaurants={feedsRestaurants} />
        </HStack>
        <HStack flex={1} >
          <CommentsFeeds />
        </HStack>
      </Flex>
    </Stack>
  )
}

export default FeedsPage
