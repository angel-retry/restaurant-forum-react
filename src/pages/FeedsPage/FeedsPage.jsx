import RestaurantsFeeds from '../../components/Feeds/RestaurantsFeeds'
import CommentsFeeds from '../../components/Feeds/CommentsFeeds'
import { Flex, HStack } from '@chakra-ui/react'
import useGetFeedsRestaurants from '../../hooks/useGetFeedsRestaurants'

const FeedsPage = () => {
  const { isLoading, feedsRestaurants } = useGetFeedsRestaurants()
  return (
    <Flex w={'100%'} flexDir={{ base: 'column', md: 'row' }} px={3} gap={5}>
      <HStack flex={1} >
        <RestaurantsFeeds isLoading={isLoading} restaurants={feedsRestaurants} />
      </HStack>
      <HStack flex={1} >
        <CommentsFeeds />
      </HStack>
    </Flex>
  )
}

export default FeedsPage
