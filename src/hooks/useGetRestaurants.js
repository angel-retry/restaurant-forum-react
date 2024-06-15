import { useEffect, useState } from 'react'
import baseURL from '../config/apiConfig'
import axios from 'axios'
import useAuthTokenStore from '../store/authTokenStore'
import useRestaurantsStore from '../store/restaurantsStore'
import usePaginationStore from '../store/paginationStore'

const useGetRestaurants = () => {
  const [isLoading, setIsLoading] = useState(true)
  const authToken = useAuthTokenStore(state => state.authToken)
  console.log(authToken)
  const { restaurants, setRestaurants } = useRestaurantsStore()
  const count = usePaginationStore(state => state.count)
  const setCount = usePaginationStore(state => state.setCount)
  const currentPage = usePaginationStore(state => state.currentPage)
  console.log(currentPage)
  const searchPage = `page=${currentPage || null}`
  const URL = `${baseURL}/restaurants?${searchPage}`
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
          setRestaurants(data.restaurants)
          setCount(data.count)
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
  }, [authToken, setRestaurants, setCount, currentPage])

  return { isLoading, restaurants, count }
}

export default useGetRestaurants
