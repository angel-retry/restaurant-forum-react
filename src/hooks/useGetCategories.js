import { useEffect, useState } from 'react'
import baseURL from '../config/apiConfig'
import axios from 'axios'
import useAuthTokenStore from '../store/authTokenStore'

const useGetCategories = () => {
  const [isLoading, setIsLoading] = useState(true)
  const authToken = useAuthTokenStore(state => state.authToken)
  const [categories, setCategories] = useState([])

  const URL = `${baseURL}/categories`
  useEffect(() => {
    isLoading(true)
    const getCategories = () => {
      axios
        .get(URL, {
          headers: {
            Authorization: `Bearer ${authToken}`
          }
        })
        .then(res => {
          const { data } = res
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

  return { categories }
}

export default useGetCategories
