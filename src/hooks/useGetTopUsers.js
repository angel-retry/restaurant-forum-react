import axios from 'axios'
import { useEffect, useState } from 'react'
import baseURL from '../config/apiConfig'
import useAuthTokenStore from '../store/authTokenStore'

const useGetTopUsers = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [topUsers, setTopUsers] = useState(null)
  const authToken = useAuthTokenStore(state => state.authToken)
  const URL = `${baseURL}/users/top`

  useEffect(() => {
    setIsLoading(true)
    const getTopUsers = () => {
      axios
        .get(URL, {
          headers: {
            Authorization: `Bearer ${authToken}`
          }
        })
        .then(res => {
          const { top10Users } = res.data
          setTopUsers(top10Users)
        })
        .catch(err => {
          console.error(err)
        })
        .finally(() => {
          setIsLoading(false)
        })
    }
    if (authToken) getTopUsers()
  }, [authToken])

  return { isLoading, topUsers }
}

export default useGetTopUsers
