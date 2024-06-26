import { Avatar, Button, HStack, Text, VStack, Link, Tooltip } from '@chakra-ui/react'
import useAuthTokenStore from '../../store/authTokenStore'
import { timeAgo } from '../../utils/timeAgo'
import { Link as RouterLink } from 'react-router-dom'
import { FaTrashAlt } from 'react-icons/fa'
import useDeleteRestaurant from '../../hooks/useDeleteRestaurant'
import useShowToast from '../../hooks/useShowToast'
import useFollowUser from '../../hooks/useFollowUser'

const RestaurantHeader = ({ restaurant }) => {
  const authUser = useAuthTokenStore(state => state.authUser)
  const isAuthUser = authUser.id === restaurant.CreatedBy.id
  const { isDeleting, deleteRestaurant } = useDeleteRestaurant(restaurant.id)
  const showToast = useShowToast()

  const { isFollowed, handleFollowUser, isLoading } = useFollowUser(restaurant.CreatedBy)

  const handleDeleting = async () => {
    if (!isAuthUser) {
      showToast('Error', '沒有權限刪除該餐廳', 'error')
      return
    }
    if (!window.confirm('請問真的要刪除該餐廳嗎?')) return
    try {
      await deleteRestaurant()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <HStack spacing={5} borderBottom={'1px solid'} borderColor={'gray.300'} width={'100%'} pb={5}>
      <Link as={RouterLink} to={`/users/${restaurant.CreatedBy.id}`} _hover={{ textDecoration: 'none' }}>
        <Avatar src='/cover.jpg' size={'lg'} />
      </Link>
      <VStack align='flex-start'>
        <HStack spacing={5}>
          <Link as={RouterLink} to={`/users/${restaurant.CreatedBy.id}`} _hover={{ textDecoration: 'none' }}>
            <Text>{restaurant.CreatedBy.name}</Text>
          </Link>
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
              : (
                <Button colorScheme='blue' onClick={handleFollowUser} isLoading={isLoading}>
                  {
                    isFollowed ? '取消追隨' : '追蹤'
                  }
                </Button>
                )

          }

          {
            isAuthUser && (
              <Tooltip label='刪除餐廳'>
                <Button colorScheme='red' size={{ base: 'sm', md: 'md' }} onClick={handleDeleting} isLoading={isDeleting}>
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
