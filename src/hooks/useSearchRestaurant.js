import { useEffect, useState } from 'react'
import baseURL from '../config/apiConfig'
import useShowToast from '../hooks/useShowToast'
import axios from 'axios'
import useAuthTokenStore from '../store/authTokenStore'
import usePaginationStore from '../store/paginationStore'
import useCategoryStore from '../store/categoryStore'

const useSearchRestaurant = (keyword) => {
  const [isLoading, setIsLoading] = useState(false)
  const authToken = useAuthTokenStore(state => state.authToken)
  const [searchRestaurants, setSearchRestaurants] = useState(null)
  const count = usePaginationStore(state => state.count)
  const showToast = useShowToast()

  const URL = `${baseURL}/restaurants/search?keyword=${keyword}`

  useEffect(() => {
    if (!keyword) {
      setSearchRestaurants(null)
      return
    }
    if (isLoading) return

    const getSearchRestaurants = () => {
      setIsLoading(true)

      axios
        .get(URL, {
          headers: {
            Authorization: `Bearer ${authToken}`
          }
        })
        .then(res => {
          setSearchRestaurants(res.data.restaurants)
          count()
        })
        .catch(err => {
          setIsLoading(false)
          showToast('Error', err.response.data.message, 'error')
        })
        .finally(() => {
          setIsLoading(false)
        })
    }

    if (authToken) getSearchRestaurants()
  }, [authToken, keyword, showToast])

  console.log({ searchRestaurants })

  return { searchRestaurants, setSearchRestaurants, isLoading }
}

export default useSearchRestaurant
