import { Box, Card, Heading, Skeleton, Stack, VStack } from '@chakra-ui/react'

import useGetTopRestaurants from '../../hooks/useGetTopRestaurants'
import TopRestaurant from '../../components/TopRestaurant/TopRestaurant'

const TopRestaurantPage = () => {
  const { isLoading, topRestaurants } = useGetTopRestaurants()

  return (
    <Stack mx={'auto'} px={3} maxWidth={'1440px'} w={'full'} spacing={8}>
      <Heading>Top 10 餐廳</Heading>
      {
        isLoading
          ? (
            <VStack spacing={10}>
              {
                Array.from({ length: 10 }, (_, i) => (
                  <Card w={'100%'} h={'300px'} direction={{ base: 'column', md: 'row' }} gap={5} key={i}>
                    <Box w={'100%'} h={{ base: '100px', md: '100%' }} flex={{ base: 'none', md: 1 }} >
                      <Skeleton w={'100%'} h={'100%'}/>
                    </Box>
                    <VStack w={'100%'} h={'100%'} flex={{ base: 1, md: 1.5 }} p={3} spacing={5} align={'flex-start'} justifyContent={'center'} >
                      <Skeleton w={'60%'} h={'30px'} mb={{ base: 0, md: 10 }}/>
                      <Skeleton w={'80%'} h={'20px'}/>
                      <Skeleton w={'80%'} h={'20px'}/>
                      <Skeleton w={'80%'} h={'20px'}/>
                    </VStack>
                  </Card>
                ))
              }
            </VStack>
            )
          : (
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
