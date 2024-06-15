import { Grid, GridItem } from '@chakra-ui/react'
import Restaurant from './Restaurant'
const Restaurants = ({ restaurants }) => {
  const restaurantsData = restaurants
  return (
    <>
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
    </>

  )
}

export default Restaurants
