import { Stack } from '@chakra-ui/react'
import Restaurants from '../../components/Restaurants/Restaurants'
import CategoryTab from '../../components/CategoryTab/CategoryTab'
import Pagination from '../../components/Pagination/Pagination'
import useGetRestaurants from '../../hooks/useGetRestaurants'
import useGetCategories from '../../hooks/useGetCategories'
import SearchRestaurant from '../../components/Search/SearchRestaurant'
import useSearchRestaurant from '../../hooks/useSearchRestaurant'
import { useState } from 'react'

const HomePage = () => {
  const [keyword, setKeyword] = useState('')
  const { isLoading: isGetting, restaurants, count } = useGetRestaurants()
  const { categories, isLoading: isCategoryLoading } = useGetCategories()
  const { isLoading: isSearching, searchRestaurants, setSearchRestaurants } = useSearchRestaurant(keyword)

  console.log({ isSearching, isGetting })

  const isLoading = isSearching || isGetting
  const restaurantsData = searchRestaurants || restaurants

  return (
    <Stack px={3} spacing={5}>
      <SearchRestaurant setSearchRestaurants={setSearchRestaurants} setKeyword={setKeyword} />

      {!isCategoryLoading && <CategoryTab categories={categories} />}

      {!isLoading && (
        <>
          <Restaurants restaurants={restaurantsData} />
          <Pagination count={count} />
        </>
      )}

    </Stack>

  )
}

export default HomePage
