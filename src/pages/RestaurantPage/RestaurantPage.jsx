import { Stack } from '@chakra-ui/react'
import RestaurantHeader from '../../components/Restaurant/RestaurantHeader'
import RestaurantInfo from '../../components/Restaurant/RestaurantInfo'
import Comments from '../../components/Comments/Comments'

const RestaurantPage = () => {
  return (
    <Stack px={3} maxW={'1440px'} mx={'auto'} align={'flex-start'} w={'100%'}>
      <RestaurantHeader />
      <RestaurantInfo />
      <Comments />
    </Stack>
  )
}

export default RestaurantPage
