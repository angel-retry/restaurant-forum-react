import { useEffect, useState } from 'react'
import useAuthTokenStore from '../store/authTokenStore'
import baseURL from '../config/apiConfig'
import axios from 'axios'

const useGetFeedsRestaurants = () => {
  const [isLoading, setIsLoading] = useState(true)
  const authToken = useAuthTokenStore(state => state.authToken)
  const [feedsRestaurants, setFeedsRestaurants] = useState([])

  const URL = `${baseURL}/restaurants/feeds`

  useEffect(() => {
    setIsLoading(true)
    const getFeedsRestaurants = () => {
      axios
        .get(URL, {
          headers: {
            Authorization: `Bearer ${authToken}`
          }
        })
        .then(res => {
          const { feedsRestaurants } = res.data
          setFeedsRestaurants(feedsRestaurants)
        })
        .catch(err => console.error(err))
        .finally(() => {
          setIsLoading(false)
        })
    }

    if (authToken)getFeedsRestaurants()
  }, [authToken])

  return { isLoading, feedsRestaurants }
}

export default useGetFeedsRestaurants
