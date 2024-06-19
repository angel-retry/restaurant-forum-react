import { useEffect, useState } from 'react'
import baseURL from '../config/apiConfig'
import axios from 'axios'
import useAuthTokenStore from '../store/authTokenStore'
import useCategoryStore from '../store/categoryStore'

const useGetCategories = () => {
  const [isLoading, setIsLoading] = useState(true)
  const authToken = useAuthTokenStore(state => state.authToken)
  const setCategories = useCategoryStore(state => state.setCategories)
  const categories = useCategoryStore(state => state.categories)

  const URL = `${baseURL}/categories`
  useEffect(() => {
    setIsLoading(true)
    const getCategories = () => {
      axios
        .get(URL, {
          headers: {
            Authorization: `Bearer ${authToken}`
          }
        })
        .then(res => {
          const { data } = res
          localStorage.setItem('categories', JSON.stringify(data))
          setCategories(data)
        })
        .catch(err => {
          console.error(err)
        })
        .finally(() => {
          setIsLoading(false)
        })
    }

    if (authToken) getCategories()
  }, [authToken])

  return { categories, isLoading }
}

export default useGetCategories
