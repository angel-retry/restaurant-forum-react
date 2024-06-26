import { HStack, Avatar, Text, Button, Link } from '@chakra-ui/react'
import useFollowUser from '../../hooks/useFollowUser'
import useAuthTokenStore from '../../store/authTokenStore'
import { Link as RouterLink } from 'react-router-dom'

const User = ({ user }) => {
  const { isFollowed, handleFollowUser, isLoading: isFollowing } = useFollowUser(user)
  const authUser = useAuthTokenStore(state => state.authUser)

  const onFollowing = async () => {
    await handleFollowUser()
  }

  return (
    <HStack w={'100%'} spacing={5}>
      <Link as={RouterLink} to={`/users/${user.id}`}>
        <Avatar src={user.avatar} name={user.name} alt={`${user.name} avatar`} />
      </Link>
      <Link as={RouterLink} to={`/users/${user.id}`} _hover={{ textDecoration: 'none' }}>
        <Text>{user.name}</Text>
      </Link>
      {
        user.id !== authUser.id && (
          <Button colorScheme='blue' ml={'auto'} onClick={onFollowing} isLoading={isFollowing}>
            {
              isFollowed ? '取消追蹤' : '追蹤'
            }
          </Button>
        )
      }

    </HStack>
  )
}

export default User
