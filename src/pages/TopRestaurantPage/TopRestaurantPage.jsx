import { Heading, Stack } from '@chakra-ui/react'

import useGetTopRestaurants from '../../hooks/useGetTopRestaurants'
import TopRestaurant from '../../components/TopRestaurant/TopRestaurant'

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
                <TopRestaurant key={restaurant.id} restaurant={restaurant} index={i} />
              ))
            }
          </>
        )
      }

    </Stack>
  )
}

export default TopRestaurantPage
