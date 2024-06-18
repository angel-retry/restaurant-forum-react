import { useEffect, useState } from 'react'
import useAuthTokenStore from '../store/authTokenStore'
import useUserProfileStore from '../store/userProfileStore'
import baseURL from '../config/apiConfig'
import axios from 'axios'

const useGetUserProfile = (useId) => {
  const [isLoading, setIsLoading] = useState(true)
  const authToken = useAuthTokenStore(state => state.authToken)
  const { userProfile, setUserProfile } = useUserProfileStore()
  const URL = `${baseURL}/users/${useId}`

  useEffect(() => {
    const getUserProfile = () => {
      setIsLoading(true)
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
  }, [isLoading, userProfile])

  return { isLoading, userProfile }
}

export default useGetUserProfile
