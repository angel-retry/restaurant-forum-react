import { Avatar, Button, HStack, Text, VStack, Link, Tooltip } from '@chakra-ui/react'
import useAuthTokenStore from '../../store/authTokenStore'
import { timeAgo } from '../../utils/timeAgo'
import { Link as RouterLink } from 'react-router-dom'
import { FaTrashAlt } from 'react-icons/fa'

const RestaurantHeader = ({ restaurant }) => {
  const authUser = useAuthTokenStore(state => state.authUser)
  const isAuthUser = authUser.id === restaurant.CreatedBy.id
  return (
    <HStack spacing={5} borderBottom={'1px solid'} borderColor={'gray.300'} width={'100%'} pb={5}>
      <Avatar src='/cover.jpg' size={'lg'} />
      <VStack align='flex-start'>
        <HStack spacing={5}>
          <Text>{restaurant.CreatedBy.name}</Text>
          {
            isAuthUser
              ? (
                <Link
                  as={RouterLink}
                  to={`/restaurants/${restaurant.id}/edit`}
                >
                  <Button colorScheme='green' size={{ base: 'sm', md: 'md' }}>編輯餐廳</Button>
                </Link>
                )
              : (<Button colorScheme='blue'> follow</Button>)

          }

          {
            isAuthUser && (
              <Tooltip label='刪除餐廳'>
                <Button colorScheme='red' size={{ base: 'sm', md: 'md' }}>
                  <FaTrashAlt />
                </Button>
              </Tooltip>
            )
          }
        </HStack>
        <Text color={'gray.500'}>分享於 {timeAgo(restaurant.createdAt)}</Text>
      </VStack>
    </HStack>
  )
}

export default RestaurantHeader
