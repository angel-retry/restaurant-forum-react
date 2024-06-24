import { Flex, Grid, GridItem, Skeleton, SkeletonCircle, Stack, VStack } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import ProfileHeader from '../../components/Profile/ProfileHeader'
import ProfileTab from '../../components/Profile/ProfileTab'
import ProfilePosts from '../../components/Profile/ProfilePosts'
import useGetUserProfile from '../../hooks/useGetUserProfile'

const ProfilePage = () => {
  const { userId } = useParams()
  const { isLoading, userProfile } = useGetUserProfile(userId)

  return (
    <Stack px={3}>
      {
        isLoading
          ? (
          <Flex w={'100%'} justifyContent={'center'} >
            <Flex flexDir={{ base: 'column', md: 'row' }} w={'100%'} maxW={'500px'} gap={5}>
              <Flex flex={1} w={'100%'} justifyContent={'end'} >
                <SkeletonCircle w={20} h={20} />
              </Flex>
              <VStack flex={1.5} justifyContent={'center'} align={{ base: 'center', md: 'start' }}>
                <Skeleton w={'30%'} h={'15px'} />
                <Skeleton w={'100%'} h={'15px'} />
                <Skeleton w={'100%'} h={'15px'} />
              </VStack>
            </Flex>
          </Flex>
            )
          : (
          <ProfileHeader userProfile={userProfile} />
            )
      }

      <ProfileTab />
      {
        isLoading
          ? (
          <Stack px={3} mt={5}>
            <Grid templateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }} gap={5}>
              {
                Array.from({ length: 10 }).map((_, index) => (
                  <GridItem key={index} w='100%' >
                    <Skeleton w={'100%'} h={'300px'} />
                  </GridItem>
                ))
              }
            </Grid>
          </Stack>
            )
          : (<ProfilePosts />)
      }

    </Stack>
  )
}

export default ProfilePage
