import { Button, Grid, GridItem, Heading, VStack } from '@chakra-ui/react'
import Restaurant from './Restaurant'
import { FaRegFileExcel } from 'react-icons/fa'
import useCategoryStore from '../../store/categoryStore'
import useSearchKeyword from '../../store/searchKeyword'
const Restaurants = ({ restaurants }) => {
  const restaurantsData = restaurants
  const setCurrentCategory = useCategoryStore(state => state.setCurrentCategory)
  const setKeyword = useSearchKeyword(state => state.setKeyword)
  return (
    <>
      {
        restaurantsData.length > 0
          ? (
          <Grid
            templateRows='repeat(1, 1fr)'
            templateColumns={{
              sm: 'repeat(1, 1fr)',
              md: 'repeat(3, 1fr)'
            }}
            gap={6}
          >
            {
               restaurantsData.map(restaurant => (
                <GridItem w='100%' key={restaurant.id} >
                  <Restaurant restaurant={restaurant}/>
                </GridItem>

               ))
            }

          </Grid>
            )
          : (
            <VStack color={'gray.500'} spacing={10} py={100}>
              <FaRegFileExcel size={150} />
              <Heading fontSize={'2xl'}>沒有餐廳資料QQ</Heading>
              <Button onClick={() => {
                setKeyword(null)
                setCurrentCategory(null)
              }}>回首頁</Button>
            </VStack>
            )
      }

    </>

  )
}

export default Restaurants
