import { useEffect, useState } from 'react'
import baseURL from '../config/apiConfig'
import axios from 'axios'
import useAuthTokenStore from '../store/authTokenStore'
import useShowToast from './useShowToast'
import useRestaurantsStore from '../store/restaurantsStore'

const useGetRestaurants = () => {
  const [isLoading, setIsLoading] = useState(true)
  const authToken = useAuthTokenStore(state => state.authToken)
  console.log(authToken)
  const URL = `${baseURL}/restaurants`
  const showToast = useShowToast()
  const { restaurants, setRestaurants } = useRestaurantsStore()

  useEffect(() => {
    const getRestaurants = () => {
      setRestaurants([])
      setIsLoading(true)
      axios
        .get(URL, {
          headers: {
            Authorization: `Bearer ${authToken}`
          }
        })
        .then(res => {
          const { data } = res
          console.log(data)
          setRestaurants(data)
          setIsLoading(false)
        })
        .catch(err => {
          console.log(err)
        })
        .finally(() => {
          setIsLoading(false)
        })
    }

    if (authToken) getRestaurants()
  }, [authToken, setRestaurants])

  return { isLoading, restaurants }
}

export default useGetRestaurants
