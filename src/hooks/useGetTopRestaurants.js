import { useEffect, useState } from 'react'
import useAuthTokenStore from '../store/authTokenStore'
import baseURL from '../config/apiConfig'
import axios from 'axios'

const useGetTopRestaurants = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [topRestaurants, setTopRestaurants] = useState([])
  const authToken = useAuthTokenStore(state => state.authToken)
  const URL = `${baseURL}/restaurants/top10`

  useEffect(() => {
    const getTopRestaurants = () => {
      setIsLoading(true)
      axios
        .get(URL, {
          headers: {
            Authorization: `Bearer ${authToken}`
          }
        })
        .then(res => {
          const { top10Restaurants } = res.data
          setTopRestaurants(top10Restaurants)
          setIsLoading(false)
        })
        .catch(err => console.error(err))
    }

    if (authToken) getTopRestaurants()
  }, [authToken])

  return { isLoading, topRestaurants }
}

export default useGetTopRestaurants
