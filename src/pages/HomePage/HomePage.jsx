import { Button, HStack, Input, Stack } from '@chakra-ui/react'
import Restaurants from '../../components/Restaurants/Restaurants'
import CategoryTab from '../../components/CategoryTab/CategoryTab'
import Pagination from '../../components/Pagination/Pagination'
import useGetRestaurants from '../../hooks/useGetRestaurants'
import useGetCategories from '../../hooks/useGetCategories'

const HomePage = () => {
  const { isLoading, restaurants, count } = useGetRestaurants()
  const { categories, isLoading: isCategoryLoading } = useGetCategories()
  return (
    <Stack px={3} spacing={5}>
      <HStack justify={'center'}>
        <Input placeholder='medium size' size='md' maxW={'600px'} />
        <Button size={'md'} colorScheme='blue'>Search</Button>
      </HStack>

      {!isCategoryLoading && <CategoryTab categories={categories} />}

      {!isLoading && (
        <>
          <Restaurants restaurants={restaurants} />
          <Pagination count={count} />
        </>
      )}

    </Stack>

  )
}

export default HomePage
