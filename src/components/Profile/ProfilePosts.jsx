import { Grid, Stack } from '@chakra-ui/react'
import ProfilePost from './ProfilePost'
import useTabStore from '../../store/tabStore'
import useUserProfileStore from '../../store/userProfileStore'
import { useEffect, useState } from 'react'

const ProfilePosts = () => {
  const currentProfileTab = useTabStore(state => state.currentProfileTab)
  const userProfile = useUserProfileStore(state => state.userProfile)
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    if (userProfile) {
      switch (currentProfileTab) {
        case 'saved':
          setRestaurants(userProfile.SavedRestaurants)
          break
        case 'liked':
          setRestaurants(userProfile.LikedRestaurants)
          break
        case 'created':
          setRestaurants(userProfile.CreatedRestaurants)
          break
        default:
          setRestaurants(userProfile.CommentedRestaurants)
          break
      }
    }
  }, [currentProfileTab, userProfile])

  return (
    <Stack px={3} mt={5}>
      <Grid templateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' }} gap={5} >
        {
          restaurants.map(restaurant => (<ProfilePost key={restaurant.id} restaurant={restaurant} />))
        }
      </Grid>
    </Stack>
  )
}

export default ProfilePosts
