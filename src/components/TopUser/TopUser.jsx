import { Avatar, Box, Button, Card, Heading, HStack, Text, VStack, Link } from '@chakra-ui/react'
import useFollowUser from '../../hooks/useFollowUser'
import { Link as RouterLink } from 'react-router-dom'
import useAuthTokenStore from '../../store/authTokenStore'

const TopUser = ({ user }) => {
  const authUser = useAuthTokenStore(state => state.authUser)
  const { followersCount, isFollowed, handleFollowUser, isLoading: isFollowing } = useFollowUser(user)

  const isAuthUser = authUser.id === user.id

  return (
    <Card maxW={'250px'} w={'100%'} boxShadow={'lg'} variant={'outline'} h={'330px'}>
      <VStack p={10} spacing={5}>
        <Link as={RouterLink} to={`/users/${user.id}`}>
          <Avatar src={user.avatar} name='user' size={'lg'} />
        </Link>

        <Link as={RouterLink} to={`/users/${user.id}`} _hover={{ textDecoration: 'none' }}>
          <Heading fontSize={'2xl'}>{user.name}</Heading>
        </Link>
        <HStack spacing={'20px'} justify={'center'} w={'100%'} fontWeight={'bold'}>
          <VStack flex={1}>
            <Text>{followersCount}</Text>
            <Text>粉絲</Text>
          </VStack>
          <Box w={'2px'} h={'40px'} bg={'gray.300'}></Box>
          <VStack flex={1}>
            <Text>{user.CreatedRestaurants.length}</Text>
            <Text>貼文</Text>
          </VStack>
        </HStack>
        {
          !isAuthUser &&
          <Button colorScheme='blue' onClick={handleFollowUser} isLoading={isFollowing}>
          {isFollowed ? '取消追蹤' : '追蹤'}
        </Button>
        }
      </VStack>
    </Card>
  )
}

export default TopUser
