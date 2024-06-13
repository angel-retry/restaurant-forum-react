import { Stack } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import ProfileHeader from '../../components/Profile/ProfileHeader'
import ProfileTab from '../../components/Profile/ProfileTab'
import ProfilePosts from '../../components/Profile/ProfilePosts'

const ProfilePage = () => {
  const { userId } = useParams()
  return (
    <Stack px={3}>
      <ProfileHeader />
      <ProfileTab />
      <ProfilePosts />
    </Stack>
  )
}

export default ProfilePage
