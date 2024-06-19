import { Stack } from '@chakra-ui/react'
import RestaurantHeader from '../../components/Restaurant/RestaurantHeader'
import RestaurantInfo from '../../components/Restaurant/RestaurantInfo'
import Comments from '../../components/Comments/Comments'
import useGetRestaurant from '../../hooks/useGetRestaurant'
import { useParams } from 'react-router-dom'

const RestaurantPage = () => {
  const { restaurantId } = useParams()
  const { isLoading, restaurant } = useGetRestaurant(restaurantId)

  return (
    <Stack px={3} maxW={'1440px'} mx={'auto'} align={'flex-start'} w={'100%'}>
      {
        !isLoading && (
          <>
            <RestaurantHeader restaurant={restaurant} />
            <RestaurantInfo restaurant={restaurant} />
            <Comments restaurant={restaurant} />
          </>
        )
      }
    </Stack>
  )
}

export default RestaurantPage
