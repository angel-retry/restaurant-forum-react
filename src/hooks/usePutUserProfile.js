import { useState } from 'react'
import axios from 'axios'
import baseURL from '../config/apiConfig'
import useAuthTokenStore from '../store/authTokenStore'

const usePutUserProfile = (userId) => {
  const authToken = useAuthTokenStore(state => state.authToken)
  const setAuthUser = useAuthTokenStore(state => state.setAuthUser)
  const [isLoading, setIsLoading] = useState(false)
  if (!userId) return
  const URL = `${baseURL}/users/${userId}`

  const putAuthUser = (data) => {
    if (isLoading) return
    setIsLoading(true)

    console.log(data)

    axios
      .put(URL, data, {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      })
      .then(res => {
        const { updatedUser } = res.data
        console.log(updatedUser)
        localStorage.setItem('authUser', JSON.stringify(updatedUser))
        setAuthUser(updatedUser)
      })
      .catch(err => console.error(err))
      .finally(() => setIsLoading(false))
  }
  return { putAuthUser, isLoading }
}

export default usePutUserProfile
