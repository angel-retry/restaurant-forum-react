import { Stack } from '@chakra-ui/react'
import Restaurants from '../../components/Restaurants/Restaurants'
import CategoryTab from '../../components/CategoryTab/CategoryTab'
import Pagination from '../../components/Pagination/Pagination'
import useGetRestaurants from '../../hooks/useGetRestaurants'
import SearchRestaurant from '../../components/Search/SearchRestaurant'

const HomePage = () => {
  const { isLoading, restaurants, count } = useGetRestaurants()

  return (
    <Stack px={3} spacing={5}>
      <SearchRestaurant />

      <CategoryTab />

      <Restaurants restaurants={restaurants} isLoading={isLoading} />

      {!isLoading && (
        <>
          <Pagination count={count}/>
        </>
      )}

    </Stack>

  )
}

export default HomePage
