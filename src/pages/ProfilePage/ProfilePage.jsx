import { Stack } from '@chakra-ui/react'
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
        !isLoading && userProfile && <ProfileHeader />
      }

      <ProfileTab />
      <ProfilePosts />
    </Stack>
  )
}

export default ProfilePage
