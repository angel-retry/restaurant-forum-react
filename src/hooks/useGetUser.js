import { useEffect, useState } from 'react'
import baseURL from '../config/apiConfig'
import axios from 'axios'
import useAuthTokenStore from '../store/authTokenStore'

const useGetUser = (userId) => {
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState(null)
  const authToken = useAuthTokenStore(state => state.authToken)

  const URL = `${baseURL}/users/data/${userId}`

  useEffect(() => {
    const getUser = () => {
      axios
        .get(URL, {
          headers: {
            Authorization: `Bearer ${authToken}`
          }
        })
        .then(res => {
          const { user } = res.data
          setUser(user)
        })
        .catch(err => {
          console.log(err)
        })
        .finally(() => {
          setIsLoading(false)
        })
    }

    if (authToken) getUser()
  }, [userId, authToken])

  return { isLoading, user }
}

export default useGetUser
