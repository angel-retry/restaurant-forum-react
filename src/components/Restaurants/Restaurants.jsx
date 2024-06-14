import { Grid, GridItem } from '@chakra-ui/react'
import Restaurant from './Restaurant'

const Restaurants = () => {
  return (
    <Grid
        templateRows='repeat(1, 1fr)'
        templateColumns={{
          sm: 'repeat(1, 1fr)',
          md: 'repeat(3, 1fr)'
        }}
        gap={6}
      >
        {
          Array.from({ length: 15 }, (_, i) => (
            <>
              <GridItem w='100%'>
                <Restaurant />
              </GridItem>
            </>
          ))
        }

      </Grid>
  )
}

export default Restaurants
