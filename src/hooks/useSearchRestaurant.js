import { useEffect, useState } from 'react'
import baseURL from '../config/apiConfig'
import useRestaurantsStore from '../store/restaurantsStore'
import useShowToast from '../hooks/useShowToast'
import axios from 'axios'
import useAuthTokenStore from '../store/authTokenStore'

const useSearchRestaurant = () => {
  const [isLoading, setIsLoading] = useState(false)
  const authToken = useAuthTokenStore(state => state.authToken)
  const restaurants = useRestaurantsStore(state => state.restaurants)
  const setRestaurants = useRestaurantsStore(state => state.setRestaurants)
  const showToast = useShowToast()

  const URL = `${baseURL}/restaurants/search`

  useEffect(() => {
    const getSearchRestaurants = () => {
      setIsLoading(true)
      axios
        .get(URL, {
          headers: {
            Authorization: `Bearer ${authToken}`
          }
        })
        .then(res => {
          setRestaurants(res.data)
        })
        .catch(err => {
          setIsLoading(false)
          showToast(err.response.data.message)
        })
        .finally(() => {
          setIsLoading(false)
        })
    }

    if (authToken) getSearchRestaurants()
  }, [authToken, setRestaurants, showToast])
  return { restaurants, isLoading }
}

export default useSearchRestaurant
