import { Avatar, Button, Flex, Heading, Stack, Text, VStack, HStack, Link } from '@chakra-ui/react'
import { Link as RouterLink, useParams } from 'react-router-dom'
import useAuthTokenStore from '../../store/authTokenStore'
import useUserProfileStore from '../../store/userProfileStore'

const ProfileHeader = () => {
  const userId = Number(useParams().userId)
  const authUser = useAuthTokenStore(state => state.authUser)
  const isAuthUser = userId === authUser.id
  const { userProfile } = useUserProfileStore()

  return (
    <Stack>
      <Flex alignItems={{ base: 'center' }} direction={{ base: 'column', md: 'row' }} justifyContent={{ base: 'none', md: 'center' }} gap={{ base: 3, md: 10 }}>
        <Avatar src={userProfile.avatar} name='user' size={{ base: 'xl', md: '2xl' }} />
        <VStack align={{ base: 'center', md: 'flex-start' }}>
          <Heading fontSize={'2xl'}>{userProfile.name}</Heading>
          {
            isAuthUser
              ? (
                <Link as={RouterLink} to={`/users/${userProfile.id}/edit`}>
                  <Button colorScheme='blue'>Edit Profile</Button>
                </Link>
                )
              : (
              <Button colorScheme='blue'>Follow</Button>
                )
          }
          <HStack spacing={5}>
            <Text>{userProfile.CreatedRestaurants.length} 篇貼文</Text>
            <Text>{userProfile.Followers.length} 位粉絲</Text>
            <Text>{userProfile.Followings.length} 位追蹤中</Text>
          </HStack>
          <Text>
            {userProfile.introduction}
          </Text>
        </VStack>
      </Flex>
    </Stack>
  )
}

export default ProfileHeader
