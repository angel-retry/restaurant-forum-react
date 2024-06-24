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
  const { restaurants, setRestaurants } = useRestaurantsStore()
  const count = usePaginationStore(state => state.count)
  const setCount = usePaginationStore(state => state.setCount)
  const currentPage = usePaginationStore(state => state.currentPage)
  const currentCategory = useCategoryStore(state => state.currentCategory)
  const setCurrentPage = usePaginationStore(state => state.setCurrentPage)
  const keyword = useKeywordStore(state => state.keyword)
  const searchCurrentPage = currentPage ? `&page=${currentPage}` : ''
  const searchCurrentCategory = currentCategory ? `&categoryId=${currentCategory}` : ''
  const searchKeyword = keyword ? `&keyword=${keyword}` : ''
  const URL = `${baseURL}/restaurants?${searchCurrentPage}${searchCurrentCategory}${searchKeyword}`

  useEffect(() => {
    if (currentCategory) {
      setCurrentPage(1)
    }
  }, [currentCategory, setCurrentPage])

  useEffect(() => {
    const getRestaurants = () => {
      setRestaurants(null)
      setIsLoading(true)
      axios
        .get(URL, {
          headers: {
            Authorization: `Bearer ${authToken}`
          }
        })
        .then(res => {
          const { data } = res
          setRestaurants(data.restaurants)
          if (count !== data.count) {
            setCount(data.count)
          }
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
  }, [authToken, setCount, currentPage, currentCategory, keyword])

  return { isLoading, restaurants, count }
}

export default useGetRestaurants
