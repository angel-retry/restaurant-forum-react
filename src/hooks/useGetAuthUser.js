import { useEffect, useState } from 'react'
import useAuthTokenStore from '../store/authTokenStore'
import baseURL from '../config/apiConfig'
import axios from 'axios'

const useGetAuthUser = () => {
  const [isLoading, setIsLoading] = useState(true)
  const { authUser, getAuthUserData, authToken } = useAuthTokenStore()

  const URL = `${baseURL}/auth/user`
  useEffect(() => {
    isLoading(true)
    const getAuthUser = () => {
      axios
        .get(URL, {
          headers: {
            Authorization: `Bearer ${authToken}`
          }
        })
        .then(res => {
          const { user } = res.data
          getAuthUserData(user)
        })
        .catch(err => {
          console.log(err)
        })
        .finally(() => {
          setIsLoading(false)
        })
    }

    if (authToken) getAuthUser()
  })

  return { authUser, isLoading }
}

export default useGetAuthUser
