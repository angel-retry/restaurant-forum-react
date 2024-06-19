import { useEffect, useState } from 'react'
import useRestaurantsStore from '../store/restaurantsStore'
import baseURL from '../config/apiConfig'
import axios from 'axios'
import useAuthTokenStore from '../store/authTokenStore'

const useGetRestaurant = (restaurantId) => {
  const [isLoading, setIsLoading] = useState(true)
  const restaurant = useRestaurantsStore(state => state.restaurant)
  const setRestaurant = useRestaurantsStore(state => state.setRestaurant)
  const URL = `${baseURL}/restaurants/${restaurantId}`
  const authToken = useAuthTokenStore(state => state.authToken)

  useEffect(() => {
    setIsLoading(true)
    const getRestaurant = () => {
      axios
        .get(URL, {
          headers: {
            Authorization: `Bearer ${authToken}`
          }
        })
        .then(res => {
          const { restaurant } = res.data
          setRestaurant(restaurant)
        })
        .catch(err => {
          console.log(err)
        })
        .finally(() => {
          setIsLoading(false)
        })
    }

    if (authToken) getRestaurant()
  }, [authToken, restaurantId])

  return { isLoading, restaurant }
}

export default useGetRestaurant
