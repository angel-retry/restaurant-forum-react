import { Stack, VStack } from '@chakra-ui/react'
import RestaurantForm from '../../components/RestaurantForm/RestaurantForm'
import { useParams } from 'react-router-dom'

const RestaurantFormPage = () => {
  const { restaurantId } = useParams()
  return (
    <Stack px={3} maxWidth={'500px'} marginX={'auto'} w={'100%'}>
      <form>
        <VStack spacing={5} >
          <RestaurantForm restaurantId={restaurantId} />
        </VStack>
      </form>
    </Stack>
  )
}

export default RestaurantFormPage
