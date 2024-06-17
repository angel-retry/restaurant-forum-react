import { useEffect, useState } from 'react'
import baseURL from '../config/apiConfig'
import axios from 'axios'
import useAuthTokenStore from '../store/authTokenStore'
import useRestaurantsStore from '../store/restaurantsStore'
import usePaginationStore from '../store/paginationStore'
import useCategoryStore from '../store/categoryStore'
import useKeywordStore from '../store/searchKeyword'

const useGetRestaurants = () => {
  const [isLoading, setIsLoading] = useState(true)
  const authToken = useAuthTokenStore(state => state.authToken)
  console.log(authToken)
  const { restaurants, setRestaurants } = useRestaurantsStore()
  const count = usePaginationStore(state => state.count)
  const setCount = usePaginationStore(state => state.setCount)
  const currentPage = usePaginationStore(state => state.currentPage)
  const currentCategory = useCategoryStore(state => state.currentCategory)
  const setCurrentPage = usePaginationStore(state => state.setCurrentPage)
  const keyword = useKeywordStore(state => state.keyword)
  console.log(currentPage)
  console.log(currentCategory)
  const searchCurrentPage = `page=${currentPage || null}`
  const searchCurrentCategory = `categoryId=${currentCategory || null}`
  const searchKeyword = keyword ? `&keyword=${keyword}` : ''
  const URL = `${baseURL}/restaurants?${searchCurrentPage}&${searchCurrentCategory}${searchKeyword}`
  console.log({ URL })

  useEffect(() => {
    setCurrentPage(1)
  }, [currentCategory])

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
  }, [authToken, setRestaurants, setCount, currentPage, setCurrentPage, currentCategory, keyword])

  return { isLoading, restaurants, count }
}

export default useGetRestaurants
