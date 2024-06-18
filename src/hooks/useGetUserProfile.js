import { useEffect, useState } from 'react'
import useAuthTokenStore from '../store/authTokenStore'
import useUserProfileStore from '../store/userProfileStore'
import baseURL from '../config/apiConfig'
import axios from 'axios'

const useGetUserProfile = (userId) => {
  const [isLoading, setIsLoading] = useState(true)
  const authToken = useAuthTokenStore(state => state.authToken)
  const { userProfile, setUserProfile } = useUserProfileStore()
  const URL = `${baseURL}/users/${userId}`

  useEffect(() => {
    setIsLoading(true)
    const getUserProfile = () => {
      axios
        .get(URL, {
          headers: {
            Authorization: `Bearer ${authToken}`
          }
        })
        .then(res => {
          const { user } = res.data
          setUserProfile(user)
        })
        .catch(err => {
          console.log(err)
        })
        .finally(() => {
          setIsLoading(false)
        })
    }

    if (authToken) getUserProfile()
  }, [authToken, userId])

  return { isLoading, userProfile }
}

export default useGetUserProfile
