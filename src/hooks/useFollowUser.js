import { useState } from 'react'
import useAuthTokenStore from '../store/authTokenStore'
import baseURL from '../config/apiConfig'
import axios from 'axios'
import useUserProfileStore from '../store/userProfileStore'

const useFollowUser = (user) => {
  const [isLoading, setIsLoading] = useState(false)
  const authUser = useAuthTokenStore(state => state.authUser)
  const [followersCount, setFollowersCount] = useState(user.Followers.length)
  const [isFollowed, setIsFollowed] = useState(user.Followers.includes(authUser.id))
  const authToken = useAuthTokenStore(state => state.authToken)
  const userProfile = useUserProfileStore(state => state.userProfile)
  const addFollowings = useUserProfileStore(state => state.addFollowings)
  const removeFollowings = useUserProfileStore(state => state.removeFollowings)
  const addFollowers = useUserProfileStore(state => state.addFollowers)
  const removeFollowers = useUserProfileStore(state => state.removeFollowers)

  const URL = `${baseURL}/following/${user.id}`

  const handleFollowUser = () => {
    if (isLoading) return
    if (!authToken) return
    if (!user.id) return

    setIsLoading(true)
    if (isFollowed) {
      axios
        .delete(URL, {
          headers: {
            Authorization: `Bearer ${authToken}`
          }
        })
        .then(res => {
          const { deleteFollowship } = res.data
          if (deleteFollowship) {
            setIsFollowed(false)
            setFollowersCount(followersCount - 1)
            if (userProfile.id === authUser.id) {
              removeFollowings(user.id)
            }
            if (userProfile.id === user.id) {
              removeFollowers(authUser.id)
            }
          }
        })
        .catch(err => {
          console.log(err)
        })
        .finally(() => {
          setIsLoading(false)
        })
    } else {
      axios
        .post(URL, null, {
          headers: {
            Authorization: `Bearer ${authToken}`
          }
        })
        .then(res => {
          const { newFollowship } = res.data
          if (newFollowship) {
            setIsFollowed(true)
            setFollowersCount(followersCount + 1)
            if (userProfile.id === authUser.id) {
              addFollowings(user.id)
            }
            if (userProfile.id === user.id) {
              addFollowers(authUser.id)
            }
          }
        })
        .catch(err => {
          console.log(err)
        })
        .finally(() => {
          setIsLoading(false)
        })
    }
  }

  return { followersCount, isFollowed, handleFollowUser, isLoading, setIsFollowed }
}

export default useFollowUser
