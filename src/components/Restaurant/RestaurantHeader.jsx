import { Avatar, Button, HStack, Text, VStack } from '@chakra-ui/react'
import useAuthTokenStore from '../../store/authTokenStore'
import { timeAgo } from '../../utils/timeAgo'

const RestaurantHeader = ({ restaurant }) => {
  const authUser = useAuthTokenStore(state => state.authUser)
  const isAuthUser = authUser.id === restaurant.CreatedBy.id
  return (
    <HStack spacing={5} borderBottom={'1px solid'} borderColor={'gray.300'} width={'100%'} pb={5}>
      <Avatar src='/cover.jpg' size={'lg'} />
      <VStack align='flex-start'>
        <HStack spacing={5}>
          <Text>{restaurant.CreatedBy.name}</Text>
          { isAuthUser ? (<Button colorScheme='green'>編輯餐廳</Button>) : (<Button colorScheme='blue'> follow</Button>)}
        </HStack>
        <Text color={'gray.500'}>分享於 {timeAgo(restaurant.createdAt)}</Text>
      </VStack>
    </HStack>
  )
}

export default RestaurantHeader
